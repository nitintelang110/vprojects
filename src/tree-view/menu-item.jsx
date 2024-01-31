import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'
import './styles.css'

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }



  return (
    <li>
     
      <div className="menu-item">
        <p className={displayCurrentChildren[item.label] && item.children ? "render_options" : ''}>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={30} /> : <FaPlus color="#fff" size={30} />
            }
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} style={{backgroundColor:"red"}} />
      ) : null}
    </li>
  );
}
