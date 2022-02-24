const fakeUserData = {
  id: Date.now(),
  email: 'diego@email.com',
  firstName: 'Diego',
  lastName: 'Sousa',
}



export const fetchUser = (email, password) => new Promise((resolve, reject) => {
  console.log('fetching Data  database')
  setTimeout(() => {
      try {

          resolve(fakeUserData)
      } catch (error) {
          reject(error);
      }
  }, 1000);
});