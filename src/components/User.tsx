import * as React from "react";
import styled from "styled-components";

export interface UserProps {
  className?: string;
  name?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const User: React.SFC<UserProps> = (props) => {
  return (
    <div className={props.className}>
      {props.name}
    </div>
  );
};

const StyledUser = styled(User)`
  background-color: ${props => props.active ? "#cccccc" : "#dddd00"};
`;

export default StyledUser;
