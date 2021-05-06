// fetch request
const astros = fetch('./data/universe.json').then((response) =>
  response.json()
);

export default await astros;
