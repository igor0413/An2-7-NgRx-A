import { Action } from '@ngrx/store';

import { Task } from './../../models/task';

// Actions
// [Tasks] - namespace
export class TasksActionTypes {
  static readonly GET_TASKS =   '[Tasks] GET_TASKS';
  static readonly GET_TASK =    '[Tasks] GET_TASK';
  static readonly CREATE_TASK = '[Tasks] CREATE_TASK';
  static readonly UPDATE_TASK = '[Tasks] UPDATE_TASK';
  static readonly DELETE_TASK = '[Tasks] DELETE_TASK';
}

// Action Creators
export class GetTasks implements Action {
  readonly type = TasksActionTypes.GET_TASKS;

  constructor(public payload?: Task) { }
}

export class GetTask implements Action {
  readonly type = TasksActionTypes.GET_TASK;

  constructor(public payload: string | number) { }
}

export class CreateTask implements Action {
  readonly type = TasksActionTypes.CREATE_TASK;

  constructor(public payload: Task) { }
}

export class UpdateTask implements Action {
  readonly type = TasksActionTypes.UPDATE_TASK;

  constructor(public payload: Task) { }
}

export class DeleteTask implements Action {
  readonly type = TasksActionTypes.DELETE_TASK;

  constructor(public payload: Task) { }
}

export type TasksActions =
  GetTasks |
  GetTask |
  CreateTask |
  UpdateTask |
  DeleteTask;