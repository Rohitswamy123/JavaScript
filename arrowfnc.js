const arr=[1,2,3,5,6,8];

const myFnc=(value,index)=>{
    if(value==6)
    {
        console.log("yes it exists");
    }
};

// Definitions and all functions psedo codes .

const result=arr.some((value,index)=>{
    return value>5  ;
})          // some -> it will work for atleast instance ex atleast one value is > 5

const sec=arr.reduce((previousValue,value,index)=>
{
    return value>previousValue;
})           // reduce -> this above expression is true also it'll give a single value in return  as if arr=[2,1,3] it'll still be true . 


const sew = arr.map((value,index)=>{
    return value=value+5;
})          // map -> return a new array 

let totalNumber=0;
arr.forEach((value,index)=>{
    totalNumber+=value;
})
// forEach ->A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.









arr.find(myFnc);
