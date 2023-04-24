import { useState } from "react";

export default function Form() {
    const [Input, setInput] = useState(
        {
            names: '',
            desc: ''
        }
    )
    const handleChange = (e) => {
        setInput({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    const DisplayData = (e) => {
      alert("kamal")
      e.preventDefault()
        }
return (
    <form action="" onSubmit={DisplayData}>
        <div>
            <label for="text1">Name</label>
            <input type="text" name="names" id="text1" value={Input.names} onChange={handleChange} />
        </div>
        <hr />
        <div>
            <label for="text2">Description</label>
            <input type="text" id="text2" name="desc" value={Input.desc} onChange={handleChange} />
        </div>
        <hr />
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
)
}