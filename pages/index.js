import { cn } from '../lib/utils';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-black mb-4">Start prompting</h1>
      <p className="text-2xl text-gray-500">Build your project using AI</p>      
    </div>
  );
}