import ReactDOM from "react-dom";
import EventComponent from "./state/Events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
      <GuestList />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
