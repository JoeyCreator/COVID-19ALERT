<?php

$host='Localhost';
$user='root';
$pass='';
$db='techwit2_auth';


$con=mysqli_connect($host,$user,$pass,$db);
if($con)
  echo 'connected successfully to auth database';

  $sql="insert into techwit2_auth (username,password,email)"
  $query=mysqli_query($con,$sql);
  if($query)
    echo 'echo inserted successfully';
    ?>