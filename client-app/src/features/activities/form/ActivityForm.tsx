import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [acivity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(acivity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...acivity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={acivity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={acivity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={acivity.category} name='category' onChange={handleInputChange} />
                <Form.Input placeholder='Date' value={acivity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={acivity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Venue' value={acivity.venue} name='venue' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}