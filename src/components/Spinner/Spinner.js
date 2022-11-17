import React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { COLORS } from '../../constants/themes';

const override = {
    borderColor: `${COLORS.blue[800]}`,
};

const Spinner = () => {
    return (
        <Wrapper>
            <ClipLoader
                unitsize={"px"}
                size={80}
                loading={true}
                cssOverride={override}
            />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
`;

export default Spinner;