<template>
    <div class="box">
      <div class="item_l">
        <img class="item_show" src="../assets/UIUX-Spotlife-1.png">
      </div>
      <div class="box_item">
        <img class="item_img" src="../assets/UIUX-Spotlife-1.png">
      </div>
      <div class="box_item">
        <img class="item_img" src="../assets/UIUX-Spotlife-2.png">
      </div>
      <div class="box_item">
        <img class="item_img" src="../assets/UIUX-Spotlife-3.png">
      </div>
      <div class="box_item">
        <img class="item_img component" src="../assets/UIUX-Spotlife-colors_component.png">
      </div>
      <div class="box_link">
        <a href="https://xd.adobe.com/view/86021d0c-c612-487e-a2de-7e57174d782f-d351/?fullscreen" target="_blank">App</a>
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
    border-radius: 10px;
}
.component {
    object-fit: contain;
}
.box_link {
    flex: 1 0 calc(100% / 12 * 12);
}
</style>