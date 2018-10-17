import React from 'react';
import styled from 'styled-components';
import svg from '../../img/undraw_online_world_mc1t.svg';


const TeachersSection = styled.div`
margin-top: 60px;
width: 100%;
display: flex;
flex-direction: wrap;
justify-content: center;
align-items: center;
height: 500px;
`

const SectionLeft = styled.div`
width: 60%;
position: relative;
`

const SectionRight = styled.div`
width: 30%;
margin-right: auto;
`


const Teachers = () => {
return (
    <TeachersSection>
        <SectionLeft>
        <img src={svg} alt="teachers" className="teachersimg"/>
        </SectionLeft>
        <SectionRight>
            <p className="teachers">Quote lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Book <a href="/lessons">trial lesson</a></p>
        </SectionRight>
    </TeachersSection>
);
}


export default Teachers;