import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Home = withRouter(({history}) => {
	//const [values, setValues] = useState({});


    //current location path by changing the color
    const isActive = (history, path) => {
        // let history = useHistory()
        if (history.location.pathname === path)
          return { color: '#962a71'}
        else
          return { color: '#962a71' }
    }


    return (
        <div className="colored-section">
            <div className="intro">

                {/*<h2>AI-Driven Online Learning Ecosystems | Built on Open edX.</h2>*/}
                <div 
                  style={{
                    height: '100vh', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}
                >
                    <Link to="/classroom/signup/">
                        <button 
                            className="ui button"
                            color="primary" 
                            style={isActive(history, "classroom/signup/")}>START LEARNING ->Here </button>
                    </Link>

                </div>
            </div>
        </div>
    );
})

export default Home;