import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

export default function Note(props) {
  const {
    note: { id, content },
    onRemove,
  } = props;

  return (
    <div className="Note-wrapper" id={id}>
      <div className="Note-text">
        <p>{content}</p>
      </div>
      <button
        className="Note-button-remove button-remove"
        onClick={() => onRemove(id)}
      >
        <span className="material-icons">close</span>
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
