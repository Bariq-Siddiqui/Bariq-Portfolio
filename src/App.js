import Grid from '@mui/material/Grid';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAppBar from './Components/appbar/appBar';
export default function App() {
  return (
    <>
    <SearchAppBar />
      <Grid container padding="1rem" fontWeight='500' paddingLeft='6%' bgcolor='#1976d2' color='white'>
        Copyright © 2021 Bariq Portfolio
      </Grid>
      
    </>
  );
}






