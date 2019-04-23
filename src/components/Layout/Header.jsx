import React from 'react';
import { Pane, Text, Button } from 'evergreen-ui';

const Header = (props) => (
    <header>
        <Pane
            width="100%"
            height={50}
            borderBottom="default">
            <Text>OKey Dokey</Text>
        </Pane>
    </header>
);

export default Header;