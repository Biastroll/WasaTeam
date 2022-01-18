<template>
    <div class="box">
      <div class="item_l">
        <img class="item_show" src="../assets/UIUX-drinks(web).png">
      </div>
      <div class="box_item">
        <img class="item_img" src="../assets/UIUX-drinks(web).png">
      </div>
      <div class="box_item">
        <img class="item_img" src="../assets/UIUX-drinks(mobile).png">
      </div>
      <div class="box_item">
        <img class="item_img component" src="../assets/UIUX-drinks_component.png">
      </div>
      <div class="box_link">
        <a href="https://xd.adobe.com/view/a2916aef-71f4-4a82-8662-8ed98dadb73e-f7c2/?fullscreen" target="_blank">PC</a> & <a href="https://xd.adobe.com/view/17748988-d6f3-4c96-87fe-ea82d64d1870-4227/?fullscreen" target="_blank">Mobile</a>
      </div>
    </div>
</template>

<style scoped>
a {
  font-weight: bold;
  color: #2b95ff;
  text-decoration: none;
}
a:visited {
  color: #2b95ff;
}
.box {
    display: flex;
    flex-wrap: wrap;
    margin-block: 100px;
}
.item_l {
    flex: 1 0 calc(100% / 12 * 12);
    margin-bottom: 50px;
}
.item_show {
    width: 70%;
    height: initial;
}
.box_item {
    flex: 1 0 calc(100% / 12 * 2);
    margin: 0 20px 20px;
}
img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
}
.component {
    object-fit: contain;
}
.box_link {
    flex: 1 0 calc(100% / 12 * 12);
}
</style>
