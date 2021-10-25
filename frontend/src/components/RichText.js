// import { useState } from 'react';
import React, { Component, useState, useEffect } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export default class RichText extends Component {

//     state = {
//         editorState: EditorState.createEmpty()
//     }

//     onEditorStateChange = editorState => {
//         this.setState({
//             editorState
//         });
//     }

//     render() {
//         const { editorState } = this.state;
//         // console.log(editorState);

//         return <Editor
//                     editorState={editorState}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={this.onEditorStateChange}
//                 />
        
//     }
// }

// const RichText = () => {
//     const [ state, setState ] = useState(null);
//     const handleOnChange = () => {
//         setState(state)
//     }

//     useEffect( async () => {
//         const news = await EditorState.createEmpty()
//         console.log(news)
//     }, [])
//     return (
//         <Editor
//             editorState={state}
//             toolbarClassName="toolbarClassName"
//             wrapperClassName="wrapperClassName"
//             editorClassName="editorClassName"
//             onEditorStateChange={handleOnChange}
//         />
//     );
// }
 
// export default RichText;