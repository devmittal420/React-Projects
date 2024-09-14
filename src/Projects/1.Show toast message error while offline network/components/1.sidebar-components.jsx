import React, { useEffect } from 'react';
import styled from "styled-components";

const SidebarContainer = styled.div``;

const SidebarBox = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  background-color: turquoise;
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  padding: 12px;
`;

const SideBar = () => {
  useEffect(() => {
    console.log("Mounting done");
    const update = (e) => {
      console.log(e);
      //   console.log(e.y);
    };
    window.addEventListener("mousemove", update);
    //window.addEventListener("touchmove", update);

    return () => {
      console.log("I am unmounting");
      window.removeEventListener("mousemove", update);
    };
  }, []);
  return (
    <SidebarContainer>
      <SidebarBox>
        <h1>I am Sidebar</h1>
      </SidebarBox>
    </SidebarContainer>
  );
};

export default SideBar;