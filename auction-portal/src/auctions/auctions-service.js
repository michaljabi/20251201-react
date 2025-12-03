/*

Docelowo będziemy chcieli tak:

const response = await fetch('http://localhost:3000/auctions');
const data = await response.json();
console.log(data);

na razie - zostawiamy getAll() statycznie....
*/

const backendEndpoint = 'http://localhost:3000/auctions';
// https://vite.dev/guide/env-and-mode

export const auctionService = {
  async getAll() {
    const response = await fetch(backendEndpoint);
    if(response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Nie udało się pobrać aukcji')
  },
  getOne(id) {
    console.log(id);
  },
  addOne(auction) {
    console.log(auction);
  }
};
