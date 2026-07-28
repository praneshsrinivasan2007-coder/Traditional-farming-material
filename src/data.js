import { Sprout, Droplet, Wrench } from "lucide-react";

// ---------------------------------------------------------------------------
// Design tokens
// ---------------------------------------------------------------------------
export const COLORS = {
  paper: "#EDE3CB",
  paperDark: "#E3D6B8",
  card: "#FAF4E4",
  ink: "#2C2013",
  inkSoft: "#5A4B37",
  soil: "#37271A",
  soilLight: "#4A3624",
  gold: "#B9862E",
  goldDark: "#96691E",
  sage: "#5B6E3F",
  sageDark: "#465430",
  clay: "#8C5A34",
  barn: "#9C3B2C",
  barnDark: "#7E2E22",
  line: "#C9B98F",
};

export const CATEGORY_META = {
  seeds: { label: "Seeds", icon: Sprout, color: COLORS.sage, tag: "Heirloom" },
  fertilizers: { label: "Fertilizers", icon: Droplet, color: COLORS.clay, tag: "Organic" },
  equipment: { label: "Equipment", icon: Wrench, color: COLORS.barn, tag: "Handmade" },
};

export const CATEGORY_ORDER = ["seeds", "fertilizers", "equipment"];

export const CATEGORY_INTRO = {
  seeds: {
    title: "Seeds",
    text: "Open-pollinated, saved-and-shared seed from growers who never switched to hybrids. Every lot is germination-tested before it ships.",
  },
  fertilizers: {
    title: "Fertilizers",
    text: "Well-aged manures, composts, and traditional liquid feeds. Nothing synthetic, nothing that burns young roots.",
  },
  equipment: {
    title: "Equipment",
    text: "Hand tools built to be repaired, not replaced. Forged blades and seasoned wood handles suited to small-plot farming.",
  },
};

// ---------------------------------------------------------------------------
// Product data (with stock, for the admin panel)
// ---------------------------------------------------------------------------
export const INITIAL_PRODUCTS = [
  { id: "s1", category: "seeds", name: "Desi Wheat Seeds", unit: "5 kg sack", price: 420, stock: 42, rating: 4.8,
    blurb: "A hardy, low-water wheat strain grown by the same families for three generations.",
    detail: "Untreated, open-pollinated wheat seed saved from last season's best heads. Suited to rain-fed plots and known for standing well through dry spells. Save a portion of your own harvest to replant next year." },
  { id: "s2", category: "seeds", name: "Heirloom Tomato Seeds", unit: "50 seed pack", price: 90, stock: 130, rating: 4.9,
    blurb: "A deep-ridged, thin-skinned variety with the tang older growers still ask for.",
    detail: "Open-pollinated and true-to-type year after year. Fruits ripen unevenly on the vine for a longer picking window, which home gardeners and market growers both prize." },
  { id: "s3", category: "seeds", name: "Native Maize Seeds", unit: "2 kg pack", price: 260, stock: 60, rating: 4.7,
    blurb: "A flint corn kept in circulation by village seed exchanges for decades.",
    detail: "Tall, wind-tolerant stalks with dense kernels good for grinding as well as eating fresh. Performs best sown after the first steady rains." },
  { id: "s4", category: "seeds", name: "Paddy Rice Seeds", unit: "5 kg sack", price: 350, stock: 38, rating: 4.6,
    blurb: "A fragrant short-grain paddy suited to small, hand-tended fields.",
    detail: "Selected each season for uniform tillering and resistance to lodging. Performs well in traditional flooded-bed cultivation." },
  { id: "s5", category: "seeds", name: "Heirloom Chili Seeds", unit: "30 seed pack", price: 75, stock: 200, rating: 4.8,
    blurb: "A slow-building heat with a smoky finish, dried the old way on rooftop mats.",
    detail: "Compact bushes that bear heavily over a long season. Pods dry well for storage and grinding into household chili powder." },
  { id: "s6", category: "seeds", name: "Native Millet Seeds", unit: "3 kg pack", price: 210, stock: 55, rating: 4.5,
    blurb: "A drought-tolerant grain that thrives where little else will.",
    detail: "Finger millet suited to marginal soils and short rainy seasons. A reliable fallback crop with a long storage life once dried." },
  { id: "f1", category: "fertilizers", name: "Vermicompost", unit: "10 kg bag", price: 260, stock: 75, rating: 4.9,
    blurb: "Fine, crumbly worm castings that build soil structure over time.",
    detail: "Produced from farm and kitchen waste through slow earthworm composting. Improves water retention and feeds soil microbes without the salt burn of chemical feeds." },
  { id: "f2", category: "fertilizers", name: "Farmyard Manure", unit: "25 kg sack", price: 180, stock: 90, rating: 4.6,
    blurb: "Well-rotted cow dung manure, aged a full season before bagging.",
    detail: "Aged for at least six months to break down fully, so it feeds the soil gently instead of burning young roots. A traditional base dressing before sowing." },
  { id: "f3", category: "fertilizers", name: "Neem Cake Fertilizer", unit: "5 kg bag", price: 240, stock: 48, rating: 4.7,
    blurb: "A byproduct of cold-pressed neem oil that feeds soil and discourages pests.",
    detail: "Slow-release nitrogen source that also deters soil-dwelling grubs and nematodes. Work into topsoil around the root zone at planting." },
  { id: "f4", category: "fertilizers", name: "Bone Meal Fertilizer", unit: "3 kg bag", price: 300, stock: 26, rating: 4.5,
    blurb: "Steamed and ground bone, a steady source of phosphorus for root growth.",
    detail: "Especially suited to root vegetables and flowering crops that need a phosphorus boost at planting time. Releases slowly over the growing season." },
  { id: "f5", category: "fertilizers", name: "Panchagavya Concentrate", unit: "1 litre bottle", price: 150, stock: 64, rating: 4.8,
    blurb: "A traditional liquid feed fermented from cow-based ingredients.",
    detail: "Diluted with water and applied as a foliar spray or soil drench, this fermented tonic is a long-standing practice for boosting plant vigor between main feedings." },
  { id: "e1", category: "equipment", name: "Hand Plough", unit: "1 unit", price: 1450, stock: 14, rating: 4.6,
    blurb: "A single-blade wooden-handled plough for small plots and border rows.",
    detail: "Forged blade fitted to a seasoned wood handle, sized for one person to guide behind a draft animal or by hand on soft soil. Built for repair, not replacement." },
  { id: "e2", category: "equipment", name: "Harvest Sickle", unit: "1 unit", price: 220, stock: 55, rating: 4.9,
    blurb: "A curved, hand-forged blade for cutting grain and fodder.",
    detail: "Carbon steel blade set into a wood grip worn smooth with use. Holds an edge through a full harvest season with regular sharpening." },
  { id: "e3", category: "equipment", name: "Khurpi Hand Hoe", unit: "1 unit", price: 140, stock: 80, rating: 4.7,
    blurb: "A short-handled digging tool for weeding and close row work.",
    detail: "The everyday tool of the kitchen garden and nursery bed: light enough for close, seated work between rows without disturbing neighboring plants." },
  { id: "e4", category: "equipment", name: "Manual Seed Drill", unit: "1 unit", price: 3200, stock: 9, rating: 4.4,
    blurb: "A push-drill that spaces and covers seed in one pass along a row.",
    detail: "Adjustable spacing wheel for different seed sizes, from millet to maize. Cuts sowing time on long rows without needing fuel or power." },
  { id: "e5", category: "equipment", name: "Manual Knapsack Sprayer", unit: "16 litre", price: 1650, stock: 20, rating: 4.5,
    blurb: "A hand-pump sprayer for neem oil, panchagavya, and other liquid feeds.",
    detail: "Padded straps and a hand-pump lever for even coverage across beds and orchard rows. Seals tight enough for organic oil-based sprays." },
  { id: "e6", category: "equipment", name: "Wooden Yoke", unit: "1 unit", price: 980, stock: 17, rating: 4.6,
    blurb: "A shaped hardwood yoke fitted for pairs of draft bullocks.",
    detail: "Carved and balanced by hand so weight sits evenly across both animals. Padded contact points to prevent chafing during long field days." },
];

export function formatINR(n) {
  return "\u20B9" + Number(n || 0).toLocaleString("en-IN");
}

export function newId() {
  return "p" + Math.random().toString(36).slice(2, 9);
}

export const inputStyle = {
  width: "100%",
  padding: "11px 13px",
  border: `1px solid ${COLORS.line}`,
  borderRadius: 3,
  background: COLORS.card,
  fontSize: 14,
  color: COLORS.ink,
};

export const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: COLORS.inkSoft,
  marginBottom: 6,
};
