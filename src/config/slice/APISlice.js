import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'https://todo.api.devcode.gethired.id/'}),
    tagTypes:['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "activity-groups?email=azraiputrabarumundaulay@gmail.com",
            providesTags:['Todos']
        }),
        addTodos: builder.mutation({
            query: (todo) => ({
                url: "activity-groups",
                method: "POST",
                body: todo
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodos: builder.mutation({
            query:({id}) => ({
                url:`activity-groups/${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodoItem:builder.mutation({
            query:({id}) => ({
                url:`todo-items/${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:['Todos']
        })
    })
})

export const {
    useGetTodosQuery,
    useAddTodosMutation, 
    useDeleteTodosMutation,
    useDeleteTodoItemMutation} = apiSlice