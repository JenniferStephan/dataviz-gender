import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import ChartSenat from './ChartSenat';
import ChartAcademiefrancaise from './ChartAcademiefrancaise';
import ChartAutrices from './ChartAutrices';
import ChartCAC40 from './ChartCAC40';



render(<Chart />, document.getElementById("root2"));

render(<ChartSenat />, document.getElementById("root3"));

render(<ChartAcademiefrancaise />, document.getElementById("root4"));

render(<ChartCAC40 />, document.getElementById("root5"));





