function createCalendar(elem, year, month) {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <table></table>
  
  `
  );
}

createCalendar();

// Вызов функции должен создать календарь для заданного
// месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей,
// где неделя – это <tr>, а день – это <td>.
// У таблицы должен быть заголовок с названиями дней недели,
// каждый день – <th>, первым днём недели должен быть понедельник.

// Например, createCalendar(cal, 2012, 9) сгенерирует в cal
// следующий календарь:
