import React from 'react';

function Discussion() {
  return (
    <div>
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>
        {`
          .nav-color {
            background: #f76b8a;
          }
          body {
            background: #fcfefe;
          }
          .nav-link {
            color: aliceblue;
          }
          .custom-border-top {
            border-top: 0.5px solid #4c4b4b; /* Change to your desired color */
          }
          .footer-color {
            background: #f76b8a;
          }
        `}
      </style>

      {/* Nav Bar */}
      <section id="Header" className="nav-color fixed-top">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link active">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link">
                  Survey
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section>

      <section id="Discussion">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">
            CUNY Student Needs
          </h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
              Our project is dedicated to understanding the needs of CUNY students across various campuses. Inspired by the findings from a study focused on students in the Bronx, which highlighted significant challenges such as food insecurity, housing instability, lack of mental health treatment, and inadequate healthcare access, we aim to replicate this research across other CUNY campuses.
            </p>
            <p className="lead mb-4">
              By gathering this data, we hope to identify areas where resources are most needed and advocate for enhanced support for all CUNY students. Our research will focus on critical areas such as food insecurity, housing instability, mental health services, and healthcare access, ensuring that every student has the resources they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - will probably remove later */}
      <section id="Footer" className="footer-color">
        <div className="container custom-border-top">
          <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="/" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link px-2 text-body-secondary">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link">
                  Survey
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 CUNY, Inc</p>
          </footer>
        </div>
      </section>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Discussion;
