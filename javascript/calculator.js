// Control for calculator 
// automate functionality 
// handle all user data and work with it 
// in the frontend and backend 
// first thing that needs to be done is connect the user data with 
// will be used to temp hold user data before moving into class parameters
// Obtaining user input 
let userInput = parseInt(prompt("Please Insert Your information"))
let userInformation = [];
// global variable that will be accessed through out the programse
// user data containers
let f_Name;
let l_Name;
let email;
let phone;
// second class variables 
let weight;
let height;
let age;
// third class variables for ingredients
let amount;
let calories;
let nutrition;
// first class 
class MainInformation{
    MainInformation(id,f_Name,l_Name,email,phone){
        this.id = id;
        this.f_Name = f_Name;
        this.l_Name = l_Name;
        this.email = email;
        this.phone = phone;
    }
}
let customerOne = new MainInformation(0,"Jermiah","gulag","Helloworld@mail.com",80589323423);
for(const customer in customerOne){
    console.log(`${customer}: ${customerOne[customer]}`);
}
// second class 
class MainStats{
    MainStats(id, customerId,weight,height,age){
        this.id = id ;
        this.customerId = customerId;
        this.weight = weight;
        this.height = height;
        this.age = age;
    }
} 
// third class
class Ingredients{
    Ingredients(amount,calories,nutrition){
        this.amount = amount;
        this.calories = calories;
        this.nutrition = nutrition;
    }
}
// bmi formula turned into bmi functions
let testingBmi = [190,5,90];
function bmi(array){
    let temp = array[0]/array[1]^2;
     return temp;
}
console.log("the result for the bmi calculation")
let firstBmi = bmi(testingBmi);
console.log(firstBmi);

// will be connected to the form & manage
// intial interaction to get user data
// empty global object array 
let data = [];
// empty global variables
// retrieve and store 
// store final data will be used 
let w;
let h; 
let a;
// above vars need the function to iterate onc
// user prompt outside first get data in variables
// pass to function and return an array
// function userInput purpose is to get and send 
// once we obtain data 
// function userInput(){
//       console.log("Enter weight in lbs");
//       console.log("Enter your weight, height, age");
//       for(let i = 0; i<3; i++ ){
//           let temp = parseInt(prompt())
//           data.push(temp);
//     }
    
//     // extracting data from the function
//       return data;
    
// }

// function invocation 
// userInput();

// first data check 
console.log(data)
// first test case checking for negative numbers
// handling exception
let testCaseOne = [198,5,18]; // will pass
// blocked the insertion of strings by mutating data type check function above
let testCaseTwo = ["4","5","19" ];  // will pass ?? depends if its 
let testCaseThree = ["three hundreth","five", "twenty five"]; // will fail 
let testCaseFour = [-12,5.3,28];  // fail 
// Once test case one pass has passed all requirements
// checking data by data type, user error will be blocked data conversion handles that
// next will handle anything other than 
function num(array){
      // check if if input is number 
      //  & weight<0 & height < 0 & age <0
    console.log(array[0])
    if(isNaN(array[0]) & isNaN(array[1]) & isNaN(array[2])){
    console.log("Please input a number")
    }
    else{
        return "Success data almost ready";
    }
}
// 
console.log("Testing function for functionality ")
num(testCaseTwo);
// test object element for primitive
// retrieve array of strings since not primitive will handle data casting
console.log("Testing case two data type conversion\n" + testCaseTwo);
    // Create a numberArray and using
    // map function iterate over it
    // and push it by typecasting into
    // int using Number
    var numberArray = testCaseTwo.map(Number);
    console.log("Testing conversion")
// if(testCaseTwo=="")
// BMR (men) = (10*weight/1kilogram + 6.25*height/1cm-5*age/1year+5)
// bmr(testOne);
// console.log(userInput)