const books = [
    {
        title: 'Book',
        author: 'Name'
    }, 
    {
        title: 'Book2',
        author: 'Name2'
    }
];
const getTheTitles = function(item) {
    const name = [];
    let len = item.length - 1;
    for(let i = 0; i <= len; i++){
        name.push(item[i].title);
    };
    return name;
};
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
