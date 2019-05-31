import React, { Component, Fragment } from "react";
import Book from "../../components/Book/Book";
import { TextField, Button ,Grid} from "@material-ui/core";

class Form extends Component {
  state = {
    books: null,
    search: null
  };

  handleChange = (e) =>{
      this.setState({
          search: e.target.value
      })
  }

  handleClick = (e) => {
    debugger;
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then(res => {
          if(res.status === 200) {
              return res.json()
          } else {
              console.log('error happened')
          }
      }).then(res => this.setState({books: res})).then(res => console.log(this.state.books))
  }

  render() {
    return (
      <Grid container justify='center' direction='row'>
         <Fragment>
          <form onSubmit={(e) => e.preventDefault()}>
          <TextField
          onChange = {this.handleChange}
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
         
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button variant='outlined' onClick={this.handleClick}>Search</Button>
          </form>
        <Grid item xs={12}>
          <Grid container justify='center' >
          {this.state.books === null ? null: <Book bookData={this.state.books} /> }
          </Grid>
        
        </Grid>
        
      </Fragment>
      </Grid>
     
    );
  }
}

export default Form;
