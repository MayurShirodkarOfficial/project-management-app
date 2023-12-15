import React from 'react';
import { useRef } from 'react';
import Input from './input';
import Modal from './Modal';

const NewProject = ({onAdd,onCancel}) => {
  const modal = useRef(); 
  const title = useRef();
  const description = useRef();
  const duedate = useRef();


  const handleSave = ()=>{
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;
    //validation
    if(enteredTitle.trim() === ''|| 
      enteredDescription.trim() ==='' ||
      enteredDueDate.trim() === ''){
        //show error modal
        modal.current.open();
        return;
      }
    //
    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      duedate:enteredDueDate
    });
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Oops ! looks like you forgot to add values</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'
          onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'
          onClick={handleSave}
          >
            Save 
            </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textArea />
        <Input type="date" ref={duedate} label="Due Date" />
      </div>
    </div>
    </>
  )
}

export default NewProject