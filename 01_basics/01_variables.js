const accountID = 144553
let accountEmail = "payal@google.com"
var accountPassword ="12345"
accountCity="Jaipur"
let accountState;

// accountID=2// not allowed
 accountEmail="ab@gn.com"
 accountPassword="21213321"
 accountCity="Bengaluru"

 /*prefer not to use var 
 because of issue in block scope and functional scope*/
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState ])

