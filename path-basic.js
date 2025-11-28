//Introduction to the path Module

//ekhane node.js er path module diye file path kivabe handle korte hoy seta shikhbo..

/* 1. path module load kora */

const path = require ("path");
//eta Node.js er built-in module => path niye kaj korte use kora hoy
// (jemon: dirname, filename, extension ber kora)


/* 2. Current file info */

console.log("filename: ", __filename);
console.log("Directory: ", __dirname);

// __filename => eti file tar puro absolute path
// __dirname => eta file jekhane ache sei directory path

// output :
// filename:  D:\My Projects\nodejs-essentials\path-basic.js
// Directory:  D:\My Projects\nodejs-essentials


/* 3. Analyze a file path */

const filePath = "/shafayat/documents/nextLevel.pdf";
//ekhon ei path diye bivinno part extract kora hobe

//Directory name
path.dirname(filePath);

//Base name (full file name)
path.basename(filePath);

//File extension
path.extname(filePath);

// File name without extension path
path.basename(filePath, path.extname(filePath));

/* 4. Parse the full path (object akare) */

const parsed = path.parse(filePath);
console.log(parsed);

//persed er  vitore thakbe

/*
{
  root: '/',
  dir: '/shafayat/documents',
  base: 'nextLevel.pdf',
  ext: '.pdf',
  name: 'nextLevel'
}
  */
//mane path er sob part alada kore object baniye diche

/* 5. format (parse kora object =>abar full path banano) */

path.format(parsed);
// eta abar path toiri korbe

/*
 ja shikhsi........

1. __filename => current file er full path
2. __dirname => current folder path
3. dirname() => folder ber kora
4. basename() => file name ber kora
5. extname() => extension ber kora
6. parse() => puro path object akare pawa
7. format() => object => full path banano
*/