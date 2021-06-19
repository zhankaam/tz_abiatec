import React from 'react'
import './index.css';

type PropsType = {
    onClick: any
    children: string
}

export const Button: React.FC<PropsType> = (props) => (
  <button className="Button" {...props} />
);
