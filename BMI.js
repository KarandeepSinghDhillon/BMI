const age = document.getElementById("age");
console.log(age)
const gender = document.querySelectorAll(".input-radio")
console.log(gender);
// const genderFemale = document.querySelectorAll("#female")
// console.log(genderFemale);
const weight = document.getElementById("weight");
console.log(weight)
const height = document.getElementById("height")
console.log(height);
const submit = document.getElementById("submit")
console.log(submit);
const result = document.querySelector("#result")
console.log(result);
const comment = document.getElementById("comment")
console.log(comment)



function BMI(){
    let a = +(age.value) ;
    let h = +(height.value) ;
    let w = +(weight.value) ;
    let g = gender.value ;
    let bmi = 0 ;
    if(a == "" || w =="" || h == "" || g == "" ){
        alert("Please fill all the inputs to calculate BMI")
    } else {
        function cal(){
            bmi += w/h;
            let newChild = document.createTextNode(`BMI : ${bmi}`);
            let oldChild = result.childNodes[0];
            oldChild.replaceWith(newChild)
        }
        cal();
        let com = document.createElement("h1");
        console.log(com)
        if(bmi < 18.5){
            com.appendChild(document.createTextNode("underweight range"))
        } else if ( 18.5 <= bmi <25) {
            com.appendChild(document.createTextNode("healthy weight range"))
        } else if ( 25 <= bmi <30) {
            com.appendChild(document.createTextNode("overweight range"))
        } else if (  30 <= bmi < Infinity) {
            com.appendChild(document.createTextNode("obesity range"))
        }
        comment.appendChild(com);
    }
}
submit.addEventListener("click" , BMI, "true")