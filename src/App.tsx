import React, { useState, useEffect } from 'react';

const WelcomeAlert = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(() => {
      setAccepted(false);
    }, 1800000); // 30 minutes
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <div
      className="h-screen w-screen bg-gradient-to-br from-red-600 via-gray-400 to-red-600 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h1 className="text-3xl font-bold text-white mb-4">Bienvenido</h1>
        <p className="text-lg text-white mb-4">
          Acepta nuestras condiciones para continuar
        </p>
        <div className="flex justify-center mb-4">
          <button
            className="bg-white border-2 border-black rounded-lg py-2 px-4 mr-2"
            onClick={handleAccept}
          >
            <span className="text-black">Entrar</span>
          </button>
          <button
            className="bg-white border-2 border-black rounded-lg py-2 px-4"
            onClick={handleExit}
          >
            <span className="text-black">Salir</span>
          </button>
        </div>
      </div>
      <div className="hidden md:block w-1/3 h-screen absolute right-0 top-0">
        {/* <img src="image.jpg" alt="Image" className="w-full h-full object-cover" /> */}
        <div className="bg-blue-400 w-full h-full">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="md:hidden w-full h-1/3 mt-4">
        {/* <img src="image.jpg" alt="Image" className="w-full h-full object-cover" /> */}
        <div className="bg-blue-400 w-full h-full">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeAlert;