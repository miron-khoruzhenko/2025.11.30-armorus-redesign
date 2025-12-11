import Container from "@/components/ui/Container";
import Link from "next/link";

export default function SupportContact() {
	return (
		<section className="w-full bg-white">
			{/* Grid: 2 колонки на десктопе */}
			<Container>

				<div className="grid grid-cols-1 md:grid-cols-2 border border-black">

					{/* ЛЕВАЯ КОЛОНКА: ФОТО */}
					<div className="relative aspect-square md:aspect-auto md:h-[600px] w-full bg-gray-200">
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: "url('/images/about/veteran.jpg')" }} // Фото ветерана
						/>
					</div>

					{/* ПРАВАЯ КОЛОНКА: ТЕКСТ */}
					{/* flex flex-col justify-center align-middle гарантирует центровку */}
					<div className="flex flex-col items-start justify-end p-8 lg:p-12 border border-gray-100 md:border-l-0">
						<div className="max-w-md">
							<h3 className="text-2xl md:text-3xl font-sans mb-10 text-black leading-snug">
								Contact us for support or<br /> product information
							</h3>

							<Link href="/contact" className="text-sm  uppercase border-b border-black hover:opacity-60 transition text-black">
								Contact Us
							</Link>
						</div>
					</div>

				</div>
			</Container>

		</section>
	);
}