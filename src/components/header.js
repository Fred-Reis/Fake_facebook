import React from "react";

import face from "../assets/face.png";

function HeaderFace() {
  return (
    <header>
      <nav>
        <img src={face} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default HeaderFace;
