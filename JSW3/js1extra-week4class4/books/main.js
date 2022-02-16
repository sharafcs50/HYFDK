console.log('loaded');

const books = [
    {
        id: 'book_1',
        title: 'awesome book',
        language: 'English',
    },
    {
        id: 'book_2',
        title: 'Cool Book',
        language: 'English',
    },
    {
        id: 'book_3',
        title: 'hardy boys',
        language: 'English',
    }
];

const bookImages = {
    'book_1': 'img/book_1.jpg',
    'book_2': 'img/book_3.jpg',
    'book_3': 'img/book_1.jpg',
}
const ulElement = document.querySelector('ul');
console.log(ulElement);

function addBooks() {
    for(let i = 0; i<books.length; i++){
        const li = document.createElement('li');
        li.innerHTML = books[i].title;

        const img = document.createElement('img');
        const bookId = books[i].id;
        const imgPath = bookImages.bookId;
        console.log(imgPath);
        console.log(bookImages); 
        var keys = Object.keys(bookImages)[i];
        console.log(keys);
        // img.src = bookImages[bookId] // IMPORANT METHOD 1
        img.src = bookImages[keys]  // METHOD 2:IMPORTANT - HOW TO READ STRING KEY
        ulElement.appendChild(img);
        ulElement.appendChild(li);
    }
}

addBooks();