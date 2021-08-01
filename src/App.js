import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import axios from "axios";
import "./App.css";
import ImageWrapper from "./components/ImageWrapper";
import TextWrapper from "./components/TextWrapper";

// const loaddata = async () => {
//   const res = await Tesseract.recognize(
//     "https://i.ibb.co/x60F3cP/Whats-App-Image-2021-07-11-at-9-49-01-PM-1.jpg",
//     "eng",
//     {
//       logger: (m) => console.log(m),
//     }
//   );
//   console.log(res.data.text);
// };

// loaddata();

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loader, setLoader] = useState(false);
  const [text, setText] = useState(null);
  const convertImage = async () => {
    setLoader(true);
    const res = await Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    });
    console.log(res.data.text);

    setLoader(false);
    setText(res.data.text);
  };

  const uploadFile = async (e) => {
    setLoader(true);
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "https://api.imgbb.com/1/upload?expiration=600&key=3792efa6e56c8cf6cb872b7ab67729e4",
      formData,
      config
    );
    setImageUrl(res.data.data.image.url);
    setLoader(false);
  };

  useEffect(() => {
    if (imageUrl !== null) {
      convertImage();
    }
  }, [imageUrl]);

  return (
    <div className="App">
      <div className="container pb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded ">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <i className="far fa-3x fa-file-image"></i>
            <h3 className="ms-2">Image To Text Converter</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 m-auto">
            <div className="card " style={{ height: "60vh", widht: "auto" }}>
              <div className="card-body">
                {loader == true && (
                  <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                {text === null ? (
                  <ImageWrapper uploadFile={uploadFile} loader={loader} />
                ) : (
                  <TextWrapper text={text} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
