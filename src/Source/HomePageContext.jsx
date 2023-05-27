import React from 'react';
import ListProvider from '../Context/Provider/ListProvider';
import ListContext from './ListContext';
export default function HomePageContext() {
  return (
    <ListProvider>
      <div className="contextMain">
        <div className="contextContent">
            <ListContext/>
        </div>
      </div>
    </ListProvider>
  );
};
