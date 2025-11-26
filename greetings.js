const args = process.argv;

// process.arg[0] = node path
// process.arg[1] = file path
// process.arg[2] = first actual argument

/*
 Node.js e process.argv holo ekti array jekhane 
 
index 0 => Node.js executable er path

index 1 => j file run hochche tar path

index 2 =>terminal theke dewa first argument

index 3 => 2nd argument
.........evabe cholte thake

//example ..node app.js Jerin

*/

const name = args[2] || "guest";
const time = new Date().getHours();

let greeting;

if(time < 12){
    greeting = "Good Morning";
} else if (time < 18) {
    greeting= "Good Afternoon";
} else {
    greeting = "Good Evening";
}

console.log(`${greeting} ${name}`);

/*
Node.js command-line arguments (process.argv)
 Default value use 
 Real-time clock use kora
 Conditional greeting logic
 Template string diye dynamic message print
*/