export function Colleges() {
  const collegeImages = [
    '/src/assets/images/utsa_edu.png',  // First college image
    '/src/assets/images/amrita_edu.png'   // Second college image
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <h2 className="text-[36px] font-semibold font-sans mb-8">My College's</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {collegeImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-107 opacity-80 hover:opacity-100"
            >
              <img
                src={image}
                alt={`College ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
