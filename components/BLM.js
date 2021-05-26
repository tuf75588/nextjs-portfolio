import React from 'react';

function BLMHeader() {
  return (
    <div
      className="blm-parent"
      style={{
        background: `#000`,
        fontSize: `1.2em`,
        color: `#fff`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        marginBottom: `-2em`,
        padding: `0.5em`,
      }}
    >
      <h1 style={{ fontWeight: 600 }}>#BlackLivesMatter</h1>
      <p>
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
