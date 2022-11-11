const names = require('./4-names');
const sayhi = require('./5-utils');
const os = require('os');
const user = os.userInfo();
console.log(user);
console.log(`The System Uptime Is ${os.uptime()} Seconds`);
console.log(names);


sayhi("Chandru")
sayhi(names.jhon)
sayhi(names.peter)

const fs =require('fs');
const {readFile,writeFile} = require('fs');

 