import { Inter, Roboto, Lusitana  } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
    });