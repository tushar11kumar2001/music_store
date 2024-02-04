export async function getSongs(singerName = "sonu nigam") {
    try {
        const URL = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
        const data = await fetch(URL);
        const json = await data.json();
        // console.log(json);
        return json;
    }
    catch (err) {
        throw new Error("something went wrong" + err.message);
    }
}
// getSongs();
