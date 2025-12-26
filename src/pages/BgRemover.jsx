import React, { useState, useCallback } from 'react'; // { useState, useCallback } を追加
import { useDropzone } from 'react-dropzone';
import { removeBackground } from '@imgly/background-removal';
import { Upload, Download, Loader2, Image as ImageIcon, RefreshCw } from 'lucide-react';

function BgRemover() {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 画像がドロップされた時の処理
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setOriginalImage(URL.createObjectURL(file));
      setProcessedImage(null);
      // 自動で切り抜きを開始する場合
      processImage(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  });

  // 背景切り抜き実行
  const processImage = async (fileOrUrl) => {
    setIsLoading(true);
    try {
      // 実際の設定：モデルの読み込みと処理
      const blob = await removeBackground(fileOrUrl);
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
    } catch (error) {
      console.error("切り抜き失敗:", error);
      alert("処理中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
          narunaru-bg-remover
        </h1>
        <p className="text-slate-600 mb-8">AIの力で、社内業務の画像編集をもっとスマートに。</p>

        {/* アップロードエリア */}
        {!originalImage && (
          <div 
            {...getRootProps()} 
            className={`border-4 border-dashed rounded-2xl p-20 transition-all cursor-pointer
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white hover:border-slate-400'}`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <p className="text-xl text-slate-600 font-medium">画像をドラッグ＆ドロップ、またはクリック</p>
          </div>
        )}

        {/* プレビュー・処理エリア */}
        {originalImage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* 元画像 */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-sm font-bold text-slate-400 uppercase mb-3 text-left">Original</h2>
              <img src={originalImage} alt="Original" className="rounded-lg w-full h-auto" />
            </div>

            {/* 処理後画像 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center min-h-[300px] relative">
              <h2 className="text-sm font-bold text-slate-400 uppercase mb-3 self-start">Result</h2>
              
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                  <p className="text-slate-500 animate-pulse">AIが背景を削除中...</p>
                  <p className="text-xs text-slate-400 mt-2">※初回は学習データのDLに時間がかかります</p>
                </div>
              ) : processedImage ? (
                <>
                  <img src={processedImage} alt="Processed" className="rounded-lg w-full h-auto bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')]" />
                  <a 
                    href={processedImage} 
                    download="narunaru-removed.png"
                    className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <Download className="h-5 w-5" />
                    画像をダウンロード
                  </a>
                </>
              ) : (
                <div className="text-slate-300 flex flex-col items-center">
                  <ImageIcon className="h-16 w-16 mb-2" />
                  <p>待機中...</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* リセットボタン */}
        {originalImage && !isLoading && (
          <button 
            onClick={() => { setOriginalImage(null); setProcessedImage(null); }}
            className="mt-12 text-slate-400 hover:text-slate-600 flex items-center gap-2 mx-auto transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            別の画像を試す
          </button>
        )}
      </div>
    </div>
  );
}

export default BgRemover;
