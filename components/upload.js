// // VideoUploader.js
// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoUpload = () => {
//   // const [audio, setAudio] = useState();
//   const [title, setTitle] = useState()
//   const [category, setCategory] = useState()
//   const [book, setBook] = useState();

//   const handleFileChange = (e) => {
//     setBook(e.target.files[0]);
//   };

//   const handleTextChange = (e) => {
//     setTitle(e.target.value)
//   }
//   const handleChangePreacher = (e) =>{
//     setCategory(e.target.value)
//   }

//   // const handleChangeBook = (e) =>{
//   //   setAudio(e.target.files[0])
//   // }

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('book', book);
//     formData.append('title', title)
//     formData.append('category', category)
    

//     try {
//       const response = await axios.post('http://localhost:8080/upload/book', formData);
//       console.log('audio uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading audio:', error.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept='application/pdf/*' onChange={handleFileChange} />
//       <input type="text" placeholder='enter title'  onChange={handleTextChange} />
//       <input type='text' placeholder='enter category' onChange={handleChangePreacher } />
//       <button onClick={handleUpload}>Upload Book</button>
//     </div>
//   );
// };

// export default VideoUpload;
