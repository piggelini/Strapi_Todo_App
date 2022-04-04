let todoTitle = document.querySelector("#todo-title");
let todoDescription = document.querySelector("#todo-descrip");
let user = document.querySelector("#user")
let password = document.querySelector("#password");

async function fetchData(URL) {
    let response = await fetch(URL);
    let data = await response.json();

    return data;
}

async function renderData() {

    let todos = await fetchData('http://localhost:1337/api/todos?populate=*');
    let todosContainer = document.getElementById("todos-container");

    todos.data.forEach(todo => {
        console.log(todo);
        let titleTodo = document.createElement("h4");
        let descript = document.createElement("p")

        titleTodo.innerText = todo.attributes.title;
        descript.innerText = todo.attributes.description;
        todosContainer.appendChild(titleTodo);
        todosContainer.appendChild(descript);

    });

}

let addTodo = async () => {
    let response = await axios.post("http://localhost:1337/api/todos", {
        data: {
            title: todoTitle.value,
            description: todoDescription.value
        }
    },
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        });
    document.reload;
    return response;
}

renderData();

let login = async () => {
    let { data } = await axios.post("http://localhost:1337/api/auth/local",
        {
            identifier: user.value,
            password: password.value
        });

    let token = data.jwt;
    sessionStorage.setItem("token", token);
    document.querySelector("strong").innerText = "Is logged in :)"
}

if (sessionStorage.getItem("token")) {
    document.querySelector("strong").innerText = "Is logged in :)"
}


