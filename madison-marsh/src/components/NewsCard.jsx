import { useState } from 'react';

function NewsCard(props) {

    const news = props.news;

    const [ editing, setEditing ] = useState(false);

    const [ name, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");

    

    return (
      <div className="card w-96 bg-base-100 shadow-xl bg-secondary">
        {editing == false ?
        <>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
          <p>{news.date}</p>
          <div className="card-actions justify-end">
          </div>
        </div>

        <button className="btn btn-info" onClick = {() => setEditing(true)}>Edit News</button>
        <button className="btn btn-error">Delete News</button>
        </>
        :
        <>

        <button className="btn btn-info" onClick = {() => setEditing(false)}>Unedit</button>
        <div className = "flex flex-col">
            <input defaultValue = {news.title} id = "title" type="text" placeholder="Title" class="text-primary bg-input w-full max-w-xs p-1 rounded-md" 
            onChange = {(e) => setTitle(e.target.value)}
            />
            <br></br>
            <input defaultValue = {news.date} id = "date" type="date" className = "bg-white text-primary p-1 rounded-md"
            onChange = {(e) => setDate(e.target.value)}
            />
            <br></br>
            <textarea defaultValue = {news.description} id = "description" class="bg-white text-primary textarea textarea-bordered" placeholder="Description"
            onChange = {(e) => setDescription(e.target.value)}
            ></textarea>
            <br></br>
            <button className="btn btn-info">Accept Changes</button>
          </div> 
        </>
        }
      </div>
    );
  }
  
  export default NewsCard;