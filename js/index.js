
  function selectedItem(){
    var list = document.getElementById('list-items');
    list.addEventListener("click", (event) =>{
      var item = event.target.parentElement.parentElement;
      const text = item.querySelector(".item");
      event.preventDefault();
      if(event.target.matches('.delete-item')){
        item.remove();
      }else if(event.target.matches('.add-item')){
        if(text.style.textDecoration != "line-through" ){
          text.style.textDecoration = "line-through"
        }else{
          text.style.textDecoration = ""
        }
      }
    });
  }

  function addItemstolist(){
    var submitbtn = document.getElementById('submit-btn');
    submitbtn.addEventListener("click", (event) =>{
      event.preventDefault();
      var item = document.getElementById("items").value;
      var list = document.getElementById('list-items');
      list.innerHTML += `
      <li class="container-item"> 
        <span class="item"> ${item} </span>
        <div class="div-btns">
          <button class="add-item"> Check </button>
          <button class="delete-item"> Delete </button>
        </div>
       </li>
      `;
    });
  }
  function init(){
    addItemstolist();
    selectedItem();
  }
  init();