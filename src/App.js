import React from 'react';
import './App.css';
import Layout from './components/Layout'
import DisplayPage from './components/DisplayPage'

function App() {
  return (
    <div className="App">
      <Layout>
        <DisplayPage />
      </Layout>
    </div>
  );
}

export default App;
