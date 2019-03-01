//Main variables
var maxScore = 10;
var playerScore = 0;
var machineScore = 0;
var scoreTablePlayer = find('.score-table_user').getAttribute('data-value');
var scoreTableMachine = find('.score-table_user').getAttribute('data-value');

//Set by user
var gameInterval = find('#game-interval');
var startButton = find('#start-btn');
var submitForm = find('form');
var fieldItemsCollection = find('.field-item', 'all');

// clear interval!

//Main functions
//Random function
function getRandom (elemArr){
    return Math.floor(Math.random() * (elemArr.length));
}
//Find all elements function
function find(selector, all) {
    return !all ?
        document.querySelector(selector) :
        document.querySelectorAll(selector);
}

//Function add yellow bg to random item from array
// var iteratedItem = function () {
function iteratedItem () {
    var selectedItem;
    setInterval(function () {
        selectedItem = fieldItemsCollection[getRandom(fieldItemsCollection)];
        selectedItem.classList.add("yellow-item");
        // if ()
    },gameInterval.value);
    // return selectedItem;
}
// console.log(iteratedItem);

find("form").addEventListener("submit", function(e){
    e.preventDefault();
    iteratedItem();
});




//Get random item
// function randomItem(){
//     setInterval(function() {
//         //?????Как убирать не нужные
//         if (gameInterval !== 0){
//             randomNumberValue.classList.add("yellow-item");
//         }else {
//             randomNumberValue.remove("yellow-item");
//             randomNumberValue.add("red-item");
//         }
//     }, gameInterval);
// }

// var iterateItems = function () { //Запускает появление желтого квадрата
//     setInterval(function() {
//         //очищает красные квадраты
//         // clearRed();
//
//         var random = getRandom();
//         fieldItemsCollection[random].classList.add("yellow-item");
//         // reset(getRandom);
//     }, gameInterval.value);
// };



// clearInterval(refreshIntervalId);

// startButton.addEventListener("click", function() {
//     gameInterval = gameInterval.value;
//     // if(gameInterval.length > 0) {
//     //     // startButton.disabled = false;
//     //     // defaultGameFieldBehavior.style.pointerEvents = 'auto';
//     //     randomItem();
//     // } else {
//     //     // startButton.disabled = true;
//     // }
// });

// submitForm.onsubmit = function(e) {
//     e.preventDefault();
//     iterateItems();
// }

//Targeted item click
// startButton.addEventListener("click", function() {
//
// });

//Как навесить клик для каждого элемента и запускать заново счетчик

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


