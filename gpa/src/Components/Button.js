const Button = (props) => {

    return(
        <div>
            <button
                onClick={props.onClick}
                style={{backgroundColor : props.color}}
                id='button'
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button