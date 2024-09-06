
export const fetchSongs = (query) => async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      dispatch({
        type: 'SET_SONGS',
        payload: data.data || [], 
      });
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };
  