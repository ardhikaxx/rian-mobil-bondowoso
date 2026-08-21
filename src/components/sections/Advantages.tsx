import { advantages } from "@/data/content";
import Icon from "@/components/ui/Icon";

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-red-600/20">
            <Icon name="shield" size={14} />
            <span>Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Rian Mobil Bondowoso?
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Kami berkomitmen memberikan pelayanan terbaik dalam membantu Anda
            menemukan mobil bekas yang tepat.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 group-hover:scale-110 transition-all duration-500 mb-6">
                    <Icon
                      name={advantage.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
