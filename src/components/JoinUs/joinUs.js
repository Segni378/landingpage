import "./joinUsStyles.css"

const JoinUs = () => {
    return (
        <div className = "joinUs__container">
            <div className = "banner">
                <h3>Live A Sustainable Life</h3>
                <h2>Join Us Now</h2>
                <form>
                    <input type="text" placeholder = "Add you Email" /> 
                    <button type="submit">Submit</button>
                </form>

                <div className = "icons">
                    <p>Create</p>
                    <p>Innovate</p>
                    <p>Scale</p>
                </div>
            </div>
        </div>
    )
}


export default JoinUs