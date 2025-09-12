import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import galleryData from "../Gallery/Gallery.json";
import "../Gallery/Gallery.css";

const Gallery = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const backgroundImages = [
    "/images/gallery/banner-classroom.jpg",
    "/images/gallery/banner-graduation.jpg",
    "/images/gallery/banner-sports.jpg",
    "/images/gallery/banner-science.jpg"
  ];

  // Background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      {/* ===== Header Background Slideshow ===== */}
      <div
        className="gallery-header-slideshow"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        <div className="gallery-header-overlay"></div>
        <div className="gallery-header-content">
          <h1 className="gallery-title">School Gallery</h1>
          <p className="gallery-subtitle">
            Explore memorable school moments through our visual gallery
          </p>
        </div>
      </div>

      {/* ===== Gallery Grid ===== */}
      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {galleryData.map((image) => (
            <div
              key={image.id}
              className="gallery-card"
              onClick={() => setModalImage(image)}
            >
              <div className="card-image-container">
                <img src={image.imageUrl} alt={image.title} />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{image.title}</h3>
                <p className="card-event">{image.event}</p>
                <span className="card-year">{image.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Modal Popup ===== */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalImage(null)}
            >
              <X size={20} />
            </button>

            <div className="modal-body">
              {/* Left: Image */}
              <div className="modal-left">
                <img
                  src={modalImage.imageUrl}
                  alt={modalImage.title}
                  className="modal-image"
                />
              </div>

              {/* Right: Text */}
              <div className="modal-right">
                <h2 className="modal-title">{modalImage.title}</h2>
                <p className="modal-description">{modalImage.description}</p>
                <p className="modal-event">
                  <strong>Event:</strong> {modalImage.event}
                </p>
                <p className="modal-year">
                  <strong>Year:</strong> {modalImage.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
