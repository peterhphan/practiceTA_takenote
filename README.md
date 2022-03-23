# Take Note

## Info

Made by Eric Lie for RFP2202 - FiJ.

## Prompt

You will be creating a full-stack application that implements a note-taking application and management system. This application has three main views to show the user: a sortable list of notes, a note viewing page, and a note editing page.

### Level 1
### Dynamically Render All Notes from Database

[] - Write a GET route on the server.js that gets all notes from the database.
[] - Refactor the **Notes** component in the client/src/components directory to dynamically render notes from the database on page load.

### Level 2
### Show a Note When Clicked

[] - Implement the `NoteView` component so that it will show a full note when clicked. (Title, category, tagline, note)
[] - Add a new view into the `App.jsx` that will only show the selected note when a note is clicked.
[] - Add buttons to the `NoteView` component that allow a user to mark thier notes as `Hidden` or `Starred`. This operation does not yet need to alter the database. A note cannot be both `Hidden` and `Starred` at the same time.

### Level 3
### Edit a Note

[] - Implement the `NewNote` component so that it will allow a user to enter information about a new note.
[] - Adding a note in the `NewNote` component should also update the list of notes in the `Notes` component.

### Level 4
### Add Notes to Database

[] - Write an `Add Note` model function in your server that will add new notes to the database.
[] - Write a `POST` route in your server that adds new notes to your database.
[] - Ensure that your client-side only updates the notes list when a `POST` request successfully writes to the database.

### Level 5
### Edit Notes

[] - Write a `PATCH` route in your server that will change whether a note is `Hidden` or `Starred`.
[] - Connect the `Hidden` and `Starred` buttons on the client side to your
[] - When a note is clicked on the client-side in the `NoteView` component, allow the user to edit the clicked field. (IE clicking on the title allows the user to change the title.)

### Level 6
### Filter and Sort Notes

[] - Implement a sorting and filtering functionality on the `Notes` component that

### Level 7
### View Tracking and Most Frequently Viewed

[] - Redesign the schema to keep track of the number of times a note has been viewed.
[] - Write a `PATCH` route that