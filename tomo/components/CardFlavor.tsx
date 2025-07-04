import { ReactNode } from 'react';

export default function CardFlavor({ children }: { children: ReactNode }) {
  return (
    <div className="aspect-[4/5] shadow-lg transition-transform hover:scale-105">
      {children}
    </div>
  );
}
