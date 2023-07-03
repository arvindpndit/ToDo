function parsedResponse(data) {
  console.log(data);
}

function getTheDataResponse(res) {
  res.json().then(parsedResponse);
}

function addTodo() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("description").value;

  title &&
    content &&
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTheDataResponse);
}
