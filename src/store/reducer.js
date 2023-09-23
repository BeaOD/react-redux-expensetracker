const initialState = {
    allthedata:[
        { 
            itemname: '',
            itemp: '',
            date: '',
            categories:'',
            id:''
            
        }
    ]
}

const formReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_FORM':
            const addsAform ={
            itemname:action.payload.itemname,
            itemp:action.payload.itemp,
            date:action.payload.date,
            categories:action.payload.categories,
            }
            return {...state, allthedata:[...state.allthedata,addsAform]}
        
        case 'EDIT_FORM':
            const editsAform =state.allthedata.map(form=>{
                if(form.id === action.form_id){
                    return{...form, ...action.updatedForm}
                }
                else{
                    return form;
                }
                
            })
            return{...state, allthedata:editsAform}
        
        case 'DELETE_FORM':
            const filteredForms = state.allthedata.filter(form => form.id !== action.payload)
            return{...state, allthedata:filteredForms}

        default:
             return state; 
    }
}

export default formReducer