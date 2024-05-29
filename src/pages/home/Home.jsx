import React, { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    function handleNavigationForward() {
        if (currentPage <= 2) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            navigate(`/homepage${newPage}`);
        } else {
            setCurrentPage(0);
            navigate("/");
        }
    }

    function handleNavigationBackward() {
        let newPage;
        if (currentPage >= 2) {
            newPage = currentPage - 1;
        } else if (currentPage === 1) {
            newPage = 0;
            setCurrentPage(newPage);
            navigate("/");
            return;
        } else {
            newPage = 3;
        }
        setCurrentPage(newPage);
        navigate(`/homepage${newPage}`);
    }

    return (
        <>
            
            <Outlet />
           <div className='arrows'>
            <MdArrowLeft onClick={handleNavigationBackward} className='arrowRight' />
                <MdArrowRight onClick={handleNavigationForward} className='arrowBack' />
                </div>
          
        </>
    );
}

export default Home;
