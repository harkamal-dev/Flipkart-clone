export const initialState = {
    basket : []
};


const reducer = (state,action) =>{
    console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket : [...state.basket,action.item]
            }

        case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (item) => item.id === action.id
                );
                let newBasket = [...state.basket];

                newBasket.splice(index,1);

                // This didn't work in my case (the else case is working always)
                // if(index >=0){
                //     newBasket.splice(index,1);
                // }
                // else{
                //     console.warn("can't find the product that you are trying to remove")
                // }

                return {
                    ...state,
                    basket:newBasket
                }

                // This will remove the whole items of that id

                // return {
                //     ...state,
                //     basket: state.basket.filter(item => item.id !== action.id)
                // }

            

         default:
            return state;
    }
}

export default reducer;