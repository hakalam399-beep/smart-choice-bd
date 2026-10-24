import { Product, Category, Banner, Order, Post, StoreSettings } from '../types';
import { dynamicCustomProducts } from './customProducts';

export interface StoreData {
  settings: StoreSettings;
  categories: Category[];
  banners: Banner[];
  products: Product[];
  orders: Order[];
  posts: Post[];
  admin: { passwordHash: string };
}

export const initialStoreData: StoreData = {
  settings: {
    storeName: "Smart Choice bd",
    taglineEn: "Smart Choice, Best Quality in Best Price",
    taglineBn: "স্মার্ট চয়েস, সেরা কোয়ালিটি সেরা দামে",
    phone: "01875184743",
    whatsapp: "+8801875184743",
    email: "support@smartchoicebd.com",
    addressEn: "Chandgaon, Chittagong, Bangladesh",
    addressBn: "চান্দগাঁও, চট্টগ্রাম, বাংলাদেশ",
    deliveryFeeInside: 70,
    deliveryFeeOutside: 130,
    freeDeliveryThreshold: 0,
    enableAnimations: true,
    announcementEn: "🔥 Special Discount Offer! Fast Cash on Delivery Islandwide.",
    announcementBn: "🔥 ধামাকা অফার চলছে! সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা।",
    showAnnouncement: true,
    paymentGateways: {
      cod: { enabled: true },
      bkash: { enabled: false, merchantNumber: "", chargePercent: 1.5, sandbox: true, appKeyConfigured: false },
      nagad: { enabled: false, merchantNumber: "", chargePercent: 1.5, sandbox: true },
      rocket: { enabled: false, merchantNumber: "", chargePercent: 1.5, sandbox: true }
    }
  },
  categories: [
    { id: "cat-1", nameEn: "Smart Watches", nameBn: "স্মার্ট ওয়াচ", slug: "smart-watches", icon: "Watch" },
    { id: "cat-2", nameEn: "Wireless Earbuds", nameBn: "ইয়ারফোন ও ইয়ারবাডস", slug: "earbuds", icon: "Headphones" },
    { id: "cat-3", nameEn: "T-Shirts", nameBn: "টি-শার্ট", slug: "t-shirts", icon: "Shirt" },
    { id: "cat-4", nameEn: "Cargo Pants", nameBn: "কার্গো প্যান্ট", slug: "cargo-pants", icon: "Tag" },
    { id: "cat-5", nameEn: "Power Banks & Chargers", nameBn: "পাওয়ার ব্যাংক ও চার্জার", slug: "power-banks", icon: "Zap" },
    { id: "cat-6", nameEn: "Jackets & Winterware", nameBn: "জ্যাকেট ও শীতের পোশাক", slug: "jackets", icon: "Sparkles" }
  ],
  banners: [
    {
      id: "b1",
      titleEn: "Smart Choice Premium Collection",
      titleBn: "স্মার্ট চয়েস ট্রেন্ডি কটন টি-শার্ট ও কার্গো প্যান্ট!",
      subtitleEn: "Best Quality Products with Fast Delivery Across Bangladesh",
      subtitleBn: "প্রিমিয়াম কোয়ালিটি ও স্টাইলিশ ডিজাইন এখন সেরা অফার মূল্যে।",
      imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
      link: "#products",
      active: true
    }
  ],
  products: [ 
    {
      id: "daraz-ems-mini-massager",
      nameBn: "ইএমএস মিনি বডি ম্যাসেজার (EMS Mini Massager)",
      nameEn: "Tens Units EMS Mini Massager",
      descriptionBn: "পিঠ, ঘাড় ও শরীরের যন্ত্রণামুক্তির জন্য রিচার্জেবল ইলেকট্রোম্যাগনেটিক থেরাপি ম্যাসেজার।",
      descriptionEn: "Muscle Stimulator Full Body Relaxation Machine for Legs, Back & Neck Pain Relief.",
      price: 169,
      originalPrice: 690,
      category: "gadget",
      image: "https://img.drz.lazcdn.com/g/kf/Sbf9c2c8f8d684070a7b45ad9b794101eQ.jpg",
      inStock: true,
      affiliateUrl: "https://s.daraz.com.bd/s.YWD63?cc"
    }
  ],

