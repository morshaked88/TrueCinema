export const getMovies = async () => {
    try {
        const res = await fetch('http://www.omdbapi.com/?apikey=db4253d6&s=batman');
        return res.json();
    } catch (err) {
        console.log(err)
    }
}
