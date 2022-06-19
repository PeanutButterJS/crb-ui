import { Button, theme, Field, useCrbForm } from "crb-ui";
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
    <>
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
    </>
  );
}

export default App;
