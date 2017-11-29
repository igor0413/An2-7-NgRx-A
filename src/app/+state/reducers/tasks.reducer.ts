import { TasksActionTypes, TasksActions } from './../actions/tasks.actions';
import { State, intitialState } from '../state/main-state';

import { Task } from './../../models/task';

export function tasksReducer( state = intitialState, action: TasksActions ): State {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case TasksActionTypes.GET_TASKS: {
      console.log('GET_TASKS action being handled!');
      const tasks = [...state.tasks.data];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.GET_TASKS_SUCCESS: {
      console.log('GET_TASKS_SUCCESS action being handled!');
      const tasks = [...<Array<Task>>action.payload];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.GET_TASKS_ERROR: {
      console.log('GET_TASKS_ERROR action being handled!');
      return createNewStateWhenError(state, action);
    }

    case TasksActionTypes.GET_TASK: {
      console.log('GET_TASK action being handled!');
      const tasks = [...state.tasks.data];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.GET_TASK_SUCCESS: {
      console.log('GET_TASK_SUCCESS action being handled!');

      const task = { ...<Task>action.payload };
      const tasks = [...state.tasks.data];
      const index = tasks.findIndex(t => t.id === task.id);

      tasks[index] = task;

      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: index,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.GET_TASK_ERROR: {
      console.log('GET_TASK_ERROR action being handled!');
      return createNewStateWhenError(state, action);
    }

    case TasksActionTypes.CREATE_TASK: {
      console.log('CREATE_TASK action being handled!');
      const tasks = [...state.tasks.data];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.CREATE_TASK_SUCCESS: {
      console.log('CREATE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const tasks = [...state.tasks.data];

      tasks.push(task);

      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.CREATE_TASK_ERROR: {
      console.log('CREATE_TASK_ERROR action being handled!');
      return createNewStateWhenError(state, action);
    }

    case TasksActionTypes.UPDATE_TASK: {
      console.log('UPDATE_TASK action being handled!');
      const tasks = [...state.tasks.data];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.UPDATE_TASK_SUCCESS: {
      console.log('UPDATE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const tasks = [...state.tasks.data];
      const index = tasks.findIndex(t => t.id === task.id);

      tasks[index] = task;

      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: index,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.UPDATE_TASK_ERROR: {
      console.log('UPDATE_TASK_ERROR action being handled!');
      return createNewStateWhenError(state, action);
    }

    case TasksActionTypes.DELETE_TASK: {
      console.log('DELETE_TASK action being handled!');
      const tasks = [...state.tasks.data];
      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: -1,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.DELETE_TASK_SUCCESS: {
      console.log('DELETE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const tasks = [...state.tasks.data];
      const index = tasks.findIndex(t => t.id === task.id);

      tasks.splice(index, 1);

      const newState = Object.assign({}, state, {
        tasks: {
          data: tasks,
          selected: index,
          error: null
        }
      });
      return newState;
    }

    case TasksActionTypes.DELETE_TASK_ERROR: {
      console.log('DELETE_TASK_ERROR action being handled!');
      return createNewStateWhenError(state, action);
    }

    default: {
      console.log('UNKNOWN_TASK action being handled!');
      return state;
    }
  }
}

// Helper-Functions
function createNewStateWhenError(state: State, action: TasksActions): State {
  const tasks = [...state.tasks.data];
  const newState = Object.assign({}, state, {
    tasks: {
      data: tasks,
      selected: -1,
      error: action.payload
    }
  });
  return newState;
}
