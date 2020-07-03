export const getPoetry = async () => {
  const dataJson = await fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return [dataJson.origin, dataJson.author, dataJson.content];
};
