import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";

export async function getAllSongs(singerName: string = "sonu nigam") {
    const data = await getSongs(singerName);
    const singers: Singer[] = [];
    data.results.map((obj: any) => {
        const singer: Singer = new Singer(obj['artistName'], obj['trackName'], obj['artworkUrl100'], obj['previewUrl'])
        singers.push(singer);
    })
    // console.log("data", singers);
    return singers;
}

