//Introduction to OS Module

const os = require("os");

console.log("System info \n");
console.log("-".repeat(50));

console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("\nCPU info : ");
const cpus = os.cpus();
console.log("CPU Model : ", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Free Memory : ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50));

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);

/*
 output:...

 System info 

--------------------------------------------------
Platform Details:
Platform:  win32
Architecture:  x64
OS type:  Windows_NT
OS Release:  10.0.26200
Hostname:  Nasrin-Howlader-Jerin

CPU info :
CPU Model :  12th Gen Intel(R) Core(TM) i5-1215U
Number of cores :  8
CPU Speed :  2496
--------------------------------------------------
Total Memory :  7.68 GB
Free Memory :  1.30 GB
--------------------------------------------------
2 days 1 hours 21 minutes
PS D:\My Projects\nodejs-essentials> 
*/