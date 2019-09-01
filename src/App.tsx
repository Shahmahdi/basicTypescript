import React from 'react';
import { Button } from "@blueprintjs/core";
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns pa2">
            <h1 className="f6 f3-m f1-l lh-copy">Title</h1>
            <Button icon="refresh" />
            <Button intent="success" text="button content" />
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <h1 className="f4 lh-copy">description</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
