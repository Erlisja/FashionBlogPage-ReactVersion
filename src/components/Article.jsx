
function Article(props) {
  return (
    <div>
      <article id="root">
        <h1 style={{ color: "gray", fontWeight: "100" }}> {props.date}</h1>
        <h1>{props.title}</h1>
        <img src="/blog-image-1.jpg" alt="Vintage in Vogue" style={{ width: "100%" }} />
        <p>
          <span className="large-initial">C</span>
          {props.content}
        </p>
        <a href="#" style={{ color: "tomato", marginBottom: "20px" }}>
          Continues...
        </a>
      </article>
    </div>
  );
}

export default Article;
