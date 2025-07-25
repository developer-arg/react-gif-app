    export const getGifts = async (category) => {
        
        //console.log(category);

        const request = await fetch(`https://api.giphy.com/v1/gifs/search?limit=20&api_key=DXt0Gn2Sp6Zwa0yhNkbuJjsgEilNxYxX&q=${category}`);
        const {data} = await request.json();
        const gifs = data.map(data => ({
            id: data.id,
            title: data.title,
            url: data.images.downsized_medium.url
        }))

        return gifs;
    }