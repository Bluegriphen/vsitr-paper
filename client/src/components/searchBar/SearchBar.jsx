import "./SearchBar.css";
import { usePaperContext } from "../../context/Papercontext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, paper } = usePaperContext();

  // Filter only by code
  const filteredPapers =
    searchTerm.trim() === ""
      ? []
      : paper.filter((item) =>
          item.code.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const uniquePapers = [
    ...new Map(filteredPapers.map((item) => [item.code, item])).values(),
  ];

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by Paper Code"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Show results */}
      {searchTerm && (
        <div className="search-results">
          {uniquePapers.length > 0 ? (
            uniquePapers.map((item) => (
              <Link
                key={`${item.code}-${item.department}-${item.semester}`}
                to={`/${item.department}/${item.semester}/${item.code}`}
                className="search-result-item"
                onClick={() => setSearchTerm("")}
              >
                {item.code} - {item.subject}
              </Link>
            ))
          ) : (
            <p className="no-results">No papers found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
