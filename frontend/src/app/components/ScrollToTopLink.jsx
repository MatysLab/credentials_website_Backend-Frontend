import { HomeIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export default function ScrollToTopLink() {
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a.scroll-top');
      if (link) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <a
      href="#"
      className="scroll-top group flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-4 px-3 py-1 rounded-full hover:bg-gray-200 active:bg-gray-300"
    >
      <HomeIcon
        className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors"
        aria-hidden="true"
      />
      Home
    </a>
  );
}
