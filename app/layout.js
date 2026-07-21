import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Adestra Fácil - Método Prático de Adestramento Canino",
  description: "Ensine seu cão a fazer xixi e cocô no lugar certo em até 14 dias com reforço positivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6a5c3a7d30b79c4b96078486";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xpw620etgw");
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
