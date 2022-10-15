import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        <a href="/GallagherResume.pdf" download="GallagherResume">
          Download My Resume Here.
        </a>
        <div class="col-sm">
          <p>
            Here is a list of my Coding Skills:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node</li>
              <li>SQL</li>
            </ul>
          </p>
        </div>
      </p>
    </div>
  );
}
