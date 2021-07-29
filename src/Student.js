function Student(props) {
    console.log(props.name)
    return (
        <div className="shelby" >
        {/* style={{fontsize:"20px",border: "50px solidblack" ,textalign:" centre", backgroundcolor: "darkblue ",borderradius: "80px", fontstyle: "italic"}} */}
            <h1>hello {props.name} </h1>
            
        </div>
    )
}
export default Student;