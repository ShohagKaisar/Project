const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value == ""){
        alert("Please Enter Task")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.classList.add("spn");
        span.innerHTML = "&#10006";
        li.appendChild(span);
          }
        inputBox.value = "";
        saveData()
      }

      listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
          e.target.classList.toggle("checked");
          saveData()
        }
        else if(e.target.classList == "spn"){
          e.target.parentElement.remove();
          saveData()
        }
      });

      function saveData(){
        localStorage.setItem("data", listContainer.innerHTML)
      };
      function takeData(){
        listContainer.innerHTML = localStorage.getItem("data")
      };
      takeData();