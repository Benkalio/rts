import { ChildAsFC } from "./child";

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log('Clicked')}>
      make noise
    </ChildAsFC>
  );
};

export default Parent;
