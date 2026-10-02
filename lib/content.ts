export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#ramen", label: "Ramen" },
  { href: "#menu", label: "Menu" },
  { href: "#location", label: "Location" },
  { href: "#circle", label: "Red Circle" },
  { href: "#franchise", label: "Franchise" },
];

export type Dish = { name: string; desc: string; img: string; alt: string; isNew?: boolean };

export const dishes: Dish[] = [
  { name: "X Ramen", isNew: true, img: "/ramen/x-ramen.webp", alt: "Top-down bowl of ramen with chilli-glazed tofu cubes, dumpling and pickled vegetables", desc: "Bold, mysterious and full of character, with a little SATO attitude." },
  { name: "Kings Cheesy Ramen", img: "/ramen/kings-cheesy-ramen.webp", alt: "Top-down bowl of creamy ramen with cheese cubes, a dumpling, snap peas and spring onion", desc: "A royal, creamy comfort bowl made for serious cheese lovers." },
  { name: "Naruto Veg Ramen", img: "/ramen/naruto-veg-ramen.webp", alt: "Top-down bowl of creamy veg ramen with a dumpling, cucumber, red cabbage and carrot", desc: "Warm, comforting and packed with playful Japanese anime energy." },
  { name: "Kimchi Veg Ramen", img: "/ramen/kimchi-veg-ramen.webp", alt: "Top-down bowl of ramen topped with kimchi and sesame seeds", desc: "A lively kimchi kick meets slow, warming ramen comfort." },
  { name: "Captain Sato Ramen", img: "/ramen/captain-sato-ramen.webp", alt: "Top-down bowl of ramen with chilli-dusted tofu slabs and a dumpling", desc: "Hearty, warm and generous. The bowl that is unmistakably SATO." },
];

export const dishCards = [
  { name: "Sato Red Flame Udon", jp: "うどん", img: "/menu/sato-red-flame-udon.webp", alt: "Spicy red udon with tofu, corn and spring onion in a kraft tray" },
  { name: "Teriyaki Veggie Bao", jp: "包子", img: "/menu/teriyaki-veggie-bao.webp", alt: "Two teriyaki veggie bao with slaw and chilli in a kraft tray" },
  { name: "Korean Cheese Corn Dog", jp: "ハットグ", img: "/menu/korean-cheese-corn-dog.webp", alt: "Crumb-coated Korean cheese corn dog drizzled with cheese and chilli sauce" },
  { name: "Butter Garlic Tteokbokki", jp: "トッポッキ", img: "/menu/butter-garlic-tteokbokki.webp", alt: "Creamy butter garlic tteokbokki topped with spring onion and sesame" },
];

export const contact = {
  email: "nutricorefoodspvtltd@gmail.com",
  phone: "+91 7600 639 478",
  tel: "+917600639478",
};

type Outlet = { name: string; addr: string; city: string; phone: string; img?: string; alt?: string };

/** tel: link for a display number like "+91 91046 25167". */
export const telHref = (phone: string) => "tel:" + phone.replace(/[^+\d]/g, "");

/** Card address: the street address once confirmed, otherwise just "Area, City". */
export const displayAddr = (o: Outlet) => {
  if (!o.addr.startsWith("[") || o.name.includes("[")) return o.addr;
  const area = o.name.replace("SATO ", "");
  return area === o.city ? o.city : `${area}, ${o.city}`;
};

/** Google Maps search for an outlet; falls back to name + city while the street address is unconfirmed. */
export const directionsUrl = (o: Outlet) =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`SATO Ramen Bowl, ${displayAddr(o)}`);

// Only Vijay Char Rasta's street address is confirmed (District listing, Oct 2026); the rest await SATO.
// Gota and Prahlad Nagar use the main number.
export const outlets: Outlet[] = [
  {
    name: "SATO Vijay Char Rasta",
    addr: "Flat 4, Pavan Apartment, Vijay Cross Road, Opp. Central Bank, Navrangpura, Ahmedabad",
    city: "Ahmedabad",
    phone: "+91 91046 25167",
    img: "/outlets/vijay-char-rasta.webp",
    alt: "Red-walled SATO Vijay Char Rasta with a bar counter, orange stools and a neon Sato Ramen sign",
  },
  {
    name: "SATO Gota",
    addr: "[Street address], Ahmedabad",
    city: "Ahmedabad",
    phone: contact.phone,
    img: "/outlets/gota.webp",
    alt: "Glass-fronted SATO Gota with red booth seating, red chairs and a neon Sato Ramen sign",
  },
  {
    name: "SATO Naroda",
    addr: "[Street address], Ahmedabad",
    city: "Ahmedabad",
    phone: "+91 95127 57400",
    img: "/outlets/naroda.webp",
    alt: "Bright SATO Naroda dining room with red chairs, framed art and a ラーメン banner",
  },
  {
    name: "SATO Gandhinagar",
    addr: "[Street address], Gandhinagar",
    city: "Gandhinagar",
    phone: "+91 70693 22314",
    img: "/outlets/gandhinagar.webp",
    alt: "Cosy corner at SATO Gandhinagar with manga shelves, an anime pirate flag and a low bench table",
  },
  {
    name: "SATO Prahlad Nagar",
    addr: "[Street address], Ahmedabad",
    city: "Ahmedabad",
    phone: contact.phone,
    img: "/outlets/prahlad-nagar.webp",
    alt: "SATO Prahlad Nagar dining room with red chairs, black-and-white tiled floor, manga ceiling and a ラーメン noren curtain",
  },
];

export const perks = [
  { jp: "秘", k: "Secret menu", v: "Taste bowls that never make the menu." },
  { jp: "初", k: "First taste", v: "Try every new launch before anyone else." },
  { jp: "祭", k: "Themed nights", v: "Personal invites to cosplay and Ghibli nights." },
  { jp: "仲", k: "Find your people", v: "Anime fans, spice lovers, late-night slurpers." },
];

// Top reels on @sato_ramenbowl by views (checked 2 Oct 2026). Each card links to the reel on Instagram;
// covers are the reels' own thumbnails, saved locally because Instagram image URLs expire.
export const reels = [
  {
    url: "https://www.instagram.com/reel/Db5rOqtM90G/",
    views: "84.7K",
    creator: "darvimukhijaa",
    cover: "/reels/Db5rOqtM90G.jpg",
    alt: "Red-and-white SATO interior with paper lanterns, titled Ramen X Cosplay in Ahmedabad",
    caption: "Ramen, dumplings and cosplay. A new comfort-food spot in Ahmedabad.",
  },
  {
    url: "https://www.instagram.com/reel/DcFzZ-zhyyk/",
    views: "70.7K",
    creator: "withmahekk",
    cover: "/reels/DcFzZ-zhyyk.jpg",
    alt: "Guest with a paper umbrella under SATO's parasol ceiling, titled Japan in Ahmedabad",
    caption: "“Ahmedabad, we found your next ramen spot.” Cheese Ramen rated 9.5/10.",
  },
  {
    url: "https://www.instagram.com/reel/Dd1YFeQtGdL/",
    views: "3.7K",
    creator: "allabouttanu48",
    cover: "/reels/Dd1YFeQtGdL.jpg",
    alt: "Bowl of SATO ramen with tofu, corn and greens beside bamboo steamers",
    caption: "Japanese vibes, cozy corners and a comforting bowl in Gandhinagar.",
  },
];

export const instagramUrl = "https://www.instagram.com/sato_ramenbowl/";
export const linkedinUrl = "https://www.linkedin.com/company/sato-ramen-bowl/";
