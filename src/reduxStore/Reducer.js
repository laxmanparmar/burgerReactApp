import * as actionType from './actions';

const InitialState = {
      ingredients: null,
        totalPrice: 4,
        ingError :false
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
        case actionType.INSERT_INGREDIANTS_LIST:
        return {
            ...state,
            ingredients : action.ingrediantList
        }
        case actionType.FETCH_INGREDIANTS_ERROR:
        return{
            ...state,
            ingError: action.error
        }
        default: return state
    }
}

export default reducer;