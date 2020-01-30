export const fetchMovie = async (query) => {
    try {
        const result = await fetch(`http://www.omdbapi.com/?apikey=db4253d6&i=${query}`)
        return result.json();
    } catch (error) {
        console.log(error)
    }
}