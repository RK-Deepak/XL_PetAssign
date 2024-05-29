import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import vector from "./assets/Vector 1.png"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Home1 from './components/Home/Home1.jsx';
import Home2 from './components/Home/Home2.jsx';
import Home3 from './components/Home/Home3.jsx';
import Home4 from './components/Home/Home4.jsx';
import Category from './pages/Category/Category.jsx';
import Category1 from './components/Category/Category1.jsx';
import Category2 from './components/Category/Category2.jsx';
import Category3 from './components/Category/Category3.jsx';
import Category4 from './components/Category/Category4.jsx';


function App() {
    return (
        <>
            <Header />
            <div className="App">
               <img src={vector} alt='' className='vector-img'/>

                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route index element={<Home1 />} />
                        <Route path='homepage1' element={<Home2 />} />
                        <Route path='homepage2' element={<Home3 />} />
                        <Route path='homepage3' element={<Home4 />} />
                    </Route>

                    <Route path='/category' element={<Category/>}>
                        <Route index element={<Category1/>} />
                        <Route path='category/category1' element={<Category2/>} />
                        <Route path='category/category2' element={<Category3/>} />
                        <Route path='category/category3' element={<Category4/>} />
                    </Route>
                </Routes>

            </div>
        </>
    );
}

export default App;
