//Grading System(Program)

let marks = 83;

if(marks>=33){
    console.log("Result:Pass");
    if(marks>90){
        console.log("Grade:A+");
    }
    else if(marks>80){
        console.log("Grade:A");
    }
    else if(marks>70){
        console.log("Grade:B");
    }
    else if(marks>60){
        console.log("Grade:C");
    }
    else if(marks>50){
        console.log("Grade:D");
    }
    else{
        console.log("Grade:E");
    }
}
else{
    console.log("Result:Fail");
}