//Building a Simple File Organizer CLI Part 1

//ekhane choto CLI (Command Line Tool) dekhaise...jeta file guloke extension onujayi category folder e sajiye dey

/* 1. Modules Load */

const fs = require("fs");
const path = require("path");

//fs => file create, read, move, delete
// path => path join, extname, dirname etc


/* 2. Main Directory Setup */

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");
//sourceDir => jekhane elomelo file thakbe

//organizedDir=> jekhane sajano file thakbe..

/* 3. Categories List  */

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
   audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
//ekhane .jpg, .pdf, .mp3, .js kon file kon folder e jabe seta define kora hoyeche


/* 4. Test files (demo) */

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];
//init command dile e file gulo automatically toiri hobe


/* 5. initializeDirectories() => first command (init) */

//e function 2 ta kaj 

//  1. messy-files folder toiri kora

fs.mkdirSync(sourceDir);
fs.writeFileSync(path.join(sourceDir, file), content);

//2. organized folder + category folders toiri kora

//jemon:
// organized/
//    images/
//    documents/
//    audio/
//    videos/
//    others/
//    ...

/* 6. getCategory(filename) */

function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) return category;
  }
  return "others";
}
//file er extension ber kore
//kon category te pore seta return kore

// image.jpg => images

// report.pdf => documents

// random.xyz => others


/* 7. organizeFiles() => 2nd command (organize) */

// (1) messy folder er sob file read kora
const files = fs.readdirSync(sourceDir);
if (files.length === 0) {
    console.log("No files to work on!!");
    return;
  }
  console.log(`found ${files.length} files to organize \n`);
  const stats = {
    total: 0,
    byCategory: {},
  };
//(2) file er size, extension, category Check..
const stat = fs.statSync(sourcePath);
const category = getCategory(file);
//(3) file k sei category folder e copy kora
fs.copyFileSync(sourcePath, destPath);
//(4) stats update kora

stats.total++;
stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;


/* 8. showHelp() */

//node file-organizer init
//node file-organizer organize

//usage guide dekhay

/* 9. CLI Command Handling */

const command = process.argv[2];

switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelp();
    break;
}
//command options:
// node app.js init => test files banay

// node app.js organize => file guchiye folder banay

// vul command => help dekhay

/*
ja shikhlam

1. CLI banano
2. process.argv diye command newa
3. category-based file organizer banano
4. fs diye folder build/read/copy
5. path diye extname/dirname/join
6. stats toiri kora
7. switch-case diye CLI handle 

*/