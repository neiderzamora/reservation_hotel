import React, { useState } from 'react';

const ModalHabit = ({ onClose, children }) => {

/*   const [disponible, setDisponible] = useState(false);

  const handleClick = () => {
    setDisponible(!disponible);
  }; */

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-end">
        
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Cerrar
          </button>
          
        </div>
        <div>{children}</div>
        
        
        
      </div>
    </div>
  );
  
};

export default ModalHabit;
