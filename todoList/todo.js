let question = prompt("What is your COMMAND?");
const listTodo = ['Shit'];
const quitTodo = "quit";

while (question !== "quit" && question !== "q") {


    if (question == "new") {

        const newToDo = prompt("What you want to ADD?");
        listTodo.push(newToDo);
        console.log(`${newToDo}  added to your list`);
    }
    else if (question === "list") {
        console.log("********************");
        for (let i = 0; i < listTodo.length; i++) {
            console.log(`${i}: ${listTodo[i]}`)
        }
        console.log("********************");
    }

    else if (question == "delete") {
        const index = prompt("What do you want to DELETE in TODO list?");
        parseInt(index);
        const staffTodelelte = listTodo.splice(index, 1);
        console.log(`You are deleted ${staffTodelelte[0]}`);
    }



    question = prompt("What you want to do?");
}


console.log("You are exit from Todo List");