import React from 'react';
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';


// const Example = () => {
//     return (
//         <div id="Example">
//             <Wrapper />
//             <Sidebar />
//         </div>
//     );
// };

// const Wrapper = () => {
//     return (
//         <div>
//             <div>some stuff</div>
//             <div>
//                 <Body />
//             </div>
//             <p>some more stuff elsewhere</p>
//         </div>
//     );
// };





const Example = () => {
    return (
        <div id="Example">
            <Wrapper content={<Body />} />
            <Sidebar />
        </div>
    );
}

const Wrapper = ({ content }) => {
    return (
        <div>
            <div>some stuff</div>
            <div>
                {content}
            </div>
            <p>some more stuff elsewhere</p>
        </div>
    );
};