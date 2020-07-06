import React, { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { Leaf, toggleMark, isMarkActive } from './Components';
import Container from '../Container';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import Counter from './Counter';

const EditorWrapper = styled.div`
    --editor-shadow: ${props => props.theme.shadow.editorShadow};
    --text-color: ${props => props.theme.colors.textColor};

    width: 100%;
    max-width: 600px;
    min-height: 400px;
    border-radius: 25px;
    box-shadow: var(--editor-shadow);
    color: var(--text-color);
    transition: 1s;
    padding: 48px;
    margin: 0 5% 24px 5%;

    .bold {
        font-weight: bold;
    }

    .italic {
        font-style: italic;
    }

    .underline {
        text-decoration: underline;
    }

    @media only screen and (max-width: 1280px) {
        max-width: 400px;
    }

    @media only screen and (max-width: 768px) {
        padding: 24px;
        min-height: 300px;
        margin: 0;
    }
`;

function Editor(props) {
    const editor = useMemo(() => withReact(createEditor()), []);

    const [value, setValue] = useState(props.autosave ? JSON.parse(window.localStorage.getItem('content')) : [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ]);

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, []);

    const handleKeyDown = event => {
        if (!event.ctrlKey) {
            return
        }
        switch (event.key) {
            case 'b': {
                event.preventDefault();
                toggleMark(editor, 'bold');
                break;
            }
            case 'i': {
                event.preventDefault();
                toggleMark(editor, 'italic');
                break;
            }
            case 'u': {
                event.preventDefault();
                toggleMark(editor, 'underline');
                break;
            }
        }
    }


    return (
        <Container>
            <Slate
                editor={editor}
                value={value}
                onChange={value => {
                    setValue(value);
                    const content = JSON.stringify(value);
                    localStorage.setItem('content', content);
                }}
            >
                <Toolbar
                    bold={isMarkActive(editor, 'bold')}
                    italic={isMarkActive(editor, 'italic')}
                    underline={isMarkActive(editor, 'underline')}
                    autosave={props.autosave}
                    setAutosave={props.setAutosave}
                />
                <EditorWrapper>
                    <Editable
                        renderLeaf={renderLeaf}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter some text here..."
                        spellCheck
                    />
                </EditorWrapper>
                <Counter value={value} />
            </Slate>
        </Container >
    )
}

export default Editor;