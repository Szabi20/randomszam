function getRandomOrder(szam) {
   
    const copy = szam.slice();
    const result = [];
  
    while (copy.length > 0) {
      
      const randomszam = Math.floor(Math.random() * copy.length);
     
      result.push(copy[randomszam]);
      
      copy.splice(randomszam, 1);
    }
  
    return result;
  }
  
  // Tesztelés
  const sz = [1, 2, 3, 4, 5,6,7];
  const randomsz = getRandomOrder(sz);
  
  console.log(randomsz);