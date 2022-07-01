import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, SignInPage } from '../pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="SignIn" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
