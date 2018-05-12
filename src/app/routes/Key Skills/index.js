import React from 'react';
import LineBarAreaComposedChart from './Components/LineBarAreaComposedChart';
import VerticalComposedChart from './Components/VerticalComposedChart';
import SameDataComposedChart from './Components/SameDataComposedChart';
import ComposedChartWithAxisLabels from './Components/ComposedChartWithAxisLabels';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const ComposedChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Composed Graph" match={match}/>

            <div align="center">
                <CardBox heading="Composed Chart With Axis Labels">
                    <ComposedChartWithAxisLabels />
                </CardBox>
            </div>
        </div>
    );
};

export default ComposedChart;
