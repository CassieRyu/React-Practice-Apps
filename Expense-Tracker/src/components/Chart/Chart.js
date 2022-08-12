import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsMaxArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const dataPointsMaxValue = Math.max(...dataPointsMaxArray);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={dataPointsMaxValue}
                        label={dataPoint.label}
                    />)
            }
        </div>
    )
}

export default Chart;