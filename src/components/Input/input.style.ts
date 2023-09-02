import { css, styled } from "styled-components";
import { iInputProps } from ".";

export const Input = styled.input<iInputProps>`
  padding: 1rem;
  width: 100%;
  outline: solid 1px ${({ theme }) => theme.colors.brand.accent};
  border: none;
  border-radius: 10px;
  ${({ theme, variant }) => {
    switch (variant) {
      case "float":
        return css`
          padding: 1rem 1rem 0 1rem;
          background-color: transparent;
          outline: none;
          height: 100%;
          &:focus {
            outline: none;
          }
        `;
    }
  }}
`;

export const InputBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  position: relative;
  height: 50px;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 1rem;
    font-size: ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.gray[500]};
    pointer-events: none;
  }

  &,
  span,
  label {
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
  span {
    height: 2px;
    background-color: ${({ theme }) => theme.colors.brand.accent};
    width: 0;
    display: block;
  }

  &:hover span {
    width: 100%;
  }

  &:focus-within label {
    transform: translateY(0);
    top: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.brand.accent};
  }
`;
