import { useEffect, useState } from "react";
import helpHTTP from "../helper/helpHttp";
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
    let api=helpHTTP();
    //let url = 'http://localhost:5000/users'
    let url="http://localhost:5000/users"

    useEffect(() =>{
        setLoading(true)
        api.get(url).then(response => {
            //console.log(response)
            if(!response.err){
                setDb(response)
                setError(null)
            }
            else{
                setDb(null)
                setError(response)
            }
            setLoading(false)
    })
    }, [])


    const [db, setDb] = useState([])
    const [datatoEdit,setDataToEdit]=useState(null)

    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)

    const createData=(data)=>{
        data.id=db.length;
        console.log("elemento de la data "+data)
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData=db.map(item=> item.id===data.id?data:item)
        setDb(newData)
    }
    const deleteData=(id)=>{
        console.log("elemento eliminar" +id)
        let eliminar=db.filter(item=>item.id!==id)
        setDb(eliminar)
    };

    return (
        <div>
            <h1>CRUD APPI</h1>

            {loading && <Loader/>}
            {error && <Message/>}      
            <CrudForm create={createData} update={updateData} datatoEdit={datatoEdit}setDataToEdit={setDataToEdit}/>
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
        </div>
    )
}

export default CrudApi