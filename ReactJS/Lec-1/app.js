let count = 0;
function updateUI(){
    document.getElementById('counter').innerHTML = count;
}
function incre(){
    count = count + 1;
    updateUI();
}
function decre(){
    count = count -1;
    updateUI();
    // document.getElementById('counter').innerHTML = count;
}
function rest(){
    count = 0;
    updateUI();
    // document.getElementById('counter').innerHTML = count;
}