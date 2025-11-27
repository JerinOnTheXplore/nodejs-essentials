const fs = require("fs");

// fs module load kora hochche
// eta Node.js er built-in file system module...ekhane file pora/likha/remove kora/rename sob possible

/* Synchronous Write ... fs.writeFileSync() */

const content1 = "This is a content \n nodejs is awesome!!!";

try {
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("file written sync");
} catch (err){
    console.log(err.message);
}

//content1 holo jeta file e lekha hobe..
// eta blocking er kaj kore
// fs.writeFileSync(path, data)
 // ei line execute howar smoy node.js theme thakbe..
 //..erpor puro file likhe kaj sesh kore porer code e jabe..tai etar nam Sync(Synchronous)

 //error handling..try/catch..file likhte problem hole (folder na thaka / permission na thaka)..ekhane catch kaj kore

 //sob thik thakle ...file written sync

/* Asynchronous Write — fs.writeFile() */

const content2 = " This is a content too \n asynchronous!!!";

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written asynchronously");
  }
});

//fs.writeFile(path, data, callback).........ekhane ki hoy??

//eta non-blocking
//Node.js file lekhar kaj kore
// wait korbena..porer code run korte chole jabe..
// kaj sesh hole callback function call hobe

//tai etar nam Async (Asynchronous)

//calback 
// callback er first parameter error conventin
//error mane operation failed...error null mane success
// if (error) { ... } else { ... }


