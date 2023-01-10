// Graping elements from the browser using querySelectors
const el1 = document.querySelector('#menu .item span').innerHTML="<p><strong>christian</strong></p>";
const els = document.querySelector('div span')
// Displaying them in the console
console.log(el1.innerHTML);
console.log(els.innerHTML)