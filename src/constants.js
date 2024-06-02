export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.503215",
    bl_lng: "25.324261",
    tr_lat: "42.869652",
    tr_lng: "44.552871",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "8b6da5566amsha97dca36f3dbc21p173a1ejsn60ea160d7893",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const secondOptions = {
  headers: {
    "x-rapidapi-key": "8b6da5566amsha97dca36f3dbc21p173a1ejsn60ea160d7893",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
