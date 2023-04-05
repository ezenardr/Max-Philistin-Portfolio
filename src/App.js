import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Error from './pages/Error';

const App = () => {
    return (
        <Routes>
            <Route path="/Max-Philistin-Portfolio" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default App;
