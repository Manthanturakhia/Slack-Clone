import './App.css';
import React,{useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'
import {useStateValue} from './StateProvider'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  //const[user,setUser] = useState(null);
  const[{user},dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ?(
          <Login />
        ):
        ( 
          <>
          <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
             <Chat />
            </Route>
            <Route path="/">
              <h1> Welcome </h1>
            </Route>

          </Switch>


        {/* SideBar */}
        {/* React Router -> chat screen */}

        </div>
        </>
        )
        }
        
      </Router>
      </div>
  );
}

export default App;
