import { useEffect, useState } from "react"
import axios from "axios"



const ConvertToArabicNumbers = (num) => {
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
      return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
  }
  

export default function Quran() {
    const [surahs, setSurahs] = useState([]);
    const [selectedSurah, setSelectedSurah] = useState(1);
    const [audioFile, setAudioFile] =useState(null)
    const [surahFull, setSurahFull] = useState([])

    const changeSelectedSurah = (id) => {
        setSelectedSurah(id)
      
    }
   
    useEffect(() => {
        axios.get('https://api.quran.com/api/v4/chapters?language=en')
            .then(function(data){
                // console.log('data...',data);
                setSurahs(data?.data?.chapters)
            })
    }, [])

    useEffect(() => {
        if(selectedSurah) {
            axios.get(`https://api.quran.com/api/v4/chapter_recitations/2/${selectedSurah}`)
            .then(data => {
                // console.log('data...',data);
                setAudioFile(data?.data?.audio_file)
            })
           
        }
    }, [selectedSurah])

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${selectedSurah}?language=en&words=false&translations=161&audio=7&tafsirs=true&fields=text_uthmani&page=1&per_page=400`)
            .then(function(data){
                setSurahFull(data?.data?.verses)
            })
    }, [selectedSurah])



    return (
        <div className="text-center bg-gray-400 ">
            <h1 className="font-bold text-2xl text-rose-600 ">Quran Surah </h1>

            <div className="container flex ">


                <div className="w-1/5 ml-20">
                    <ul>
                        {
                            surahs?.map(surah => (
                                <li key={surah.id} onClick={()=>changeSelectedSurah(surah.id)}  className="name cursor-pointer ">
                                    <em>{surah.id}-{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="fixed left-1/4">
                    <h2 className="font-semibold text-purple-600">MP3 Player</h2>
                    <div>
                        {
                            audioFile?.audio_url && (
                                <audio className="text-purple-600" src={`${audioFile.audio_url}`} controls />
                                
                            )
                        }
                    </div>
                    


                    
                </div>
                <div className="w-4/6 h-5/6 bg-sky-400 overflow-auto fixed top-32 left-1/4">
                            {surahFull?.map(ayah => (
                                <div className="text-xl my-16">
                                    <p className="text-right font-medium">{ayah.text_uthmani} <span className="surahText">{ConvertToArabicNumbers(ayah.verse_number)}</span></p>
                                    <p className="flex items-center text-left w-full font-normal"><span className="surahText">{ayah.verse_number}</span><span>{ayah.translations[0].text}</span></p>
                                </div>
                            ))}
                            
                        </div>
                        {/* <SurahList/> */}

                   
            </div>

        </div>
    )
}