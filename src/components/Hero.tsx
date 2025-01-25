export function Hero() {
  return (
    <section className="min-h-screen pt-24">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Hero+Section"
            alt="Hero"
            className="w-full h-[85vh] object-cover"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 90vw,
                   1800px"
          />
        </div>
      </div>
    </section>
  );
}