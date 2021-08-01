import React from "react";

function ImageWrapper(props) {
  return (
    <form style={{ height: "100%", widht: "auto" }}>
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ height: "100%", widht: "auto" }}
      >
        {props.loader == false ? (
          <input
            type="file"
            name="image"
            onChange={(e) => props.uploadFile(e)}
          />
        ) : (
          <h1>Image is being uploaded Please Wait..</h1>
        )}
      </div>
    </form>
  );
}

export default ImageWrapper;
