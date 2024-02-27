"use client";
import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Search value:", searchValue);
    router.push(`/search?q=${searchValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 items-center space-x-5">
      <div>
        <Link href="/search" className="mb-5 md:mb-0">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center text-black bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>{" "}
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href="/"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My items</p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign in</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href="/basket"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
