import "./App.css";
import { Profile } from "./components/Profile/Profile.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
