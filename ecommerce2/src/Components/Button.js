import './Button.css'

const Button = (props) => {
   
    return(
        <div>
             <input className={props.className} type= 'button' value={props.value} ></input>
        
        </div>
       
    )
}

export default Button