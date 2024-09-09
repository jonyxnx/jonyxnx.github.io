import React from 'react';
import Banner from './components/banner.jsx';
import Message from './components/message.jsx';
import Gallery from './components/gallery.jsx';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Message />
      <Gallery />
    </div>
  );
}

export default App;
