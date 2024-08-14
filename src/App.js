import "./App.css";
import { AppApolloProvider } from "./apollo";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <AppApolloProvider>
      <div className="App">
        <UserInfo />
      </div>
    </AppApolloProvider>
  );
}

export default App;
