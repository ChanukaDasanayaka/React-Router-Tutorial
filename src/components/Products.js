import { Link,Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div className="container">
      <div className="input-group mt-2 row">
        <div className="col-4">
          <input
            type="search"
            className="rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary ms-2">
            search
          </button>
        </div>
      </div>
      <nav className="mt-4">
        <Link to='featured' className="me-3">Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
