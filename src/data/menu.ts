import espresso from "@/assets/dishes/espresso.jpg";
import cappuccino from "@/assets/dishes/cappuccino.jpg";
import cafeLatte from "@/assets/dishes/cafe-latte.jpg";
import flatWhite from "@/assets/dishes/flat-white.jpg";
import hazelnutMocha from "@/assets/dishes/hazelnut-mocha.jpg";
import filterKaapi from "@/assets/dishes/filter-kaapi.jpg";
import affogato from "@/assets/dishes/affogato.jpg";
import masalaChai from "@/assets/dishes/masala-chai.jpg";
import hotChocolate from "@/assets/dishes/hot-chocolate.jpg";
import icedAmericano from "@/assets/dishes/iced-americano.jpg";
import icedCaramelMacchiato from "@/assets/dishes/iced-caramel-macchiato.jpg";
import coldCoffeeFrappe from "@/assets/dishes/cold-coffee-frappe.jpg";
import icedMocha from "@/assets/dishes/iced-mocha.jpg";
import vietnameseIced from "@/assets/dishes/vietnamese-iced-coffee.jpg";
import blueLagoon from "@/assets/dishes/blue-lagoon.jpg";
import virginMojito from "@/assets/dishes/virgin-mojito.jpg";
import berryBlast from "@/assets/dishes/berry-blast.jpg";
import watermelonBasil from "@/assets/dishes/watermelon-basil.jpg";
import roseFalooda from "@/assets/dishes/rose-falooda.jpg";
import butterCroissant from "@/assets/dishes/butter-croissant.jpg";
import chocoChipCookie from "@/assets/dishes/choco-chip-cookie.jpg";
import blueberryMuffin from "@/assets/dishes/blueberry-muffin.jpg";
import cinnamonRoll from "@/assets/dishes/cinnamon-roll.jpg";
import bananaBread from "@/assets/dishes/banana-bread.jpg";
import redVelvetCupcake from "@/assets/dishes/red-velvet-cupcake.jpg";
import almondBiscotti from "@/assets/dishes/almond-biscotti.jpg";
import paneerSandwich from "@/assets/dishes/paneer-tikka-sandwich.jpg";
import periPeriFries from "@/assets/dishes/peri-peri-fries.jpg";
import cheesyNachos from "@/assets/dishes/cheesy-nachos.jpg";
import chickenPanini from "@/assets/dishes/chicken-panini.jpg";
import garlicBread from "@/assets/dishes/garlic-bread.jpg";
import spinachQuiche from "@/assets/dishes/spinach-quiche.jpg";
import chickenCroissant from "@/assets/dishes/chicken-croissant.jpg";
import bakedCheesecake from "@/assets/dishes/baked-cheesecake.jpg";
import lavaCake from "@/assets/dishes/lava-cake.jpg";
import tiramisu from "@/assets/dishes/tiramisu.jpg";
import belgianWaffle from "@/assets/dishes/belgian-waffle.jpg";
import fruitTart from "@/assets/dishes/fruit-tart.jpg";
import nutellaBrownie from "@/assets/dishes/nutella-brownie.jpg";

export type Badge = "Bestseller" | "Chef's Pick" | "New";

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
    id: "coffee",
    name: "Coffee",
    tagline: "Hand-pulled shots, brewed all day",
    thumb: cappuccino,
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "A bold single shot with thick golden crema.",
        price: 120,
        image: espresso,
        veg: true,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Equal parts espresso, milk and airy foam.",
        price: 180,
        image: cappuccino,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "cafe-latte",
        name: "Café Latte",
        description: "Silky steamed milk poured over a double shot.",
        price: 190,
        image: cafeLatte,
        veg: true,
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Velvety microfoam, strong and smooth.",
        price: 190,
        image: flatWhite,
        veg: true,
      },
      {
        id: "hazelnut-mocha",
        name: "Hazelnut Mocha",
        description: "Chocolate, hazelnut and espresso with cream.",
        price: 230,
        image: hazelnutMocha,
        veg: true,
        badge: "Chef's Pick",
      },
      {
        id: "filter-kaapi",
        name: "Filter Kaapi",
        description: "South Indian decoction, frothed in a tumbler.",
        price: 140,
        image: filterKaapi,
        veg: true,
      },
      {
        id: "affogato",
        name: "Affogato",
        description: "Vanilla gelato drowned in a hot espresso shot.",
        price: 240,
        image: affogato,
        veg: true,
      },
      {
        id: "masala-chai",
        name: "Masala Chai",
        description: "Ginger, cardamom and clove simmered in milk.",
        price: 110,
        image: masalaChai,
        veg: true,
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        description: "Dark cocoa, warm milk and toasted marshmallows.",
        price: 210,
        image: hotChocolate,
        veg: true,
      },
    ],
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    tagline: "Cold, tall and slow-poured",
    thumb: icedCaramelMacchiato,
    items: [
      {
        id: "iced-americano",
        name: "Iced Americano",
        description: "Espresso over ice with chilled spring water.",
        price: 170,
        image: icedAmericano,
        veg: true,
      },
      {
        id: "iced-caramel-macchiato",
        name: "Iced Caramel Macchiato",
        description: "Layered milk, espresso and salted caramel.",
        price: 250,
        image: icedCaramelMacchiato,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "cold-coffee-frappe",
        name: "Cold Coffee Frappé",
        description: "Blended thick with cream and chocolate drizzle.",
        price: 240,
        image: coldCoffeeFrappe,
        veg: true,
      },
      {
        id: "iced-mocha",
        name: "Iced Mocha",
        description: "Cocoa and cold brew swirled with cold milk.",
        price: 230,
        image: icedMocha,
        veg: true,
      },
      {
        id: "vietnamese-iced-coffee",
        name: "Vietnamese Iced Coffee",
        description: "Slow-drip brew sweetened with condensed milk.",
        price: 220,
        image: vietnameseIced,
        veg: true,
        badge: "New",
      },
    ],
  },
  {
    id: "signature",
    name: "Signature Drinks",
    tagline: "Coolers shaken to order",
    thumb: virginMojito,
    items: [
      {
        id: "blue-lagoon",
        name: "Blue Lagoon",
        description: "Blue curaçao syrup, lemon and fizzy soda.",
        price: 200,
        image: blueLagoon,
        veg: true,
      },
      {
        id: "virgin-mojito",
        name: "Virgin Mojito",
        description: "Muddled mint, lime and crushed ice.",
        price: 190,
        image: virginMojito,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "berry-blast",
        name: "Berry Blast Smoothie",
        description: "Blueberry, strawberry and yoghurt blend.",
        price: 260,
        image: berryBlast,
        veg: true,
      },
      {
        id: "watermelon-basil",
        name: "Watermelon Basil Cooler",
        description: "Fresh watermelon pressed with basil leaves.",
        price: 210,
        image: watermelonBasil,
        veg: true,
        badge: "Chef's Pick",
      },
      {
        id: "rose-falooda",
        name: "Rose Falooda",
        description: "Rose syrup, vermicelli, basil seeds and ice cream.",
        price: 280,
        image: roseFalooda,
        veg: true,
      },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    tagline: "Baked fresh every morning",
    thumb: butterCroissant,
    items: [
      {
        id: "butter-croissant",
        name: "Butter Croissant",
        description: "Twenty-seven flaky layers of French butter.",
        price: 160,
        image: butterCroissant,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "choco-chip-cookie",
        name: "Double Choco Chip Cookie",
        description: "Gooey centre loaded with dark chocolate.",
        price: 120,
        image: chocoChipCookie,
        veg: true,
      },
      {
        id: "blueberry-muffin",
        name: "Blueberry Muffin",
        description: "Sugar-crusted dome packed with berries.",
        price: 150,
        image: blueberryMuffin,
        veg: true,
      },
      {
        id: "cinnamon-roll",
        name: "Cinnamon Roll",
        description: "Warm swirls finished with cream cheese glaze.",
        price: 180,
        image: cinnamonRoll,
        veg: true,
        badge: "Chef's Pick",
      },
      {
        id: "banana-bread",
        name: "Walnut Banana Bread",
        description: "Slow-baked, moist and full of toasted walnuts.",
        price: 150,
        image: bananaBread,
        veg: true,
      },
      {
        id: "red-velvet-cupcake",
        name: "Red Velvet Cupcake",
        description: "Cocoa sponge under a cream cheese swirl.",
        price: 170,
        image: redVelvetCupcake,
        veg: true,
      },
      {
        id: "almond-biscotti",
        name: "Almond Biscotti",
        description: "Twice-baked crunch, made for dunking.",
        price: 130,
        image: almondBiscotti,
        veg: true,
      },
    ],
  },
  {
    id: "bites",
    name: "Bites",
    tagline: "Savoury plates from the grill",
    thumb: periPeriFries,
    items: [
      {
        id: "paneer-tikka-sandwich",
        name: "Paneer Tikka Sandwich",
        description: "Charred paneer with mint chutney on toast.",
        price: 260,
        image: paneerSandwich,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "peri-peri-fries",
        name: "Peri Peri Fries",
        description: "Crisp fries dusted with peri spice and dip.",
        price: 190,
        image: periPeriFries,
        veg: true,
      },
      {
        id: "cheesy-nachos",
        name: "Cheesy Nachos",
        description: "Corn chips, salsa, jalapeños and sour cream.",
        price: 280,
        image: cheesyNachos,
        veg: true,
      },
      {
        id: "chicken-panini",
        name: "Grilled Chicken Panini",
        description: "Pressed sourdough with cheese and herb chicken.",
        price: 320,
        image: chickenPanini,
        veg: false,
        badge: "Chef's Pick",
      },
      {
        id: "garlic-bread",
        name: "Cheesy Garlic Bread",
        description: "Garlic butter baguette under molten cheese.",
        price: 200,
        image: garlicBread,
        veg: true,
      },
      {
        id: "spinach-quiche",
        name: "Spinach & Corn Quiche",
        description: "Buttery tart shell with a soft savoury custard.",
        price: 240,
        image: spinachQuiche,
        veg: true,
      },
      {
        id: "chicken-croissant",
        name: "Chicken Croissant Roll",
        description: "Flaky croissant stuffed with creamy chicken.",
        price: 290,
        image: chickenCroissant,
        veg: false,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    tagline: "Sweet finishes, served chilled or warm",
    thumb: lavaCake,
    items: [
      {
        id: "baked-cheesecake",
        name: "Baked Cheesecake",
        description: "New York style with wild berry compote.",
        price: 300,
        image: bakedCheesecake,
        veg: true,
        badge: "Bestseller",
      },
      {
        id: "lava-cake",
        name: "Molten Lava Cake",
        description: "Warm chocolate centre with vanilla scoop.",
        price: 280,
        image: lavaCake,
        veg: true,
        badge: "Chef's Pick",
      },
      {
        id: "tiramisu",
        name: "Classic Tiramisu",
        description: "Espresso-soaked sponge and mascarpone cream.",
        price: 310,
        image: tiramisu,
        veg: true,
      },
      {
        id: "belgian-waffle",
        name: "Belgian Waffle",
        description: "Crisp waffle, banana slices and chocolate sauce.",
        price: 270,
        image: belgianWaffle,
        veg: true,
      },
      {
        id: "fruit-tart",
        name: "Fresh Fruit Tart",
        description: "Vanilla custard under glazed seasonal fruit.",
        price: 260,
        image: fruitTart,
        veg: true,
      },
      {
        id: "nutella-brownie",
        name: "Nutella Brownie",
        description: "Fudgy brownie, hazelnut drizzle, sea salt.",
        price: 220,
        image: nutellaBrownie,
        veg: true,
      },
    ],
  },
];

export const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);

export const chefsSpecials: MenuItem[] = categories
  .flatMap((c) => c.items)
  .filter((i) => i.badge === "Chef's Pick");
