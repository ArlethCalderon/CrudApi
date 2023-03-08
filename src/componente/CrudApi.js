const initialDb= [
    {
        id:0,
        name:'Rosa',
        lastname:'Gonzalez'
    },
    {
        id:1,
        name:'Michael',
        lastname:'Perez'
    },
]



const CrudApi = () => {
    const [db, setDb] = useState()
    const [datatoEdit,setDataToEdit]=useState(null)
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
            <h1>CRUD APP</h1>
            <CrudForm create={createData} update={updateData} datatoEdit={datatoEdit}setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
        </div>
    )
}

export default CrudApi