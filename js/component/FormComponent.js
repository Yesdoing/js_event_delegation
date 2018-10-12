export default class FormComponent {
    constructor(elem) {
        this._elem = elem;
    }

    onAdd( fnAddTodo ) {
        const $input = document.querySelector("#todoInput");
        this._elem.addEventListener('submit', (e) => {
            e.preventDefault();
            fnAddTodo($input.value);
            $input.value = '';
        });
    }

}