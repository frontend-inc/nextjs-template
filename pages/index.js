import { cn } from '../lib/utils';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home({ user }) {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Component */}
        <Hero 
          title="Build Beautiful Interfaces" 
          subtitle="A collection of minimalist, ready-to-use UI components for your next project"
        />
      </div>
    </Layout>
  );
}