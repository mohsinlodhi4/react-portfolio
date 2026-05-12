import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

/**
 * Generic, accessible, animated fullscreen modal.
 *
 * Props:
 *  - isOpen: boolean
 *  - onClose: () => void
 *  - children: ReactNode
 *  - labelledBy?: string  // id of element labelling the dialog (for a11y)
 *  - closeOnOverlay?: boolean  (default true)
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  labelledBy,
  closeOnOverlay = true,
}) => {
  const contentRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    lastFocusedRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    const focusTimeout = window.setTimeout(() => {
      if (contentRef.current) {
        const focusable = contentRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        (focusable || contentRef.current).focus?.();
      }
    }, 60);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimeout);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (lastFocusedRef.current && lastFocusedRef.current.focus) {
        lastFocusedRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mdl-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onMouseDown={(e) => {
            if (!closeOnOverlay) return;
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={contentRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            className="mdl-shell"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className="mdl-close"
              onClick={onClose}
              aria-label="Close case study"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <div className="mdl-scroll">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
