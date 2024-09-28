import FarmOfftake from "./molecules/farm-offtake";
import FlashSales from "./molecules/flash-sale";
import Hero from "./molecules/hero";
import PopularProducts from "./molecules/popular-products";
import Sdg from "./molecules/sdg";
import Testimonials from "./molecules/testimonials";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
	title: "Jamnia's Bridal",
	description: "Jamnia's Bridal is a one ",
	generator: "Next.js",
	applicationName: "MyFoodAngels",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Jamnia's Bridal",
		"Food",
		"Food Vendors",
		"Food Lovers",
		"Nigeria",
		"Food Delivery",
		"Food Services",
		"Food Products",
	],
	authors: [{ name: "MyFoodAngels" }],
	creator: "MyFoodAngels",
	publisher: "MyFoodAngels",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: "https://myfoodangels.com",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
	openGraph: {
		title: "Jamnia's Bridal | Connecting You with the Best Food Vendors",
		description:
			"Discover top food vendors in Nigeria and explore a wide variety of food products and services. Jamnia's Bridal brings you the best food experiences, delivered to your doorstep.",
		url: "https://myfoodangels.com",
		siteName: "MyFoodAngels",
		images: [
			{
				url: "/images/og.jpg",
				width: 1200,
				height: 630,
				alt: "MyFoodAngels Banner",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/icon.png",
		shortcut: "/icon.png",
		apple: "/icon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/apple-touch-icon-precomposed.png",
		},
	},
	manifest: "https://myfoodangels.com/manifest.json",
	twitter: {
		card: "summary_large_image",
		title: "Jamnia's Bridal",
		description:
			"Connect with the best food vendors in Nigeria. Discover and order from a variety of food products and services, all available on Jamnia's Bridal.",
		siteId: "1467726470533754880",
		creator: "@MyFoodAngels",
		creatorId: "1467726470533754880",
		images: ["/images/og.jpg"],
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
	verification: {
		google: "google-site-verification-code",
		yandex: "yandex-verification-code",
		yahoo: "yahoo-site-verification-code",
		other: {
			me: ["my-email@example.com", "https://myfoodangels.com"],
		},
	},
	category: "Food & Beverage",
};

export default function Home() {
	return (
		<main>
			<Hero />
			<FarmOfftake />
			<PopularProducts />
			<FlashSales />
			<Testimonials />
		</main>
	);
}
