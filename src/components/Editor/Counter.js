import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
    --counter-shadow: ${props => props.theme.shadow.toolbarShadow};
    --text-color: ${props => props.theme.colors.textColor};

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 25px;
    box-shadow: var(--counter-shadow);
    color: var(--text-color);
    transition: 1s;
    padding: 12px;
    margin-bottom: 48px;

    @media only screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 48px;
    }
`;

const CountGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    margin: 12px;
`;

const CountTitle = styled.h1`
    font-size: 1.25em;

    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const CountValue = styled.p`
    font-size: 2em;

    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }
`;

const countWords = content => {
    let count = 0;
    content.forEach(value => {
        count += value['children'][0]['text'].match(/\b[-?(\w+)?]+\b/gi) ? value['children'][0]['text'].match(/\b[-?(\w+)?]+\b/gi).length : 0;
    });
    return count;
}

const countChars = content => {
    let count = content.length > 1 ? content.length - 1 : 0;
    content.forEach(value => {
        count += value['children'][0]['text'].length;
    });
    return count;
}

function Counter(props) {

    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        setWordCount(countWords(JSON.parse(window.localStorage.getItem('content'))));
        setCharCount(countChars(JSON.parse(window.localStorage.getItem('content'))));
    }, [props.value])

    return (
        <CounterWrapper>
            <CountGroup>
                <CountTitle>Words</CountTitle>
                <CountValue>{wordCount}</CountValue>
            </CountGroup>
            <CountGroup>
                <CountTitle>Characters</CountTitle>
                <CountValue>{charCount}</CountValue>
            </CountGroup>
        </CounterWrapper>
    )
}

export default Counter;