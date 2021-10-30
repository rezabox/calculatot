var number = "0";
var is_decimal= false;
var result_text=document.getElementById("res-text");
var equation =0,last_evnt="";
function update_text(text){
      result_text.innerText=text;
}


function add_digit(digit){
    if(number != "0" && number != "can not divide by zero "){
        number += digit;
    }
   else{
        if(digit != ".")
          number = digit;
         else
            number ="0."
    }
    
     update_text(number);
}
function change_sign(){
    if(parseFloat(number)>0) number= "-"+ number;
    else number=number. substring(1,number.length);

    update_text(number);
}
function reset_after_event(e){
      number = "0";
      is_decimal= false;
      last_evnt= e;
      update_text(number);
}
function decimal(){
       if(is_decimal == false){
           is_decimal = true;

           add_digit('.')
       }
}

function sum(){
     equation += parseFloat(number);
    
    reset_after_event("sum");
}
function times(){
       if(last_evnt == "") equation = parseFloat(number);

       else equation *= parseFloat(number);

        reset_after_event("times");
        
}
function divide(){
       if(last_evnt == "") equation = parseFloat(number);
       else{
        if(number != "0")
          equation /= parseFloat(number);
          else{
                clear_all();
                equation ="can not divide by zero";
          }
       } 

       reset_after_event("divide");
}
function sub(){
    if(last_evnt == "") equation = parseFloat(number);
    else  equation -= parseFloat(number);
       reset_after_event("sub");
}
function equation_answer(){
        if(last_evnt == "divide") divide()
        if(last_evnt == "times") times();
        if(last_evnt == "sub") sub();
        if(last_evnt == "sum") sum();

        number= equation.toString();
        
        equation = 0;
        update_text(number);
}
function clear_all(){
     number= "0";
     equation="0";
     last_evnt= "";
     is_decimal= false;
     update_text(number);
}
function stop(){
      number= "0";
      equation= "0";
      last_evnt= "";
      is_decimal= false;
      update_text(number);
}
function remove_digit(){
    var last_letter =number[number.length -1];
    if (number.length > 0){
      number= number.substring(0,number.length -1);
      if(number.length <=0) ;
      if(last_letter == ".") is.decimal= false;
  }
  update_text(number);
}














