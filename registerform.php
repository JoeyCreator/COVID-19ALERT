<?php

$host="localhost";
$user="root";
$password="";
$db="techwit2_auth";

mysql_connect($host,$user,$password);
$mysql_select_db($db);

if(isset(['id'])) {
  $email=$_POST['email'];
  $username=$_POST['username'];
  $password=$_POST['password'];


 $sql="select * from techwit2_auth where username='".$username."'"AND password'".$password."limit 1";

 $result=mysql_query($sql);

 if(mysql_num_rows($result)==1){
    echo " you have successfully logged in ";
    exit();
 }
 else{
   echo " you have entered inccorect password ";
   exit();
 }


}



?>