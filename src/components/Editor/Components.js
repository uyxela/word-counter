import React from 'react';
import { Editor as SlateEditor } from 'slate';

export const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <b className="bold">{children}</b>;
    }

    if (leaf.italic) {
        children = <i className="italic">{children}</i>;
    }

    if (leaf.underline) {
        children = <u className="underline">{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
};

export const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        SlateEditor.removeMark(editor, format);
    } else {
        SlateEditor.addMark(editor, format, true);
    }
};

export const isMarkActive = (editor, format) => {
    const marks = SlateEditor.marks(editor);
    return marks ? marks[format] === true : false;
};