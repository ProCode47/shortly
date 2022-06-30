import React from "react";

export default function Shorten() {
  return (
    <>
      <div class="shorten col-sm align p-md">
        <input
          class="col-item text-sm"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button class="col-item m-0 m-sm text-sm">Shorten It!</button>
      </div>
    </>
  );
}
