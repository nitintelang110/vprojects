import useWindowResize from ".";
import './resize.css'

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className="resize_container">
      <div className="resize_subContainer">
      <p className="resize_head">Use Window resize Hook</p>
      <p>Your Current Window Size</p>
      <p className="resize_text">Width is {width} px</p>
      <p className="resize_text">Height is {height} px</p>
      </div>
    </div>
  );
}
