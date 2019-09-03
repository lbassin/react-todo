const initialState = {
    tasks: []
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CREATE_TASK':
            const tasks = Object.assign([], state.tasks);
            tasks.push(action.payload);

            return Object.assign({}, state, {tasks});
        default:
            return Object.assign({}, state);
    }
}

export default reducer;
