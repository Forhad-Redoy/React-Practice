const convertToArabicNumbers = (num) => {
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
      return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
  }
  

export default function SurahDetails({surahFull}) {
    return (
        <div className="w-4/6 h-5/6 bg-sky-400 overflow-auto fixed top-32 left-1/4">
            {surahFull.map(ayah => (
                <div className="text-4xl my-16">
                    <p className="text-right">{ayah.text_uthmani} <span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{convertToArabicNumbers(ayah.verse_number)}</span></p>
                    <p className="flex items-center text-left w-full"><span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{ayah.verse_number}</span><span>{ayah.translations[0].text}</span></p>
                </div>
            ))}
        </div>
    )
}