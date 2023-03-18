const numericGrade=document.getElementById(
    'numeric Grade');
 const GradeDisplay=document.getElementById(
    'Grade Display');
function convert(){
   const numeric=parseInt (numericGrade.value);
}   
let Grade;
if ( numeric >= 80 ){
    Grade='A';
}
else if(numeric >=60){
    Grade='B';
}
else if(numeric >=50){
    Grade='C';
}
else{
    Grade='F'
}
console.log(Grade)
GradeDisplay.innerText=`Your Grades is ${Grade}`;