import Header from '@/app/components/Header';
import HomeDisplay from './components/HomeDisplay';

export default function Home() {
  return (
    <div className="bg-white items-center">
      <Header/>
      <HomeDisplay/>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 w-10vh mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" />
    </div>
  );
}
