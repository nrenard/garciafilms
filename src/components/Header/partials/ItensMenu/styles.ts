import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s background-color;

  img {
    margin-right: 10px;
  }

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }

  & + & {
    margin-left: 20px;
  }
`;
