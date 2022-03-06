import React from 'react'
import {useContext, useEffect, useRef } from 'react';
import ModalContext from 'context/modal/ModalContext';

const Modal = (props) => {
    const ref = useRef()
    var { modal, dispatch } = useContext(ModalContext)

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if(modal && ref.current && !ref.current.contains(e.target)) {
            dispatch({
                type: 'SWITCH_MODAL'
              })
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [modal])


  return (
      <>
        <div className={`bg-black w-full h-screen fixed top-0 z-10 transition-opacity delay-200  ${modal ? "inline-block opacity-30" : "h-0 opacity-0"}`}></div>
        <div className={`flex-col md:flex-row gap-x-6 z-10 md:text-white absolute  bg-slate-600 md:bg-white top-[100px] md:top-0 inset-x-0 mx-5 rounded-md px-8 py-8  ${modal ? "flex" : "hidden"}`} ref={ref}>
            <h1 className={`text-black`}>HELLO THIS IS MODAL XD</h1>
        </div>
    </>
    )
}

export default Modal