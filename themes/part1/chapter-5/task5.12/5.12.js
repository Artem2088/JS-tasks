// 5.12.1
let user = {
  name: "Василий Иванович",
  age: 35,
};

let newUser = JSON.parse(JSON.stringify(user));

console.log(newUser);

// 5.12.2
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
