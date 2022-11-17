
var entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];


    //--------------------q 1----------------------------
    /*console.log("filtre des années 1970")
    const indice = entrepreneurs.filter(entrepreneurs => entrepreneurs.year <1980 && entrepreneurs.year >1970);
    console.log(indice);*/


    //----------------------q 2----------------------------
    /*console.log("nom et prenom")
    var col = entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`);

    console.log(col)*/


    //--------------------q 3----------------------------
    /* console.log("age aujourd'hui")
    let date = 2022 
    var col = entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last} ${date-entrepreneurs.year}`);
 
    console.log(col)*/

    //--------------------q 4----------------------------
      console.log("tri croissant de last")
    entrepreneurs.sort((a, b) => (a.last > b.last ? 1 : -1))

    console.log(entrepreneurs)
