import React from 'react';

const Form = ({current}) => (
  <div>
            <div className="form-group">
            <label>Nickname: </label>
            <input
            className="form-control"
            type="text"
            defaultValue={current.nickName || 'None' }
            />
            <label>Favorite Color: </label>
            <input
             className="form-control"
             type="text" 
             defaultValue={current.favColor || 'None'} 
              />
            <label>Capture Date: </label>
            <input 
            className="form-control" 
            type="date"
            defaultValue={current.captureDate || 'None' } 
            />
        </div>
  </div>
);

export default Form;
