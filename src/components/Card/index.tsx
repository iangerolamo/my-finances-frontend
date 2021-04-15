import React from "react";
import { Container, FormHeader, Form, OtherMethods } from './styles';


const Card: React.FC = () => (
  <Container>
    <FormHeader />
    <Form />
    <OtherMethods />

  </Container>
);

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
  <div>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password"/>
    <FormButton title="Log in"/>
  </div>
);





export default Card;
