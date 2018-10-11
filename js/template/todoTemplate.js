export const todoTemplate = ({todo}) => {
    return `
    <div class="todo">
        <div class="todo-text">
            <span>${todo}</span>
        </div>
        <div class="todo-state">
            <div class="todo-button" data-action="onDone">done</div>
            <div class="todo-button" data-action="onRemove">remove</div>
            <div class="todo-button" data-action="onUpdate">update</div>
        </div>
    </div>
    `;
};