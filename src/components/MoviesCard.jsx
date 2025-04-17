import { FaShareAlt, FaHeart, FaFlag } from "react-icons/fa";

const MoviesCard = (props) => {
  const {title,subtitle,description,image,rating} = props;
  // console.log(image);
  return (
    <div className="max-w-5xl  mx-auto my-20 bg-[#242424] rounded-xl shadow-2xl shadow-red-400 flex flex-col md:flex-row h-[400px] overflow-hidden">
      
      {/* Left Section */}
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        {/* Header */}
        <div className="flex gap-4">
          <div className="w-14 md:w-30">
            <img src={image} alt="Thumbnail" className="w-full rounded-md" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-white text-lg md:text-xl font-semibold">{title}</h1>
                <p className="text-gray-400 text-sm ">{subtitle}</p>
            </div>
              <p className="text-sm text-gray-300">117 min · Action · {rating} · Crime · Fantasy</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3 mt-2">
         {description}
        </p>

        {/* Footer */}
        <div className="flex gap-6 text-xl text-gray-400">
          <FaShareAlt className="cursor-pointer hover:text-white" />
          <FaHeart className="cursor-pointer hover:text-red-500" />
          <FaFlag className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>

      {/* Right Poster */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt="Movie Poster"
          className="w-full object-cover bg-black"
        />
      </div>
    </div>
  );
};

export default MoviesCard;
