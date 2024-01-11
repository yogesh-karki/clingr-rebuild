import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let clingerData = [
  {
    img: "./images/1.png",
    title: "Dries pets easily and quickly",
    text: "Pets never sit still, especially when it comes to drying their coats. How can you hold a hair dryer in one hand, hold your pet and comb in other at the same time? Clingr solves these problems by freeing up your hands. Now you can give enough attention to your pet by holding it with one hand and combing it out with other.",
  },
  {
    img: "./images/2.png",
    title: "Save time and effort getting children ready",
    text: "With a Clingr you can get your child ready for school, or tidy them up after sports, in record time. You'll be ready to go out again in minutes: dry and style your child's hair nicely and easily.",
  },
  {
    img: "./images/3.png",
    title: "Style your hair with one hand",
    text: "Clingr is perfect for those who, by some reason, can only use one hand. With this handy hairdryer holder, they can dry and brush their hair at the same time, saving time and giving them the opportunity to look well groomed every day.",
  },
];

const Main = () => {
  const cardRrefs = useRef([]);

  useEffect(() => {
    cardRrefs.current.forEach((ref, index) => {
      let start;

      let windowWidth = window.innerWidth;

      if (windowWidth < 1720) {
        start = 80 - index * 35;
      } else start = 100 - index * 35;

      gsap.fromTo(
        ref,
        {
          opacity: 1,
          yPercent: -index * 4,
        },
        {
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: `${start}% 70%`,
            endTrigger: ".wrap",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
          yPercent: -35,
        }
      );
    });
  }, []);
  return (
    <section className="main">
      <div className="container">
        <div className="head">
          <h2>
            One Clingr,
            <br />
            many options
          </h2>
        </div>
      </div>

      <div className="wrap">
        {clingerData.map((val, index) => {
          return (
            <div
              className={`card `}
              key={index}
              ref={(el) => (cardRrefs.current[index] = el)}
            >
              <div className={`section section${index + 1}`}>
                <div className="container">
                  <div className="card_box">
                    <div className="image">
                      <img src={val.img} alt="" />
                    </div>

                    <div className="content">
                      <h4>{val.title}</h4>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
