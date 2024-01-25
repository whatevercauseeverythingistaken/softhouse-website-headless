import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex flex-col min-h-full">
					{/* Header */}
					<Navbar />

					{/* Page content */}
					{children}
					
					{/* Footer */}
					<Footer />
				</main>
			</body>
		</html>
	);
}
