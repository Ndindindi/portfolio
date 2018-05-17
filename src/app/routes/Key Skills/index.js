import React from 'react';
import ComposedChartWithAxisLabels from './Components/ComposedChartWithAxisLabels';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import SkillsBar from 'app/routes/Key Skills/Components/skillsBar';


const ComposedChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="My Skills" match={match}/>

            <div align="center">
                <CardBox heading="Web & Mobile Application">
                    <ComposedChartWithAxisLabels />
                </CardBox>
                <CardBox heading="My Skills">
                    <SkillsBar />
                </CardBox>
            </div>
        </div>
    );
};

export default ComposedChart;
