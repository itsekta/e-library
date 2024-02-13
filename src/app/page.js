"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/component/NavBar";
import SearchBar from "@/component/SearchBar";
import BookCardUI from "@/component/BookCardUI";

export default function Home() {
  return (
    <NextUIProvider>
      <NavBar />
      <main className="flex flex-col items-center justify-between p-8 gap-16">
        <SearchBar />
        <BookCardUI />
      </main>
    </NextUIProvider>
  );
}
