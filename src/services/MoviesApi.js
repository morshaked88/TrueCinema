export const getMovies = async (query) => {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=db4253d6&s=${query}`);
        return res.json();
    } catch (err) {
        console.log(err)
    }
}
