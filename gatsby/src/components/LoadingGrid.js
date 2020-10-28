import React from 'react';
import { ItemsGrid, ItemStyle } from '../styles/Grids';

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyle>
          <p>
            <span className="mark">Loading...</span>
          </p>
          <img
            src="data:image/png;base64,
            iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklE
            QVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            alt="Loading"
            className="loading"
            width="500"
            height="400"
          />
        </ItemStyle>
      ))}
    </ItemsGrid>
  );
}
