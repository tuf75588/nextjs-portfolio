import React from 'react';

function BLMHeader() {
  return (
    <div
      style={{
        background: `#000`,
        padding: `4em`,
        marginBottom: `1em`,
        color: `#fff`,
        margin: `0.5em`,
      }}
    >
      <h1 style={{ fontSize: `2rem`, marginBottom: `1em` }}>
        #BlackLivesMatter
      </h1>
      <p style={{ fontSize: `1.25rem` }}>
        I stand in solidarity with the Black community against racism and
        injustice.
      </p>
      <p className="mb-0">
        <strong>
          <a
            href="https://blacklivesmatters.carrd.co/"
            style={{ color: `rgb(219,219,219)` }}
          >
            Go here to find out how <em>you</em> can help.
          </a>
        </strong>
      </p>
    </div>
  );
}

export default BLMHeader;
