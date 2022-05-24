const an = document.getElementById("an");
const ac = document.getElementById("ac")
    // const url = `http://localhost:8000/animals/akshaygkadam@gmail.com `;

// async function getapi(urll) {

//     const response = await fetch(urll);

//     var data = await response.json();
//     for (let i = 0; i < data.length; i++) {
//         const div = document.createElement("div");

//         div.innerHTML = `<div class="farms">
//         <img src="./img/1280-14191456.jpg" alt="">
//         <div class="show-ani-box">
//             <div class="ani-details">
//                 <h4>  ${data[i].animalName}</h4>
//                 <p><b>Tag:</b> ${data[i].tagNumber}</p>
//                 <p><b>Gender:</b> ${data[i].gender}</p>
//                 <p><b>born date:</b> ${data[i].birthdate}</p>
//                 <p><b>Status</b></p>
//             </div>

//         </div>
//     </div>`
//         an.append(div);
//     }
// }
// getapi(url);
const ur = `http://localhost:8000/events/tejaspawr073@gmail.com `;

async function getapi(urll) {

    const response = await fetch(urll);

    var data = await response.json();
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");

        div.innerHTML = `<div class="farms" id="farm">
        <div class="event">
        <h2></h2>
        <h3>Event :${data[i].event}</h3>
        <p>Date :${data[i].date}</p>
        <p>note :${data[i].notes}</p>
    </div>
    </div>
    `
        ac.append(div);
    }
}
getapi(ur);