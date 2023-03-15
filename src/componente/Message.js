
const Message = ({msg,bgColor}) => {
    let styles={
        paddign:"1rem",
        marginBottom:"1rem",
        testAling:"center",
        color:"#c86adb",
        fontWeight:"bold",
        backgroundColor:bgColor,
    }
    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}
export default Message