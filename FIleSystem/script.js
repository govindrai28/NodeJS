const fs = require('fs');

//write file:- create a new file with node fs module
// fs.writeFile("abcd.txt", "hey hello", function(err) {//callback is always an function
//     if(err) console.log(err);
//     else console.log("file created");

// })


//read file 

// fs.readFile("abcd.txt", "utf8", function(err, data) {
//     if(err) console.log(err);
//     else console.log(data);
// })




//append file
//fs.appendFileSync(path, data[, options]) bracket kai ander semi colon means it is related to the data

// fs.appendFile("abcd.txt", " appended data", function(err){
//     if(err) console.log(err);
//     else console.log("appended data");
// });




//create a folder
// fs.mkdir("lolo", function(err){
//     if(err) console.log(err);
//     else console.log("created folder");
// })



//Renaming a file
// fs.rename("abcd.txt", "hey.txt", function(err) {
//     if(err) console.log(err);
//     else console.log("done");
// })





// //Deleting a file
// fs.unlink("hey.txt", function(err) {
//     if(err) console.log(err);
//     else console.log("file successfully deleted");
// })





// //Reading a folder
// fs.readdir("lolo", {withFileTypes: true}, function(err, files) { //because the options is a object
//     if(err) console.log(err);
//     else console.log(files);//symbol 2 means folder & symbol 1 means file
// })


//Deleting a folder
fs.rmdir("lolo", function(err) {//use rm in place of rmdir & use options = {recursive: true} means that the files are deleted one one from last first last one is deleted then second last one is deleted then third last one is deleted
    if(err) console.log(err);
    else console.log("deleted");
}) 


//folder creation
//copy rename move