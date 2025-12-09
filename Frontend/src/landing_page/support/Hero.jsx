import React from "react";
import './Hero.css';

function Hero() {
  return (
    <section className="container-fluid mt-4" id="supportHero">
      <div className="bg-light">
        <div className="container py-4">
          <div className="row align-items-center justify-content-between g-3">
            <div className="col-auto">
              <h1 className="h4 mb-0">
                <a href="/" className="text-decoration-none text-dark">Support Portal</a>
              </h1>
            </div>

            <div className="col-auto">
              <a
                target="_blank"
                rel="noreferrer"
                href="/login?next=https%3A%2F%2Fsupport.zerodha.com%2Ftickets%2F"
                className="btn btn-primary btn-sm d-inline-flex align-items-center"
                aria-label="Open my tickets (opens in new tab)"
              >
                {/* icon placeholder: you can use an SVG or bootstrap-icons */}
                <span className="me-2 d-none d-sm-inline-block">
                  {/* ticket icon optional */}
                </span>
                <span className="fw-medium">My tickets</span>
              </a>
            </div>
          </div>

          {/* SEARCH */}
          <div className="row mt-3">
            <div className="col-12">
              <div className="position-relative">
                <form onSubmit={(e) => e.preventDefault()} role="search" aria-label="Support search">
                  <div className="input-group input-group-lg shadow-sm">
                    <span className="input-group-text bg-white border-end-0">
                      {/* optional search icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                        <path d="M11 6a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                        <path d="M12.344 11.344a6 6 0 1 0-1.414 1.414l3.182 3.182 1.414-1.414-3.182-3.182z"/>
                      </svg>
                    </span>

                    <input
                      id="searchInput"
                      type="search"
                      className="form-control border-start-0"
                      placeholder="Eg: How do I open my account, How do I activate F&O..."
                      autoComplete="off"
                      aria-autocomplete="list"
                      aria-controls="comboboxItems"
                    />

                    <button
                      type="submit"
                      className="btn btn-outline-secondary"
                      aria-label="Search"
                    >
                      Search
                    </button>
                  </div>
                </form>

                {/* spinner — hidden by default; toggle .d-none to show */}
                <div id="search-spinner" className="search-spinner d-none" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>

                {/* autocomplete / suggestions container */}
                <div
                  id="comboboxItems"
                  className="list-group position-absolute w-100 shadow rounded overflow-auto"
                  style={{ top: "calc(100% + 6px)", zIndex: 1050, maxHeight: "360px" }}
                  role="listbox"
                >
                  {/* suggestion items injected here by JS */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;