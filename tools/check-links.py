"""Check local HTML/PHP resources, inline paths, and CSS URLs without dependencies."""
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = set()
count = 0
for file in [ROOT / 'index.html', * (ROOT / 'pages').glob('*.html'), *(ROOT / 'server').glob('*.php'), *(ROOT / 'assets/css').glob('*.css')]:
    text = re.sub(r'<!--.*?-->|/\*.*?\*/', '', file.read_text(), flags=re.S)
    refs = re.findall(r'(?:src|href|action|poster)\s*=\s*[\"\']([^\"\']+)', text, re.I)
    refs += [m[1] for m in re.findall(r'url\(\s*([\"\']?)(.*?)\1\s*\)', text)]
    refs += re.findall(r'[\"\']([^\"\'<>\n]+\.(?:png|jpg|jpeg|gif|mp3|mpeg|mp4|svg))[\"\']', text)
    for ref in refs:
        if not ref or ref.startswith(('#', '//')) or urlsplit(ref).scheme or '<' in ref:
            continue
        count += 1
        target = (file.parent / unquote(urlsplit(ref).path)).resolve()
        if not target.is_file():
            errors.add(f'{file.relative_to(ROOT)}: {ref}')
for error in sorted(errors):
    print(error)
print(f'Checked {count} local references; {len(errors)} missing targets.')
sys.exit(bool(errors))
