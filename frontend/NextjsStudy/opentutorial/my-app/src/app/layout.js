import { Control } from "./Control";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by tae",
};

export default async function RootLayout({ children }) {
  const resp = await fetch('http://localhost:9999/topics', { cache: 'no-store' });
  const topics = await resp.json();
  return (
    <html>
      <body>
        {/* In Next.js, SPA(Single Page Application) can be used simply by replacing the tag with a link tag */}
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
