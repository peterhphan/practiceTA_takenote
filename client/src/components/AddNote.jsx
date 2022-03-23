import React from 'react';

const AddNote = () => {
  return (
    <div>
      <h1>New Note</h1>
      <form>
        Title:
        <br/>
        <input className="note-label" type="text" placeholder="Title"/>
        <br/>
        Category:
        <br/>
        <input className="note-label" type="text" placeholder="Category"/>
        <br/>
        Tagline:
        <br/>
        <input className="note-label" type="text" placeholder="Tagline"/>
        <br/>
        <input className="note-input" height="700px" type="text" placeholder="Write your note here!"/>
        <br/>
        <button className="button">Save</button>
      </form>
    </div>
  )
};

export default AddNote;
