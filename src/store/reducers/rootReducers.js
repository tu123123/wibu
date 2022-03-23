
const data={
    user:[
        {
            id:0,
            name:"admin",
            pass:"123"
        }
    ]
    

}
const rootReducers=(state=data,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case "ADD_USER":
       
        return{
            ...state,user:[...state.user,action.payload]
        }
        default:
            return state
    }
   
}
export default rootReducers;