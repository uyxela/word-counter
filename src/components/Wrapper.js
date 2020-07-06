import styled from 'styled-components';

export default styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    --background-color: ${props => props.theme.colors.background};
    --text-color: ${props => props.theme.colors.textColor};
    background: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    transition: 1s;
`;