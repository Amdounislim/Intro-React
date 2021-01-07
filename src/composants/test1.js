const userCard = {
    name: 'Oussema',
    address: 'Amsterdam'
  };
  
  export const address = userCard.address;
  
  export function getUserName() {
    alert(userCard.name) ;
  }
  
  export default userCard