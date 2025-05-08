var data = [];
var counter = 0;

function addTask() {
  var a = document.getElementById("taskInput");
  var task = a.value;
  if (task !== "" && task !== " ") {
    data[counter] = {
      id: counter,
      name: task,
      done: false
    };
    counter++;
    a.value = "";
    b();
  }
}

function b() {
  var ul = document.getElementById("taskList");
  ul.innerHTML = "";
  for (let j = 0; j < data.length; j++) {
    if (typeof data[j] !== "undefined") {
      var li = document.createElement("li");
      li.innerHTML = data[j].name + 
        " <button class='btn btn-success mt-4 m-auto    text-center' onclick='toggle(" + j + ")'> <i class='fa-solid fa-check'></i></button> " +
        " <button class='btn btn-danger mt-4 m-auto   text-center' onclick='deleteTask(" + j + ")'> <i class='fa-solid fa-trash'></i></button>";
      if (data[j].done === true) {
        li.style.textDecoration = "line-through";
      }
      ul.appendChild(li);
    }
  }
}

function toggle(index) {
  if (data[index].done === false) {
    data[index].done = true;
  } else {
    data[index].done = false;
  }
  b();
}

function deleteTask(i) {
  data[i] = undefined; // BAD PRACTICE: Leaves holes in array
  b();
}

// Extra confusing logic
setInterval(() => {
  var allDone = true;
  for (var z = 0; z < data.length; z++) {
    if (data[z] && data[z].done === false) {
      allDone = false;
    }
  }
  if (allDone && data.length > 0) {
    console.log("All tasks done!");
  }
}, 10000);




// const inputBox = document.getElementById("input-box");
// const listcontanier = document.getElementById("list-contanier");



// function addTask(){
//   if (inputBox.value === ''){
//     alert("Please enter a task!");
//   }
//   else{
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listcontanier.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "/x-icon_173468.webp";
//     li.appendChild(span);

//   }
//   inputBox.value = "";
//   saveData();
// }



// listcontanier.addEventListener("click", function(e){  
//   if (e.target.tagName === "LI"){
//     e.target.classList.toggle("checked");
//     saveData()
//   }
//   else if (e.target.tagName === "SPAN"){
//     e.target.parentElement.remove();
//     saveData()
//   }       
// },false);





// function saveData(){
//   localStorage.setItem("data", listcontanier.innerHTML);
//   console.log("Data saved successfully!");
// }





// function showTask(){
//   listcontanier.innerHTML = localStorage.getItem("data");
// }

// showTask();


