

function DieComp(props) {
  const {id,value,isHeld}=props.obj;
  return (
    <button aria-label={`Die with value ${value},${isHeld?"hels":"not held"}`} id={isHeld?"button-on":""} className="Die-button" onClick={()=>{props.hold(id)}}>{value}</button>
  )
}

export default DieComp
