"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  */
  const filteredMovies = movieDB.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(processedSearchInput.toLowerCase())
  );
  //toLocaleLowerCase() or toLowerCase() เปลี่ยน processedSearchInput เป็นพิมเล็ก

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {filteredMovies.length} result(s)
      </p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      {filteredMovies.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          detail={movie.detail}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
