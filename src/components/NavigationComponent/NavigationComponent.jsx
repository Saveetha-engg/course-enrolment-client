import './NavigationComponent.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import EnrollmentComponent from '../routes/EnrollmentComponent/EnrollmentComponent';

const NavigationComponent = () => {
    return (
        <Router>
            <div className="App">
                <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                    <div className='container'> 
                        <Link className='navbar-brand' to={'/'}>
                            Saveetha | MERN
                        </Link>
                        <div className='collapse navbar-collapse' id='navbarTogglerDemo2'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/enroll'}>Enroll</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>

            
                    <div className='auth-wrapper'>
                        <div className='auth-inner'>
                            <Routes>
                                <Route exact path='/' element={<EnrollmentComponent/>}/>
                                <Route path='/enroll' element={<EnrollmentComponent/>}/>
                            </Routes>
                        </div>
                    </div>
                
            </div>
        </Router>
    );
}

export default NavigationComponent;