import React from 'react';
import Layout from './layout/Layout';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout header={<Header />} content={<Body />} sidebar={<Sidebar />} />
    </div>
  );
}

export default App;
