import 'app/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import MainHeader from 'components/layout/main-header';
// import Navbar from 'components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Парафія УПЦ на честь Успіння Божої Матері',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <title>Парафія на честь Успіння Божої Матері УПЦ Марбея</title>
        <meta
          name="description"
          content="Ласкаво просимо на сайт парафії УПЦ на честь Успіння Божої Матері в Марбеї! Дізнайтесь про нашу історію, події, послуги та спільноту. Приєднуйтесь до нас у нашому шляху духовного розвитку."
        />

        <meta
          name="keywords"
          content="УПЦ, Успіння Божої Матері, парафія, храм, служби, події, віра, спільнота"
        />
        <meta name="author" content="Serge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
