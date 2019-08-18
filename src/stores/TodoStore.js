import { observable, action, computed } from 'mobx-react'

class TodoStore {
    @observable filter = 'all';
    @observable beforeEditCache = '';
    @observable idForTodo = 4;
    @observable todos = [
      {
        'id': 1,
        'title': 'Todo Mobx Item 1',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Todo Mobx Item 2',
        'completed': false,
        'editing': false
      },
      {
        'id': 3,
        'title': 'Todo Mobx Item 3',
        'completed': false,
        'editing': false
      },
    ];
}

const store = new TodoStore();
export default store;