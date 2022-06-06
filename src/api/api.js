export const BASE_URL = `https://rickandmortyapi.com/api/`;

export const getData = async (route) => {
  const request = await fetch(
    `${BASE_URL}${route}`,
    {mode: 'cors'}
  );

  return await request.json();
}