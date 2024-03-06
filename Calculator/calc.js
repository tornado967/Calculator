let result = localStorage.getItem('result') || '';

finalResult();

function buttons(value){
    result += value;
    finalResult();
    localStorage.setItem('result', result);
}

function finalResult(){
    document.querySelector('.final-result').innerHTML = `${result}`;
}