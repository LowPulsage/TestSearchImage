declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: string;
  }
}

declare namespace Unspash {
  export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  }

  export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }

  export interface Tag {
    type: string;
    title: string;
    source: Source;
  }

  export interface User {
    name: string;
  }

  export interface Result {
    id: string;
    description: string;
    alt_description: string;
    urls: Urls;
    links: Links;
    tags: Tag[];
    user: User;
    height: number;
    width: number;
  }
}
