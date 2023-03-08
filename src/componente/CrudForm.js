import { useEffect, useState } from "react"


const initialForm={
    id:null,
    name:'',
    lastname:''
}

const CrudForm = ({update, setDataToEdit,create, datatoEdit}) => {
    const[form,setForm]=useState(initialForm);
    useEffect(()=>{
        console.log("elementos " + datatoEdit)
        if(datatoEdit){
            setForm(datatoEdit)
        }
        else{
            setForm(initialForm)
        }
    },[datatoEdit])

    const handleChance=(e)=> {
       //console.log(e.target.name +""+e.target.value)
       setForm({
        ...form,
        [e.target.name]:e.target.value,
       })
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        if(!form.name || !form.lastname){
            alert('Datos Incompletos')
            return;
        }
        if(form.id===null){
            create(form)
        }
        else{
            update(form)
        }
        handleReset();
    }
    const handleReset=(e)=> {
        setForm(initialForm);
        setDataToEdit(null);
    }
    return(
        <div>
            <h3>{datatoEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder="Nombre" onChange={handleChance} value={form.name}/>
                <input type="text" name="lastname" placeholder="Apellido" onChange={handleChance} value={form.lastname}/>
                <input type="submit" value='Enviar'/>
                <input type= 'reset' value='Limpiar' onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm