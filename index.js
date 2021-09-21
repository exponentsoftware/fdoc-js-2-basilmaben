const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

function Q1(arr) {
    return arr.map(country => [ capitalize(country), country.slice(0, 3), country.length ])
}
 console.log(Q1([
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]))


function Q2_scoresGreaterThan85() {
    return users.filter(x => x.scores > 85)
}

console.log(Q2_scoresGreaterThan85(users));

function Q2_addUser(name='', scores=-1, skills=[], age=-1) {
    if(users.filter(x => x.name == name).length > 0) return false;
    users.push({
        name: name,
        scores: scores,
        skills: skills,
        age: age
    });
    return 'User added';
}

console.log(Q2_addUser('Basil', 95, ['React, Node, Express'], 23))
console.log(users)


function Q2_addUserSkill(name, skill) {
    let user = users.filter(x => x.name === name);
    if(user.length == 0) return false;
    user[0].skills.push(skill);
    return true;
}

console.log(Q2_addUserSkill('Basil', 'HTML'))
console.log(users)


function Q2_editUser(name) {
    let user = users.filter(x => x.name == name);
    if (user.length == 0) return false;
    user = user[0];
    Object.keys(data).forEach(k => user[k] = data[k]);
    return true;
       
}