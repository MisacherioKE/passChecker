"use strict";
// Method 1

// document.getElementById("check").onclick = function(){
//     alert("checking password...")
//     var passOne = document.getElementById("passOne").value;
//     var passTwo = document.getElementById("passTwo").value;

//     if(passOne === passTwo){
//         document.getElementById("message").innerHTML = "Password Correct!";
//     }else{
//         document.getElementById("message").innerHTML = "Incorrect Password!";
//     }
// }

// Method 2
document.getElementById("check").onclick = function(){
    alert("checking password...")
    let myPromise = new Promise((resolve, reject) =>{
        var passOne = document.getElementById("passOne").value;
        var passTwo = document.getElementById("passTwo").value;
        
        if(passOne === passTwo){
            resolve("Password Correct!");
        }
        // else if(passOne =="" && passTwo == ""){
        //        reject("empty field!");
        // }
        else{
            reject("Incorrect Password!");
        }
    })
    myPromise.then((data)=>{
        document.getElementById("message").innerHTML = "Password Correct!";
    }).catch((error) =>{
        document.getElementById("message").innerHTML = "Incorrect Password!";
    })
}


// Method 3
// document.getElementById("check").onclick = function(){

//     alert("checking password...");

//     var passOne = document.getElementById("passOne").value;
//     var passTwo = document.getElementById("passTwo").value;
    
//     try {
//         if(passOne === passTwo) throw message.innerHTML = "passwords match!";
//         if(passOne != passTwo) throw message.innerHTML = "password mismatch!";
        
//     } catch (error) {
//         document.getElementById("message").innerHTML = error;
//     }
// }

