import { cn } from '../lib/utils';
import Hero from '../components/Hero';

export default function Home({ user }) {
  return (
    <>
      {/* Hero Component */}
      <Hero 
        title="Start Prompting" 
        subtitle="Build your next project with AI"
      />
    </>
  );
}