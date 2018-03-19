import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TasksState } from './tasks.state';
import { getRouterState } from './../router';
import { Task } from './../../../tasks/models/task.model';


export const getTasksState = createFeatureSelector<TasksState>('tasks');

export const getTasksData = createSelector(getTasksState, (state: TasksState) => state.data);
export const getTasksError = createSelector(getTasksState, (state: TasksState) => state.error);
export const getSelectedTask = createSelector(getTasksState, (state: TasksState) => state.selectedTask);
export const getTasksLoaded = createSelector(getTasksState, (state: TasksState) => state.loaded);

export const getSelectedTaskByUrl = createSelector(
    getTasksData,
    getRouterState,
    (tasks, router): Task => {
        const taskID = router.state.params.taskID;
        if (taskID) {
            return tasks.find(task => task.id === +taskID);
        } else {
            return new Task(null, '', null, null);
        }
});
