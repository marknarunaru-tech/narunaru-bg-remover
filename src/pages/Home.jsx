import React from 'react';
import { Link } from 'react-router-dom'; // ←これを追加

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 送付いただいた写真を背景に設定（パスは適宜調整） */}
        <img 
          src="/images/hero-park.jpg" 
          alt="札幌の公園で遊ぶ子どもたち" 
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* ここで写真を少し暗くして文字を読みやすくします */}
  <div className="absolute inset-0 bg-black/40"></div> 
  
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
      人、街、未来。すべてに愛と安心を。
    </h1>
    <p className="text-xl md:text-2xl font-medium drop-shadow-lg">アイエムアイ（NaruNaruグループ）</p>
  </div>
</section>

      {/* メインコンテンツ（2つの案内） */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 案内1：公式サイト */}
          <a 
            href="https://chiiki-imi.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-8 border-[#78ab07] overflow-hidden"
          >
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#78ab07] transition-colors">
                アイエムアイ 公式サイト
              </h2>
              <p className="text-gray-600 leading-relaxed">
                一時保育に強み。24時間365日。手厚い保育で安心をサポートします。

              </p>
              <div className="mt-6 inline-flex items-center text-[#78ab07] font-semibold">
                サイトを訪問する →
              </div>
            </div>
          </a>

          {/* 案内2：面会交流 */}
          <a 
            href="https://menkai.chiiki-imi.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-8 border-[#78ab07] overflow-hidden"
          >
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#78ab07] transition-colors">
                面会交流支援 サイト
              </h2>
              <p className="text-gray-600 leading-relaxed">
                「親子の絆を、つなぐ。」<br />
                保育士が見守る面会交流。10年以上の実績を持つアイエムアイにお任せください。
              </p>
              <div className="mt-6 inline-flex items-center text-[#78ab07] font-semibold">
                サイトを訪問する →
              </div>
            </div>
          </a>
        </div>
      </main>

      {/* ユーティリティリンク（背景切り抜きツール） */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4 text-sm">Web Utility Tool</p>
          <Link 
  to="/bg-remover" 
  className="inline-block px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
>
  背景切り抜きツールを使う
</Link>
           
        </div>
      </section>

     
    </div>
  );
};

export default Home;
