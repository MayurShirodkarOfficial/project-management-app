import React from 'react';
import { forwardRef } from 'react';
const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 test-stone-600 focus:outline-none focus:border-stone-600';
const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textArea ? <textarea ref ={ref} className={classes} {...props} /> : <input ref ={ref} className={classes} {...props} />}
    </p>
  )
});

export default Input;