export const ShoppingCartReducer = (state, action) => {
    switch (action.type) {
        case 'increaseQuantity':
            if (state.find(item => item.id === action.payload) == null) {
                return [...state, { id: action.payload, quantity: 1 }]
            } else {
                return state.map( item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'decreaseQuantity':
            if (state.find(item => item.id === action.payload)?.quantity === 1) {
                return state.filter(item => item.id !== action.payload)
            } else {
                return state.map( item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'removeItem':
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}