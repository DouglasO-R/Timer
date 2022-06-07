import React from "react";

import "./style.scss";

export class Button extends React.Component<{
  children: any,
  type?: "button" | "submit" | "reset",
  onClick?: () => void
}>{

  render() {
    
    const { type = "button", onClick } = this.props;
    return (
      <button type={type} className="botao" onClick={onClick}>
        {this.props.children}
      </button>
    )
  }
}
