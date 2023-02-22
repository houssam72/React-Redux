const redux =require('redux')
const createStore=redux.createStore
const combineReducers= redux.combineReducers

const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()
const applyMiddleware=redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

const buyCake=()=>{
    return {
        type: BUY_CAKE,
        info:'First redux action'
    }
}

const buyIcecream=()=>{
    return {
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}

// (previousState,action)===> newSate

// const initialState={
//     numofCakes:10,
//     numbersOfIcecream:20
// }

const initialCakeState={
    numofCakes:10
}
const initialIceCreamState={
    numbersOfIcecream:20
}



const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default: return state
    }
}

const IcecreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numbersOfIcecream:state.numbersOfIcecream-1
        }
        default: return state
    }
}

//there is a probleme  the create store accpet just one reducer so we need to use combime rducers
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCeam:IcecreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))

console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log("Updated state",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();