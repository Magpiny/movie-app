import React from 'react';
import './bootstrap.css';

const Header = (props) => {
    //styles
    const mystyle = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color: "white",
        backgroundColor: "grey",
        padding: "10px",
        fontFamily: "Arial",
        borderRadius:".5em",
        marginTop:"4%",
        cursor :"pointer"
      };
    return (
        <>
        <div className="d-flex align-items-center justify-content-center text-center bg-light-gray">
            <h1 style={ mystyle }> { props.text } </h1>
        </div>

        </>
    )
}

export default Header;
