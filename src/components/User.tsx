import * as React from "react";
import styled from "styled-components";

export interface UserProps {
  className?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const User: React.SFC<UserProps> = (props) => {
  return (
    <div className={props.className}>
      Here will be some user
    </div>
  );
};

const StyledUser = styled(User) `
  background-color: ${props => props.active ? "#cccccc" : "#dddd00"};
`;

export default StyledUser;
