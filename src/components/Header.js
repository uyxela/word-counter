import React from 'react';
import { Moon, Sun, GitHub } from 'react-feather';
import styled from 'styled-components';

const Styles = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 36px;

    h1 {
        font-size: 2em;
        user-select: none;
    }

    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 1.5em;
        }
    }
`;

const IconGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const IconWrapper = styled.div`
    --shadow: ${props => props.theme.shadow.iconShadow};
    cursor: pointer;
    width: 2em;
    height: 2em;
    transition: 1s;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 12px;

    :hover {
        box-shadow: var(--shadow);
    }
`;

const MoonIcon = styled(Moon)`
    stroke: ${props => props.theme.colors.textColor};
    fill: ${props => props.theme.colors.textColor};
    width: 2em;
    height: 2em;
    cursor: pointer;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

const SunIcon = styled(Sun)`
    stroke: ${props => props.theme.colors.textColor};
    fill: ${props => props.theme.colors.textColor};
    width: 2em;
    height: 2em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

const GitHubIcon = styled(GitHub)`
    stroke: ${props => props.theme.colors.textColor};
    fill: ${props => props.theme.colors.textColor};
    width: 2em;
    height: 2em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

function Header(props) {
    return (
        <Styles>
            <h1>Word Counter</h1>
            <IconGroup>
                <IconWrapper onClick={() => {
                    props.setDarkMode(!props.darkMode);
                    window.localStorage.setItem("darkMode", !props.darkMode);
                }}>
                    {props.darkMode ? <SunIcon /> : <MoonIcon />}
                </IconWrapper>
                <IconWrapper onClick={() => {
                    window.open("https://github.com/uyxela/word-counter");
                }}>
                    <GitHubIcon />
                </IconWrapper>
            </IconGroup>
        </Styles>
    )
}

export default Header;