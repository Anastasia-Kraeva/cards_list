export interface IPost {
  id: number,
  title: string,
  body: string,
}

export interface IPhoto {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export interface ICard {
  post: IPost;
  photo?: IPhoto;
  isFavorite: boolean;
}

export interface IToggleIsFavorite {
  id: number;
  value: boolean;
}
