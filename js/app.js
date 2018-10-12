import ToDoComponent from './component/ToDoComponent.js';
import FormComponent from './component/FormComponent.js';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#parent-list").addEventListener("click", function (e) {
        if(e.target && e.target.nodeName === "LI") {
            console.log("List item ", e.target.id.replace("post-", ""), "was clicked!");
        }
    });

    const $todoList = document.querySelector('.todo-list');
    const list = new ToDoComponent($todoList);
    const form = new FormComponent(document.querySelector('.todo-form'));
    form.onAdd(list.onSave);
    list.onEmit();
});