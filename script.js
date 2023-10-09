//variables(var)

//1
function average (a,b,c,d,e,f,g,h,j,k,l){ 
    
    return (a+b+c+d+f+g+h+j+k+l) / 11;
}
console.log(average(5,4,3,2,1,7,8,9,34,22,88));




//2
function area  (height,width) {
     return (height*width)/2; 
}
console.log(area(20,30));




//3
function ageofdayes(age,dayesofyear) {
     return age * dayesofyear;
}
console.log(ageofdayes(26,365));




//4
function sum(x,y) {
    return x + y
}
console.log(sum(20,15));




//5
function array (names) {
    
    return names;
}
var names=["nada","ahmed","aly","aya","wael","sasa","emad","hamdy","ramy","carmen"]
console.log(array(names["0"]));
 



//6
function fullname(fname,sname,tname,foname) {
    return fname + " " + sname + " " + tname + " " + foname
}
console.log(fullname("sasa","adel","hafez","salama") );
document.getElementById("full").innerHTML = " sasa " + " adel " + " hafez " + " salama ";




//7
function transformation(hour) {
    return hour * 3600
}
console.log(transformation(12));




//8
function testitem(a,b,c,d) {
     if ( a + b + c + d > 350 ){
        return true;
     }
     else {
        return false;
     }
}
console.log(testitem(56,89,43,90));
document.getElementById("show").innerHTML = (56 + 89 + 43 + 90)





//9
function  equals (number) {
    if(number == 0) {
       return true;
    } else {
        return false;
    }
}
console.log(equals(5));



//10
function division (number1,number2) {
    return number1 % number2;
    
}
console.log(division(29,3));




//11
function test(number1,number2) {
    if (number1 > number2) {
        return number1;
    }
        else if (number1 < number2) { 
             return number2
        }
        
     else {
         return equals;    
     
     }
    }
    console.log(test(6,7));

    


//12

function checkIfNumber(number) {
    if (isNaN(number)) {
      text = "please enter number"
      error.innerHTML = text;
      return false
    }
    else{
        return  true;
    }

}

console.log(checkIfNumber(456));





//13
function currentdate(Date) {
    var Date = new Date();
    return Date;

}
console.log(currentdate(Date));

