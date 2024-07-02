export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'f1f07231bbmshf6612b824ab7a01p19910fjsn44183aaf0ff8',
    },
  };
  
   export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f1f07231bbmshf6612b824ab7a01p19910fjsn44183aaf0ff8',
    },
  };
  
  export  const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

  export default {fetchData,youtubeOptions,exerciseOptions};
  