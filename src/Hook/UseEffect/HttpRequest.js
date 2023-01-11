import React ,{useState,useEffect}from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';



const ConvertToArabicNumbers = (num) => {
  const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
}

export default function HttpRequest() {
    const [surahs, setSurahs] = useState([]);
    const [selectedSurah, setSelectedSurah] = useState(null);
    // const [audioList, setAudioList] = useState([])
    const [surahFull, setSurahFull] = useState([])
    const [surahchange,setSurahchange]=useState(null)

    // Data Persistency
    const [audioFile, setAudioFile] = useState(JSON.parse(localStorage.getItem('AUDIO_FILE')) ?? null);

    const changeSelectedSurah = (id) => {
        setSelectedSurah(id)
        setSurahchange(id)
        
    }
    // const changeSurah=(id)=>{
    //     setSurahchange(id)
    // }

    useEffect(() => {
        axios.get('https://api.quran.com/api/v4/chapters?language=en')
            .then(function(data){
                console.log('data...',data);
                setSurahs(data.data.chapters)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${surahchange}?language=en&words=false&translations=161&audio=7&tafsirs=true&fields=text_uthmani&page=1&per_page=400`)
            .then(function(data){
                setSurahFull(data.data.verses)
            })
    }, [surahchange])

    useEffect(() => {
        if(selectedSurah) {
            axios.get(`https://api.quran.com/api/v4/chapter_recitations/2/${selectedSurah}`)
            .then(data => {
                localStorage.setItem('AUDIO_FILE', JSON.stringify(data.data.audio_file))
                setAudioFile(data.data.audio_file)
            })
            // axios.get(`https://api.quran.com/api/v4/recitations/7/by_chapter/${selectedSurah}?per_page=400`)
            //     .then((data) => {
            //         setAudioList(data.data.audio_files)
            //     })
        }
    }, [selectedSurah])


    // JavaScript Promise => Asynchronous operation

    return (
        <div>
            <h1 className="font-bold text-2xl text-lime-800">HTTP Request Demo</h1>

            <div className="container flex">
                <div className="w-1/5">
                    <ul>
                        {
                            surahs.map(surah => (
                                <li key={surah.id} onClick={() => [changeSelectedSurah(surah.id)/*,changeSurah(surah.id)*/]} className="cursor-pointer my-8 hover:text-green-600 hover:font-bold">
                                    <em>{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small>
                                </li>
                                // <Link key={surah.id}  to=''>{surah.name_arabic}{surah.name_simple}</Link>
                            ))
                        }
                    </ul>
                </div>


                <div className="w-4/5">
                    <h2>Audio file</h2>
                    <div>
                        {
                            audioFile?.audio_url && (
                                <audio src={`${audioFile.audio_url}`} controls />
                            )
                        }
                    </div>
                    {/* <ul> */}
                        {/* {
                            audioList.map(audio => (
                                <li key={audio.verse_key}>
                                    <audio src={`https://verses.quran.com/${audio.url}`} controls />
                                </li>
                            ))
                        } */}
                    {/* </ul> */}

                    <div className="mx-16">
                            {surahFull.map(ayah => (
                                <div className="text-4xl my-16">
                                    <p className="text-right">{ayah.text_uthmani} <span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{ConvertToArabicNumbers(ayah.verse_number)}</span></p>
                                    <p className="flex items-center text-left w-full"><span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{ayah.verse_number}</span><span>{ayah.translations[0].text}</span></p>
                                </div>
                            ))}
                            {/* <span className="rounded-full border w-8 h-8 bg-blue-50 inline-flex justify-center items-center rtl">End</span> */}
                        </div>
                        {/* <p className="mt-8">
                            {surahFull.map(ayah => (
                                    <>
                                        <span className="text-4xl">{ayah.translations[0].text}</span>
                                    </>
                            ))}
                        </p> */}
                </div>


            </div>

        </div>
    )
}
