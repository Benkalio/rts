import ReactDOM from "react-dom";
// import CareerPage from "./careers/CareerPage";
import EventComponent from "./state/Events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
      <GuestList />
      <EventComponent />
      {/* <CareerPage /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
