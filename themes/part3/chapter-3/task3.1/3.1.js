const arrUsers = ["iliakan", "remy", "no.such.users"];

async function getUsers(names) {
  let eachItem = [];
  try {
    for (let key of names) {
      const res = await fetch(`https://api.github.com/users/${key}`, {
        key: "USERNAME",
        headers: {
          accept: "application/vnd.github+json",
        },
      });
      if (res.ok) {
        return null;
      } else {
        let date = res.json();
        eachItem.push(date);
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }

  return eachItem;
}

getUsers(arrUsers);
