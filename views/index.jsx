import React from "react";

function Head() {
  return (
    <React.StrictMode>
      <head>
        <link rel="stylesheet" href="styles/default.css" />
        <title>LenAPI | Home</title>
      </head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </React.StrictMode>
  );
}

function Root() {
  return (
    <React.StrictMode>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="navbar-brand">lenAPI</a>
        </div>
      </nav>
    </React.StrictMode>
  );
}

export default function Render() {
  return (
    <React.StrictMode>
      <Head></Head>
      <Root></Root>
    </React.StrictMode>
  );
}
