export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "mysterious",
    "delicious",
    "cheesy",
    "scary",
    "superb",
    "saucy",
    "super-duper",
    "spicy",
    "smokey"
  ];

  const nouns = [
    "elves",
    "tomatoes",
    "phenomena",
    "feast",
    "brick-oven",
    "Italian",
    "jumpers",
    "puppies",
    "kangaroo",
    "beaver",
    "cats",
    "socks",
    "mario-bros",
    "luigi",
    "mario",
    "bowser",
    "princess",
    "nintendo"

  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
