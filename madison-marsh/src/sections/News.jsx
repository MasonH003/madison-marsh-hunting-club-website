
import { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { NewsCard } from '../components';

const News = () => {

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ date, setDate ] = useState("");

  const [ news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [])

  // FETCHES NEWS FROM SUPABASE:
  async function getNews() {
    try {
      const { data, error } = await supabase
        .from("newsitem")
        .select("*")
        .limit(10)
      if(error) throw error;
      if(data != null) {
        setNews(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // INSERTS BRAND NEW EVENT INTO SUPABASE:
  async function createNews() {
    try {
      const { data, error } = await supabase
        .from("newsitem")
        .insert({
          title: title,
          description: description,
          date: date
        })
        .single()
      if(error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <news>
      <h3 className = "bg-base-100 text-neutral text-4xl flex flex-row justify-center pb-2 pt-2">Current News</h3>
      <button className="btn btn-info" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add News</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add News Event</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className = "flex flex-col">
            <input id = "title" type="text" placeholder="Title" class="text-primary bg-input w-full max-w-xs p-1 rounded-md" 
            onChange = {(e) => setTitle(e.target.value)}
            />
            <br></br>
            <input id = "date" type="date" className = "bg-white text-primary p-1 rounded-md"
            onChange = {(e) => setDate(e.target.value)}
            />
            <br></br>
            <textarea id = "description" class="bg-white text-primary textarea textarea-bordered" placeholder="Description"
            onChange = {(e) => setDescription(e.target.value)}
            ></textarea>
            <br></br>
            <button className="btn btn-info" onClick = {() => createNews()}>Add</button>
          </div> 
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      
      <div className = "flex flex-row justify-center flex-wrap space-x-4 space-y-4 bg-accent pb-4 pt-4">
        {news.map((news) => (
          <NewsCard news = {news}/>
        ))}
      </div>
    </news>
  )
}

export default News