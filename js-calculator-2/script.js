// invokeing input from input filed and stored in Global variable
let finalresult = document.getElementById("outputValue");

// calculating value
let calculate = (num)=>{
    finalresult.value += num;       
}


// checks invalid format and alert user / pass a valid value to the DOM
let result=()=>{   
    try{
        finalresult.value =eval(finalresult.value)
    }
    catch(e){
        alert("Enter a valid input")
    }

}

// clear the values
let clearFun= () =>{
    finalresult.value = " ";
}

// delete last element
let deleteFun = ()=>{
    finalresult.value =finalresult.value.slice(0,-1);
}


