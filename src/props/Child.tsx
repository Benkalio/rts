/* eslint-disable @typescript-eslint/no-unused-expressions */

interface ChildProps {
  color: string;
  onClick: () => void;
  children: string
}

export const Child = ({ color, onClick }: ChildProps ) => {
  return <div>
    {color}
    <button onClick={onClick}>Click here</button>
  </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click here</button>
    </div>
  );
};
 
