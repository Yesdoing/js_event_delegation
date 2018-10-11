export default class ToDoComponent {
    constructor(elem) {
        this._elem = elem;
    }

    onSave() {
        const $input = document.querySelector('.addTodo input');
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
}