import React from 'react';
import Review from './Review';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    
    <main>
      <section className='container'>
        <div className='title'>
          <h2>JOIN US</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
    </>
  );
}

export default App;
