import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID o0dLh8r3bjFcG8W0MMDixFUT3j5c6OL5W-zwHnNemcQ'
    },
    params: {
      query: term
    }
  })


  return response.data.results;
}

export default searchImages;