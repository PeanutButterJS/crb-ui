import { Button, theme } from "crb-ui";
import styled from "styled-components";
import "./App.css";

const B = styled(Button)`
  width: 550px;
`;

function App() {
  return (
    <>
      <B>hey there {theme.colors.blue}</B>
    </>
  );
}

export default App;
