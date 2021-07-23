import { firebaseDatabase } from './firebase.js'

class CocktailRepo {
  readCocktails(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cocktails`)
    ref.on('value', snapshot => {
      const data = snapshot.val()
      data && onUpdate(data)
    })
    return () => {
      ref.off()
    }
  }

  saveCocktail(userId, cocktail) {
    firebaseDatabase.ref(`${userId}/cocktails/${cocktail.idDrink}`).set(cocktail)
  }

  removeCocktail(userId, cocktail) {
    firebaseDatabase.ref(`${userId}/cocktails/${cocktail.idDrink}`).remove()
  }
}

export default new CocktailRepo()
