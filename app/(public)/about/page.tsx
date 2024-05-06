import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About page",
    description: "Description about page",
};

export default function AboutPage() {
    return (
      <>
        <span className="text-5xl">ABOUT</span>
      </>
    );
}