import styled from 'styled-components';

const MaxWidthWrapper = styled.div`
    position: relative;
    max-width: min(100%, calc(1200px + 32px * 2));
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export default MaxWidthWrapper;