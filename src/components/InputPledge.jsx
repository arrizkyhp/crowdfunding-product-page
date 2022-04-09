import PropTypes from 'prop-types';
import { useState } from 'react'
 
const InputPledge = (props) => {
    let [value, setValue] = useState("")
    const onChange = (e) => {
        if (props.onChange) props.onChange(e);
    }

    const onBlur = () => {
        if (props.onBlur) props.onBlur(props.pledge)
    }

  return (
    <input 
        type="number" 
        placeholder={props.pledge} 
        className='border text-black font-bold outline-2 outline-blue-button-primary border-slate-300 text-base md:text-lg py-3 pr-5 pl-10 rounded-full w-[110px] md:w-[130px]' 
        value={props.valueInput} 
        onChange={onChange} 
        onBlur={onBlur}
        required
    />
  )
}

InputPledge.propTypes = {
    pledge: PropTypes.number
}

export default InputPledge