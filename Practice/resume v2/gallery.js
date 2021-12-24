let items = Array.from(document.querySelectorAll('.gallery-item'));

items.forEach(data=>{
    data.onclick = function(){
        let src = this.getAttribute('src');
        // 取得屬性
        console.log(src);
        document.querySelector('.gallery-main').setAttribute('src',src);
        // 設定(賦予)屬性
        console.log(src);
    }
})