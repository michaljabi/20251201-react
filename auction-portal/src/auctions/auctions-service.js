/*

Docelowo będziemy chcieli tak:

const response = await fetch('http://localhost:3000/auctions');
const data = await response.json();
console.log(data);

na razie - zostawiamy getAll() statycznie....
*/

// const backendEndpoint = 'http://localhost:3000/auctions';

export const auctionService = {
  getAll() {
    return [
      {
        id: "1",
        title: "Części do aparatu",
        imgUrl: "https://picsum.photos/id/36/600/600",
        description: "Jakiś opis",
        price: 2000,
      },
      {
        id: "2",
        title: "Mac Book",
        imgUrl: "https://picsum.photos/id/48/600/600",
        description: "Używany - ale sprawny",
        price: 4000,
      },
    ];
  },
  getOne(id) {
    console.log(id);
  },
  addOne(auction) {
    console.log(auction);
  }
};
