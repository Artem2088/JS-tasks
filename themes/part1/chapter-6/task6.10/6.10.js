// 6.10.1
// Ответ: null.

// 6.10.2
// Ответ: Вася.

// 6.10.3
// Ответ: undefined.

// 6.10.4
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 6.10.5
askPassword(user.login.bind(user, true), user.login.bind(user, false));
