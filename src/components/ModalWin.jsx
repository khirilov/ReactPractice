import React from "react";

function ModalWin({ children, isActive, setActive }) {
  let classes = "modalWin";
  if (isActive) {
    classes += " modalActive";
  }

  return (
    <div className={classes} onClick={(event) => setActive(false)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export { ModalWin };
