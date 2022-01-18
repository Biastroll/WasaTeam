<template>
    <div class="box">
        <div class="item_l">
            <img class="item_show" src="../assets/UIUX-form(web).png">
        </div>
        <div class="box_item">
            <img class="item_img" src="../assets/UIUX-form(web).png">
        </div>
        <div class="box_item">
            <img class="item_img" src="../assets/UIUX-form(mobile).png">
        </div>
        <div class="box_item">
            <img class="item_im component" src="../assets/UIUX-form-colors_component.png">
        </div>
        <div class="box_link">
            <a href="https://xd.adobe.com/view/6c80628c-7ad5-4ae9-98bf-bdc95d8b1070-39d3/?fullscreen" target="_blank">PC</a> & <a href="https://xd.adobe.com/view/bc5468b9-3b92-4bcd-a4d8-50f2ae5e789e-e907/?fullscreen" target="_blank">Mobile</a>
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
    /* gap: 10px; */
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
    flex: 1 0 calc(100% / 12 * 3);
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
    object-fit: initial;
}
.box_link {
    flex: 1 0 calc(100% / 12 * 12);
}
</style>