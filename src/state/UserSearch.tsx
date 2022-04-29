import { useState } from "react";

const users = [
  { name: 'Tomi', age: 23 },
  { name: 'Grace', age: 22 },
  { name: 'Hima', age: 22 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');

  // this state has type of object or undefined for the user search <whether found or not>
  const [user, setUser] = useState<{ name: string, age: number} | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);    
  };

  return (
    <div>
      User search
      <input value={name} onChange={(e) => (setName(e.target.value))} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
}

export default UserSearch;
