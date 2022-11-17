var books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

    //----------------------------------q1------------------------------------------

/*console.log(" tous les livres ont été empruntés au moins une fois ?")
    
var rented = books.map(books=>books.rented);
var title = books.map(books=>books.title)
function books_rented(rented){
  for (i = 0; i < rented.length; i++)
  {
      if (rented[i]==0){
        return console.log("")
      }
  }
  console.log("tous les livres ont été emprunté une fois");
}
books_rented(rented); */
    
    //----------------------------------q2------------------------------------------
    /*console.log(" Quel est livre le plus emprunté ?")
    
    
    let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);


    console.log(mostRented)  */
 

        //----------------------------------q3------------------------------------------

        /*console.log(" Quel est livre le moins emprunté ?")

        let mostRented = books.reduce((max, book) => max.rented < book.rented ? max : book);


        console.log(mostRented) */



            //----------------------------------q4------------------------------------------
             
           /* console.log(" Trouve le livre avec l'ID: 873495 ")

            const indice = books.filter(books => books.id === 873495);
            
            console.log(indice); */



                //----------------------------------q5------------------------------------------

                /*console.log("Supprime le livre avec l'ID: 133712")

                const indice = books.filter(books => books.id === 133712);
                for (let i = 0; i < books.length; i++){
                }
                    console.log(indice) */


                    //----------------------------------q6------------------------------------------
                    console.log("Trier par ordre alphabétique sans l'ID: 133712")

                   books.sort((a, b) => (a.title > b.title ? 1 : -1))
     
                    console.log(books)

