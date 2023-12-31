import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "NextJS Todo List",
    description: "Create your own todo list",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-sky-50 h-screen flex justify-center p-7 pt-14`}>
              <main className="app">
                {children}
              </main>
            </body>
        </html>
    );
}
