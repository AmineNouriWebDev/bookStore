import "./authors.css"
import { useState } from "react";
import { authors } from "../../data/authors";
const Authors = () => {
    const [search, setSearch] = useState("");
    return (
        <section className="authors">
            <div className="authors-search-wrapper">
                <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search an author" />
            </div>
            <div className="authors-wrapper">
                {authors
                .filter(a => a.name.toLocaleLowerCase().includes(search))
                .map((author) => 
                    <div className="author"  key={author.id}>
                        <img src={author.image} alt={author.name} className="author-img" />
                        <h2 className="author-name">{author.name}</h2>
                    </div>
                    )}
            </div>
        </section>
    );
}

export default Authors;
