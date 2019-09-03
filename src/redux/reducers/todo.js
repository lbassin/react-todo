import * as type from '../constants/todo';

const initialState = {
    tasks: [
        { id: 1, text: 'Something', completed: true },
        { id: 2, text: 'Nothing', completed: false },
        { id: 3, text: 'Ouii', completed: false }
    ]
}

const reducer = function (state = initialState, action) {
    let tasks;

    switch (action.type) {
        case type.CREATE_TASK:
            tasks = Object.assign([], state.tasks);
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
        case type.DELETE_TASK:
            console.log(state.tasks);
            tasks = [...state.tasks].filter(task => task.id !== action.payload.id);
            console.log(tasks);

            return Object.assign({}, state, { tasks })
        default:
            return Object.assign({}, state);
    }
}

export default reducer;
