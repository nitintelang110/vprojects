import { useRef, useState } from "react";
import useOutsideClick from ".";
import "./outside.css"

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="outside_container" ref={ref}>
      {showContent ? (
        <div >
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this div content
          </p>
        </div>
      ) : (
        <button className="clk_btn" onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
