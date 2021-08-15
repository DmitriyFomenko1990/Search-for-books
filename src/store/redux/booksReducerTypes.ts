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

