import React from "react";
import type { blog } from "../../redux/slice/blogsSlice";

//         public Guid BlogId { get; init; }
//         public string? Title { get; set; }
//         public string? Description { get; set; }
//         public string? Content { get; set; }
//         //public string? ImageUrl { get; set; }
//         //public int CategoryId { get; set; }
//         public DateTime CreateDate { get; init; }
//         //public string? Slug { get; set; }
//         public bool IsPublished { get; set; }

interface BlogProps {
  item: blog;
}

function Blog({ item }: BlogProps) {
  return (
    <div className="col">
      <div className="card h-100">
        {/* <img src={`${item.imageUrl}`} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">{item.createDate}</small>
        </div>
      </div>
    </div>
  );
}

export default Blog;
