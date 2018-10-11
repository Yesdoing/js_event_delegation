import ToDoComponent from './component/ToDoComponent.js';

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#parent-list").addEventListener("click", function (e) {
        if(e.target && e.target.nodeName === "LI") {
            console.log("List item ", e.target.id.replace("post-", ""), "was clicked!");
        }
    });

    const $container = document.querySelector('.container');
    const copo = new ToDoComponent($container);
    copo.onEmit();
});