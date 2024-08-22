// // features/posts/postsApi.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const customBaseQuery = fetchBaseQuery({
//   baseUrl: 'https://jsonplaceholder.typicode.com/',
// });

// export const postsApi = createApi({
//   reducerPath: 'postsApi',
//   baseQuery: async (args, api, extraOptions) => {
//     try {
//       const result = await customBaseQuery(args, api, extraOptions);
//       if (result.error) {
//         if (result.error.status === 404) {
//           return { error: { message: 'Invalid URL. Please check the URL.' } };
//         }
//         if (result.error.status === 500) {
//           return { error: { message: 'Server error, please try again later.' } };
//         }
//       }
//       return result;
//     } catch (error) {
//       if (error.message.includes('Network request failed')) {
//         return { error: { message: 'No internet connection. Please check your network.' } };
//       }
//       return { error: { message: 'Something went wrong. Please try again.' } };
//     }
//   },
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => 'posts',
//     }),
//   }),
// });

// export const { useGetPostsQuery } = postsApi;
