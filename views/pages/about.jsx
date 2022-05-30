import React from "react";

function Head() {
  return (
    <head>
      <link rel="stylesheet" href="styles/default.css" />
    </head>
  );
}

function Root() {
  return (
    <h1>Example About</h1>
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
