export async function getSongs(singerName:string="sonu nigam"){
    try{
        const URL = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
        const data:Response = await fetch(URL);
        const json = await data.json();
        // console.log(json);
        return json;
    }
    catch(err:any){
        throw new Error("something went wrong"+err.message);
    }
  
    
}

// getSongs();