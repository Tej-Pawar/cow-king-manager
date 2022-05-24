if (window.location.href.includes("/welcome-farm")) {

    const farmInfo = JSON.parse(window.localStorage.getItem("farmInfo"))

    console.log(farmInfo);
    if (farmInfo && farmInfo.farmName) {
        const firstname = document.getElementById("farmName");
        firstname.innerText = farmInfo.farmName
        console.log(firstname)

    }
}


if (window.location.href.includes("/addfarm")) {

    document.getElementById("addFormBtn").addEventListener("click", (e) => {
        // e.preventDefault();
        const farmName = document.getElementById("farmName").value;
        const farmDesc = document.getElementById("farmDesc").value;
        const farmInfo = { farmName, farmDesc }
        window.localStorage.setItem("farmInfo", JSON.stringify(farmInfo))
        console.log('e:', farmInfo)

        // const temp = { farmName, farmDesc }
        // const farmInfo = JSON.parse(window.localStorage.getItem("farmInfo"))

        // window.localStorage.setItem("farmInfo", JSON.stringify([...farmInfo, temp]))
    })

}