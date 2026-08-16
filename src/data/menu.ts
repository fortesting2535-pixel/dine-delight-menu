import vegSeekhKebab from "@/assets/menu/veg-seekh-kebab.jpg";
import paneerTikka from "@/assets/menu/paneer-tikka.jpg";
import haraBharaKebab from "@/assets/menu/hara-bhara-kebab.jpg";
import crispyCornChaat from "@/assets/menu/crispy-corn-chaat.jpg";
import chilliPaneer from "@/assets/menu/chilli-paneer.jpg";
import chickenSeekhKebab from "@/assets/menu/chicken-seekh-kebab.jpg";
import tandooriChickenHalf from "@/assets/menu/tandoori-chicken-half.jpg";
import chicken65 from "@/assets/menu/chicken-65.jpg";
import muttonSeekhKebab from "@/assets/menu/mutton-seekh-kebab.jpg";
import fishAmritsari from "@/assets/menu/fish-amritsari.jpg";
import tandooriChickenFull from "@/assets/menu/tandoori-chicken-full.jpg";
import chickenMalaiTikka from "@/assets/menu/chicken-malai-tikka.jpg";
import reshmiKebab from "@/assets/menu/reshmi-kebab.jpg";
import tandooriPrawns from "@/assets/menu/tandoori-prawns.jpg";
import achariPaneerTikka from "@/assets/menu/achari-paneer-tikka.jpg";
import tandooriMushroom from "@/assets/menu/tandoori-mushroom.jpg";
import hyderabadiChickenBiryani from "@/assets/menu/hyderabadi-chicken-biryani.jpg";
import muttonBiryani from "@/assets/menu/mutton-biryani.jpg";
import vegBiryani from "@/assets/menu/veg-biryani.jpg";
import eggBiryani from "@/assets/menu/egg-biryani.jpg";
import jeeraRice from "@/assets/menu/jeera-rice.jpg";
import kadhaiPaneer from "@/assets/menu/kadhai-paneer.jpg";
import paneerButterMasala from "@/assets/menu/paneer-butter-masala.jpg";
import palakPaneer from "@/assets/menu/palak-paneer.jpg";
import dalMakhani from "@/assets/menu/dal-makhani.jpg";
import malaiKofta from "@/assets/menu/malai-kofta.jpg";
import mixedVegCurry from "@/assets/menu/mixed-veg-curry.jpg";
import butterChicken from "@/assets/menu/butter-chicken.jpg";
import chickenCurry from "@/assets/menu/chicken-curry.jpg";
import muttonRoganJosh from "@/assets/menu/mutton-rogan-josh.jpg";
import chickenChettinad from "@/assets/menu/chicken-chettinad.jpg";
import kadhaiChicken from "@/assets/menu/kadhai-chicken.jpg";
import muttonKoftaCurry from "@/assets/menu/mutton-kofta-curry.jpg";
import fishCurry from "@/assets/menu/fish-curry.jpg";
import prawnMasala from "@/assets/menu/prawn-masala.jpg";
import goanFishCurry from "@/assets/menu/goan-fish-curry.jpg";
import butterGarlicPrawns from "@/assets/menu/butter-garlic-prawns.jpg";
import butterNaan from "@/assets/menu/butter-naan.jpg";
import garlicNaan from "@/assets/menu/garlic-naan.jpg";
import tandooriRoti from "@/assets/menu/tandoori-roti.jpg";
import lachhaParatha from "@/assets/menu/lachha-paratha.jpg";
import cheeseNaan from "@/assets/menu/cheese-naan.jpg";
import masalaChaas from "@/assets/menu/masala-chaas.jpg";
import sweetLassi from "@/assets/menu/sweet-lassi.jpg";
import freshLimeSoda from "@/assets/menu/fresh-lime-soda.jpg";
import virginMojito from "@/assets/menu/virgin-mojito.jpg";
import softDrinks from "@/assets/menu/soft-drinks.jpg";
import gulabJamun from "@/assets/menu/gulab-jamun.jpg";
import rasmalai from "@/assets/menu/rasmalai.jpg";
import gajarKaHalwa from "@/assets/menu/gajar-ka-halwa.jpg";
import kulfiFalooda from "@/assets/menu/kulfi-falooda.jpg";

export type Badge = "Bestseller" | "Chef's Pick" | "Trending";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
  badge?: Badge;
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  thumb: string;
  items: MenuItem[];
};

export const CAFE_NAME = "Kitchen Choice";

export const categories: Category[] = [
  {
    id: "starters-veg",
    name: "Starters (Veg)",
    tagline: "Start the table right",
    thumb: paneerTikka,
    items: [
      {
        id: "veg-seekh-kebab",
        name: "Veg Seekh Kebab",
        description: "Skewered mixed vegetable kebabs, chargrilled.",
        price: 229,
        image: vegSeekhKebab,
        veg: true,
      },
      {
        id: "paneer-tikka",
        name: "Paneer Tikka",
        description: "Marinated cottage cheese cubes, tandoor grilled.",
        price: 259,
        image: paneerTikka,
        veg: true,
        badge: "Chef's Pick",
      },
      {
        id: "hara-bhara-kebab",
        name: "Hara Bhara Kebab",
        description: "Spinach & pea patties, lightly spiced.",
        price: 219,
        image: haraBharaKebab,
        veg: true,
      },
      {
        id: "crispy-corn-chaat",
        name: "Crispy Corn Chaat",
        description: "Golden fried corn tossed in tangy spices.",
        price: 199,
        image: crispyCornChaat,
        veg: true,
      },
      {
        id: "chilli-paneer",
        name: "Chilli Paneer (Dry)",
        description: "Paneer tossed in Indo-Chinese chilli sauce.",
        price: 259,
        image: chilliPaneer,
        veg: true,
      },
    ],
  },
  {
    id: "starters-nonveg",
    name: "Starters (Non-Veg)",
    tagline: "Smoke, spice and char",
    thumb: chicken65,
    items: [
      {
        id: "chicken-seekh-kebab",
        name: "Chicken Seekh Kebab",
        description: "Minced chicken kebabs with aromatic spices.",
        price: 269,
        image: chickenSeekhKebab,
        veg: false,
      },
      {
        id: "tandoori-chicken-half",
        name: "Tandoori Chicken (Half)",
        description: "Classic tandoori chicken, char-grilled.",
        price: 299,
        image: tandooriChickenHalf,
        veg: false,
      },
      {
        id: "chicken-65",
        name: "Chicken 65",
        description: "Spicy deep-fried chicken bites, curry leaf tempering.",
        price: 279,
        image: chicken65,
        veg: false,
      },
      {
        id: "mutton-seekh-kebab",
        name: "Mutton Seekh Kebab",
        description: "Minced mutton kebabs, smoky tandoor finish.",
        price: 319,
        image: muttonSeekhKebab,
        veg: false,
      },
      {
        id: "fish-amritsari",
        name: "Fish Amritsari",
        description: "Batter-fried fish, Punjabi spice coating.",
        price: 309,
        image: fishAmritsari,
        veg: false,
      },
    ],
  },
  {
    id: "tandoor",
    name: "Tandoor",
    tagline: "Straight from the clay oven",
    thumb: tandooriChickenFull,
    items: [
      {
        id: "tandoori-chicken-full",
        name: "Tandoori Chicken (Full)",
        description: "Whole chicken marinated & tandoor roasted.",
        price: 549,
        image: tandooriChickenFull,
        veg: false,
      },
      {
        id: "chicken-malai-tikka",
        name: "Chicken Malai Tikka",
        description: "Creamy, mildly spiced chicken tikka.",
        price: 299,
        image: chickenMalaiTikka,
        veg: false,
      },
      {
        id: "reshmi-kebab",
        name: "Reshmi Kebab",
        description: "Soft, silky chicken kebabs.",
        price: 289,
        image: reshmiKebab,
        veg: false,
      },
      {
        id: "tandoori-prawns",
        name: "Tandoori Prawns",
        description: "Char-grilled prawns in tandoori spice.",
        price: 399,
        image: tandooriPrawns,
        veg: false,
      },
      {
        id: "achari-paneer-tikka",
        name: "Achari Paneer Tikka",
        description: "Pickle-spiced grilled cottage cheese.",
        price: 269,
        image: achariPaneerTikka,
        veg: true,
      },
      {
        id: "tandoori-mushroom",
        name: "Tandoori Mushroom",
        description: "Marinated mushrooms, tandoor roasted.",
        price: 239,
        image: tandooriMushroom,
        veg: true,
      },
    ],
  },
  {
    id: "biryani",
    name: "Biryani & Rice",
    tagline: "Dum-cooked, sealed with steam",
    thumb: hyderabadiChickenBiryani,
    items: [
      {
        id: "hyderabadi-chicken-biryani",
        name: "Hyderabadi Chicken Biryani",
        description: "Dum-cooked basmati rice with chicken, traditional spices.",
        price: 319,
        image: hyderabadiChickenBiryani,
        veg: false,
        badge: "Bestseller",
      },
      {
        id: "mutton-biryani",
        name: "Mutton Biryani",
        description: "Slow-cooked basmati rice layered with tender mutton.",
        price: 379,
        image: muttonBiryani,
        veg: false,
      },
      {
        id: "veg-biryani",
        name: "Veg Biryani",
        description: "Fragrant basmati rice with mixed vegetables.",
        price: 249,
        image: vegBiryani,
        veg: true,
      },
      {
        id: "egg-biryani",
        name: "Egg Biryani",
        description: "Basmati rice with boiled eggs & biryani masala.",
        price: 239,
        image: eggBiryani,
        veg: false,
      },
      {
        id: "jeera-rice",
        name: "Jeera Rice",
        description: "Steamed basmati rice tempered with cumin.",
        price: 149,
        image: jeeraRice,
        veg: true,
      },
    ],
  },
  {
    id: "paneer-veg-mains",
    name: "Paneer & Veg Mains",
    tagline: "Gravies worth mopping up",
    thumb: kadhaiPaneer,
    items: [
      {
        id: "kadhai-paneer",
        name: "Kadhai Paneer",
        description: "Paneer & bell peppers in a spiced tomato masala.",
        price: 279,
        image: kadhaiPaneer,
        veg: true,
        badge: "Trending",
      },
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        description: "Paneer in a rich, creamy tomato gravy.",
        price: 289,
        image: paneerButterMasala,
        veg: true,
      },
      {
        id: "palak-paneer",
        name: "Palak Paneer",
        description: "Cottage cheese in a smooth spinach gravy.",
        price: 269,
        image: palakPaneer,
        veg: true,
      },
      {
        id: "dal-makhani",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in butter & cream.",
        price: 229,
        image: dalMakhani,
        veg: true,
      },
      {
        id: "malai-kofta",
        name: "Malai Kofta",
        description: "Vegetable-paneer dumplings in a mild creamy gravy.",
        price: 279,
        image: malaiKofta,
        veg: true,
      },
      {
        id: "mixed-vegetable-curry",
        name: "Mixed Vegetable Curry",
        description: "Seasonal vegetables in a light spiced gravy.",
        price: 239,
        image: mixedVegCurry,
        veg: true,
      },
    ],
  },
  {
    id: "curries",
    name: "Chicken & Mutton Curries",
    tagline: "Slow-simmered house classics",
    thumb: butterChicken,
    items: [
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        description: "Classic creamy tomato butter chicken.",
        price: 319,
        image: butterChicken,
        veg: false,
      },
      {
        id: "chicken-curry",
        name: "Chicken Curry",
        description: "Home-style chicken curry in onion-tomato masala.",
        price: 289,
        image: chickenCurry,
        veg: false,
      },
      {
        id: "mutton-rogan-josh",
        name: "Mutton Rogan Josh",
        description: "Kashmiri-style mutton curry, deep spices.",
        price: 359,
        image: muttonRoganJosh,
        veg: false,
      },
      {
        id: "chicken-chettinad",
        name: "Chicken Chettinad",
        description: "Fiery South Indian style chicken curry.",
        price: 309,
        image: chickenChettinad,
        veg: false,
      },
      {
        id: "kadhai-chicken",
        name: "Kadhai Chicken",
        description: "Chicken cooked with bell peppers in kadhai masala.",
        price: 299,
        image: kadhaiChicken,
        veg: false,
      },
      {
        id: "mutton-kofta-curry",
        name: "Mutton Kofta Curry",
        description: "Minced mutton dumplings in spiced gravy.",
        price: 339,
        image: muttonKoftaCurry,
        veg: false,
      },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    tagline: "Coastal, tangy, fresh",
    thumb: prawnMasala,
    items: [
      {
        id: "fish-curry",
        name: "Fish Curry",
        description: "Fresh fish simmered in a tangy coconut-based curry.",
        price: 329,
        image: fishCurry,
        veg: false,
      },
      {
        id: "prawn-masala",
        name: "Prawn Masala",
        description: "Prawns cooked in a spiced onion-tomato masala.",
        price: 359,
        image: prawnMasala,
        veg: false,
      },
      {
        id: "goan-fish-curry",
        name: "Goan Fish Curry",
        description: "Coconut & kokum based tangy fish curry.",
        price: 339,
        image: goanFishCurry,
        veg: false,
      },
      {
        id: "butter-garlic-prawns",
        name: "Butter Garlic Prawns",
        description: "Prawns sauteed in butter & garlic.",
        price: 379,
        image: butterGarlicPrawns,
        veg: false,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    tagline: "Hot from the tandoor",
    thumb: butterNaan,
    items: [
      {
        id: "butter-naan",
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter.",
        price: 59,
        image: butterNaan,
        veg: true,
      },
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic & coriander.",
        price: 69,
        image: garlicNaan,
        veg: true,
      },
      {
        id: "tandoori-roti",
        name: "Tandoori Roti",
        description: "Whole wheat bread from the tandoor.",
        price: 39,
        image: tandooriRoti,
        veg: true,
      },
      {
        id: "lachha-paratha",
        name: "Lachha Paratha",
        description: "Multi-layered, flaky whole wheat paratha.",
        price: 59,
        image: lachhaParatha,
        veg: true,
      },
      {
        id: "cheese-naan",
        name: "Cheese Naan",
        description: "Naan stuffed with melted cheese.",
        price: 89,
        image: cheeseNaan,
        veg: true,
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    tagline: "Cool the spice down",
    thumb: sweetLassi,
    items: [
      {
        id: "masala-chaas",
        name: "Masala Chaas",
        description: "Spiced buttermilk with fresh herbs.",
        price: 79,
        image: masalaChaas,
        veg: true,
      },
      {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        description: "Traditional sweetened yogurt drink.",
        price: 99,
        image: sweetLassi,
        veg: true,
      },
      {
        id: "fresh-lime-soda",
        name: "Fresh Lime Soda",
        description: "Sweet or salted, chilled.",
        price: 79,
        image: freshLimeSoda,
        veg: true,
      },
      {
        id: "virgin-mojito",
        name: "Virgin Mojito",
        description: "Fresh mint, lime & soda.",
        price: 149,
        image: virginMojito,
        veg: true,
      },
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        description: "Coke / Sprite / Fanta (chilled).",
        price: 60,
        image: softDrinks,
        veg: true,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    tagline: "The sweet last word",
    thumb: gulabJamun,
    items: [
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        description: "Soft milk dumplings in rose-cardamom syrup.",
        price: 99,
        image: gulabJamun,
        veg: true,
      },
      {
        id: "rasmalai",
        name: "Rasmalai",
        description: "Soft paneer discs in saffron-cardamom milk.",
        price: 119,
        image: rasmalai,
        veg: true,
      },
      {
        id: "gajar-ka-halwa",
        name: "Gajar Ka Halwa",
        description: "Warm carrot halwa with nuts.",
        price: 109,
        image: gajarKaHalwa,
        veg: true,
      },
      {
        id: "kulfi-falooda",
        name: "Kulfi Falooda",
        description: "Traditional kulfi with vermicelli & rose syrup.",
        price: 139,
        image: kulfiFalooda,
        veg: true,
      },
    ],
  },
];

export const allItems: MenuItem[] = categories.flatMap((category) => category.items);

export const totalItems = allItems.length;

const specialIds = ["hyderabadi-chicken-biryani", "paneer-tikka", "kadhai-paneer"];

export const chefsSpecials: MenuItem[] = specialIds
  .map((id) => allItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item));
