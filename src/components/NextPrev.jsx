import React, { useState } from "react";
import { Link } from "react-router-dom";

function NextPrev({ prev, prevTitle, next, nextTitle }) {
  const [prevLinkStyle, setPrevLinkStyle] = useState(
    "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-secondary text-decoration-none"
  );
  const [nextLinkStyle, setNextLinkStyle] = useState(
    "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-secondary text-decoration-none"
  );

  return (
    <div className="position-relative">
      <div className="next-prev-container row m-2 d-flex justify-content-between bottom-0 w-100">
        {/* Previous Link */}
        {prev ? (
          <Link
            to={prev}
            className={prevLinkStyle}
            onMouseEnter={() =>
              setPrevLinkStyle(
                "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-dark"
              )
            }
            onMouseLeave={() =>
              setPrevLinkStyle(
                "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-secondary text-decoration-none"
              )
            }
          >
            <span className="prev-title">« {prevTitle}</span>
          </Link>
        ) : (
          <div className="empty-box col-md-5 col-lg-5"></div>
        )}

        {/* Spacer for small screens */}
        <div className="d-block d-md-none w-100 my-2"></div>

        {/* Next Link */}
        {next ? (
          <Link
            to={next}
            className={nextLinkStyle}
            onMouseEnter={() =>
              setNextLinkStyle(
                "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-dark"
              )
            }
            onMouseLeave={() =>
              setNextLinkStyle(
                "col-md-4 col-lg-5 border border-primary rounded-2 py-3 text-dark border-secondary text-decoration-none"
              )
            }
          >
            <span className="next-title">{nextTitle} »</span>
          </Link>
        ) : (
          <div className="empty-box col-md-5 col-lg-5"></div>
        )}
      </div>
    </div>
  );
}

export default NextPrev;
