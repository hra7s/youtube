
const GOOGLE_API_KEY="AIzaSyBMYjR-6tIFYkPfn2J2RR-8HIDqDGWPZqc"

// export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+GOOGLE_API_KEY

export const YOUTUBE_VIDEOS_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
GOOGLE_API_KEY;
console.log(YOUTUBE_VIDEOS_API)


