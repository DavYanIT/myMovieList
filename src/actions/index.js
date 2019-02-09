import { getFirestore } from 'redux-firestore';

export function renderWithStatus(status) {return {type: RENDER_WITH_STATUS, payload: status}}
export function renderGroup(group) {return {type: RENDER_GROUP, payload: group}}
export function renderOfKind(kind) {return {type: RENDER_OF_KIND, payload: kind}}
export function setSearchField(field) {return {type: SET_SEARCH_FIELD, payload: field}}
export function setSearchTerm(term) {return {type: SET_SEARCH_TERM, payload: term}}

export function updateMovie(id, movie) {
    getFirestore().collection('movies').doc(id).update(movie)
}

export function addMovie(movie) {
    getFirestore().collection('movies').add({...movie, addedAt: new Date(), status: 'notWatched'})
}

export function deleteMovie(id) {
    getFirestore().collection('movies').doc(id).delete()
}

export const RENDER_GROUP = 'RENDER_GROUP';
export const RENDER_WITH_STATUS = 'RENDER_WITH_STATUS';
export const RENDER_OF_KIND = 'RENDER_OF_KIND';
export const SET_SEARCH_FIELD = 'SET_SEARCH_FIELD';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';