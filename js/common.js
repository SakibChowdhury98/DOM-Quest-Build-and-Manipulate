function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInnerTextById(id){
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerTextValue);
    return innerTextNumber;

    
}

document.getElementById('blog').addEventListener('click', function(){
    window.location.href = "./blog.html";
})
document.getElementById('home').addEventListener('click', function(){
    window.location.href = "./index.html";
})