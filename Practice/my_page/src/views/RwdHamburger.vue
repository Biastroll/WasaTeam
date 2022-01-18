<template>
    <div class="box">
        <div class="item_l">
            <img class="item_show" src="../assets/RWD-ham_menu(default).png">
        </div>
        <div class="box_item">
            <img class="item_img" src="../assets/RWD-ham_menu(default).png">
        </div>
        <div class="box_item">
            <img class="item_img" src="../assets/RWD-ham_menu(active).png">
        </div>
    </div>
</template>

<style scoped>
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
    width: 60%;
    height: initial;
}
.box_item {
    flex: 1 0 calc(100% / 12 * 6);
}
img {
    width: calc(100% / 2);
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
}
</style>