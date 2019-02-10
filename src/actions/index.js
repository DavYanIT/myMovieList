import { getFirestore } from 'redux-firestore';

export const action = (type, payload) => ({type, payload})

export function updateMovie(id, movie) {
    getFirestore().collection('movies').doc(id).update(movie)
}

export function addMovie(movie) {
    getFirestore().collection('movies').add({...movie, addedAt: new Date(), status: 'notWatched'})
}

export function deleteMovie(id) {
    getFirestore().collection('movies').doc(id).delete()
}