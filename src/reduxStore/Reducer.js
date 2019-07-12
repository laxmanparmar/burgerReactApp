import * as actionType from './actions';

const InitialState = {
      ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

const price = {
        salad: 2.5,
        cheese: 1.5,
        meat: 3,
        bacon: 2
    };    

const reducer = (state=InitialState, action)=>
{
    switch(action.type)
    {
        case actionType.ADD_INGREDIANT :
        return{
              ...state,
              ingredients:
              {
                  ...state.ingredients,
                  [action.ingName]: state.ingredients[action.ingName] + 1
              },
              totalPrice : state.totalPrice + price[action.ingName]   
        }
        case actionType.REMOVE_INGREDIANT:
        return{
            ...state,
              ingredients:
              {
                  ...state.ingredients,
                  [action.ingName]: state.ingredients[action.ingName] -  1
              },
              totalPrice : state.totalPrice - price[action.ingName]    
        }
        default: return state
    }
}

export default reducer;