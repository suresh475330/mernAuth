
export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};