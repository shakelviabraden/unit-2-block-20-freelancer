const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

const element = document.getElementById('root')

//make h1 element, insert text, attach to div
const header = document.createElement('h1')
header.innerText = 'FREELANCERS'
element.appendChild(header)

//create ul, append to div
const ul = document.createElement('ul')
element.appendChild(ul)

users.forEach((user) => {
    const li = document.createElement('li');
    li.innerHTML = `name: ${user.name}, age: ${user.age}, occupation: ${user.occupation}`;
    ul.appendChild(li);
})
