function Message({darkMode, changeMode}) {
    return (
        <div className="message-section" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgba(255, 255, 79, 0.712)"}}>
            <h2 style={{ color: darkMode ? "white" : "black"}}>DROP A MESSAGE</h2>
            <div id="message" className="message">
                <form>
                    <div>
                        <h5 style={{ color: darkMode ? "white" : "black"}}>Name</h5>
                        <input type="text"></input>
                    </div>
                    <div>
                        <h5 style={{ color: darkMode ? "white" : "black"}}>E-mail</h5>
                        <input type="text"></input>
                    </div>
                    <div>
                        <h5 style={{ color: darkMode ? "white" : "black"}}>Short Message</h5>
                        <input type="text"></input>
                    </div>
                    <div>
                        <h5 style={{ color: darkMode ? "white" : "black"}}>‎ </h5>
                        <input type="submit" value="Send"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Message;