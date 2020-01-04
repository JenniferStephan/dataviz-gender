import React, { Component } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import Chart from './Chart';
import ChartSenat from './ChartSenat';
import ChartAcademiefrancaise from './ChartAcademiefrancaise';
import ChartAutrices from './ChartAutrices';
import ChartAuteurs from './ChartAuteurs';
import ChartBac from './ChartBac';
import ChartCAC40 from './ChartCAC40';
import ChartCabMin from './ChartCabMin';
import  ButtonInfo from './ButtonInfo';



render(<Chart />, document.getElementById("assemble"));

render(<ChartSenat />, document.getElementById("senat"));

render(<ChartAcademiefrancaise />, document.getElementById("academie"));

render(<ChartCAC40 />, document.getElementById("cac40"));

render(<ChartAutrices />, document.getElementById("autrices"));

render(<ChartAuteurs />, document.getElementById("auteurs"));

render(<ChartBac />, document.getElementById("bac"));

render(<ChartCabMin />, document.getElementById("cab"));

render(<ButtonInfo />, document.getElementById('app'));



