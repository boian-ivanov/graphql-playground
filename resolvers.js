module.exports = {
  Query: {
    books: (_, __, { dataSources }) => dataSources.books,
    book: (_, { id }, { dataSources }) => dataSources.books.find(book => book.id === parseInt(id))
  },
  /*Mission: {
    // make sure the default size is 'large' in case user doesn't specify
    missionPatch: (mission, { size } = { size: 'LARGE' }) => {
      return size === 'SMALL'
        ? mission.missionPatchSmall
        : mission.missionPatchLarge
    },
  },*/
}