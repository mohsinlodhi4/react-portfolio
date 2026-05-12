import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Reusable Lightbox.
 * Props:
 *  - images: string[]
 *  - index: number
 *  - onClose: () => void
 *  - onChange: (nextIndex: number) => void
 *  - title?: string
 */
const Lightbox = ({ images = [], index = 0, onClose, onChange, title }) => {
  const isOpen = index !== null && index !== undefined && index >= 0;

  const goNext = useCallback(() => {
    if (!images.length) return;
    onChange((index + 1) % images.length);
  }, [images.length, index, onChange]);

  const goPrev = useCallback(() => {
    if (!images.length) return;
    onChange((index - 1 + images.length) % images.length);
  }, [images.length, index, onChange]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, goNext, goPrev]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lb-root"
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} image preview` : 'Image preview'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="lb-close"
            onClick={onClose}
            aria-label="Close image preview"
          >
            <FaTimes aria-hidden="true" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lb-nav lb-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
          )}

          <motion.figure
            key={images[index]}
            className="lb-figure"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index]}
              alt={title ? `${title} screenshot ${index + 1}` : `Screenshot ${index + 1}`}
              className="lb-img"
            />
            {images.length > 1 && (
              <figcaption className="lb-caption">
                {index + 1} / {images.length}
              </figcaption>
            )}
          </motion.figure>

          {images.length > 1 && (
            <button
              type="button"
              className="lb-nav lb-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;
