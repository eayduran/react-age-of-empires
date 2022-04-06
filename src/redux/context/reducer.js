export default function(state, action){
    switch(action.type){
        case 'PASS_UNIT':
            const {name} = action.payload;
            const newUnit = { ...state.selectedUnit, name}
            return{...state, selectedUnit: newUnit} 
        
        default:
            return state; 
    } 
}