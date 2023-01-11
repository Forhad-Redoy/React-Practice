import { useState, useEffect } from "react";
import axios from "axios";

export default function SurahList({ changeSelectedSurah, selectedSurah }) {
    const [surahs, setSurahs] = useState([]);

    const changeSelect = (e) => {
        changeSelectedSurah(e.target.value)
    }

    useEffect(() => {
        axios.get('https://api.quran.com/api/v4/chapters?language=en')
            .then(function(data){
                setSurahs(data.data.chapters)
            })
    }, [])


    return(
        <div>
             {/* Controlled Element */}
            <h1 className="text-4xl font-bold mb-5">Surah List</h1>
            <ul>
                <input type="text" className="w-10 border-2 mb-4 font-semibold border-gray-500 h-12" value={selectedSurah} />
                <select className="w-full border-2 font-semibold border-gray-600 px-4 py-2" value={selectedSurah} onChange={changeSelect}>
                    {
                        surahs.map(surah => (
                            <option className="font-semibold text-white border bg-orange-500" value={surah.id}><em>{surah.id}-{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small></option>
                        ))
                    }
                </select>

                {/* {
                    surahs.map(surah => (
                        <li key={surah.id} onClick={() => changeSelectedSurah(surah.id)} className="cursor-pointer my-8 hover:text-green-600 hover:font-bold">
                            <em>{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small>
                        </li>
                    ))
                } */}

            </ul>
        </div>
    )
}