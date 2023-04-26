import { Suspense } from "react";
import { ClientOnly, Loading } from "@/components";
import "@/styles/global.css";

export const metadata = {
  title: "Renaissance PR Agency",
  description:
    "Count on our PR agency to provide exclusive video game PR services at competitive prices. Call us on 01483 665493 for more information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-white font-lato">
        <Suspense fallback={<Loading />}>
          <ClientOnly>{children}</ClientOnly>
        </Suspense>
      </body>
    </html>
  );
}
