import Container from "@/components/ui/Container";

export default function MissionDetailed() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Label */}
        <span className="text-md font-display text-black mb-12 block">
          Our Mission
        </span>

        {/* Heading */}
        <h3 className="text-2xl md:text-4xl font-sans mb-16 max-w-2xl leading-tight text-black">
          Delivering Advanced Protection for Those on the Front Line
        </h3>

        {/* Две колонки текста */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-sm text-black leading-relaxed font-sans">
          <p>
            To design and manufacture advanced ballistic protection systems that ensure maximum safety and operational confidence for military and law enforcement personnel. Our mission is to meet the real-world demands of the field by combining modern engineering, material innovation, and user-focused functionality in every product we create.
          </p>
          <p>
            To strengthen defense capabilities through reliable, field-tested, and sustainable solutions that perform under the harshest conditions. Armorus is committed to continuous improvement — investing in research, testing, and production technologies to deliver uncompromising quality and protection that stands the test of time.
          </p>
        </div>
      </Container>
    </section>
  );
}