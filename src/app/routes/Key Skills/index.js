import React from 'react';
import ComposedChartWithAxisLabels from './Components/ComposedChartWithAxisLabels';
import CardBox from 'components/CardBox';
import SkillsBar from 'app/routes/Key Skills/Components/skillsBar';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import bg1 from '../../../images/bg1.png';


const Skills = ({match}) => {
    return (
        <LayoutContentWrapper style={{
            height: '100%',
            backgroundImage: `url(${bg1})`,
            backgroundColor: '#000000DD',
            padding: '0px'
        }}>
            <div style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000000DD'
            }}>
                <div style={{
                    position:'relative',
                    top:'50%',
                    transform: 'translateY(-50%)',
                    margin: 'auto',
                    width: '80%',
                    border: '0px solid #ffffff',
                    borderRadius: '5px',
                    padding: '10px',
                }}>
                    <div className="animated slideInUpTiny animation-duration-3">
                        <div align="center">
                            <br/><br/>
                            <CardBox heading="Web & Mobile Application">
                                <ComposedChartWithAxisLabels />
                            </CardBox>
                            <br/><br/>
                            <CardBox heading="My Skills">
                                <SkillsBar />
                            </CardBox>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContentWrapper>
    );
};

export default Skills;
