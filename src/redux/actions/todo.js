
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

export const updateTask = (task) => {
    return {
        type: 'TASK_UPDATE',
        payload: task
    }
}
