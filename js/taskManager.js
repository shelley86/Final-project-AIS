const createTaskHtml = (name, description, assignedTo, dueDate, status) => {

  const html = `<div class="col-lg-4">
       <div class="card">

        <div class="card-body ms-1">

            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p>${assignedTo}</p>
            <p>${dueDate}</p>
            <p>${status}<button type="button" class="btn btn-success">Done</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </p>

        </div>
      </div>
    </div>`;

    return html; 
}; 




class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,

        };

        this.tasks.push(task);
    }

    render() {

        let tasksHtmlList = []

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();


            const taskHtml = createTaskHtml(
            task.name,
            task.description,
            task.assignedTo,
            formattedDate,
            task.status
            ); 

            //pushes the taskHtml into the tasksHtmlList array.
            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join("\n");
        const tasksList = document.querySelector("#task-list");
        tasksList.innerHTML = tasksHtml;


    }
   

}