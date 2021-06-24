const numbers = [1, -1, 2, 3];

// Filtering and Mapping
const html = `<ul>${numbers.filter(n => n >= 0).map(n => `<li> ${n} </li>`).join('')}</ul>`;

console.log(html);