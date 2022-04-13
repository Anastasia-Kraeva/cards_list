import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IPhoto, IPost} from '../models/interfaces';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({baseUrl: `https://jsonplaceholder.typicode.com/`}),
  endpoints: build => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number) => ({
        url: `posts`,
        params: {
          _limit: limit,
        }
      })
    }),
    fetchAllPhotos: build.query<IPhoto[], number>({
      query: (limit: number) => ({
        url: `photos`,
        params: {
          _limit: limit,
        }
      })
    })
  })
})
