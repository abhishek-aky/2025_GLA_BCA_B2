let count = 0;
function updateUI(){
    document.getElementById('count').innerHTML = count;
}
    
function increment(){
    count++;
    updateUI();
    
}

function decrement(){
    count--;
    updateUI();
}

function rest(){
    count = 0;
    updateUI();
}
