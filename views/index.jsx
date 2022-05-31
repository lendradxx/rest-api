import React from "react";

function Head() {
  return (
    <React.StrictMode>
      <head>
        <link rel="stylesheet" href="styles/default.css" />
        <title>RestAPI | Home</title>
      </head>
      <body></body>
    </React.StrictMode>
  );
}

function Root() {
  return (
    <React.StrictMode>
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          RestAPI
        </a>
        <div className="navbar-links">
          <a href="/about" className="link-item">
            About
          </a>
          <a href="/docs" className="link-item">
            Docs
          </a>
          <a href="https://github.com/lendradxx/rest-api" target="_blank" className="link-item">
            Source Code
          </a>
        </div>
      </nav>
      <main></main>
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
