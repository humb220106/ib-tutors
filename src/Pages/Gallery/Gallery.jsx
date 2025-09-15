import React from "react";
import galleryData from "../Gallery/Gallery.json";
import "../Gallery/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header-text">
        <br>
        </br>
        <br>
        </br>
   <br>
   </br>
        
        <h1>School Gallery</h1>
        <p>
          A glimpse into our vibrant school life — events, activities, and
          memorable moments.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryData.map((image) => (
          <div key={image.id} className="gallery-card">
            <img src={image.image} alt={image.title} />
            <div className="caption">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
