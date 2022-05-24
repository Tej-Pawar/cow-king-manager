const farmdata = document.getElementById("farmdeta");

const addanibtn = document.getElementById("addfarm");
const a = document.getElementById("a");
const url = "http://localhost:8000/farms/tejaspawr073@gmail.com";

async function getapi(urll) {

    const response = await fetch(urll);

    var data = await response.json();
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");

        div.innerHTML = `<div id="farm-info" class="farms">
        <img src="./img/1280-14191456.jpg" alt="">
        <div class="show-ani-box">
            <h4 id="farmName">${data[i].farmName}</h4>
            <div class="btn-menu">
                <input type="button" value="Edit" class="menu-btn">
                <input type="button" id="delete" value="Delete" class="menu-btn ss delete">
                <a href="./show-animal">
                <input type="button" id="addanibtn" value="Add animal" class="menu-btn ss ">
                </a>
            </div>
        </div>
    </div>`
        farmdata.append(div);
    }
}
getapi(url);



// for (let index = 0; index < del.length; index++) {
//     del[i].addEventListener("click", () => {
//         console.log("hello");
//     })

// }