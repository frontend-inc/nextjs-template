import { cn } from '../lib/utils';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold text-black mb-4">Start prompting</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">Build your next project with AI</p>      
    </div>
  );
}