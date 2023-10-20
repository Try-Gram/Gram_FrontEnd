import { css, Global } from "@emotion/react";

export const global = (
  <Global
    styles={css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
      }
    `}
  />
);
