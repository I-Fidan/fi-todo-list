let btn = document.querySelector(".add");
let input = document.querySelector(".input-text");
let list = document.querySelector("ul")
let btn2 = document.querySelector(".button2");
let img = document.querySelector(".img")
const listsDiv = document.querySelector('.list_ul')
let divFourth = document.querySelector(".divFourth")
const sortBy = document.querySelector(".sort")
let arr = [];
document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const listsDiv = document.querySelector('.list_ul')
        let li = document.createElement("li");
        li.classList.add("toList_ul_item", "item");
        li.setAttribute('draggable', "true");
        li.innerHTML = `${input.value}<button class="button2"> <img src="/img/x.svg"></button>`;
        list.appendChild(li);
        console.log(list)
        input.value = '';
        divFourth.style.display = "none";
        listsDiv.style.display = "flex";
        if (listsDiv.childElementCount > 4) {
            listsDiv.style.overflowY = 'scroll';
            listsDiv.style.height = '20vw';
            listsDiv.scrollTop = listsDiv.scrollHeight;
        }
        clearList();
    }

});
btn.addEventListener("click", () => {
    divFourth.style.display = "flex";
})
btn.addEventListener("click",() => {
    divFourth.style.display = "flex";
    input.focus();
})
function clearList() {
    const btnX = document.querySelectorAll(".button2");
    const list = document.querySelectorAll('.toList_ul_item');
    btnX.forEach((item, index) => {
        item.addEventListener('click', () => {
            list[index].remove();
            if (listsDiv.childElementCount == 0) {
                divFourth.style.display = "flex";
            } else if (btnX.length < 4) {
                listsDiv.style.overflowY = 'hidden';
                listsDiv.style.height = null;
            }
        })
    })
}
document.querySelector('.sortAsc').addEventListener("click", sortAsc)

function sortAsc() {
    arr = []
    const list = document.querySelectorAll('.toList_ul_item')
    list.forEach(item => {
        arr.push(item.innerHTML)

    })
    arr.sort()
    console.log(arr)
    list.forEach((item, index) => {
        item.innerHTML = arr[index]
    })
    document.querySelector('.sortAsc').style.display = 'none'
    document.querySelector('.sortDesc').style.display = 'block'
    clearList();

}


document.querySelector('.sortDesc').addEventListener('click', sortDesc)

function sortDesc() {
    arr = []
    const list = document.querySelectorAll('.toList_ul_item')
    list.forEach(item => {
        arr.push(item.innerHTML)

    })
    arr.sort().reverse()
    list.forEach((item, index) => {
        item.innerHTML = arr[index]
    })
    document.querySelector('.sortAsc').style.display = 'block'
    document.querySelector('.sortDesc').style.display = 'none'
    clearList();

}

const drag = document.querySelector('.wrapper')
new Sortable(drag, {
    animation: 250
})