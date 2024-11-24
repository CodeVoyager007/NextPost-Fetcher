import Link from 'next/link';
import { Button } from '@/components/ui/button'; 


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground p-6 font-serif">
      
      <header className="mb-6 text-center">
        <h1 className="text-5xl font-bold text-black mb-2">NextPost Fetcher</h1>
        <p className="text-lg text-black mb-4">Your go-to platform for fetching the latest posts!</p>
      </header>
      <section className="flex flex-col justify-center items-center mb-8">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105 max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-black mb-4">Welcome to NextPost Fetcher</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover and explore the latest posts from our community. Join us in sharing knowledge and insights!
          </p>
          <div className="flex justify-center">
            <Link href="/fetch-posts">
              <Button className="bg-primary text-primary-foreground hover:bg-accent transition duration-300 ease-in-out shadow-md rounded-lg">
                Go to Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-black text-center mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Fast & Reliable</h3>
            <p className="text-black">
              Our platform ensures that you get the latest posts quickly and efficiently, so you never miss out on important updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Community Driven</h3>
            <p className="text-black">
              Join a vibrant community of contributors who are passionate about sharing knowledge and insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Engaging Discussions</h3>
            <p className="text-black">
              Participate in discussions and share your thoughts on various topics with like-minded individuals.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-black text-center mb-4">Join Our Community</h2>
        <p className="text-black text-center mb-4">
          Become a part of our growing community and stay updated with the latest posts and discussions.
        </p>
        <div className="flex justify-center">
          <Link href="/fetch-posts">
            <Button className="bg-primary text-primary-foreground hover:bg-accent transition duration-300 ease-in-out shadow-md rounded-lg max-w-xs w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      <footer className="mt-6 text-center bg-white p-4">
        <p className="text-sm text-black">© 2023 NextPost Fetcher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
