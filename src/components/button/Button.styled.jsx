import styled from "styled-components";

export const LinkButton = styled.div`
  display: inline-block;
  padding: 10px 30px;

  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid rgba(97, 112, 190, 0.616);
  background-color: rgba(40, 47, 81, 0.719);

  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;
