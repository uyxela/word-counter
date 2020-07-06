import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import Wrapper from './components/Wrapper'
import Header from './components/Header';
import Editor from './components/Editor';

function App() {
    const [darkMode, setDarkMode] = useState(
        window.localStorage.getItem("darkMode") === "true" ? true : false
    );

    if (window.localStorage.getItem("autosave") === null) {
        window.localStorage.setItem("autosave", true);
    }

    const [autosave, setAutosave] = useState(
        window.localStorage.getItem("autosave") === "true" ? true : false
    );

    if (window.localStorage.getItem("content") === null) {
        window.localStorage.setItem("content", JSON.stringify([
            {
                type: 'paragraph',
                children: [{ text: '' }],
            },
        ]));
    }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Wrapper>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Editor autosave={autosave} setAutosave={setAutosave} />
            </Wrapper>
        </ThemeProvider>

    )
}

export default App;