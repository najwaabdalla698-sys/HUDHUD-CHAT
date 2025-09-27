import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>🚀 Vite + React + Clerk</h1>
      
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default App;
