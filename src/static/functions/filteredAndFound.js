let x = {} // <-- removeable line
const check = (arg1, arg2) => arg1.toLowerCase().indexOf(arg2.toLowerCase())!=-1

function searchByGenre(genres, term) {
  x.in = 'genres' // <-- removeable line
  if (!genres) return false
  for(let genre of genres) {
    if (check(genre, term)) return true
  }
  return false
}

function searchByName(name, term) {
  x.in = 'name' // <-- removeable line
  if (name=='') return true
  if (check(name, term)) return true
  return false
}

export default (movies, filterProps, {field, term}) => {
  for (let key in filterProps) {
    if (filterProps[key] != 'all') {
      movies = movies.filter(m => m[key]==filterProps[key])
    }
  }

  movies = movies.filter(
    movie => field=='genre' ?
      searchByGenre(movie.genres, term) :
      searchByName(movie.name, term)
    )

  const {group, kind, status} = filterProps // <-- removeable line
  x = {group, kind, status, search: {term, in: x.in}, count: movies.length} // <-- removeable line
  console.clear() // <-- removeable line
  console.table(x) // <-- removeable line
  return movies
}
