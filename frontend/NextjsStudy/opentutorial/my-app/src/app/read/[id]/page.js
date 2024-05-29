export default async function Read(props) {
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await resp.json();
    return (
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}

// import React from 'react';

// interface Params {
//     id: string;
// }

// interface ReadProps {
//     params: Params;
// }

// const Read: React.FC<ReadProps> = ({ params }) => {
//     return (
//         <>
//             <h2>Read</h2>
//             Paramters: {params.id}
//         </>
//     );
// }

// export default Read;