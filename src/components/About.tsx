export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <h2 className="text-[36px] font-semibold font-sans mb-8">About me</h2>
        <div className="relative w-full rounded-2xl overflow-hidden">
          <div className="relative bg-gray-800" style={{ aspectRatio: '18/5' }}>
            <img
              src="src/assets/images/About Image.png"
              alt="About Placeholder"
              className="w-full h-full object-cover absolute inset-0"
            />
            <img
              src="/src/assets/images/about.jpg"
              alt="About"
              className="w-full h-full object-cover absolute inset-0"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}