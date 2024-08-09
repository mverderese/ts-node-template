process.env.TZ = "UTC";

const run = async () => {
  const getResponse = await fetch("https://httpbin.org/get");
  let getData: object | undefined;
  if (getResponse.status === 200) {
    getData = await getResponse.json();
    console.log("Data from get:", getData);
  } else {
    console.log(`Error from get request (Status code ${getResponse.status}):`, await getResponse.text());
  }

  const postResponse = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getData),
  });
  let postData: object | undefined;
  if (postResponse.status === 200) {
    postData = await postResponse.json();
    console.log("Data from post:", postData);
  } else {
    console.log(`Error from post request (Status code ${postResponse.status}):`, await postResponse.text());
  }
};

run().then(
  () => {
    console.log("Done running the script!");
  },
  (e) => console.error("Something went wrong running the script:", e),
);
