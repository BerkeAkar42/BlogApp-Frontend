import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

//         public Guid BlogId { get; init; }
//         public string? Title { get; set; }
//         public string? Description { get; set; }
//         public string? Content { get; set; }
//         //public string? ImageUrl { get; set; }
//         //public int CategoryId { get; set; }
//         public DateTime CreateDate { get; init; }
//         //public string? Slug { get; set; }
//         public bool IsPublished { get; set; }

//Veri Tipini Tanımla
export interface blog {
  blogId: string;
  title: string | null;
  description: string | null;
  content: string | null;
  imageUrl: string | null;
  createDate: string;
  isPublished: boolean;
}

//Slice içerisinde neler tutulacak bunları belirle
interface BlogState {
  blogs: blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const baseURL = `https://localhost:7069`;

export const getAllBlogs = createAsyncThunk<blog[]>(
  "/blogapp.backend/api/blogs",
  //   _ --> Gönderilen ancak benim kullanmayacağım parametre. Boş geçemediğimiz için bunu verdik.
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<blog[]>(
        `${baseURL}/blogapp.backend/api/blogs`,
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Bir hata oluştu");
    }
  },
);


export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    //GetAllBlogs
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        console.log(state.blogs);
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false; //Hata olduğu için yükleme ekranını kapattık.
        // rejectWithValue'den gelen mesajı state'e yazıyoruz
        state.error = action.payload as string;
        console.log(state.error);
      })
  },
});

export const {} = blogsSlice.actions;

export default blogsSlice.reducer;
