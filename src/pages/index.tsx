import { Header } from '@/app/Header';
import { Results } from '@/app/Results';
import { provideSearch } from '@/context/search';

const HomePage = provideSearch(() => {

  return (
    <>
      <Header />
      <Results />
    </>
  );
})

export default HomePage
