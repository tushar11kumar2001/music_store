import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";
export async function getAllSongs(singerName = "sonu nigam") {
    const data = await getSongs(singerName);
    const singers = [];
    data.results.map((obj) => {
        const singer = new Singer(obj['artistName'], obj['trackName'], obj['artworkUrl100'], obj['previewUrl']);
        singers.push(singer);
    });
    // console.log("data", singers);
    return singers;
}
