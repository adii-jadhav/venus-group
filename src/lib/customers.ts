// Customer logos. Names come only from the company's original customer collage.
// Sources: Wikimedia Commons official-logo files, or each company's own website.
import tata from "@/assets/customers/tata.svg";
import mercedes from "@/assets/customers/mercedes.webp";
import mahindra from "@/assets/customers/mahindra.svg";
import bajaj from "@/assets/customers/bajaj.svg";
import hero from "@/assets/customers/hero.svg";
import jayahind from "@/assets/customers/jayahind.webp";
import alfalaval from "@/assets/customers/alfalaval.svg";
import force from "@/assets/customers/force.svg";
import acs from "@/assets/customers/acs.webp";
import lear from "@/assets/customers/lear.svg";
import lt from "@/assets/customers/lt.svg";
import schneider from "@/assets/customers/schneider.svg";
import godrej from "@/assets/customers/godrej.svg";
import modine from "@/assets/customers/modine.svg";
import marquardt from "@/assets/customers/marquardt.svg";
import europa from "@/assets/customers/europa.webp";
import brakesindia from "@/assets/customers/brakesindia.webp";

export interface Customer {
  name: string;
  logo?: string;
  width: number;
  height: number;
}

export const customers: Customer[] = [
  { name: "Tata", logo: tata, width: 451, height: 414 },
  { name: "Mercedes-Benz", logo: mercedes, width: 790, height: 200 },
  { name: "Mahindra", logo: mahindra, width: 699, height: 86 },
  { name: "Bajaj Auto", logo: bajaj, width: 3930, height: 837 },
  { name: "Hero MotoCorp", logo: hero, width: 132, height: 43 },
  { name: "Jaya Hind Industries", logo: jayahind, width: 173, height: 200 },
  { name: "Alfa Laval", logo: alfalaval, width: 300, height: 100 },
  { name: "Force Motors", logo: force, width: 120, height: 80 },
  { name: "ACS Industries, Inc.", logo: acs, width: 449, height: 200 },
  { name: "Lear Corporation", logo: lear, width: 206, height: 58 },
  { name: "Larsen & Toubro", logo: lt, width: 100, height: 100 },
  { name: "Solidus", width: 0, height: 0 },
  { name: "Schneider Electric", logo: schneider, width: 230, height: 100 },
  { name: "Godrej", logo: godrej, width: 230, height: 110 },
  { name: "Modine", logo: modine, width: 280, height: 85 },
  { name: "Marquardt", logo: marquardt, width: 991, height: 758 },
  { name: "Europa Locks", logo: europa, width: 186, height: 76 },
  { name: "Brakes India", logo: brakesindia, width: 679, height: 200 },
];
