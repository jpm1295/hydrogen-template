import { ReactNode } from 'react';

export default function HeadingXL({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-5xl md:text-6xl font-domine italic leading-tight tracking-tight">
      {children}
    </h1>
  );
}
