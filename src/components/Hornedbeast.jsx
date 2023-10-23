export default function Hornedbeast(props){
  return(
    <>
      <h2>{props.title}</h2>
      <img src={props.url} alt={props.alt} title={props.imgtitle}/>
      <p>{props.desc}</p>
    </>
  )
}