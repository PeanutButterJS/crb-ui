import { Button, theme, CrbAuth } from "crb-ui";
import { Test } from "./test.tsx";
import styled from "styled-components";
import "./App.css";

const B = styled(Button)`
  width: 550px;
`;

function App() {
  return (
    <CrbAuth
      authParams={{
        clientId: "p2pReconciliationUiPkce",
        scopes: ["P2PRECONAPI", "roles", "openid", "crbapi"],
        provider: "https://oauthtest.crbnj.net",
        location: window.location,
        redirectUri: window.location.origin,
      }}
    >
      <B>hey there {theme.colors.blue}</B>
      <Test />
    </CrbAuth>
  );
}

export default App;
