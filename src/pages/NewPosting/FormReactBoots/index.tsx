import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { IFormValues } from './interfaces';
import { TYPE_OPTIONS, LEVEL_OPTIONS } from '../formSelectOptions';

import { TextField, SelectField, TextArea } from './formComponents';

export default function PostingForm() {
  const { control, handleSubmit } = useForm<IFormValues>();
  const [data, setData] = useState<string>('');
  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    setData(JSON.stringify(data));

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField name="url" control={control} required />
      <Row className="mb-3">
        <TextField name="position" control={control} required asCol />
        <TextField name="company" control={control} required asCol />
        <TextField name="location" control={control} required asCol />
      </Row>

      <Row className="mb-3">
        <SelectField
          name="type"
          control={control}
          required
          options={TYPE_OPTIONS}
          asCol
        />
        <SelectField
          name="level"
          control={control}
          required
          options={LEVEL_OPTIONS}
          asCol
        />
        <TextField
          name="due_date"
          type="date"
          control={control}
          required
          asCol
        />
      </Row>
      <TextArea name="responsibilities" control={control} required />
      <TextArea name="qualifications" control={control} required />
      <TextField name="other" control={control} />

      <p>{data}</p>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
