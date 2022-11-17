export const filterAlbums = (albums, query) => {
    return albums.filter((album) => album.title.toLowerCase().includes(query.toLowerCase()))
};
