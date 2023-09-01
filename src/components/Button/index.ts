import { css, styled } from "styled-components";

export interface iButtonProps {
  variant?: string;
}

export const Button = styled.button<iButtonProps>`
  background-color: ${({ theme }) => theme.colors.brand.accent};
  padding: 0.5rem 2rem;
  color: white;
  font-size: ${({ theme }) => theme.typography['xl']};
  ${({ theme, variant }) => {
    switch (variant) {
      case "icon-button":
        return css`
          padding: 0.5rem;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        `;
      case "unstyled":
        return css`
            background-color: transparent;
            color: ${theme.colors.gray.medium};
        `;
    }
  }}
`;
