<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

    <title>Task Management APP</title>
  </head>
  <body style="background-color: #fad2e1" onload="loadExistingCards()">
    <!-- Modal -->
    <div
      class="modal fade"
      id="newTask"
      tabindex="-1"
      aria-labelledby="newTaskLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newTaskLabel">Enter New Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="imageURL" class="form-label">Image URL</label>
              <input
                type="url"
                class="form-control"
                id="imageURL"
                placeholder="http://image/image.jpg"
              />
            </div>
            <div class="mb-3">
              <label for="taskTitle" class="form-label">Task Title</label>
              <input
                type="text"
                class="form-control"
                id="taskTitle"
                placeholder="Exercise"
              />
            </div>
            <div class="mb-3">
              <label for="taskType" class="form-label">Task Type</label>
              <input
                type="text"
                class="form-control"
                id="taskType"
                placeholder="practice"
              />
            </div>
            <div class="mb-3">
              <label for="taskDescription" class="form-label"
                >Enter Something</label
              >
              <textarea
                id="taskDescription"
                class="form-control"
                rows="3"
                placeholder="This is DOM Manipulation class"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onclick="addNewCard()"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <header style="background-color: #ff758f">
      <nav  class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div  class="container-fluid">
          <a class="fs-3 fw-bolder" href="#">Task Manager</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#newTask"
            >
              <i class="far fa-plus"></i> Add New
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="container">
      <section class="row justify-content-center mt-5">
        <div class="col-md-8 col-lg-6">
          <div class="input-group mb-3 shadow">
            <input
              type="search"
              class="form-control"
              placeholder="Search Task"
              aria-label="Search Task"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1">
              <i class="far fa-search"></i>
            </span>
          </div>
        </div>
      </section>

      <section class="task__container row"></section>
    </main>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <script src="index.js"></script>
  </body>
</html>
