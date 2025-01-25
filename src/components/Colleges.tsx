export function Colleges() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <h2 className="text-[36px] font-semibold font-sans mb-8">My College's</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-107 opacity-80 hover:opacity-100"
            >
              <img
                src={`https://images.unsplash.com/photo-151769471220${index}-14dd9538aa97?w=800&h=500&auto=format&fit=crop`}
                alt={`College ${index}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}