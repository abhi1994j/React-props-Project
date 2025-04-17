import React from 'react'
import MoviesCard from './MoviesCard';
import inception from "../assets/inception.png"
import Avengers from "../assets/Avengers.png"
import interstellar from "../assets/interstellar.png"
import thedarknight from "../assets/thedarknight.png"
import Thematrix from "../assets/Thematrix.jpg"

const Project_2 = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      subtitle: "Your mind is the scene of the crime",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      image: inception,
      rating: 8.8
    },
    {
      id: 2,
      title: "Interstellar",
      subtitle: "Mankind was born on Earth. It was never meant to die here.",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: interstellar,
      rating: 8.6
    },
    {
      id: 3,
      title: "The Dark Knight",
      subtitle: "Why So Serious?",
      description:
        "Batman sets out to dismantle the remaining criminal organizations in Gotham, but is confronted by the Joker, a rising criminal mastermind.",
      image: thedarknight,
      rating: 9.0
    },
    {
      id: 4,
      title: "The Matrix",
      subtitle: "Welcome to the Real World",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      image: Thematrix,
      rating: 8.7
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      subtitle: "Part of the journey is the end",
      description:
        "After the devastating events of Infinity War, the Avengers assemble once more in order to undo Thanos' actions and restore balance.",
      image: Avengers,
      rating: 8.4
    }
  ];
  console.log(movies);
  return (
    <>
        {/* {movies.map((ele)=> 
        <img src={ele.image}/>
        )} */}
        {/* <h1 className='text-white'>Hello</h1> */}
        <div className='flex flex-col w-full bg-black min-h-screen'>
          {movies.map((ele)=>
             <MoviesCard title={ele.title} subtitle={ele.subtitle} description={ele.description} image={ele.image} rating={ele.rating}/>
          )}
               
        </div>
        
    </>
  )
}

export default Project_2;