document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('donation-list').classList.add('hidden');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('donation-list').classList.remove('hidden');
})



const walletValue = getInnerTextById('wallet')
const doanatedAmountN = getInnerTextById('donated-amount-n');
const nokhaliFieldValue = getInputFieldValueById('noakhali-field');

// donation
document.getElementById('noakhali-field').addEventListener('input', function(e){
    const inputValue = e.target.value;
    console.log(inputValue)
    if(!isNaN(inputValue)){
        document.getElementById('noakhali-btn').removeAttribute('disabled');
    }
    
});
document.getElementById('noakhali-btn').addEventListener('click', function(event){
    if(nokhaliFieldValue < walletValue){
        const newWalletBalance = walletValue - nokhaliFieldValue;
        document.getElementById('wallet').innerText = newWalletBalance;
    
        const newDonatedAmountN = doanatedAmountN + nokhaliFieldValue;
        document.getElementById('donated-amount-n').innerText = newDonatedAmountN;
    }else{
        alert('Insufficient balance in your wallet')
    }
}) 

