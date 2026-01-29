let count = 0;
// function updateUI(){
    
function increment(){
    count++;
    // updateUI();
    document.getElementById('root').innertext = count;
}

function decrement(){
    count--;
    // updateUI();
    document.getElementById('root').innertext = count;

}

function rest(){
    count = 0;
    document.getElementById('root').innertext = count;
    // updateUI();
}
