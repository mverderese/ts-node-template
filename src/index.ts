const run = async () => {
  const getResponse = await fetch("https://httpbin.org/get");
  const getData = await getResponse.json();
  console.log("Data from get:", getData);

  const postResponse = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getData),
  });
  const postData = await postResponse.json();
  console.log("Data from post:", postData);
};

run().then(
  () => {
    console.log("Done running the script!");
  },
  (e) => console.error("Something went wrong running the script:", e),
);
