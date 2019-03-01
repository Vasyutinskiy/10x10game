let gameItemsCollection = document.querySelectorAll(".field-item");
let gameInterval = document.querySelector("#game-interval");
console.log(gameInterval);
let startGameBtn = document.querySelector("#start-btn");

// startGameBtn.onsubmit = iteratedItem;
startGameBtn.onclick = iteratedItem;


//Random function
function getRandomItemNumber(elemArr){
    return Math.floor(Math.random() * (elemArr.length));
}

function iteratedItem (){
    let currentInterval = +gameInterval.value;
    // console.log(currentInterval);
    setInterval(function () {
        let randomItemNumber = getRandomItemNumber(gameItemsCollection);
        let randomItem = gameItemsCollection[randomItemNumber];
        randomItem.classList.add("yellow-item");
        // selectedElem(randomItem);
        // let parent = target.randomItem;
        // parent.classList.add("skills-active_item");
        // setInputState();
    },currentInterval);
    // console.log(gameInterval);
}

//Check chosen elem
function selectedElem(){
    gameItemsCollection.forEach(function(elem, arr, index){
        // let gameItem = elem.gameItemsCollection;
        if(elem.classList.contains("yellow-item")){
            elem.classList.add("yellow-item");
        }else {
            elem.classList.remove("yellow-item");
        }
    });
}





// self.table.onclick = function(e) {
//     let colors = e.target.classList;
//     if (colors.contains('yellow')) {
//         colors.remove('yellow');
//         colors.add('green');
//         if (self.computer.value != self.limit) {
//             self.incResult(self.user);
//         }
//         self.caught = true;
//     }
// }