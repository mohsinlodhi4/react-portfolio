import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { FaSearchPlus } from 'react-icons/fa';
import Lightbox from './Lightbox';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * Reusable image gallery.
 * Props:
 *  - images: string[]
 *  - title?: string (used for alt text + a11y in lightbox)
 */
const ProjectGallery = ({ images = [], title }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!images.length) return null;

  return (
    <div className="pg-root">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        spaceBetween={16}
        slidesPerView={1}
        className="pg-swiper"
        a11y={{ enabled: true }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`} className="pg-slide">
            <button
              type="button"
              className="pg-slide__btn"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Enlarge image ${i + 1}`}
            >
              <img
                src={src}
                alt={title ? `${title} screenshot ${i + 1}` : `Screenshot ${i + 1}`}
                loading="lazy"
                className="pg-slide__img"
              />
              <span className="pg-slide__zoom" aria-hidden="true">
                <FaSearchPlus />
                <span>Click to expand</span>
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <div className="pg-thumbs" role="list">
          {images.map((src, i) => (
            <button
              key={`thumb-${src}-${i}`}
              type="button"
              role="listitem"
              className="pg-thumb"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Open image ${i + 1} in lightbox`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="pg-thumb__img"
              />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onChange={(idx) => setLightboxIndex(idx)}
        title={title}
      />
    </div>
  );
};

export default ProjectGallery;
