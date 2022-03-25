import logo from './logo.svg';
import './App.css';
import Main from './component/home/main';
import Nav from './component/nav';
import Detail from './component/Detail/main';
import Login from './component/login/loginForm';
import { Switch,Route ,BrowserRouter} from 'react-router-dom';
import Social from './component/social';
import Dangnhap from './component/dangnhap';
function App() {
  
  

  return (
    <BrowserRouter>
    <div className='App' >
      <Nav />
      <Switch>
      <Route path='/' exact><Main/></Route>
        <Route path='/wibu' exact><Main/></Route>
        <Route path='/dangky' exact><Login/></Route>
        <Route path='/detail/:id'> <Detail/></Route>
        <Route path='/social'><Social/></Route>
        <Route path='/dangnhap'><Dangnhap/></Route>
      </Switch>
     
     
    </div>

    </BrowserRouter>

  );
}

export default App;
