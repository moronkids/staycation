import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Crud extends React.Component {
  state = {
    data: {
      name: "",
      age: null,
      desc: "",
    },

    submit: [],
  };

  onChanger = (x) => {
    console.log(x.target.value);
    x.preventDefault();
    this.setState({
      data: {
        ...this.state.data,
        [x.target.name]: x.target.value,
      },
    });
  };

  onClicks = (x) => {
    console.log(x.target.value);
    x.preventDefault();
    let dataSubmit = [
      ...this.state.submit,
      {
        name: this.state.data.name,
        age: this.state.data.age,
        desc: this.state.data.desc,
      },
    ];
    this.setState({
      submit: dataSubmit,
    });
    console.log(this.state.submit, dataSubmit);
  };

  render() {
    const { submit } = this.state;
    const items = submit.map((item, index) => (
      <div key={item.name + "_" + index}>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        <h1>{item.desc}</h1>
      </div>
    ));
    return (
      <>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                  onChange={this.onChanger}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="text"
                  name="age"
                  id="age"
                  onChange={this.onChanger}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="desc">Descriptions</Label>
            <Input
              type="text"
              name="desc"
              id="desc"
              placeholder="enter your comment"
              onChange={this.onChanger}
            />
            <Button onClick={this.onClicks}>Submit</Button>
          </FormGroup>
        </Form>
        {items}
      </>
    );
  }
}

// export default Crud;
