// 1 - instalando o axios
console.log(axios);

// 2 - primeiro request
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      //   4 - definindo headers
      //   Ver request headers
      {
        headers: {
          "content-type": "application/json",
          custom: "header",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

getData();

// 3 - imprimir dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    container.appendChild(div);
  });
};

printData();

// 5 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   axios.post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: titleInput.value,
//       body: bodyInput.value,
//       userId: 1,
//     }),
//   });
// });

// 7 - com custom instance
form.addEventListener("submit", (e) => {
  e.preventDefault();

  postsFetch.post("/posts", {
    body: JSON.stringify({
      title: titleInput.value,
      body: bodyInput.value,
      userId: 1,
    }),
  });
});
