import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Hero.css'

export const Hero = () => {
  const [type, setType] = useState('buy')  

  const handleChange = (e) => {
    setType(e.target.value)
  }

  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find the perfect place</h1>
            <p className='search-text'>Search the largest selection of luxury high-rise apartments, multi-family home, and luxury homes</p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Enter Keyword..'/>
                </div>
                <div className='radio'>
                    <input value='buy' type='radio' checked={type === 'buy'} onChange={handleChange}/>
                    <label>Buy</label>
                    <input value='rent' type='radio' checked={type === 'rent'} onChange={handleChange}/>
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero