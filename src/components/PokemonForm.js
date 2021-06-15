import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormSubmit }) {

  const [formName, formNameSetter] = useState("");
  const [formHp, formHpSetter] = useState("");
  const [formFrontImg, formFrontImgSetter] = useState("");
  const [formBackImg, formBackImgSetter] = useState("");

  // console.log(formName, formHp, formFrontImg, formBackImg)

  const submitHandler = (e) => {
    console.log("submitting form...");
    e.preventDefault();
    const newPokemon = {
      name: formName,
      hp: formHp,
      sprites: {
        front:formFrontImg,
        back: formBackImg
    }}
    onFormSubmit(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={e=>{submitHandler(e)}}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formName} onChange={(e)=>{formNameSetter(e.target.value)}}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formHp} onChange={(e)=>{formHpSetter(e.target.value)}}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formFrontImg} onChange={(e)=>{formFrontImgSetter(e.target.value)}}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formBackImg} onChange={(e)=>{formBackImgSetter(e.target.value)}}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
