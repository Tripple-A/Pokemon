import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  current, save, remove,
}) => {
  const [nickName, setNickname] = useState(current.nickName || '');
  const [favColor, setFavColor] = useState(current.favColor || '');
  const [captureDate, setCaptureDate] = useState(current.captureDate || '');

  const cancel = () => {
    remove(0);
  };

  const update = () => {
    save({
      nickName,
      favColor,
      captureDate,
    });
    cancel();
  };

  const handleChange = e => {
    switch (e.target.name) {
      case ('nickName'):
        setNickname(e.target.value);
        break;
      case ('favColor'):
        setFavColor(e.target.value);
        break;
      case ('captureDate'):
        setCaptureDate(e.target.value);
        break;
      default:
        return null;
    }
    return null;
  };

  return (
    <div>
      <div className="form-group animate__animated animate__zoomIn">
        <label htmlFor="nickName">Nickname: </label>
        <input
          id="nickName"
          name="nickName"
          className="form-control"
          type="text"
          value={nickName}
          onChange={e => handleChange(e)}
        />
        <label htmlFor="favColor">Favorite Color: </label>
        <input
          id="favColor"
          className="form-control"
          name="favColor"
          type="text"
          value={favColor}
          onChange={handleChange}
        />
        <label htmlFor="captureDate">Capture Date: </label>
        <input
          id="captureDate"
          className="form-control"
          type="date"
          name="captureDate"
          value={captureDate}
          onChange={handleChange}
        />
        <button
          className="mr-2 btn btn-primary mt-2"
          onClick={update}
          type="button"
          data-testid="saveButton"
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

Form.propTypes = {
  current: PropTypes.shape({
    nickName: PropTypes.string,
    favColor: PropTypes.string,
    captureDate: PropTypes.string,
  }).isRequired,
  save: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Form;
