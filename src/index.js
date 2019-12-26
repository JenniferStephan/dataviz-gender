import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './Chart';
import ChartSenat from './ChartSenat';
import ChartAcademiefrancaise from './ChartAcademiefrancaise';
import ChartAutrices from './ChartAutrices';
import ChartAuteurs from './ChartAuteurs';
import ChartBac from './ChartBac';
import ChartCAC40 from './ChartCAC40';


render(<Chart />, document.getElementById("root2"));

render(<ChartSenat />, document.getElementById("root3"));

render(<ChartAcademiefrancaise />, document.getElementById("root4"));

render(<ChartCAC40 />, document.getElementById("root5"));

render(<ChartAutrices />, document.getElementById("chartautrices"));

render(<ChartAuteurs />, document.getElementById("root7"));

render(<ChartBac />, document.getElementById("root8"));






