import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Home = () => {
  const recipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: 'https://godairyfree.org/wp-content/uploads/2023/05/Spaghetti-Carbonara-vert3.jpg',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      image: 'https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar-1024x1024.jpg',
      description: 'A flavorful dish made with chicken, spices, and coconut milk.',
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      image: 'https://www.allrecipes.com/thmb/hrvYND8vG6ELUkh5cmoOplu3d1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-8149-flourless-chocolate-cake-DDMFS-beauty-2x1-2d20c19729494d50ae9848a8a8a34ecb.jpg',
      description: 'A rich and moist chocolate cake topped with chocolate frosting.',
    },
    {
      id: 4,
      title: 'Caesar Salad',
      image: 'https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-9.jpg',
      description: 'A fresh salad with romaine lettuce, croutons, and Caesar dressing.',
    },
  ];

  const seasonalRecipes = [
    {
      id: 1,
      title: 'Pumpkin Spice Latte',
      image: 'https://wowitsveggie.com/wp-content/uploads/2020/06/vegan-pumpkin-spice-latte-create-1-683x1024.jpg',
      description: 'Warm and cozy pumpkin spice latte perfect for fall.',
    },
    {
      id: 2,
      title: 'Summer Fruit Salad',
      image: 'https://images.healthshots.com/healthshots/en/uploads/2024/05/14185356/Fruit-salad.jpg',
      description: 'A refreshing mix of seasonal fruits.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Cooking Corner has transformed my kitchen adventures! The recipes are simple and delicious.',
    },
    {
      id: 2,
      name: 'Michael Smith',
      text: 'I love the variety of recipes available. I’ve discovered so many new favorites!',
    },
  ];

  const tips = [
    'Always taste your food as you cook to adjust seasoning.',
    'Prep all your ingredients before you start cooking to save time.',
    'Use fresh ingredients for the best flavor.',
    'Don’t be afraid to experiment with flavors and ingredients.',
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100  min-h-screen">
      {/* Header */}
      <header className="bg-green-800  text-white text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Ungal Unavu</h1>
        <p className="mt-2">Explore our delicious recipes and cooking tips!</p>
      </header>
      <p className="text-lg p-5 text-center  text-gray-600">
        Discover delicious recipes, share your culinary creations, and connect with fellow food lovers.
        Let's embark on this tasty journey together!
      </p>
      {/* Featured Recipes Section */}
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Latest Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p className="text-gray-600 mt-2">{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`} className="mt-4 inline-block text-green-600 hover:underline">
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Recipes Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Seasonal Recipes</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonalRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.title}</h3>
                    <p className="text-gray-600 mt-2">{recipe.description}</p>
                    <Link to={`/recipes/${recipe.id}`} className="mt-4 inline-block text-green-600 hover:underline">
                      View Recipe
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">What Our Readers Say</h2>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-4 border-b pb-4">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="text-right text-gray-600 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </section>

        {/* Cooking Tips Section */}
        <section className="my-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Cooking Tips</h2>
          <ul className="list-disc pl-6 space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-gray-700">{tip}</li>
            ))}
          </ul>
        </section>

        {/* Carousel Section */}
        <section className="my-8 flex flex-col items-center w-full">
  <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
  <div className="w-[70%] h-[80%]">
    <Slider {...settings}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4">
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
          <p className="text-gray-600 mt-1">{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`} className="mt-2 inline-block text-green-600 hover:underline">
            View Recipe
          </Link>
        </div>
      ))}
    </Slider>
  </div>
</section>

      </main>

     
    </div>
  );
};

export default Home;