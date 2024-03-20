function Card(props) {
    return (
      <div className="card w-96 bg-MMHCGreen text-MMHCCream shadow-xl transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none"><a href = "/Home">
        <figure><img src={props.imageUrl} alt={props.altText} /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
        </a>
      </div>
    );
  }
  
  export default Card;