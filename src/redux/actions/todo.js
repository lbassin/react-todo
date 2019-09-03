import * as type from '../constants/todo';

export const createTask = (task) => {
    return {
        type: type.CREATE_TASK,
        payload: task
    }
}

export const fetchTasks = () => {
    return {
        type: type.FETCH_ALL,
        payload: {}
    }
}

export const updateTask = (task) => {
    return {
        type: type.UPDATE_TASK,
        payload: task
    }
}
