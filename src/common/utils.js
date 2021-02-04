export function compare(a, b) {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
}

export function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  return {
    full: today,
    day: parseInt(dd),
    month: parseInt(mm),
    year: parseInt(yyyy)
  };
}
