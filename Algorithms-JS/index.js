export let message = 'ES6 Modules';


import { message } from "./message.js"


const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1)


<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <title>ES6 Modules</title>
 </head>
 <body>
  
  <h1> Hello </h1>


 <script type="module" src="./app.js">
 </body>
 </html>

 
 let message = 'Hi';


 export function getMessage() {
   return message;
 }

 export function setMessage() {
   message = msg;
 }

 export class Logger {
   
 }