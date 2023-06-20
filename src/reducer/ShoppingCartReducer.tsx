// @ts-ignore
export const ShoppingCartReducer = (state, action) => {
    switch (action.type) {
        case 'increaseQuantity':
            // @ts-ignore
            if (state.find(item => item.id === action.payload) == null) {
                return [...state, { id: action.payload, quantity: 1 }]
            } else {
                // @ts-ignore
                return state.map( item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'decreaseQuantity':
            // @ts-ignore
            if (state.find(item => item.id === action.payload)?.quantity === 1) {
                // @ts-ignore
                return state.filter(item => item.id !== action.payload)
            } else {
                // @ts-ignore
                return state.map( item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'removeItem':
            // @ts-ignore
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}