
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [intrest ,setintrest] = useState(0)
  const [principal ,setPrincipal] = useState(0)
  const [rate ,setrate] = useState(0)
  const [year ,setyear] = useState(0)
  const [isprincipal , setisprincipal] = useState
  (true)
  const [israte , setisrate] = useState
  (true)
  const [isyear , setisyear] = useState
  (true)

  const getValidate = (e)=>{
    const {name,value}=e.target
    // console.log(name,value);
    if(!!value.match(/^[0-9]*.?[0-9]+$/))
    {
      if(name==='principal')
      {      
        setPrincipal(value)
        setisprincipal(true)
      }
      else if(name == 'rate')
      {
        setrate(value)
        setisrate(true)
      }
      else{
        setyear(value)
        setisyear(true)
      }
    }
    else{
      if(name==='principal')
      {
        setPrincipal(value)
        setisprincipal(false)
      }
      else if(name == 'rate')
      {
        setrate(value)
        setisrate(false)
      }
      else{
        setyear(value)
        setisyear(false)
      }
    }
    
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principal || !rate || !year)
    {
      alert('please fill the form')
    }
    else{
      setintrest(principal*rate*year/100)
    }
  }

  const handleReset = (e)=>{
    setintrest(0)
    setPrincipal(0)
    setrate(0)
    setyear(0)
    setisprincipal(true)
    setisrate(true)
    setisyear(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      
      <div className='bg-light p-5 rounded'>
        <h1>simple intrest App</h1>
        <p>calculate simple intrest</p>
        
        <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-3'>
          <h1>₹{' '} {intrest}</h1>
          <p>total simple intrest</p>
        </div>

        <form onSubmit={handleCalculate} className='mt-4'>
          <div className='mb-3'>
            <TextField name='principal' value={principal || ""} onChange={(e)=>getValidate(e)}  className='w-100 ' id="outlined-basic" label="Principal Amount" variant="outlined" />
          </div>
            { !isprincipal && 
            <div>
            <p className='text-danger fw-bolder'>*invalid input</p>
            </div>
            }
          

          <div className='mb-3'>
            <TextField onChange={(e)=>getValidate(e)} value={rate || ""} className='w-100 ' id="outlined-basic" name='rate' label="Rate of Intrest (p.a) %" variant="outlined" />
            </div>
            { !israte && 
            <div>
            <p className='text-danger fw-bolder'>*invalid input</p>
            </div>
            }
          

          <div className='mb-3'>
            <TextField className='w-100 ' onChange={(e)=>getValidate(e)} name='year' value={year || ""} id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          { !isyear && 
            <div>
            <p className='text-danger fw-bolder'>*invalid input</p>
            </div>
            }

          <Stack className='mt-5' direction="row" spacing={2}>
          <Button type='submit' disabled={isprincipal && israte && isyear?false:true} style ={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} style ={{width:'200px',height:'50px'}}  variant="outlined">Reset</Button>
          </Stack>
        </form>
      
      </div>
    
    </div>
  );
}

export default App;
