import { ReactNode } from 'react';

export default function SectionSlab({ children }: { children: ReactNode }) {
  return <section className="bg-core-red text-white py-16">{children}</section>;
}
