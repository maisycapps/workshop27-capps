import { useState } from "react";

const SignUpForm = ({token, setToken}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()

        {e.target.value === "" && setError(error)}

        try {

            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            })
            const result = await response.json();

            {result.success === true &&
            setToken(result.token)
            setSuccessMessage(result.message)}

        } catch (error) {
          setError(error.message)
        }
    }
    return ( 
    <>
        <h2>Sign Up</h2> 

        { !username && <p>Please enter valid username credentials</p> || !password && <p>Please enter valid password credentials</p> }
        { successMessage && <p>{successMessage}</p> }

        <form onSubmit={handleSubmit}>
            <label>
                Username: <input required minLength={8} type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </label><br />
            <label>
                Password: <input required minLength={8} type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </label><br />
            <button type="submit" value="Submit">Submit</button>
        </form>
    </>
    );
}
 
export default SignUpForm;