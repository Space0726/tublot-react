import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CSRFToken from '../csrf/csrftoken';
import './MainForm.css';
import "billboard.js/dist/theme/insight.css";
import bb from "billboard.js";

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

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    type result = { view_count: string };
    fetch('http://localhost:8000/videos/')
    .then(function(res) {
      const columns: Array<string> = ["view"];
      res.json()
      .then(data => data.map((x: result) => columns.push(x.view_count)))
      .then(function(len) {
        bb.generate({
          data: {
            columns: [columns],
            types: { view: "area" }
          },
          bindto: "#areaChart"
        });
      });
    });
  };

  return (
    <div>
      <Input type="text" name="searchType" onChange={onChange}/>
      <Input type="text" name="searchWord" onChange={onChange}/>
      <Button variant="contained" color="primary" onClick={onClick}>draw chart</Button>
      <div id="areaChart"></div>
    </div>
  );
}
