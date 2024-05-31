export default async function Read(props) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`, {cache:'no-store'});
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