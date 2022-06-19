import { Button, theme, Field, useCrbForm, CrbAuth } from "crb-ui";
import { Test } from "./test.tsx";
import styled from "styled-components";

const B = styled(Button)`
  width: 550px;
  color: ${theme.colors.alert};
`;

function App() {
  const form = useCrbForm({
    defaultValues: {
      name: "aron",
    },
  });
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

      <Field
        fieldComponent="text"
        id="name"
        form={form}
        label="Name"
        rules={{
          required: (val) => !!val || "Name is required",
          nameIsAron: (val) => val === "aron" || "Name isnt aron",
        }}
      />
      <Test />
    </CrbAuth>
  );
}

export default App;
