import { 
    
} from '../actions';

const initialState = {
  
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        
        default:
            return state;
    }
}

export default reducer;