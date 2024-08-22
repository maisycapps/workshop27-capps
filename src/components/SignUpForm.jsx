import { useState } from "react";

const SignUpForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("handleSubmit!")
    }

    return ( 
    <>
        <h2>"Sign Up"</h2> 

        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e) => { setUsername(e.target.value)}}/>
            </label><br />
            <label>
                Password: <input value={password} onChange={(e) => { setPassword(e.target.value)}}/>
            </label><br />
            <button type="submit" value="Submit">Submit</button>
        </form>
    </>
    );
}
 
export default SignUpForm;