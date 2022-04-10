import React from 'react'

const Attribution = ({ data }) => {
  return (
    <footer className="text-slate-500 text-sm md:text-base text-center px-3">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" className='text-blue-button-primary hover:text-blue-button-hover hover:underline' target="_blank" rel="noreferrer">
        {" "}
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/arrizkyhp" className='text-blue-button-primary hover:text-blue-button-hover hover:underline' target="_blank" rel="noreferrer">
        {" "}
        Arrizky Hasya Pratama.{" "}
      </a>
  </footer>
  )
}

export default Attribution