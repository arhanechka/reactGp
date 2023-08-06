import React, { useState } from "react";
import "../forms.css";

function Posts() {
  const posts = [
    {
      name: "Awesome Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis tincidunt ante, a rhoncus massa vestibulum ac. Nunc ac est non mauris pellentesque iaculis. Sed cursus nec justo id scelerisque. Sed non ullamcorper mi. Vivamus tempus laoreet odio, nec tristique quam mattis nec. Suspendisse sit amet hendrerit augue. Curabitur viverra, libero id efficitur luctus, libero urna euismod justo, vel sollicitudin tellus urna non metus.",
    },
    {
      name: "Exciting Post 2",
      text: "Praesent eget vulputate erat, a euismod velit. Fusce non diam ac tortor lacinia mattis. Ut sagittis urna ac risus tristique, sit amet aliquam est consectetur. Vestibulum sollicitudin nunc id purus volutpat, non dictum velit lacinia. Nulla facilisi. In laoreet arcu ut purus laoreet, eu varius justo tincidunt. Sed nec dolor ut augue fringilla hendrerit. Nam eu sapien sed orci blandit facilisis. Integer ut dignissim purus, eu scelerisque nisl.",
    },
  ];

  const [postText, setPostText] = useState("");
  const [postTexts, setPostTexts] = useState(posts);
  const [postName, setPostName] = useState("");

  const handlePostNameChange = (e) => {
    setPostName(e.target.value);
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const renderPosts = () => {
    return postTexts.map((post, index) => (
      <div key={index} className="post-block">
        <h3>{post.name}</h3>
        <p>{post.text}</p>
      </div>
    ));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted:");
    console.log("Post Text:", postText);
    // Add your post submission logic here

    const newPost = {
      name: postName,
      text: postText,
    };

    setPostTexts((prevPosts) => [...prevPosts, newPost]);

    setPostName("");
    setPostText("");
  };
  return (
    <div className="post-container">
      <form className="post-form" onSubmit={handlePostSubmit}>
        <h2 className="mb-3">Create a New Post</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Post Name"
            value={postName}
            onChange={handlePostNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            rows="5"
            className="form-control"
            placeholder="Write your post here..."
            value={postText}
            onChange={handlePostTextChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Post
        </button>
      </form>
      <div className="post-display">
        <h2>Previous Posts</h2>
        <div className="post-list">{renderPosts()}</div>
      </div>
    </div>
  );
}

export default Posts;
