import React, {
    useState,
    useContext,
    useEffect,
} from 'react';

import themes from '@plurid/plurid-themes';

import {
    graphql,
} from '@plurid/plurid-functions';

import Context from '../../context';

import {
    StyledOptions,
    StyledOptionsContainer,
    StyledOptionsWrapper,
    StyledOptionsItemLeftRight,
    StyledStateContainer,
    StyledUIContainer,
} from './styled';

import {
    chromePromise,
} from '../../../../services/utilities';

import client from '../../../../services/graphql/client';
import {
    CURRENT_OWNER,
} from '../../../../services/graphql/query';
import {
    LOGOUT,
} from '../../../../services/graphql/mutate';



interface OptionsProperties {
}

const Options: React.FC<OptionsProperties> = () => {
    // const context: any = useContext(Context);
    // const {
    //     theme,
    //     setTheme,
    // } = context;

    return (
        <StyledOptions
            // theme={theme}
        >
        </StyledOptions>
    );
}


export default Options;
