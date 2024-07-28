import { useEffect } from "react";
import "./app.css";
import Header from "./Header";
import "./reusable.css";
import axios from "axios";
import dataVideos from "./data.json";

function App() {
  // useEffect(() => {
  //   axios.get(`https://img.youtube.com/vi/vh1ZwFbHUug/0.jpg`).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

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
        <div className="item-list">
          <div
            className="img-show"
            style={{
              background: `url(https://img.youtube.com/vi/${dataVideos.youtube.video_1.id}/0.jpg)`,
            }}
          ></div>
          <div className="info-show d-flex">
            <span className="title-video">
              Title: {dataVideos.youtube.video_1.title}
            </span>
            <span className="title-video">
              Tags:{" "}
              <a href="" className="high-tag">
                #{dataVideos.youtube.video_1.tags[0]}
              </a>
              ,{" "}
              <a href="" className="high-tag">
                #{dataVideos.youtube.video_1.tags[0]},
              </a>
            </span>
          </div>
        </div>
      </main>
      {/* =============================================================== */}
    </>
  );
}

export default App;
