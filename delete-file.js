/* Load fs module */

const fs = require("fs");
// Node.js er built in file system module load kora holo

/*1. Synchronous file create */

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("temp file created");
// writeFileSync() => blocking
// Node.js file theme thakbe

/*2. file ache kina check kore existsSync() */

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exits!!!");
}
//existsSync() => synchronous check
// file thakle true ar na thakle false
//file exits!!!..result

/* Synchronous file delete */

  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");

  //unlinkSync() => synchronous delete
// file delete kore tarpor porer line e jay...file deleted

/* abar delete korar try(error demonstration) */

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log("ERROR :", error.message);
}
//file ta jehetu agei delete hoye gese tai ekhane error ashbe
//jemon:ERROR : ENOENT: no such file or directory

/* Asynchronous file create */

fs.writeFile("./output/temp2.txt", "Aother temp file", (err) => {
  if (err) return console.error(err.message);

  console.log("Another temp file created");
});

//writeFile() -> async
// node.js wait korena
// kaj sesh hole callback chalay

// Another temp file created


/* Asynchronous delete */

  fs.unlink("./output/temp2.txt", (err) => {
    if (err) {
      console.error("Error :", err.message);
    } else {
      console.log("Temp2 deleted");
    }
  });

  // unlink() => async delete
// delete sesh hole callback hoy

//ja ja shikhsi??

// 1. Synchronous file create
// 2. Asynchronous file create
// 3. existsSync diye file ache kina check kora
// 4. unlinkSync diye sync delete
// 5. unlink diye async delete
// 6/ try/catch diye sync error handle
// 7. callback diye async error handle