import React from 'react';
import { LogIn,ClipboardList,ShieldHalf, Clock, Loader, SquareChartGantt    } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen">

      <section className="bg-gradient-to-r from-[#d7ccc8] to-[#efebe9] mx-auto px-4 py-20 text-center flex justify-center items-center flex-col py-52">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="">Your</span> Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover a world of possibilities where innovation meets creativity. 
            Join us on this journey to transform ideas into reality.
          </p>
          <Link to="/login"><button type="submit" className="flex justify-center items-center gap-2 bg-gradient-to-r px-5 cursor-pointer from-[#8d6e63] to-[#6d4c41] text-white font-bold text-lg py-3 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300"><LogIn size={20} /> Get Started</button></Link>
      </section>


      <section className="py-52">
        <div className="mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Powerful Task Management Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
                title: "Task Organization",
                description: "Easily categorize and prioritize tasks with intuitive labels and filters",
                icon: <ClipboardList size={50} />
              },
              {
                title: "Progress Tracking",
                description: "Visual dashboards and analytics to monitor your productivity trends",
                icon: <SquareChartGantt size={50} />},
              {
                title: "Deadline Management",
                description: "Smart reminders and calendar integration to never miss important dates",
                icon: <Clock size={50} />
              },
            ].map((feature, index) => (
              <div key={index} className='flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full'>
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-40">
        <div className="px-4 text-center flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of others who have already discovered the power of our platform.</p>
            <button type="submit" className="flex justify-center items-center gap-2 bg-gradient-to-r px-5 cursor-pointer from-[#8d6e63] to-[#6d4c41] text-white font-bold text-lg py-3 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300"><LogIn size={20} /> Get Started</button>
        </div>
      </section>


      <footer className="py-6 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Your Space. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="transition-colors">Privacy</a>
              <a href="#" className="transition-colors">Terms</a>
              <a href="#" className="transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
