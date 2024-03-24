import React from "react";
import "./integrations.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Tech Career North Server",
    image: "https://www.ubcbcs.ca/_next/image?url=%2Flogo-simple-cropped.png&w=384&q=75",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eius ex sed minus molestias magnam praesentium aspernatur delectus? Laborum dolor consequatur voluptatibus, nesciunt consectetur corporis nemo optio quo est repellendus."
  },
  {
    id: 1,
    title: "Official UBC BCS Server",
    image: "https://www.ubcbcs.ca/_next/image?url=%2Flogo-simple-cropped.png&w=384&q=75",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eius ex sed minus molestias magnam praesentium aspernatur delectus? Laborum dolor consequatur voluptatibus, nesciunt consectetur corporis nemo optio quo est repellendus."
  }
];


const Single = ({ item }) => {
  return (
    <div>
      {item.title}
    </div>
  )
}





const Integrations = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
  return <div className="integrations" ref={ref}>
    <div className="progress">
      <h1>Integrations</h1>
      <motion.div style={{ scaleX }} className=".progressBar"></motion.div>
    </div>
    {items.map(item => (
      <Single item={item} key={item.id} />
    ))}
  </div>;
};

export default Integrations