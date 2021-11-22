import React from "react";
import { Link } from "react-router-dom";
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export function EditCasa(){
    return (
        <Form>
            <FormGroup>
                <Label>
                    Anfitrião:
                </Label>
                <Input
                    type='text' 
                    placeholder='Anfitrião'>
                </Input>
                <Label>
                    Local:
                </Label>
                <Input
                    type='text' 
                    placeholder='Local'>
                </Input>
                <Label>
                    Cidade:
                </Label>
                <Input
                    type='text' 
                    placeholder='Cidade'>
                </Input>
                <Label>
                    Estado:
                </Label>
                <Input
                    type='text' 
                    placeholder='Estado'>
                </Input>
                <Label>
                    Quartos:
                </Label>
                <Input
                    type='text' 
                    placeholder='Quartos'>
                </Input>
                <Label>
                    Camas:
                </Label>
                <Input
                    type='text' 
                    placeholder='Camas'>
                </Input>
                <Label>
                    Banheiros:
                </Label>
                <Input
                    type='text' 
                    placeholder='Banheiros'>
                </Input>
                <Label>
                    Hóspedes:
                </Label>
                <Input
                    type='text' 
                    placeholder='Hóspedes'>
                </Input>
                <Label>
                    Moradia:
                </Label>
                <Input
                    type='text' 
                    placeholder='Moradia'>
                </Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    );
}