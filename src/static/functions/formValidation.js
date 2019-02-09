export default ({name, links, group, kind, genres}) => {
  const errors = {}
  const linkArrayErrors = []
  const genreArrayErrors = []

  if (!name) errors.name = 'Enter a name'
  if (!group) errors.group = 'Select a group'
  if (!kind) errors.kind = 'Select a kind'

  if (links && links.length) {
    links.forEach((link, index) => {
      const linkErrors = {}

      if (!link.linkName) {
        linkErrors.linkName = 'Enter link\'s name'
        linkArrayErrors[index] = linkErrors
      }
      if (!link.linkAddress) {
        linkErrors.linkAddress = 'Enter link\'s address'
        linkArrayErrors[index] = linkErrors
      }
      if (linkArrayErrors.length) errors.links = linkArrayErrors
    })
  }

  if (genres && genres.length) {
    genres.forEach((genre, index) => {
      if (!genre) {
        genreArrayErrors[index] = 'Enter a genre or remove it'
        errors.genres = genreArrayErrors
      }
    })
  }

  return errors
}