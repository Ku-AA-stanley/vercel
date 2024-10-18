// pages/index.js
import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <iframe
        width="100%"
        height="100%"
        src="https://007f-59-125-142-166.ngrok-free.app"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="camp3"
        style={styles.iframe}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "100vw", // 設置寬度為視口寬度的100%
    height: "100vh", // 設置高度為視口高度的100%
    margin: 0,
    padding: 0,
    overflow: "hidden", // 隱藏瀏覽器滾動條
  },
  iframe: {
    border: "none", // 移除邊框
    overflow: "auto", // 確保 iframe 可以滾動
    width: "100%",
    height: "100%",
  },
};

export default HomePage;
