let loadBtn = document.querySelector(".load");

loadBtn.addEventListener("click", Request);

function Request() {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then((response) => {
            console.log("Response: ", response);
            return response.json()
        })
        .then((data) => {
            console.log("Data: ", data);
            var list = document.querySelector(".list");


            // var counter = 0;
            var elem = data.map(item => {
                loadBtn.setAttribute("disabled", "true");

                // counter++
                // localStorage.setItem("user" + counter, item.name + ' // ' + item.id + ' // ' + item.email);

                // console.log(localStorage.getItem("user" + counter, item.name + ' // ' + item.id + ' // ' + item.email))


                return '<li>' + "ID: " + item.id + '  Name: ' + item.name + '  E-mail: ' + item.email + '</li>'
            })
            list.insertAdjacentHTML('afterbegin', elem.join(' '));
            let counter = 1;

            for (let i = 0; i < 10; i++) {
                localStorage.setItem(`user${counter++}`, data[i].name);
            }
        })

        .then(() => {
            let itemList = document.querySelectorAll(".list li");
            console.log(itemList);

            for (let i = 0; i < 10; i++) {
                // itemList[i].addEventListener("click", () => {
                //     itemList[i].remove();
                //  localStorage.removeItem(`user${i}`);
                itemList[i].onclick = function () {
                    itemList[i].remove();
                    localStorage.removeItem(`user${i}`);
                }

            }
        })
}





