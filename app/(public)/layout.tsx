import { Navbar } from "@/components";


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hola a todos</span>
            {children}
        </main>
      </>
    );
  }