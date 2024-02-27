import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image=""
          className="bg-pink-200 h-full w-125 md:h-32"
        />
        <GridOption
          title="Shop wardrobe"
          image=""
          className="bg-blue-100 col-start-3 col-span-4 md:h-25"
        />{" "}
        <GridOption
          title="Shop home"
          image=""
          className="bg-yellow-200 col-start-1 col-end-7"
        />{" "}
   
        <GridOption
          title="Shop electronics"
          image=""
          className="bg-blue-200 h-full md:h-42 col-end-2"
        />{" "}
        <GridOption
          title="Shop toys"
          image=""
          className="bg-green-100 h-64 col-span-2"
        />{" "}
        <GridOption
          title="All you need for a match day"
          image=""
          className="bg-red-100 col-span-2 row-span-2"
        />
          <GridOption
          title="Shop gadgets"
          image=""
          className="bg-orange-100 row-span-90"
        />
              <GridOption
          title="Shop beauty"
          image=""
          className="bg-blue-100 h-64"
        />
              <GridOption
          title="Shop sports"
          image=""
          className="bg-blue-100 h-64"
        />
              <GridOption
          title="Enjoy free shipping"
          image=""
          className="bg-rose-100 h-64"
        />
              <GridOption
          title="flash deals"
          image=""
          className="bg-orange-200 h-64 col-span-6"
        />
      </div>
    </main>
  );
}
