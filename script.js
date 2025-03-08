const pickNumberBtn = document.getElementById("pickNumberBtn");
const resultBtn = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tick = new Audio('tap.wav');
const win = new Audio('win.wav');


const gifts = [
  "Notebook", "Pen Set", "Pencil Box", "Eraser Pack", "Sharpener",
  "Geometry Box", "Highlighters", "Sticky Notes", "Color Pencils",
  "Water Bottle", "School Bag", "Ruler Set", "Calculator",
  "Art Sketchbook", "Glue Stick", "Scissors", "Subject Dividers",
  "Flashcards", "Desk Organizer", "Whiteboard Markers", "Correction Tape",
  "Writing Pad", "Storybook", "Educational Puzzle", "Desk Lamp",
  "Paper Clips Set", "Compass Set", "Science Kit", "Math Practice Book",
  "English Grammar Book", "Pen Drive", "Bookmark Set",
  "Laptop Sleeve", "Craft Paper Pack", "Drawing Book",
  "Dictionary", "Globe", "Scientific Calculator", "Pen Holder",
  "Folder Files", "Map", "School Planner", "Exam Pads",
  "Educational Board Game", "Colored Markers", "Alphabet Magnets",
  "Inspirational Quote Poster", "Personalized Name Tag", "Time Table Chart",
  "Study Timer"
];

console.log(gifts);

pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
   document.getElementById(i).classList.remove("winningBox");
  }
  resultBtn.textContent = "Please wait...";
  // setTimeout(function () {
  //   let randomNum = Math.random() * gifts.length;
  //   let drawnNumber = Math.floor(randomNum) + 1;
  //   const gift = gifts[drawnNumber - 1];
  //   resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  // }, 5000);

let secoundsCount = 0;  
 const intervalId = setInterval(function() {
  tick.pause();
  tick.currentTime = 0;
  tick.play();
  secoundsCount = secoundsCount + 1;
 const randomBox =  Math.floor( Math.random() * 50) + 1;
 console.log(randomBox);
 for(let i = 1; i<= 50; i++){
  if(i===randomBox) {
    document.getElementById(i).classList.add("highlightedBox");
  }else{
    document.getElementById(i).classList.remove("highlightedBox");
  }
 }


 if(secoundsCount === 5) {
  let randomNum = Math.random() * 50;
    let drawnNumber = Math.floor(randomNum) + 1;
    const gift = gifts[drawnNumber - 1];
    resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
    document.getElementById(randomBox).classList.remove("highlightedBox");
    document.getElementById(drawnNumber).classList.add("winningBox");
    win.pause()
    win.currentTime = 0;
    win.play()
    clearInterval(intervalId);
  }
}, 1000);

});


if (lotterySheetContainer) {
  gifts.forEach(function (value, i) {
    const boxElement = `<div class="box" id=${i + 1}> ${i + 1}. ${value} </div>`;
    lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
  });
}
