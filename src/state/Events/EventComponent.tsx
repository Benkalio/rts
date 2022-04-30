

const EventComponent: React.FC = () => {
  const onChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(event);
  }

  const onDragStart = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(event);
    
  }
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag this!
      </div>
    </div>
  );
}

export default EventComponent;
