import {todo} from '../data/todo.js';
import {todoTemplate} from '../template/todoTemplate.js';

export default class ToDoComponent {
    constructor(elem) {
        this._elem = elem;
    }

    onSave(text) {
        const $todoList = document.querySelector('.todo-list');

        $todoList.innerHTML = '';
        todo.push({todo: text });
        todo.map(x => {
            $todoList.insertAdjacentHTML('afterbegin', todoTemplate(x));
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
        console.log('onEmit');
        this._elem.addEventListener('click', (e) => {
            const elemTarget = e.target;
            if ( elemTarget && elemTarget.dataset.action === "onDone" ) {
                this.onDone();
            } else if ( elemTarget && elemTarget.dataset.action === "onRemove" ) {
                this.onRemove();
            } else if ( elemTarget && elemTarget.dataset.action === "onUpdate" ) {
                this.onUpdate();
            }
        });
    }
}