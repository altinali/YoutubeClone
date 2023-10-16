import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { getData } from "../utils/helpers";

// Context Temelini oluşturma
export const YoutubeContext = createContext();

// Context'de tutulan veriler uygulamaya aktarılacak

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    if (selectedCategory.type === "home" || selectedCategory.type === 'trending') {
      // Eski videoları sli
      setVideos(null)
      getData(`/${selectedCategory.type}`).then((res) => {
        // Verilerden video alma
       const filtered = res.data.data.filter((i) => i.type === 'video')
       // State i güncelleme
      setVideos(filtered)
      });
      
      
    }

    if (selectedCategory.type === "category") {
      //eski state i temizle
      setVideos(null)
      // Yeni videolar için istek at
      getData(`/search?query=${selectedCategory.name}&type=video`)
      .then((res) => {
        // Verilerden sadece video alma
       const filtered = res.data.data.filter((i) => i.type === 'video')
       // State i güncelleme
      setVideos(filtered)
      })
    }
    if (selectedCategory.type === "trend") {
      getData("/trend");
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory , videos}}>
      {children}
    </YoutubeContext.Provider>
  );
};
