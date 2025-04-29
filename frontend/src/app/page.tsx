import Header from '@/app/components/Header';
import HomeDisplay from './components/HomeDisplay';
import Projects from './components/Projects';
import FooterSection from '@/app/components/Footer';
import ClassifierProject from './components/project/Classifier';

export default function Home() {
  return (
    <div className="bg-white items-center">
      <Header/>
      <HomeDisplay/>
      <ClassifierProject/>
      <FooterSection/>
    </div>
  );
}
