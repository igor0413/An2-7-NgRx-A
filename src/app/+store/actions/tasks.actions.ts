import { Action } from '@ngrx/store';

import { Task } from './../../models/task';

// Actions
// [Tasks] - namespace
export class TasksActionTypes {
  static readonly GET_TASKS           = '[Tasks] GET_TASKS';
  static readonly GET_TASKS_SUCCESS   = '[Tasks] GET_TASKS_SUCCESS';
  static readonly GET_TASKS_ERROR     = '[Tasks] GET_TASKS_ERROR';
  static readonly GET_TASK            = '[Tasks] GET_TASK';
  static readonly GET_TASK_SUCCESS    = '[Tasks] GET_TASK_SUCCESS';
  static readonly GET_TASK_ERROR      = '[Tasks] GET_TASK_ERROR';
  static readonly CREATE_TASK         = '[Tasks] CREATE_TASK';
  static readonly UPDATE_TASK         = '[Tasks] UPDATE_TASK';
  static readonly UPDATE_TASK_SUCCESS = '[Tasks] UPDATE_TASK_SUCCESS';
  static readonly UPDATE_TASK_ERROR   = '[Tasks] UPDATE_TASK_ERROR';
  static readonly DELETE_TASK         = '[Tasks] DELETE_TASK';
  static readonly DONE_TASK           = '[Tasks] DONE_TASK';
}

// Action Creators
export class GetTasks implements Action {
  readonly type = TasksActionTypes.GET_TASKS;
  constructor(public payload?: Task) { }
}

export class GetTasksSuccess implements Action {
  readonly type = TasksActionTypes.GET_TASKS_SUCCESS;
  constructor(public payload: Task[]) { }
}

export class GetTasksError implements Action {
  readonly type = TasksActionTypes.GET_TASKS_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetTask implements Action {
  readonly type = TasksActionTypes.GET_TASK;
  constructor(public payload: number) { }
}

export class GetTaskSuccess implements Action {
  readonly type = TasksActionTypes.GET_TASK_SUCCESS;
  constructor(public payload: Task) { }
}

export class GetTaskError implements Action {
  readonly type = TasksActionTypes.GET_TASK_ERROR;
  constructor(public payload: Error | string) { }
}

export class CreateTask implements Action {
  readonly type = TasksActionTypes.CREATE_TASK;
  constructor(public payload: Task) { }
}

export class UpdateTask implements Action {
  readonly type = TasksActionTypes.UPDATE_TASK;
  constructor(public payload: Task) { }
}

export class UpdateTaskSuccess implements Action {
  readonly type = TasksActionTypes.UPDATE_TASK_SUCCESS;
  constructor(public payload: Task) { }
}

export class UpdateTaskError implements Action {
  readonly type = TasksActionTypes.UPDATE_TASK_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteTask implements Action {
  readonly type = TasksActionTypes.DELETE_TASK;
  constructor(public payload: Task) { }
}

export class DoneTask implements Action {
  readonly type = TasksActionTypes.DONE_TASK;
  constructor(public payload: Task) { }
}

export type TasksActions =
  GetTasks |
  GetTasksSuccess |
  GetTasksError |
  GetTask |
  GetTaskSuccess |
  GetTaskError |
  CreateTask |
  UpdateTask |
  UpdateTaskSuccess |
  UpdateTaskError |
  DeleteTask |
  DoneTask;
