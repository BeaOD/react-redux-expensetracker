export const addActionForm =(form)=>{
    return{
        type:'ADD_FORM',
        payload: form
    }
}
export const editActionForm =(form_id,updatedForm)=>{
    return{
        type:'EDIT_FORM',
        form_id:form_id,
        updatedForm: updatedForm
    }
}
export const deleteActionForm =(form_id)=>{
    return{
        type:'DELETE_FORM',
        payload: form_id
    }
}