import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { routers } from '../lib/routers/router';

const App: React.FC = () => {

  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
