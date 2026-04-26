import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { getAllBlogs } from "../../redux/slice/blogsSlice";
import Loading from "../Loading";

// 🧩 Kod Parçalarının Anlamı
// row: Izgara (grid) yapısını başlatan ana kapsayıcı.
// row-cols-1: Varsayılan (Mobil) ayardır. "Her satırda 1 tane sütun (kart) olsun" der.
// row-cols-md-3: "Ekran genişliği Medium (768px) ve üzerine çıktığında her satırda 3 tane sütun olsun" der.
// g-4 (Gutters): Kartların arasındaki boşluktur (0-5 arası değer alır). g-4 hem dikeyde hem yatayda dengeli bir boşluk bırakır.

function BlogList() {
  const dispatch = useDispatch<AppDispatch>();

  const { blogs, loading } = useSelector((state: RootState) => state.blogs);
  const hasData = blogs && blogs.length > 0;
  const hasLoading = loading;
  console.log(hasLoading);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <div>
      {hasLoading ? (
        <Loading />
      ) : (
        <div
          className={`row ${hasData ? "row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" : "justify-content-center"}`}
        >
          {hasData ? (
            blogs.map((blog) => <Blog key={blog.blogId} item={blog} />)
          ) : (
            <div className="col-6 text-center mt-5">
              <p className="alert alert-warning">
                Henüz paylaşılmış bir blog bulunamadı...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogList;
