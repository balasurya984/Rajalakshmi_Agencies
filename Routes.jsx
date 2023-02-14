import { Router, Scene } from 'react-native-router-flux';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';


const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "login" component = {Login}  initial = {true} />
          <Scene key = "signup" component = {Signup}  />
       </Scene>
    </Router>
 )
 export default Routes;