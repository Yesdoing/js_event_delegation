import {todo} from '../data/todo.js';
import {todoTemplate} from '../template/todoTemplate.js';

export default class ToDoComponent {
    constructor(elem) {
        this._elem = elem;
    }

    onSave() {
        const $input = document.querySelector('.addTodo input');
        const $todoList = document.querySelector('.todo-list');

        $todoList.innerHTML = '';
        todo.push({todo: $input.text});
        todo.map(x => {
            $todoList.innerHTML += todoTemplate(x);
        });
    }

    onRemove() {
        alert('removing');
    }

    onDone() {
        alert('done!');
    }

    onUpdate() {
        alert('updating');
    }

    onEmit() {
        this._elem.addEventListener('click', function(e) {
            if(e.target && e.target.dataset.action === "onSave") {
                this.onSave();
            } else if ( e.target && e.target.dataset.action === "onDone" ) {
                this.onDone();
            } else if ( e.target && e.target.dataset.action === "onRemove" ) {
                this.onRemove();
            } else if ( e.target && e.target.dataset.action === "onUpdate" ) {
                this.onUpdate();
            }
        });
    }
}