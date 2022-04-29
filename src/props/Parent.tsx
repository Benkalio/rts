import { Child } from "./child";

const Parent = () => {
  return <Child color="blue" onClick={() => console.log('Clicked')} />;
};

export default Parent;
