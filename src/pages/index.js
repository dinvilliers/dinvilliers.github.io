import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import previcon from "../images/prev.png"
import nexticon from "../images/next.png"
import juneau from "../images/juneau.jpg"
import columbus from "../images/columbus.jpg"
import noora from "../images/noora.jpg"
import alaska from "../images/alaska.jpg"
import asif from "../images/asifclueless.jpeg"

const slides = [
 {
    title: "Noora",
    image: noora,
    link: "noora"
  },
  {
    title: "Alaska",
    image: alaska,
    link: "alaska"
  },
    {
    title: "Columbus",
    image: columbus, 
    link: "columbus"
  },
  {
    title: "As If",
    image: asif,
    link: "asif"
  },
  {
    title: "Juneau",
    image: juneau,
    link: "juneau"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) { return; }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref, active]);

  return ref;
}

const initialState = {
  slideIndex: 3
}

const slidesReducer = (state, event) => {
  if (event.type === "PREVIOUS") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({slide, offset}) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
      >
        <div className="slideContentInner">
         <Link to={slide.link}> <h1 className="slide-title">{slide.title}</h1></Link>
        </div>
      </div>
    </div>);
}

function IndexPage() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState); 
  return (
  <div className="workBody">
   <Layout>
   <div className="work-wrapper">
 
    <SEO title="Web Designer and Developer based in London" />
    <div className="slides">

     <button className="slideButton prev" onClick={() => dispatch({ type: "PREVIOUS" })}><img src={previcon} /></button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button className="slideButton next" onClick={() => dispatch({ type: "NEXT" })}><img src={nexticon} /></button>
</div>
 </div>
</Layout>
</div>
)}

export default IndexPage
