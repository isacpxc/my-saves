import { useEffect, useState } from "react";
import "./app.css";
import Header from "./Header";
import "./reusable.css";
// import axios from "axios";
import dataVideos from "./data.json";

function App() {
  // useEffect(() => {
  //   axios.get(`https://img.youtube.com/vi/vh1ZwFbHUug/0.jpg`).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const [tagVerify, setTagVerify] = useState(0);

  function handleTagVerify() {
    setTagVerify(tagVerify + 1);
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
        <a href="" className="link-tab selected">
          instagram
        </a>
        <a href="" className="link-tab">
          youtube
        </a>
        <a href="" className="link-tab">
          media
        </a>
        <a href="" className="link-tab">
          linkedin
        </a>
      </nav>

      {/* ===========================content=========================== */}
      <main className="container test-bg">
        {Object.values(dataVideos.youtube).map((key) => {
          // console.log(key);
          let id = key.id;
          let title = key.title;
          let tags = key.tags;
          let countTag = 0;
          return (
            <div className="item-list">
              <div
                className="img-show"
                style={{
                  background: `url(https://img.youtube.com/vi/${id}/0.jpg)`,
                }}
              ></div>
              <div className="info-show d-flex">
                <span className="title-video">Title: {title}</span>
                <span className="title-video">
                  Tags:{" "}
                  {tags.map((tag) => {
                    countTag++;
                    // handleTagVerify();
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
        {/* {JSON.stringify(dataVideos)} */}
      </main>
      {/* =============================================================== */}
    </>
  );
}

export default App;
