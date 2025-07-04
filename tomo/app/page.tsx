import HeadingXL from '../components/HeadingXL';
import BtnPrimary from '../components/BtnPrimary';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center space-y-8">
      <HeadingXL>Freshly pressed. Maltese soul, Italian heart.</HeadingXL>
      <BtnPrimary>Order on Wolt</BtnPrimary>
    </main>
  );
}
