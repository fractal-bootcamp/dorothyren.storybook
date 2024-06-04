import React from 'react';
import "../index.css";

interface TaskProps {

    label: string;
    description?: string;
    complete?: boolean;
}

export const Task = ({
    label,
    description,
    complete = false }: TaskProps) => {
    return (
        <form>
            <label>
                Label:
                <input name="Title" type="text" />
                <input name="Description" type="text" />
            </label>
        </form>
    )
}