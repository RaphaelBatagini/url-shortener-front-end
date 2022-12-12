import NextHead from "next/head";

export default function Head() {
  const appName = 'URL Shortener';
  const description = 'Web Tool to Shorten URLs';
  const themeColor = '#3f2ae5';
  const domain = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <NextHead>
      <title>Best Tools For Web - URL Shortener</title>
      <meta name="description" content={ description } />
      <meta name="application-name" content={ appName } />
      <meta name="keywords" content={ appName } />
      <meta name="theme-color" content={ themeColor } />
      
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={ appName } />
      
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content={ themeColor } />
      <meta name="msapplication-tap-highlight" content="no" />
      
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
      
      <link rel="mask-icon" href="/icons/maskable_icon.png" color={ themeColor } />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="icon" href="/icons/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={ domain } />
      <meta name="twitter:title" content={ appName } />
      <meta name="twitter:description" content={ description } />
      <meta name="twitter:image" content={ `${domain}/icons/maskable_icon-192x192.png` } />
      <meta name="twitter:creator" content="@raphaelbatagini" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ appName } />
      <meta property="og:description" content={ description } />
      <meta property="og:site_name" content={ appName } />
      <meta property="og:url" content={ domain } />
      <meta property="og:image" content={ `${domain}/icons/apple-touch-icon.png` } />
    </NextHead>
  );
}