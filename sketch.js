function showContent(type) {
  const display = document.getElementById('display'); // 文字內容區域
  const iframe = document.getElementById('iframeDisplay'); // iframe 元素

  // 隱藏 iframe
  iframe.style.display = 'none';

  // 顯示文字內容
  display.style.display = 'block';

  if (type === '首頁') {
    display.innerHTML = "<h2>首頁</h2><p>歡迎來到教學互動選單！</p>";
  } else if (type === '自我介紹') {
    display.innerHTML = "<h2>自我介紹</h2><p>大家好我是推推><</p>";
  } else if (type === '第一周作品') {
    // 第一周作品以 iframe 顯示
    showIframe('https://www.tku.edu.tw/');
  } else if (type === '第二周作品') {
    // 第二周作品以 iframe 顯示
    showIframe('https://www.et.tku.edu.tw/');
  } else if (type === '第三周作品') {
    display.innerHTML = "<h2>第三周作品</h2><p>這裡是第三周作品的內容。</p>";
  } else if (type === 'quiz') {
    // 測驗卷內容
    display.innerHTML = `
      <div class="quiz">
        <h2>小測驗：你學會了嗎？</h2>

        <div class="question">
          <p>1. HTML 中用來放置網站主要內容的標籤是？</p>
          <label><input type="radio" name="q1"> &lt;body&gt;</label><br>
          <label><input type="radio" name="q1"> &lt;head&gt;</label><br>
          <label><input type="radio" name="q1"> &lt;div&gt;</label>
        </div>

        <div class="question">
          <p>2. JavaScript 可以做到什麼功能？</p>
          <label><input type="radio" name="q2"> 只能畫畫</label><br>
          <label><input type="radio" name="q2"> 動態控制網站行為</label><br>
          <label><input type="radio" name="q2"> 更換背景音樂</label>
        </div>

        <button onclick="alert('送出成功！稍後會顯示分數唷！')">送出</button>
      </div>
    `;
  } else if (type === 'video') {
    // 教學影片內容
    display.innerHTML = `
      <h2>教學影片</h2>
      <video controls style="width: 80%; height: auto; margin: 20px auto; display: block;">
        <source src="https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%882024/B2/week8/20250407_111447.mp4" type="video/mp4">
        您的瀏覽器不支援影片播放。
      </video>
    `;
  }
}

function showIframe(url) {
  const display = document.getElementById('display'); // 文字內容區域
  const iframe = document.getElementById('iframeDisplay'); // iframe 元素

  // 隱藏文字內容
  display.style.display = 'none';

  // 顯示 iframe
  iframe.style.display = 'block';

  // 設定 iframe 的來源網址
  iframe.src = url;

  console.log(`Iframe source set to: ${url}`); // 用於除錯
}