import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CSRFToken from './csrftoken';
import './MainForm.css';

export default function SearchForm() {
  const [form, setForm] = useState({
    searchType: '',
    searchWord: '',
  });

  const { searchType, searchWord } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form action="http://localhost:8000/search/" method="POST" >
      <CSRFToken/>
      <Input type="text" name="searchType" onChange={onChange}/>
      <Input type="text" name="searchWord" onChange={onChange}/>
      <Button variant="contained" color="secondary" type="submit">submit</Button>
    </form>
  );
}

