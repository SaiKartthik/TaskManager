const task_container = document.querySelector("#task_container")
let globalTaskData = [];

const generateHTML = (taskData) =>{return`	<div id = ${(taskData.id)} class=" col-md-6 col-lg-4 ">
  <div class="card">
    <div class="card-header gap-2 d-flex justify-content-end ">
      <button style="border" class="btn btn-outline-info  " type="button" name="button">
        <i class="fal fa-pencil"></i></button>
      <button class="btn btn-outline-danger " type="button" name="button">
        <i class="fal fa-trash-alt"></i></button>
    </div>
    <div class="card-body ">
      <img class="img-fluid" src=${(taskData.image)}>
      <h5 class="card-title mt-4">${(taskData.title)}</h5>
      <p class="card-text">${(taskData.Description)}</p>
      <span class="badge bg-primary">${(taskData.type)}</span>
    </div>
    <div class="card-footer ">
      <button class="btn btn-outline-primary" type="button" name="button">Open Task</button>
    </div>
  </div>
</div>`
}

const addNewCard = () => {
  //get task data
  const taskData = {
    id: `${(Date.now())}`,
    title: document.getElementById('tasktitle').value,
    image: document.getElementById('imageurl').value,
    type: document.getElementById('tasktype').value,
    Description: document.getElementById("taskdescription").value
  };

globalTaskData.push(taskData);
// var cards = globalTaskData
localStorage.setItem("TaskyKey",JSON.stringify({card : globalTaskData}));
  //create card
  const newcard = generateHTML(taskData)

  //inject to DOM

  task_container.insertAdjacentHTML("beforeend", newcard);
  //clear everything

  title: document.getElementById('tasktitle').value = "";
  image: document.getElementById('imageurl').value = ""  ;
  type: document.getElementById('tasktype').value = "";
  Description: document.getElementById("taskdescription").value = "";
  return ;

};



const loadExistingCards = () =>{
  //check local localStorage
  const getData = localStorage.getItem("TaskyKey")

  if (!getData) return ;
  //retrieve data if exists
  const taskCards = JSON.parse(getData)

  globalTaskData = taskCards.card
  //inject it to DOM

  globalTaskData.map((taskData) => {
      const newcard = generateHTML(taskData)
        task_container.insertAdjacentHTML("beforeend", newcard);

  })
  return
}
