import { NavbarCuston } from "@/components";



export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <main className="flex flex-col min-h-screen items-center bg-black">
          <NavbarCuston />
          {children}
        </main>
      </>
    );
  }