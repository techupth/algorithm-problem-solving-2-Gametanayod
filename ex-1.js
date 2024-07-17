function findStudentIndex(students, searchStudent) {
  let leftIndex = 0;
  let rightIndex = students.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (searchStudent == students[midIndex]) {
      return midIndex;
    } else if (searchStudent > students[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "John"
  )
);

// ตอบคำถามตรงนี้จ้า
// ต้องเข้าใจก่อนว่า algorithm ของ binary search ทำงานยังไง สมมุตว่าเริ่มต้นเรามีข้อมูล N ตัว และข้อมูลมีดารเรียงมาเรียบร้อยแล้ว เมื่อพบว่า index ของข้อมูลตัว
// ที่อยู่ตรงกลางนั้นน้อยกว่า ข้อมูลที่ต้องการหา ข้อมูลที่อยู่ก่อนหน้าตรงกลางจะถูกตัดทิ้งไปทั้งหมดเลย และจะทำการหาข้อมูลตรงกลางของข้อมูลชุดใหม่ที่มีค่าเท่ากับ N/2
// ดังนั้นทุกครั้งที่ทำการ search ข้อมูลจะทำการหายไปครึ่งนึง ซึ่งมีหลักการทางคณิตศาสตร์มารองรับที่ว่าถ้ามีจำนวนข้อมูลหายไปครึ่งนึง จนกระทั่งข้อมูลเหลือตัวสุดท้าย
// และไม่ทำการ binary serch หรือในกรณีที่แย่ที่สุด หรือที่เรียกว่า bigO ก็คือ log2(N) ซึ่งในโจทย์ใช้ binary search ในการหาจำนวน 8 ตัว
// ดังนั้นข้อมูลตัวแรกและตัวสุดท้าย จะเป็นตัวที่เป็นกรณีที่แย่ที่สุดจะใช้จำนวนในการหา = log2(8) = 3 ครั้งถ้วน
