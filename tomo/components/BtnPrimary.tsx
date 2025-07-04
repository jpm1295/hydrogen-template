import { ButtonHTMLAttributes } from 'react';

export default function BtnPrimary(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-accent-basil text-neutral-white px-6 py-3 active:scale-95"
    />
  );
}
