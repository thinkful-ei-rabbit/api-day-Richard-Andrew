const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Richdrew';

function getItems(){
  return fetch(`${BASE_URL}/items`);
}

function createItem(name){
  let newItem = {
    name: name,
  };
  let newItemJSON = JSON.stringify(newItem);
  return fetch(`${BASE_URL}/items}`, {method:'POST', headers:{'Content-Type': 'application/json'}, body: newItemJSON});
}

export default {
  getItems,
  createItem,
};
