import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web tutorials",
  description: "Generated by tae",
};

interface Topic {
  id: number;
  title: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const resp = await fetch('http://localhost:9999/topics');
    const topics = await resp.json();
  return (
    <html>
      <body>
        {/* In Next.js, SPA(Single Page Application) can be used simply by replacing the tag with a link tag */}
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic)=>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
          {children}
          <ul>
            <li><Link href="/create">Create</Link></li>
            <li><Link href="/update/1">Update</Link></li>
            <li><input type="button" value="delete" /></li>
          </ul>
      </body>
    </html>
  );
}
