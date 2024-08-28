
function calc() {
  let num1 = document.querySelector(".input1 ").value;
  let num2 = document.querySelector(".input2").value;
  let total = document.querySelector("h2");
  let dataList = document.querySelector(".data_list").value;
  let value1 = parseFloat(num1);
  let value2 = parseFloat(num2);
  if (isNaN(value1)|| isNaN(value2)){
     total.innerHTML = "ادخل ارقام صحيحة"
     return;
  }
  if (dataList == "addition") {
      total.innerHTML =  "result :" + (value1 + value2) ;
    } else if (dataList == "subtraction") {
        total.innerHTML =   "result :" + (value1 - value2);
    } else if (dataList == "multply") {
        total.innerHTML =  "result :" + (value1 * value2);
    } else if ((dataList == "divition") && (value2 == 0)) {
        
        total.innerHTML = "المقام مينفعش يكون صفر";
    } else {
        total.innerHTML = "result :" + (value1 / value2);
    }
    num1 =""
    num2 =""
    dataList =""
  
}

renderArr()