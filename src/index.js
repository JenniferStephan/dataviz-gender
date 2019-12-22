import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import ChartSenat from './ChartSenat';
import ChartAcademiefrancaise from './ChartAcademiefrancaise';
import ChartAutrices from './ChartAutrices';

render(<Chart />, document.getElementById("root2"));

render(<ChartSenat />, document.getElementById("root3"));

render(<ChartAcademiefrancaise />, document.getElementById("root4"));





