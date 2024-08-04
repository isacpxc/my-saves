import { useEffect, useRef, useState } from "react";
import "./app.css";
import Header from "./Header";
import "./reusable.css";
import axios from "axios";
import dataVideos from "./data.json";
import imgInsta from "./img/instagram.jpg";

function App() {
  const [tagVerify, setTagVerify] = useState(0);
  const [ref, setRef] = useState("youtube");

  // function handleTagVerify() {
  //   setTagVerify(tagVerify + 1);
  // }

  useEffect(() => {
    const img = axios({
      url: "https://www.instagram.com/p/C9zFMxnR1dr/media/?size=m",
      headers: {},
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  function handleRef(tab) {
    const eTab = document.getElementsByClassName("link-tab");
    if (tab === "yt") {
      if (eTab[1].classList.contains("selected")) {
        eTab[1].classList.remove("selected");
      }
      eTab[0].classList.add("selected");
      setRef("youtube");
    }
    if (tab === "i") {
      if (eTab[0].classList.contains("selected")) {
        eTab[0].classList.remove("selected");
      }
      eTab[1].classList.add("selected");
      setRef("instagram");
    }
  }

  function isLengthMax(arr, i) {
    console.log("array é " + arr.length + " e i é " + i);
    if (arr.length === i) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <Header />
      <nav className="container">
        <a
          href=""
          className="link-tab selected"
          onClick={(e) => {
            e.preventDefault();
            handleRef("yt");
          }}
        >
          youtube
        </a>
        <a
          href=""
          className="link-tab"
          onClick={(e) => {
            e.preventDefault();
            handleRef("i");
          }}
        >
          instagram
        </a>
      </nav>

      {/* ===========================content=========================== */}
      <main className="container test-bg">
        <div
          className="item-list add-item hover-p"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <span>+</span>
        </div>
        {Object.values(dataVideos[ref]).map((key) => {
          let id = key.id;
          let title = key.title;
          let tags = key.tags;
          let countTag = 0;
          return (
            <div className="item-list">
              <div
                className="img-show hover-p"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    `https://www.youtube.com/watch?v=${id}`,
                    "_blank"
                  );
                }}
                style={
                  ref === "youtube"
                    ? {
                        background: `url(https://img.youtube.com/vi/${id}/0.jpg)`,
                      }
                    : {
                        background: `url(${imgInsta})`,
                      }
                  // background: `url(https://img.youtube.com/vi/${id}/0.jpg)`,
                  // background: `url(https://www.instagram.com/p/${id}/media/?size=l)`
                }
              ></div>
              <div className="info-show d-flex">
                <span className="title-video">Title: {title}</span>
                <span className="title-video">
                  Tags:{" "}
                  {tags.map((tag) => {
                    countTag++;
                    console.log(isLengthMax(tags, countTag));
                    return (
                      <a href={`#${tag}yt`} className="high-tag">
                        #{tag}
                        {isLengthMax(tags, countTag) ? "" : ","}
                      </a>
                    );
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </main>
      {/* =============================================================== */}
    </>
  );
}

export default App;
