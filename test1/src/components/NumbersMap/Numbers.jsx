import NumberMaps from "./NumberMaps";

export default function Numbers() {
  const numbers = [3, 6, 9, 10];

  return (
    <div>
      <NumberMaps numbers={numbers} />
    </div>
  );
}