let bcrypt = require("bcryptjs");

let mypassword = "Abc";

let salt = 10;

let encrypted_password = bcrypt.hashSync(mypassword, salt);

let check = bcrypt.compareSync(mypassword, encrypted_password);

if (check) {

    console.log("Password is matched");

} else {

    console.log("Password is not matched");

}

console.log(`Original password: ${mypassword}\nEncrypted password: ${encrypted_password}`);





