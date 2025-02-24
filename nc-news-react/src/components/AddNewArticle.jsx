import { useEffect, useState } from "react";
import { getUsers, postNewArticle } from "../utils/utils";

const AddNewArticle = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState(null);
  const [title, setTitle] = useState(null);
  const [topic, setTopic] = useState(null);
  const [body, setBody] = useState(null);
  const [imageCover, setImageCover] = useState(null);

  const handleFormPopUp = (e) => {
    setIsFormVisible(prev => !prev);
  };
  useEffect(() => {
    getUsers().then(resp => setUsers(resp)
    );
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const postObj = { title: title, body: body, topic: topic, author: userName, article_img_url: imageCover };
    postNewArticle(postObj)
      .then(resp => {
        console.log(resp);
        setIsFormVisible(prev => !prev);

      })
      .catch(err => console.log(err)
      );


  };

  return (
    <section className="relative">
      <button
        onClick={(e) => { handleFormPopUp(e); }}
        className="flex justify-begin items-center w-5/12 cursor-pointer text-red-800 bg-red-300 rounded">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="15" stroke="red" strokeWidth="2" fill="white" />
          <line x1="20" y1="12" x2="20" y2="28" stroke="black" strokeWidth="2" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="black" strokeWidth="2" />
        </svg>
        <h2>Add new Article</h2>
      </button>
      <form action="submit" className={!isFormVisible ? "flex flex-col align-middle w-11/12  mt-2 p-2 absolute -left-full bg-red-200 text-red-900 rounded transition-all duration-1000 visible" : "flex flex-col align-middle w-11/12  mt-2 p-2 absolute z-50  bg-red-200 text-red-900 rounded transition-all duration-500 left-0"}>

        <select
          onChange={(e) => { setUserName(e.target.value); }}
          name="user"
          id="user"
          className="border-b w-full p-2 mb-4">
          <option value="">Please select your name</option>
          {users.map(user => <option key={`${user.username}-${user.name}`} value={user.username}>{user.name} </option>)}
        </select>

        <label htmlFor="title" className="pl-2">Article Title:</label>
        <input
          onChange={(e) => { setTitle(e.target.value); }}
          type="text"
          id="title"
          placeholder="article title"
          className="border-b w-full p-2 mb-4" />

        <select
          onChange={(e) => { setTopic(e.target.value); }}
          name="topic"
          id="topic"
          className="border-b w-full p-2 mb-4">
          <option value="">Please choose a topic</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>

        <label htmlFor="body" className="pl-2">Article Content:</label>
        <textarea
          onChange={(e) => { setBody(e.target.value); }}
          name="body"
          cols={5}
          rows={5}
          id="body"
          className="border-b w-full p-2 mb-4"></textarea>

        <label htmlFor="image-cover" className="pl-2">Image Cover:</label>
        <input
          onChange={(e) => { setImageCover(e.target.value); }}
          type="text"
          id="image-cover"
          placeholder="article image"
          className="border-b w-full p-2 " />

        <button
          onClick={(e) => { handleFormSubmit(e); }}
          className="rounded w-3/12 mx-auto mt-2 p-1 bg-red-500 text-white cursor-pointer">Submit</button>
      </form>
    </section>
  );
};

export default AddNewArticle;