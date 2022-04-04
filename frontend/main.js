let todoTitle = document.querySelector("#todo-title");
let todoDescription = document.querySelector("#todo-descrip");

async function fetchData(URL) {
    let response = await fetch(URL);
    let data = await response.json();

    return data;
}

async function renderData() {

    let todos = await fetchData('http://localhost:1337/api/todos?populate=*');
    let todosContainer = document.getElementById("todos-container");

    todos.data.forEach(todo => {
        let titleTodo = document.createElement("h4");
        let descript = document.createElement("p")

        titleTodo.innerText = todo.attributes.title;
        descript.innerText = todo.attributes.description;
        todosContainer.appendChild(title);
        todosContainer.appendChild(descript);

    });

}

let addTodo = async () => {
    let response = await axios.post("http://localhost:1337/api/todos", {
        data: {
            name: todoTitle.value,
            price: todoDescription.value
        }
    },
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        });

    return response;
}

renderData();


