import { unsplash } from '@/services/unsplash';

const ITEMS_PER_PAGE = 30;

export const fetchImages = (query: string, page: number) =>
  unsplash.search.getPhotos({ perPage: ITEMS_PER_PAGE, page, query });
