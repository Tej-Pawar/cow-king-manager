const line = document.getElementById("ab");
// const a=document.getElementById("line")
const url = `http://localhost:8000/animals/tejaspawr073@gmail.com `;

async function getapi(urll) {

    const response = await fetch(urll);

    var data = await response.json();
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");

        div.innerHTML = `<div class="farms">
        <img src="./img/1280-14191456.jpg" alt="">
        <div class="show-ani-box">
            <div class="ani-details">
                <h4>  ${data[i].animalName}</h4>
                <p><b>Tag:</b> ${data[i].tagNumber}</p>
                <p><b>Gender:</b> ${data[i].gender}</p>
                <p><b>born date:</b> ${data[i].birthdate}</p>
                <p><b>Status</b></p>
            </div>
            <div class="btn-menu">
                <input type="button" value="Edit" class="menu-btn">
                <input type="button" value="Delete" class="menu-btn ss">
                <a href="show-event"><input type="button" value="Add event" class="menu-btn ss"></a>

            </div>
        </div>
    </div>`
        line.append(div);
    }
}
getapi(url);