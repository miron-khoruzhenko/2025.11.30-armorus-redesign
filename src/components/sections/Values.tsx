import Container from "../ui/Container";

const valuesData = [
  {
    title: "Quality",
    description: "Quality is our foundation. From material selection to final inspection, we pursue excellence at every stage of production."
  },
  {
    title: "Integrity",
    description: "We commit to transparency in our supply chain, precision in our craftsmanship, and reliability in every product we deliver."
  },
  {
    title: "Reliability",
    description: "Our products and our word hold firm. We deliver on time, meet expectations, and provide steady support without compromise."
  }
];

export default function Values() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesData.map((item, index) => (
            <div key={index} className="border border-white/20 p-8 h-80 flex flex-col justify-between hover:border-white/50 transition duration-300">
              <h4 className="text-sm font-display uppercase tracking-widest font-bold">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}