import ReactDOM from "react-dom";
import CareerPage from "./careers/CareerPage";
// import EventComponent from "./events/EventComponent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      {/* <UserSearch />
      <GuestList />
      <EventComponent /> */}
      <CareerPage />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
