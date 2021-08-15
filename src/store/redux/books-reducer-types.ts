interface VolumeInfoTypes {
    title: string;
    subtitle: string;
    authors: string[];
}
interface ImageLinksTypes {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}
export interface BookType {
    volumeInfo: VolumeInfoTypes;
    imageLinks: ImageLinksTypes;
    id: string;
    description: string;
    categories: string[];
}
export interface BookStateType {
    filter: string;
    category: "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry";
    sort: "relevance" | "newest";
    currentPage: number;
    totalPages: number;
    isServerError: false;
    books: [] | BookType[];
};


