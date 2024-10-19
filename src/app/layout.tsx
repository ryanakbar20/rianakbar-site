import { Poppins } from "next/font/google";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Rian Akbar Ferdiansyah",
  description:
    "Passionate Software Engineer with over 4 years of experience in developing web applications and backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Add meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="software engineer, web development, freelance, programmer, frontend, frontend engineer, frontend developer, rian, rian akbar, rian akbar ferdiansyah, ryan, ryan akbar, ryan akbar ferdiansyah"
        />
        <meta name="author" content="Rian Akbar Ferdiansyah" />

        {/* Add Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/photo-profile.png" />

        {/* Add Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/photo-profile.png" />

        {/* Add canonical link to avoid duplicate content */}
        <link rel="canonical" href="https://rianakbar.com/" />

        <link rel="icon" type="image/svg+xml" href="./favicon.ico" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
