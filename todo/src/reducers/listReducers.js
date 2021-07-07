export const ADD_LIST = "ADD_LIST";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE = "TOGGLE";

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const listReducers = (state, action) => {
    switch (action.type) {
        case ADD_LIST:

            return [...state, { item: action.payload, completed: false, id: Date.now() }];
        
        case TOGGLE:
            console.log("Toggle", action.payload);
       return     state.map((item) => {
                if (item.id === action.payload) {
                    console.log("success");
                    return {
                        ...item, completed: !item.completed
                    };
                }
                else {
                    console.log("state", state);
                    return item;
                }
            })
        case CLEAR_COMPLETED:
            console.log("clear");
        return  state.filter(item => {
          return    !item.completed;
            })
        //   return state;

        default:
            return state;
    }

}