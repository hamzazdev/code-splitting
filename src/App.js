import React, { useState, Suspense } from "react";
import './App.css';

import Page1 from './components/Page1';

const Page2 = React.lazy(() => import('./components/Page2'));
const Page3 = React.lazy(() => import('./components/Page3'));


function App() {
  const [route, setRoute] = useState('page1')

  const onRouteChange = (route) => {
    setRoute(route)
  }
  switch (route) {
    case 'page1':
      return <Page1 onRouteChange={onRouteChange} />
    case 'page2':
      return <Suspense fallback={<div>Loading....</div>}><Page2 onRouteChange={onRouteChange} /></Suspense>
    case 'page3':
      return <Suspense fallback={<div>Loading....</div>}><Page3 onRouteChange={onRouteChange} /></Suspense> 
    default:
      return <Page1 onRouteChange={onRouteChange} /> 
  }
}

export default App;
