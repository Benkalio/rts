import { useEffect, useState, useRef } from "react";

const users = [
  { name: 'Tomi', age: 23 },
  { name: 'Grace', age: 22 },
  { name: 'Hima', age: 22 }
];

const UserSearch: React.FC = () => {
  //users will automatically start typing in input box as soon as page loads up 
  //this is done with ref below 
  //reference to useEffect hook 
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');

  // this state has type of object or undefined for the user search <whether found or not>
  const [user, setUser] = useState<{ name: string, age: number} | undefined>();

  //effects the typing into input automatically
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);    
  };

  return (
    <div>
      <h2>User search</h2>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => (setName(e.target.value))} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
}

export default UserSearch;
