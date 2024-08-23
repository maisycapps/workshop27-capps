import { useState } from "react";

const Authenticate = ({token, setToken}) => {

    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [data, setData] = useState(null)
    console.log(successMessage)

    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const result = await response.json()
            setData(result.data)
            console.log(result)

            setSuccessMessage(result.message)
           
        } catch (error) {

            setError("hey terry")
        }

    }

    return (
    <>
        <h2>Authenticate</h2>

        {data && (
            <><br />
                <span><b>Username: </b>{data.username}</span><br />
                <span><b>Iat: </b>{data.iat}</span><br />
            </>
        )}
        
        {successMessage === "jwt malformed" ? <p>This is a problem</p> : <p>{successMessage}</p>}

        <button onClick={handleClick}>Authenticate Token</button>
    </>
    );
}
 
export default Authenticate;