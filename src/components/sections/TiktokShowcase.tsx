"use client";

import { motion } from "framer-motion";
import Script from "next/script";

const tiktokEmbed1 = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rian.mobil.bondow/video/7667019281493691666" data-video-id="7667019281493691666" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@rian.mobil.bondow" href="https://www.tiktok.com/@rian.mobil.bondow?refer=embed">@rian.mobil.bondow</a> ready lagi fortuner trd sportivo 2020 <a title="fortuner" target="_blank" href="https://www.tiktok.com/tag/fortuner?refer=embed">#fortuner</a> <a title="fortunergrsport" target="_blank" href="https://www.tiktok.com/tag/fortunergrsport?refer=embed">#fortunergrsport</a> <a title="fortunertrd" target="_blank" href="https://www.tiktok.com/tag/fortunertrd?refer=embed">#fortunertrd</a> <a title="fortunermurah" target="_blank" href="https://www.tiktok.com/tag/fortunermurah?refer=embed">#fortunermurah</a> <a title="rianmobil" target="_blank" href="https://www.tiktok.com/tag/rianmobil?refer=embed">#rianmobil</a> <a target="_blank" title="♬ suara asli  - Rian Mobil Bondowoso" href="https://www.tiktok.com/music/suara-asli-Rian-Mobil-Bondowoso-7667019326460922632?refer=embed">♬ suara asli  - Rian Mobil Bondowoso</a> </section> </blockquote>`;

const tiktokEmbed2 = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rian.mobil.bondow/video/7661201230236011783" data-video-id="7661201230236011783" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@rian.mobil.bondow" href="https://www.tiktok.com/@rian.mobil.bondow?refer=embed">@rian.mobil.bondow</a> sigra r 2021 plt situbondo. sigra murah resdy di rian mobil <a title="sigramodifikasi" target="_blank" href="https://www.tiktok.com/tag/sigramodifikasi?refer=embed">#sigramodifikasi</a> <a title="sigramurah" target="_blank" href="https://www.tiktok.com/tag/sigramurah?refer=embed">#sigramurah</a> <a title="daihatsusigra" target="_blank" href="https://www.tiktok.com/tag/daihatsusigra?refer=embed">#daihatsusigra</a> <a title="rianmobil" target="_blank" href="https://www.tiktok.com/tag/rianmobil?refer=embed">#rianmobil</a> <a target="_blank" title="♬ suara asli  - Rian Mobil Bondowoso" href="https://www.tiktok.com/music/suara-asli-Rian-Mobil-Bondowoso-7661201254551292690?refer=embed">♬ suara asli  - Rian Mobil Bondowoso</a> </section> </blockquote>`;

const tiktokEmbed3 = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rian.mobil.bondow/video/7655653601569705223" data-video-id="7655653601569705223" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@rian.mobil.bondow" href="https://www.tiktok.com/@rian.mobil.bondow?refer=embed">@rian.mobil.bondow</a> ready stok bos xenia grandmax pikup. avanza ready bos <a title="pikupmurah" target="_blank" href="https://www.tiktok.com/tag/pikupmurah?refer=embed">#pikupmurah</a> <a title="xenia" target="_blank" href="https://www.tiktok.com/tag/xenia?refer=embed">#xenia</a> <a title="grandmax" target="_blank" href="https://www.tiktok.com/tag/grandmax?refer=embed">#grandmax</a> <a target="_blank" title="♬ suara asli  - Rian Mobil Bondowoso" href="https://www.tiktok.com/music/suara-asli-Rian-Mobil-Bondowoso-7655653650936777473?refer=embed">♬ suara asli  - Rian Mobil Bondowoso</a> </section> </blockquote>`;

export default function TiktokShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-gray-950 relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-white mb-4">
            Update <span className="text-red-600">Terbaru</span>
          </h2>
          <p className="text-gray-400">
            Tonton koleksi video terbaru kami langsung dari TikTok Rian Mobil Bondowoso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="flex justify-center w-full overflow-hidden rounded-2xl bg-black border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div dangerouslySetInnerHTML={{ __html: tiktokEmbed1 }} className="w-full flex justify-center scale-95 sm:scale-100 origin-top" />
          </motion.div>
          
          <motion.div 
            className="flex justify-center w-full overflow-hidden rounded-2xl bg-black border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div dangerouslySetInnerHTML={{ __html: tiktokEmbed2 }} className="w-full flex justify-center scale-95 sm:scale-100 origin-top" />
          </motion.div>

          <motion.div 
            className="flex justify-center w-full overflow-hidden rounded-2xl bg-black border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div dangerouslySetInnerHTML={{ __html: tiktokEmbed3 }} className="w-full flex justify-center scale-95 sm:scale-100 origin-top" />
          </motion.div>
        </div>
      </div>

      <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}
