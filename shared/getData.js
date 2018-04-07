export const getData = async () => {
  const BASE_URL = `https://mundial-bet.herokuapp.com/api/teams/all`;
  try {
    const res = await fetch(BASE_URL);
    console.log(res)
    return  await res.json();  
  } catch (error) {
    console.error(error);
    return;
  }
};