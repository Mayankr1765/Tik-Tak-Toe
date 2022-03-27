const boxNode = document.querySelectorAll('.grid-element')
console.log('nodes are ' + boxNode)
var clickCount=0;

boxNode.forEach((node ) => {
    node.addEventListener('click' , () => {
        // console.log('clicked no is ' + index)
        clickCount++;
        if (clickCount%2==0){
            node.innerText = '0';
        }
        else{
            node.innerText = 'X';
        }
        node.classList.add('click-ban');
        if (clickCount>=4){
        checkWinner();
        }
        
    })
})

function checkWinner(){
    console.log('winner not defined')
    
    
}

function reload(){
    location.reload();
}