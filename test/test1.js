ReactDOM.render(ReactDOM.createElement("h1", {
    onclick: add = function add() {
        return alert(1);
    }
}, "Hello, world!"), ReactDOM.createElement("span", {
    class: "ni",
    id: "x",
    "data-id": "123",
    style: "color:red;font-size:12;fontWeight:700;"
}), document.getElementById("root"));