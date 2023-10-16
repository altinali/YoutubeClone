import axios from 'axios';

const options = {
    params: {geo: 'TR', lang : 'tr'},
    headers: {
      'X-RapidAPI-Key': '6eb8aa3a55msh1ba90f38498696fp193931jsn29e40f38fdc9',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

  axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

  // Verdigimiz url e istek atıp verileri döndüren fonksiyon
export const getData = async (url) => {
    try {
        const response = await axios.get(url, options)
        return response
    } catch (err) {
        console.log('Verileri Çekerken Bir Hata Oluştu')
    }
}