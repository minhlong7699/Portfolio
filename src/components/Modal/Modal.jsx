import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    const handleClickOutside = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleClickOutside}>
            <div className="modal">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} className="modal-image" />
                <div className="modal-description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">
                        View on GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default Modal;
