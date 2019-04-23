import React from 'react';
import MainStyled from './Main.style';

const Main = (props) => (
    <MainStyled>
        {props.children}
    </MainStyled>
);

export default Main;