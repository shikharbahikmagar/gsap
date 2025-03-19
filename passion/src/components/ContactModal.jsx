import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {closeModal } from '../redux/ModalSlice.jsx';

const customStyles = {
  content: {
    position: 'fixed',
    zIndex: 9999,
    top: '50%',
    backdropFilter: 'blur(10px)',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ContactModal() {

    const dispatch = useDispatch();

    
    const isOpen = useSelector((state) => state.isOpen);
    
    console.log(isOpen);
    
  

    //   if (!isOpen) return null; 
    
  return (
    <div>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => dispatch(closeModal())}
              style={customStyles}
              contentLabel="Example Modal"
              appElement={document.getElementById('root')}
              ariaHideApp={false}
            >
       <div className="backdrop-blur-lg p-6 rounded-lg z-9999 w-full max-w-md">
              <h2 className="text-xl font-semibold text-teal-500 mb-4">Hello</h2>
              <button
                onClick={() => dispatch(closeModal())}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 mb-4"
              >
                Close
              </button>
              <div className="text-sm mb-4">I am a modal</div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full p-2 border border-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-700"
                  >
                    Tab Navigation
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-700"
                  >
                    Stays
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-700"
                  >
                    Inside
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-700"
                  >
                    The Modal
                  </button>
                </div>
              </form>
            </div>
            </Modal>
    </div>
  )
}

export default ContactModal
