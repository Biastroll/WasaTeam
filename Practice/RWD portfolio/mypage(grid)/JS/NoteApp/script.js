const content = document.getElementById('content');
const date = document.getElementById('date');
const time = document.getElementById('time');
const addedBtn = document.getElementById('addedBtn');
const deletedBtn = document.getElementById('deletedBtn');

const listContent = [];

function render(){
    let htmlStr = '';

    listContent.forEach(function (item){
        htmlStr = htmlStr + `
        <div class="item">
                <div>
                    <p>內容: ${item.content}</p>
                    <p>時間: ${item.date} ${item.time}</p>
                </div>
            </div>
        `
    });
    list.innerHTML = htmlStr;
}

addedBtn.addEventListener('click', function(){
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    });

    // let htmlStr = '';

    // listContent.forEach(function (item){
    //     htmlStr = htmlStr + `
    //     <div class="item">
    //             <div>
    //                 <p>內容: ${item.content}</p>
    //                 <p>時間: ${item.date} ${item.time}</p>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // });
    // list.innerHTML = htmlStr;
    render();
})

deletedBtn.addEventListener('click', function(){
    listContent.shift();

    // let htmlStr = '';

    // listContent.forEach(function (item){
    //     htmlStr = htmlStr + `
    //     <div class="item">
    //             <div>
    //                 <p>內容: ${item.content}</p>
    //                 <p>時間: ${item.date} ${item.time}</p>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // });
    // list.innerHTML = htmlStr;
    render();
})


// 如果有欄位沒填，要怎麼檢查?
// 在哪裡 if ?