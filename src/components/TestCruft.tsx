import { Card } from "./Card";
import { CardHolder } from "./CardHolder";
import { FancyImage } from "./FancyImage";
import { MyComponent } from "./MyComponent";

export const TestCruft = () => {
  return (
    <>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <FancyImage src="https://http.dog/200.jpg" />
        <FancyImage src="https://cdn.pixabay.com/photo/2023/09/02/03/15/water-8228076_1280.jpg" />
        <FancyImage src="https://cdn.pixabay.com/photo/2023/01/15/08/55/dog-7719758_1280.jpg" />
        <FancyImage src="https://cdn.pixabay.com/photo/2024/05/19/08/39/work-8772016_1280.jpg" />
        <FancyImage src="https://cdn.pixabay.com/photo/2024/05/19/00/39/cigarette-8771248_1280.png" />
        <FancyImage src="https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <FancyImage src="https://cdn.pixabay.com/photo/2023/09/04/22/35/boy-8233868_1280.png" />
        <FancyImage src="https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_1280.jpg" />
        <FancyImage src="https://cdn.pixabay.com/photo/2023/12/19/09/22/berries-8457383_1280.jpg" />
      </div>
    </>
  );
};
