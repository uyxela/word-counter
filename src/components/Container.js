import styled from 'styled-components';

export default styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    @media only screen and (max-width: 1280px) {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-top: 0;
    }
`;