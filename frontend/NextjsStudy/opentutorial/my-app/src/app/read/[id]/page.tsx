/*export default function Read(props) {
    return (
        <>
            <h2>Read</h2>
            paramters: {props.params.id}
        </>
    )
}*/

import React from 'react';

interface Params {
    id: string;
}

interface ReadProps {
    params: Params;
}

const Read: React.FC<ReadProps> = ({ params }) => {
    return (
        <>
            <h2>Read</h2>
            Paramters: {params.id}
        </>
    );
}

export default Read;