interface Book{
    title: string;
    author : string;
    publicationYear : number;
}

function getPublicationYearSum(books :Book[]):number{
    return books.reduce((sum,book)=> sum+book.publicationYear,0)
}

const books: Book[]=[
    {title:"book1",author:"author 1",publicationYear:1999},
    {title:"book2",author:"author 1",publicationYear:2000},
    {title:"book3",author:"author 2",publicationYear:2001},
    {title:"book4",author:"author 3",publicationYear:2012}
]
console.log(getPublicationYearSum(books))