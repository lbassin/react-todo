import * as type from '../constants/todo';

const initialState = {
    tasks: [
        { id: 1, text: 'Something', completed: true },
        { id: 2, text: 'Nothing', completed: false }
    ]
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case type.CREATE_TASK:
            const tasks = Object.assign([], state.tasks);
            action.payload.id = tasks.length + 1;
            tasks.push(action.payload);

            return Object.assign({}, state, { tasks });
        case type.UPDATE_TASK:
            const newTasks = Object.assign([], state.tasks).map(task => {
                if (task.id !== action.payload.id) {
                    return task;
                }

                return action.payload;
            })

            return Object.assign({}, state, { tasks: newTasks });
        default:
            return Object.assign({}, state);
    }
}

export default reducer;
