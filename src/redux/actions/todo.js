
export const createTask = (task) => {
    return {
        type: 'CREATE_TASK',
        payload: task
    }
}

export const fetchTasks = () => {
    return {
        type: 'FETCH_TASKS',
        payload: {}
    }
}
