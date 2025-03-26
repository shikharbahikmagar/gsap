import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {closeModal } from '../redux/ModalSlice.jsx';

const customStyles = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: 'transparent',  // Make modal content background transparent    // Apply blur to background behind the modal
      borderRadius: '10px', 
      borderColor: '#1f5f5b',            // Add border radius
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',  // Add shadow to modal content
      zIndex: 9999,
      width: '500px',                     // Make sure the modal content is on top
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent overlay background
      zIndex: 9998,  // Ensure the overlay is behind the modal content
      backdropFilter: 'blur(10px)',  // Apply blur effect to background behind the overlay
    }
  };
function ContactModal() {

    const dispatch = useDispatch();

    
    const isOpen = useSelector((state) => state.isOpen);
    

      if (!isOpen) return null; 
    
  return (
    
    <Modal
       isOpen={isOpen}
       onRequestClose={() =>
       dispatch(closeModal())}
       style={customStyles}
       contentLabel="Example Modal"
       appElement={document.getElementById('root')}
       ariaHideApp={false}
       >
       <div className="bg-transparent rounded-xl w-full max-w-full mx-auto">

       <div className='flex items-center justify-between p-4'>
        <h2 className="text-2xl font-bold text-white mb-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
        </h2>


        <i onClick={() => {dispatch(closeModal())}} className='ri-close-circle-fill cursor-pointer absolute top-10 right-10 text-teal-500 text-3xl hover:text-teal-800 hover:duration-1000'></i>

    </div>
            <form className="space-y-6 mt-6 w-full">
             <div className="space-y-4">
                <div>
                  
                   <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Full Name</label>
                   <input
                      id="name"
                      type="text"
                      placeholder="your name"
                      className="w-full p-3 border border-teal-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-500 transition-all bg-transparent focus:text-white placeholder:text-slate-400 text-white"
                      />
                </div>
                <div>
                   <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                   <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-3 border border-teal-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-500 transition-all bg-transparent focus:text-white placeholder:text-slate-400 text-white"
                      />
                </div>
                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Your Message</label>
                   <textarea
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full p-3 border border-teal-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-500 transition-all bg-transparent focus:text-white placeholder:text-slate-400 text-white"
                      ></textarea>
                </div>
             </div>
             <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg shadow transition-all duration-500 flex items-center justify-center"
                >
             Submit Message
             </button>
          </form>
       </div>
    </Modal>

  )
}

export default ContactModal
