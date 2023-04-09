export default (state, action) =>{
    switch(action.type){
        case "ADD_BOOK_TO_SHELF":
            return{
                ...state,
                bookshelf : [action.payload, ...state.bookshelf]
            };
        
        case "REMOVE_BOOK_FROM_SHELF":
            return{
                ...state,
                bookshelf:state.bookshelf.filter(book=>book.id !== action.payload)
            };
        

        default:
            return state;
    }
}