import { keyframes } from "@emotion/react";

export const appear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const disappear = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
`;
