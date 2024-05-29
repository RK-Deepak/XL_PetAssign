import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import paw from "../../assets/paw.png"

const Category = () => {
    return (
        <>
            <h1>Categories</h1>
            <Outlet/>
            <div className='category-links arrows'>
                <NavLink to="/category" className="cat-navlink ">
                    <img src={paw} alt='' style={{width:"25px", height:"25px"}}></img>
                    Pet Grooming</NavLink>
                <NavLink to="category/category1" className="cat-navlink "> <img src={paw} alt='' style={{width:"25px", height:"25px"}}></img>Pet Cleaning</NavLink>
                <NavLink to="category/category2" className="cat-navlink "> <img src={paw} alt='' style={{width:"25px", height:"25px"}}></img>Pet DayCare</NavLink>
                <NavLink to="category/category3" className="cat-navlink "> <img src={paw} alt='' style={{width:"25px", height:"25px"}}></img>Pet Training</NavLink>
            </div>
        </>
    );
}

export default Category;
