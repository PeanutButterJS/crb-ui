import { Button, Link } from "crb-ui";
import styled from "styled-components";
import "./App.css";

const B = styled(Button)`
  width: 550px;
`;

function App() {
  return (
    <>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <B>hey there</B> <B>hey there</B>
      <Link>hey there</Link>
    </>
  );
}

export default App;
