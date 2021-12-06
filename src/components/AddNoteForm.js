import React from 'react';
import PropTypes from 'prop-types';
import './AddNoteForm.css';

export default function AddNoteForm(props) {
  const { input, onChange, onSubmit } = props;

  return (
    <form className="AddNoteForm" onSubmit={onSubmit}>
      <div className="AddNoteForm-inputs-wrapper">
        <div className="AddNoteForm-input-wrapper note-wrapper">
          <label className="AddNoteForm-label label-note">
            <h2>New note</h2>
            <input
              className="AddNoteForm-input input-note"
              name="note"
              value={input}
              type="text"
              required
              placeholder="Например, Lorem ipsum..."
              onChange={onChange}
            />
            <button
              className="AddNoteForm-button-submit button-submit"
              type="submit"
            >
              <span className="material-icons">send</span>
            </button>
          </label>
        </div>
      </div>
    </form>
  );
}

AddNoteForm.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
