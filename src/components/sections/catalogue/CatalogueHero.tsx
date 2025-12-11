import Button from "../../ui/Button";
import Link from "next/link";

export default function CatalogueHero() {
	return (
		<section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden ">
			{/* Фон: видео */}
			<div className="absolute inset-0 z-0">
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src="/videos/catalogue-bg-video.mp4"
					autoPlay
					muted
					loop
					playsInline
				/>
				{/* Лёгкая затемняющая подложка поверх видео для читаемости текста */}
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* Контент */}
			{/* Убран Container, используем px для отступов по бокам */}
			<div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
				{/* bg video */}


				<div className="flex flex-col items-center text-center w-full">

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight drop-shadow-lg max-w-4xl">

						CATALOGUE
					</h2>

					<p className="text-sm md:text-base max-w-xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md text-gray-100">
						Explore our catalogue to discover detailed information about <br /> all our products.
					</p>

					<div className="flex gap-6 justify-center">
						{/* Добавил w-48 и text-center для одинаковой ширины кнопок */}
						<Link href="/catalogue">
							<a
								href="https://docs.google.com/document/d/194n8OvcckLoxvkqGL-Fsaaw-SsnSftHMd47Cjte1sxo/edit?usp=sharing"
								target="_blank"
								// download="armorus_catalogue.pdf"
								className=""
							>
								<Button variant="outline" className="w-40 flex justify-center">Download</Button>
							</a>
						</Link>

					</div>

				</div>
			</div>
		</section>
	);
}