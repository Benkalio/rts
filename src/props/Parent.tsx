import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log('Clicked')}>
      make noise
    </ChildAsFC>
  );
};

export default Parent;
