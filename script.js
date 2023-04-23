const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

//   for(let i in library){
//     console.log(library[i].readingStatus)
//   }
  
  const numberOfBooksRead = () => {
    // write your code here
      let count =0;
      for(let i in library){
          if(library[i].readingStatus==true){
              count++;
          }
      }
      return count;
      
  };

 // console.log(numberOfBooksRead());
  
// Do not change the code below

alert(numberOfBooksRead());
