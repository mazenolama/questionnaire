//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const sec = document.querySelector(".title");


// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
}

let que_count = 0;
let que_numb = 1;
let ans;
const data = [];
var inputData=null;
let type;
let len;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    //reset all data
    que_count = 0;
    que_numb = 1;
    while(data.length > 0) {
        data.pop();
    }
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(type=="input")
    {
        inputData=document.getElementById("input").value;
        ans =inputData; 
    }
    if(que_count < questions.length - 1){ 
        //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn.classList.remove("show"); //hide the next button
        data.push({'Q#':que_numb,'answer':ans});
    
    }
    else
    {
        if(type=="input")
        {
            inputData=document.getElementById("input").value;
            ans =inputData; 
        }
        data.push({'Q#':que_numb,'answer':ans});
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
   
    /*************************** Que **************************/
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    /*************************** Que **************************/

    /*************************** type **************************/
    type =questions[index].type;
    /*************************** type **************************/

    /************************** Answer  ************************/
    let option_tag = [];
    len =questions[index].options.length
    for ( i= 0; i< len ; i++)
    {
        if(type == "select")
            option_tag.push('<div class="option"><span>'+ questions[index].options[i] +'</span></div>');
        else
            option_tag ='<input style="width: 100%;" id="input" class="option">';
    }

    if(type == "select")
    {
        let results ='';
        for ( op of option_tag)
            results += op + " "
        option_list.innerHTML = results;
    }
    else{
        option_list.innerHTML = option_tag;
    }
    /************************** Answer  ************************/
    
    const option = option_list.querySelectorAll(".option");
   
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    answer.classList.toggle("selected");

    let userAns = answer.textContent; //getting user selected option
    const allOptions = option_list.children.length; //getting all option items
    ans =userAns;
    //console.log(ans);
    //console.log(type);    
    for(i=0; i < allOptions; i++){
        if(option_list.children[i] != answer)
        {
            option_list.children[i].classList.remove("selected");
        }
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    console.log(data)
    for (i=0; i <data.length; i++)
    {
        console.log(data[i].answer)
        
    }
    var A1 = data[0].answer;
    console.log(A1);
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+questions.length+'</p> من <p>'+  index +'</p> الأسئلة</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}