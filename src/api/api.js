export const GamesCategory = async (category) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=release-date`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "42c6745e43mshf95a75c3c8e31d2p1c295bjsne99577e2877e",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return;
    }
};

export const DetailGame = async (id) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "42c6745e43mshf95a75c3c8e31d2p1c295bjsne99577e2877e",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return;
    }
};