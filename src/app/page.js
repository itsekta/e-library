"use client";
import { NextUIProvider } from "@nextui-org/react";
import SearchBar from "@/component/SearchBar";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SearchBar />
      </main>
    </NextUIProvider>
  );
}
