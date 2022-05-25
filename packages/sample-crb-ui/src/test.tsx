import { useCrbAuth } from "crb-ui";

export const Test = () => {
  const auth = useCrbAuth();
  return <div onClick={() => auth.authService.authorize()}>menucha</div>;
};
