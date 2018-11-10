import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
  //  this.loadBooks(); = this.load persona
  //  API.getBooks() ==  API.getPersona()

//       =  API.deleteProfile(id) 
  componentDidMount() {
    this.loadPersona();
  }

  loadPersona = () => {
    API.getPersona()
      .then((res) =>
        this.setState({ profiles: res.data, title: "", author: "", synopsis: "" })
      )``
      .catch((err) => console.log(err));
  };

  deleteProfile = (id) => {
    API.deleteProfile(id)
      .then((res) => this.loadPersona())
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveprofile({
        title: this.state.profileName,
        author: this.state.profileType
        synopsis: this.state.profileQuestionArray
      })
        .then((res) => this.loadPersona())
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Please provide a name for this element?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="profileName"
                placeholder="name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="profileType"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="profileQuestionsArray"
            
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book) => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
