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
        let option = {
            body: data,
            headers:{"content-type": "application/json"},
        };
        data.id=Date.now()
        api.post(url,option).then((resp)=>{
            console.log(resp)
            if(!resp.err){
                setDb([...db,resp])
            }
            else{
                setError(resp);
            }
        });
        
    };
    const updateData=(data)=>{
        let endpoint= `${url}/${data.id}`
        let option = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        api.put(endpoint, option).then((resp) => {
            console.log(resp);
            if(!resp.err) {
                let newData = db.map((item) => (item.id === data.id ? data : item));
                setDb(newData);
            }
            else {
                setError(resp);
            }
        });
    };
    const deleteData=(id)=>{
        let isDelete = window.confirm(
            `¿Estas seguro de eliminar el registro con el id ${id}?`
        );
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let option = {
                headers: { "content-type": "application/json"},
            };
            api.del(endpoint,option).then((resp)=>{
                console.log(resp);
                if(!resp.err){
                    let eliminar=db.filter((item)=>item.id !==id);
                    setDb(eliminar);
                } else {
                    setError(resp);
                }
            });
        }
    };

    return (
        <div>
            <h1>CRUD APPI</h1>

            {loading && <Loader/>}
            <CrudForm create={createData} update={updateData} datatoEdit={datatoEdit}setDataToEdit={setDataToEdit}/>
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#fff"/>}      
        </div>
    )
}

export default CrudApi