import { ProductContent } from "@/typings/productTypings";

async function fetchProduct(url: string) {
  try {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL(`https://walmart.com/search?q=${url}`);

    console.log("Scrapping >>>", newUrl.toString());

    const body = {
      source: "universal_ecomerce",
      url: newUrl.toString(),
      geo_location: "United States",
      parse: true,
    };

    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) {
      throw new Error("No results found");
    }

    const result: ProductContent = data.results[0];
    const product = result.content;

    return product;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null; // Or handle error as needed
  }
}

export default fetchProduct;
