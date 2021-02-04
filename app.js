let dob = document.querySelector(".dobh");
let num = document.querySelector(".luckyNumber");
let btn = document.querySelector(".btn-submit");
let btnReset = document.querySelector(".btn-reset");
let result = document.querySelector(".output-result");
let luckyImg = document.querySelector(".lucky")
let unLuckyImg = document.querySelector(".unlucky")
let dobArray = []
let newDobArray = [];
let answer;

btn.addEventListener("click", function(){
// input we got of dob is in string, so coinverting it into array
    dobArray = dob.value.split("")
// there are some speecial chars in date which are date seperator, this for loop is to remove them and create a new array
    for(let i=0; i<dobArray.length; i++){
        if(dobArray[i] >= 0 || dobArray[i] <= 9){
            newDobArray.push(Number(dobArray[i]))
        } else{
            newDobArray.push(0)
        }
    }
    console.log(newDobArray)
// creating sum of an array
    const reducer = (acc, curr) => acc + curr;
    answer = newDobArray.reduce(reducer);
    console.log(answer);

// 2nd part checking divisiblity and showing output
    if(num.value % answer === 0){
        result.innerHTML = "You are a lucky person, Go Ahead.";
        luckyImg.style.display = "block";

    } else{
        result.innerHTML = "This dosen't shows you lucky, but It's only a matter of belief, Believe and you are" ;
        unLuckyImg.style.display = "block";
    }
});

// reset button
btnReset.addEventListener("click", function(){
     dobArray = [ ];
     newDobArray = [ ];
     answer = " ";
     num.value = " ";
     dob.value = " ";
     result.innerHTML = "";
     luckyImg.style.display = "none";
     unLuckyImg.style.display = "none";

});




