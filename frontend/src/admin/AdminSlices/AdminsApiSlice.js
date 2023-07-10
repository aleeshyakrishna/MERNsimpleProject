import { apislice } from '../AdminSlices/apislice';

const ADMINS_URL = '/api/admins';

export const AdminsApiSlice = apislice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `http://localhost:5000/api/admins/auth`,
        method: 'POST',
        body: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${ADMINS_URL}/logout`,
        method: 'POST'
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${ADMINS_URL}`,
        method: 'POST',
        body: data
      }),
    }),

    deleteUser: builder.mutation({
        query:(data)=>({
          url:`${ADMINS_URL}/delete`,
          method:'DELETE',
          params:data
        })
      }),

      getuserdata :builder.mutation({
        query :(id)=>({
            url:`${ADMINS_URL}/getuserdata/${id}`,
            method:"GET",
            
        })
      }),

      edituserdata :builder.mutation({
        query :(id,data)=>({
           url: `${ADMINS_URL}/updateuser/${id}`,
           method:"POST",
           body:data
           
        })
      }),


  }),
});
 export const  { useRegisterMutation,useLoginMutation,useLogoutMutation ,useDeleteUserMutation,useGetuserdataMutation,useEdituserdataMutation  } = AdminsApiSlice;


