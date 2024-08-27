const apiKey = import.meta.env.VITE_APP_API_KEY;

export const apiHeaders = {
    "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    "x-rapidapi-key": apiKey
}

export const mikeWilliamsId: number = 295424908;

export type post = {
    id: string
    caption: {
        text: string,
        hashtags: string[]
    },
    comment_count: number,
    like_count: number,
    play_count?: number,
    video_url?: string,
    thumbnail_url: string,
    carousel_media?: {
        carousel_parent_id: string, // De ser necesario
        is_video: boolean,
        thumbnail_url: string, // Foto comun a todos
        video_url?: string // Presente unicamente si la publicacion es un video
    }[]
}
