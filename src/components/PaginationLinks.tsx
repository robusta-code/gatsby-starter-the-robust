import React from "react";
import { Link } from "gatsby";

type Props = {
  currentPage: number;
  numberOfPages: number;
};

const disabledStyle = { color: "grey" };
const currentStyle = { color: "black" };
const marginStyle = { margin: "0 20px" };

const PaginationLinks = ({ currentPage, numberOfPages }: Props) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const previousPage =
    currentPage - 1 === 1
      ? "/blog"
      : "/blog/page/" + (currentPage - 1).toString();
  const nextPage = "/blog/page/" + (currentPage + 1).toString();

  return (
    <div aria-label="Page navigation example">
      {isFirst ? (
        <span style={{ ...disabledStyle, ...marginStyle }}>previous</span>
      ) : (
        <span style={marginStyle}>
          <Link to={previousPage}>previous</Link>
        </span>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <span style={{ ...currentStyle, ...marginStyle }}>{i + 1}</span>
        ) : (
          <span>
            <Link to={`${i === 0 ? "/blog" : "/blog/page/" + (i + 1)}`}>
              {i + 1}
            </Link>
          </span>
        )
      )}
      {isLast ? (
        <span style={{ ...disabledStyle, ...marginStyle }}>next</span>
      ) : (
        <span style={marginStyle}>
          <Link to={nextPage}>next</Link>
        </span>
      )}
    </div>
  );
};

export default PaginationLinks;
