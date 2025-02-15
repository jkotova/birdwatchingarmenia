import React from "react";
import { useEffect } from "react";
import parse from "html-react-parser";

export function FrameWrapper({ iframe }) {
  const ref = React.useRef();
  const [ratio, setRatio] = React.useState(1);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = iframe;
    const node = temp.querySelector("iframe");
    const ratio = node?.getAttribute("width") / node?.getAttribute("height");
    setRatio(ratio);
  }, [iframe]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const padding = width / ratio + "px";
      ref.current.style.paddingTop = padding;
    }
  }, [ratio]);
  return (
    <div ref={ref} className="iframe_container">
      {parse(iframe)}
    </div>
  );
}
