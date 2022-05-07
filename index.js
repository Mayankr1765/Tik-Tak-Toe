const boxNode = document.querySelectorAll('.grid-element')
console.log('nodes are ' + boxNode)
var clickCount=0;
var storedArray = [[2,3,4],[5,6,7],[8,9,10]]

boxNode.forEach((node ) => {
    node.addEventListener('click' , (e) => {
        clickCount++;
        var position = e.target.id
        var position_x = parseInt(position.charAt(1))
        var position_y = parseInt(position.charAt(2))      
        if (clickCount%2==0){
            node.innerText = '0';
            storedArray[position_x][position_y] = 0
        }
        else{
            node.innerText = 'X';
            storedArray[position_x][position_y] = 1
        }
        node.classList.add('click-ban');
        if (clickCount>=4){
        checkWinner(position_x,position_y,node.innerText);
        }
        
    })
})

function checkWinner(i,j,win){
    if (checkRow(i) == true || checkColumn(j) == true || checkDiagonal(i,j) == true){
        alert('winner is ' + win)
        setTimeout(() => {
            reload();
        },2000)
    }
}

function checkRow(i){
    if ((storedArray[i][0] == storedArray[i][1]) && (storedArray[i][0] == storedArray[i][2] )){
        return true;
    }
    return false;
}

function checkColumn(j){
    if ((storedArray[0][j] == storedArray[1][j]) && (storedArray[0][j] == storedArray[2][j] )){
        return true;
    }
    return false;
}

function checkDiagonal(i,j){
    if (storedArray[0][0] == storedArray[1][1] && storedArray[0][0] == storedArray[2][2]){
        return true
    }
    if (storedArray[0][2] == storedArray[1][1] && storedArray[0][2] == storedArray[2][0]){
        return true
    }
    return false
}

function reload(){
    location.reload();
}