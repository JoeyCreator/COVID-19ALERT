// app.js

import { foo } from './foo.js';
import {message, setMessage} from './greeting.js';
console.log(message); // 'Hi'
console.log(foo); // 10;


setMessage('Hello');
console.log(message); // 'Hello'



message = 'Hello'; // Error

foo = 20; // throws an error