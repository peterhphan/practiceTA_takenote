import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx'
const axios = require('axios').default;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };
  }

  componentDidMount() {
    axios.get('/api/notes')
      .then(res => {
        console.log(res.data[0])
        this.setState({notes: res.data[0]})
      })
      .catch( (err) => {
        console.log(err);
      })
    // axios.post('/api/notes', {

    // }).then(() => {
    //   return axios.get('/api/notes')
    // }).then((response) => {
    //   this.setState({
    //     notes: response.data
    //   })
    // })
  }

  //console.log(this.state.notes)

  changePage(page){
    this.setState({
      page: page
    })
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote/>
    }
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
