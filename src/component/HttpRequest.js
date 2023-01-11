import { useEffect, useState } from "react"
import axios from "axios"
import SurahList from "./SurahList";
import SurahDetails from "./SurahDetails";

export default function HttpRequestDemo() {
    const [selectedSurah, setSelectedSurah] = useState(1);
    const [surahFull, setSurahFull] = useState([])
    const [audioFile, setAudioFile] = useState(JSON.parse(localStorage.getItem('AUDIO_FILE')) ?? null);

    const changeSelectedSurah = (id) => {
        setSelectedSurah(id)
    }

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${selectedSurah}?language=en&words=false&translations=161&audio=7&tafsirs=true&fields=text_uthmani,verse_number,image_url&page=1&per_page=400`)
            .then(function(data){
                setSurahFull(data.data.verses)
            })
    }, [selectedSurah])

    useEffect(() => {
        if(selectedSurah) {
            axios.get(`https://api.quran.com/api/v4/chapter_recitations/2/${selectedSurah}`)
            .then(data => {
                localStorage.setItem('AUDIO_FILE', JSON.stringify(data.data.audio_file))
                setAudioFile(data.data.audio_file)
            })
           
        }
    }, [selectedSurah])


    // JavaScript Promise => Asynchronous operation
    // Data Persistency

    return (
        <div>
            <div className="container flex p-16 ">
                <div className="w-1/5">
                    <SurahList changeSelectedSurah={changeSelectedSurah} selectedSurah={selectedSurah} />
                </div>


                <div className="fixed left-1/4">
                    <h2 className="font-semibold text-purple-600">Audio file</h2>
                    <div>
                        {
                            audioFile?.audio_url && (
                                <audio src={`${audioFile.audio_url}`} controls />
                            )
                        }
                    </div>
                   

                    <div className="mx-16">
                            <SurahDetails surahFull={surahFull} />
                        </div>
                       
                </div>


            </div>

        </div>
    )
}