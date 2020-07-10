import React from 'react';
import { Bold, Italic, Underline, Save } from 'react-feather';
import { useSlate } from 'slate-react';
import styled from 'styled-components';
import { toggleMark, isMarkActive } from './Components';

const ToolbarWrapper = styled.div`
    --toolbar-shadow: ${props => props.theme.shadow.toolbarShadow};
    --icon-color: ${props => props.theme.colors.textColor};

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    box-shadow: var(--toolbar-shadow);
    transition: 1s;
    padding: 12px;
    margin-bottom: 48px;

    @media only screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const IconButton = styled.button`
    --hover-shadow: ${props => props.theme.shadow.iconShadow};
    border: none;
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 12px;
    transition: 1s;
    
    ${props => props.active ? "box-shadow: var(--hover-shadow)" : ""};

    :hover {
        box-shadow: var(--hover-shadow);
    }

    :focus {
        outline: 0;
    }

    @media (max-width: 768px) {
        padding: 6px;
    }
`;

const BoldIcon = styled(Bold)`
    stroke: ${props => props.theme.colors.textColor};
    width: 2.5em;
    height: 2.5em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

const ItalicIcon = styled(Italic)`
    stroke: ${props => props.theme.colors.textColor};
    width: 2.5em;
    height: 2.5em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

const UnderlineIcon = styled(Underline)`
    stroke: ${props => props.theme.colors.textColor};
    width: 2.5em;
    height: 2.5em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

const SaveIcon = styled(Save)`
    stroke: ${props => props.theme.colors.textColor};
    width: 2.5em;
    height: 2.5em;
    transition: 1s;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

function Toolbar(props) {

    const editor = useSlate();

    return (
        <ToolbarWrapper>
            <IconButton
                active={isMarkActive(editor, 'bold')}
                onClick={() => toggleMark(editor, 'bold')}
                title="Bold"
            >
                <BoldIcon />
            </IconButton>
            <IconButton
                active={isMarkActive(editor, 'italic')}
                onClick={() => toggleMark(editor, 'italic')}
                title="Italic"
            >
                <ItalicIcon />
            </IconButton>
            <IconButton
                active={isMarkActive(editor, 'underline')}
                onClick={() => toggleMark(editor, 'underline')}
                title="Underline"
            >
                <UnderlineIcon />
            </IconButton>
            <IconButton
                active={props.autosave}
                onClick={() => {
                    window.localStorage.setItem("autosave", `${!props.autosave}`);
                    props.setAutosave(!props.autosave);
                }}
                title="Autosave"
            >
                <SaveIcon />
            </IconButton>
            
        </ToolbarWrapper>
    )
}

export default Toolbar;