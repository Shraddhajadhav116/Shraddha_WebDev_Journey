// Javascript To-Do app

let list = [];

let choice; 

while (choice != "quit") {
    choice = prompt("What do you want to do : ");
    if (choice == "list") {
        console.log('-------------------');
        console.log("List : ")
        for(item of list){
        console.log(item);
        }
        console.log('-------------------');
    }
    else if (choice == "add") {
        let task_add = prompt("Enter the task you want to add : ");
        alert(`${task_add}- task added !`);
        list.push(task_add);
        console.log('-------------------');
        console.log("Updated List after addition : ");
        console.log(list);
        console.log('-------------------');
    }
    else if (choice == "delete") {
        let task_delete = prompt("Enter the task you want to delete : ");
        let index = list.indexOf(task_delete);
        if (index != -1) {
            list.splice(index, 1);
            alert(`${task_delete}- task deleted !`);
            console.log(`${task_delete}- task deleted !`);
        }
        else {
            alert(`${task_delete} not found !`);
            console.log(`${task_delete} not found !`);
        }
        console.log(`Updated list after deletion : ${list}`);
    }
    else {
        alert("Invalid operation !");
        console.log("Invalid operation !");
    }
}


