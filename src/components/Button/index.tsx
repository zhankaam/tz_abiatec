import React, {MouseEventHandler} from "react"
import "./index.css";

type PropsType = {
    onClick: MouseEventHandler
}

export const Button: React.FC<PropsType> = (props) => (
  <button className="button" {...props} />
);
