<script src="https://code.jquery.com/jquery-3.6.4.min.js" 
 integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
  crossorigin="anonymous"></script>
<script src = "C:\xampp\htdocs\MCA_Project\javascript\add.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<?php
   $data = array();
  
   $data = 'You number is: ' . $_POST['randomAnswer'];       
   echo json_encode($data);  
   die();      

 ?>