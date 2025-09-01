/**import { createContext, useContext, useState } from "react";
import { paper_list } from "../papers/papers.js";

export const PaperContext = createContext();

export const PaperProvider = ({ children }) => {
  const [paper] = useState(paper_list);
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredPapers = (code) => {
    return paper.filter((item) => {
      const matchCode =
        item.code && item.code.toLowerCase() === code.toLowerCase();

      return matchCode;
    });
  };

  return (
    <PaperContext.Provider
      value={{ paper, searchTerm, setSearchTerm, getFilteredPapers }}
    >
      {children}
    </PaperContext.Provider>
  );
};

export const usePaperContext = () => useContext(PaperContext);

export default PaperProvider;
*/
import { createContext, useContext, useState } from "react";
import { paper_list } from "../papers/papers.js";

export const PaperContext = createContext();

export const PaperProvider = ({ children }) => {
  const [paper] = useState(paper_list);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fix: now checks department, semester, and code
  const getFilteredPapers = (department, semester, code) => {
    return paper.filter(
      (item) =>
        item.department === department &&
        String(item.semester) === String(semester) &&
        item.code.toLowerCase() === code.toLowerCase()
    );
  };

  return (
    <PaperContext.Provider
      value={{ paper, searchTerm, setSearchTerm, getFilteredPapers }}
    >
      {children}
    </PaperContext.Provider>
  );
};

export const usePaperContext = () => useContext(PaperContext);

export default PaperProvider;
