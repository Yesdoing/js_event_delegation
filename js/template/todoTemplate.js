export default TodoTemplate = (text) => {
    return `
        <div class="todo">
            <div class="todo-text">
                <span>${text}</span>
            </div>
            <div class="todo-state">
                <div class="done">done</div>
                <div class="remove">remove</div>
                <div class="update">update</div>
            </div>
        </div>
    `;
}