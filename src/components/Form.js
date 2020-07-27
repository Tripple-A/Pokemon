import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  current, save, index, remove,
}) => {
  const [nickName, setNickname] = useState(current.nickName);
  const [favColor, setFavColor] = useState(current.favColor);
  const [captureDate, setCaptureDate] = useState(current.captureDate);

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

  return (
    <div>
      <p>{index}</p>
      <div className="form-group">
        <label>Nickname: </label>
        <input
          className="form-control"
          type="text"
          value={nickName}
          onChange={e => setNickname(e.target.value)}
        />
        <label>Favorite Color: </label>
        <input
          className="form-control"
          type="text"
          value={favColor}
          onChange={e => setFavColor(e.target.value)}
        />
        <label>Capture Date: </label>
        <input
          className="form-control"
          type="date"
          value={captureDate}
          onChange={e => setCaptureDate(e.target.value)}
        />
        <button
          className="mr-2 btn btn-primary"
          onClick={update}
          type="button"
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-primary"
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
    captureDate: PropTypes.instanceOf(Date),
  }).isRequired,
  save: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,

};

export default Form;
