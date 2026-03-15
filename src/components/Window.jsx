// src/components/Window.jsx
function Window({ title, onClose, children, className }) {
  return (
     <div className={`win98-window ${className || ''}`}>
      <div className="win98-titlebar">
        <span>{title}</span>
        <button className="win98-close-btn" onClick={onClose} />
      </div>
      <div className="win98-content">
        {children}
      </div>
    </div>
  )
}

export default Window