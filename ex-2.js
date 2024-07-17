//ข้อนี้ใช้ binary search ไม่ต่างจากข้อ 1 ต่างกับที่การ access ข้อมูลเข้าไปยัง object

function findBookIndex(books, searchTitle) {
  let leftIndex = 0;
  let rightIndex = books.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (searchTitle === books[midIndex].title) {
      return midIndex;
    } else if (searchTitle > books[midIndex].title) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

console.log(
  findBookIndex(
    [
      { title: "A Tale of Two Cities", author: "Charles Dickens" },
      { title: "Brave New World", author: "Aldous Huxley" },
      { title: "Catch-22", author: "Joseph Heller" },
      { title: "Don Quixote", author: "Miguel de Cervantes" },
      { title: "Ender's Game", author: "Orson Scott Card" },
      { title: "Fahrenheit 451", author: "Ray Bradbury" },
      { title: "Gone with the Wind", author: "Margaret Mitchell" },
      { title: "Harry Potter", author: "J.K. Rowling" },
    ],
    "Gone with the Wind"
  )
);
