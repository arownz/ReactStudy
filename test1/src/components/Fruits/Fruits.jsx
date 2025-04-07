import FruitCard from './FruitCard.jsx';

export default function Fruits() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red", price: 10, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
    { id: 2, name: "Banana", color: "Yellow", price: 5, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
    { id: 3, name: "Grapes", color: "Purple", price: 15, image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg" },
    { id: 4, name: "Orange", color: "Orange", price: 8, image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
    { id: 5, name: "Mango", color: "Yellow", price: 12, image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" },
    { id: 6, name: "Pineapple", color: "Brown", price: 20, image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg" },
    { id: 7, name: "Strawberry", color: "Red", price: 18, image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
    { id: 8, name: "Watermelon", color: "Green", price: 25, image: "https://th.bing.com/th/id/OSK.HERO3Ts0n9noc587efpZ3WRt01lJk5OANDLh7z6djHlnW_w?rs=1&pid=ImgDetMain" },
  ];

  return (
    <div className="container">
      <div className="row">
        {fruits.map((fruit) => (
          <FruitCard
            key={fruit.id}
            name={fruit.name}
            price={fruit.price}
            color={fruit.color}
            image={fruit.image}
          />
        ))}
      </div>
    </div>
  );
}