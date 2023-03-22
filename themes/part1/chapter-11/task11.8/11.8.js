// 11.8.1
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json") // (3)
  .catch(console.log); // Error: 404

// 11.8.2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log(
          "Такого пользователя не существует, пожалуйста, повторите ввод."
        );
      } else {
        throw err;
      }
    }
  }

  console.log(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();

//11.8.3
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => console.log(result));
}

f();
