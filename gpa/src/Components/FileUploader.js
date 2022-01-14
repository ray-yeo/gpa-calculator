import {useState} from 'react';
import './FileUploader.css';
import Button from "./Button";

const fileUploader = () => {
    const [file,setFile] = useState(null)

    const onInputChange = (props) => {
        console.log(props.target.files)
        setFile(props.target.files[0])
    }

    const onSubmit = (props) => {
        props.preventDefault();

    }

    return(
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your Transcript </label>
                <input type="file"
                       onChange ={onInputChange}
                       className="form-control"
                       multiple=""/>
            </div>

            <Button>Submit</Button>
        </form>
    )
}

export default fileUploader