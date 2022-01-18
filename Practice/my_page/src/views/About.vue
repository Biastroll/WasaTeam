<template>
  <div class="about">
    <div class="contact">
      <h2 class="contact_title">聯絡方式: </h2>
      <div class="contact_content">
        <div class="email">
          <i class="far fa-envelope"></i>
          <div class="content">x12908@gmail.com</div>
        </div>
        <div class="mobile">
          <i class="fas fa-mobile-alt"></i>
          <div class="content">0928-467-370</div>
        </div>
        <div class="git">
          <i class="fab fa-github"></i>
          <div class="content">
            <img class="git_img" src="../assets/git_QRcode.png">
          </div>
        </div>
      </div>
    </div>
    <div class="objective">
      <h2 class="obj_title">期望應徵職位: </h2>
      <div class="job">網頁前端工程師</div>
    </div>
    <div class="intro">
      <div class="intro_content">嗨，我是 林育賢，中原大學電機系畢業，具備 HTML5 、 CSS3 及 JavaScript 網頁語言基本知識<br><small>透過 書籍 (《最完整跨平台網頁設計 : HTML + CSS + JavaScript + jQuery + Bootstrap + Google Maps 王者歸來》) 及網路(w3school、Youtube)自學，也在聯成電腦補習持續進修相關知識及UI課程。</small></div>
    </div>
    <div class="experience">
      <div class="education">
        <h2 class="edu_title">學歷</h2>
        <div class="edu_content">中原大學 電機工程學系 畢業 (2013.9 - 2017.6)</div>
      </div>
      <div class="work">
        <h2 class="work_title">工作經歷</h2>
        <div class="content_title">文件掃描人員  臺北市政府商業處檔案室 (2018.8 - 2021.12)</div>
        <div class="content_text">紙本公文掃描、上傳轉為電子檔，仔細檢視匯出之電子檔，確認具有足夠的閱讀方便性，包含圖檔清晰度、內容完整度及方向正確。</div>
        <div class="content_text">協助同事處理系統環境狀況及電腦狀況。</div>
      </div>
    </div>
    <div class="skills">
      <h2 class="skill_title">證照</h2>
      <div class="skill" id="skills">
        <div class="aca">
          <img class="aca_img" src="../assets/ACA_AI.jpg" alt="ACA_AI證照">
          <div>ACA_Illustrator</div>
        </div>
        <div class="aca">
          <img class="aca_img" src="../assets/ACA_PS.jpg" alt="ACA_PS證照">
          <div>ACA_Photoshop</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
  .about {
    width: 80%;
    margin: auto;
    margin-block: 1.2rem;
    padding-top: 1rem;
  }
  h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  .contact, .objective {
    margin-bottom: 20px;
  }  
  .contact_content {
    display: grid;
    grid-template-areas: 
      "email github"
      "mobile github";
  }
  .contact_content > div {
    box-sizing: border-box;
    margin-block: 10px;
    padding: 5px;
  }
  .email {
    grid-area: email;
  }
  .mobile {
    grid-area: mobile;
  }
  .git {
    grid-area: github;
  }
  i {
    font-size: 2.3rem;
    margin-block: 5px;
  }
  .content {
    width: 50%;
    margin-inline: auto;
    font-size: 1.5rem;
  }
  .git > img {
    width: 80%;
  }
  .job {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .intro {
    margin-block: 120px;
  }
  .intro_content {
    width: 90%;
    margin: auto;
    font-size: 1.8rem;
  }

  .experience {
    width: 80%;
    margin: auto;
    margin-block: 1.2rem;
    padding-top: 1rem;
  }
  .experience > div {
    margin-bottom: 20px;
  }
  .edu_content, .content_title {
    font-size: 1.5rem;
    width: 90%;
    margin: auto;
    font-weight: bold;
  }
  .work > div {
    margin-inline: auto;
  }
  .content_text {
    margin-top: 10px;
    width: 65%;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }

  .skills {
    margin-block: 1.2rem;
    padding-top: 1rem;
  }
  .skill {
    display: flex;
    margin-inline: 20px;
    gap: 10px;
  }
  img {
    width: 100%;
  }
</style>