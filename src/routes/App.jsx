import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../ui/NotFound/NotFound';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';

function App() {
  
  
  return (
   <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new' element={<NewTodoPage />} />
      <Route path='/edit/:id' element={<EditTodoPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </HashRouter>
  );
}

export { App };
