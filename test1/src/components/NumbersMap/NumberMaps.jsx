export default function NumberMaps({ numbers }) {
  return (
    <div>
      {numbers.map((number, index) => (
        <h1 key={index}>Number: {number * 2}</h1>
      ))}
    </div>
  );
}