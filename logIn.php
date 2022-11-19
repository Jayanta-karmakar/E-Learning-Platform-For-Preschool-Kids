<html>
    <head><!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
  rel="stylesheet"
/></head>
<section class="vh-100" style="background-color: #9A616D;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="./pictures/logo.jpg"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form action="#" method="POST">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" name="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password"  name="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <input type="submit" name="submit" value="LOG In" class="btn btn-dark btn-lg btn-block">
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="signup.php"
                      style="color: #393f81;">Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</html>


<?php
include("connection.php");
if(isset($_POST['submit'])){
session_start();
$_SESSION['rememail'] = $_REQUEST['email'];
$_SESSION['rempass'] = $_REQUEST['password'];
$qry = "SELECT * FROM `user_details` WHERE `email` = '".$_REQUEST['email']."'";
if($result=mysqli_query($link, $qry))
{
	$rowc = mysqli_num_rows($result);
	if($rowc == 1)
	{
		$qry1 = "SELECT * FROM `user_details` WHERE `email` = '".$_REQUEST['email']."' AND `password` = '".$_REQUEST['password']."'";
		if($result=mysqli_query($link, $qry1))
		{
			$rowc1 = mysqli_num_rows($result);
			if($rowc1 == 0)
			{   
				$_SESSION['errorPass'] = "Incorrect Password!";
				header('Location:logIn.php');
                
			}
			else
			{
				$row = mysqli_fetch_assoc($result);
				
				
				$_SESSION['name'] = $row['name'];
				$_SESSION['email'] = $row['email'];
				
				
                header('Location:home.html');
			}
		}
	}
	else
	{
		$_SESSION['errorEmail'] = "Email Id Mismatched!";
		header('Location:logIn.php');
        
	}
}
}
?>



