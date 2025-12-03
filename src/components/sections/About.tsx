import Container from "../ui/Container";
import Image from "next/image";

export default function About() {
	return (
		<section className="py-24 bg-white">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-[">
					{/* Изображение */}
					<div className="relative aspect-[4/5] bg-gray-200 w-full md:w-4/5">
						{/* Замените src на реальное фото */}
						<div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
						</div>
						<Image src="/soldier-profile.jpg" fill className="object-cover" alt="Turkish Soldier" />
					</div>

					{/* Текст */}
					<div className="space-y-8 h-full flex flex-col items-start justify-between">
						<span className="text-sm font-bold font-display font-display block mb-2">About</span>

						<h3 className="text-2xl md:text-3xl font-sans leading-snug max-w-md">
							A defense manufacturer headquartered in Ankara, Türkiye — specializing in high-quality products built for mission-critical environments.
						</h3>

						<p className="text-sm leading-relaxed max-w-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>

						<a href="#" className="inline-block text-sm font-sans uppercase border-b border-black pt-4 hover:opacity-60 transition">
							Read More
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
}