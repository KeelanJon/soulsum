export async function getQuotes() {
  //Getting all records to count the length.
  const url = String(process.env.NEXT_PUBLIC_API_URL);
  console.log(url);

  const allRecordsRes = await fetch(url + "/api/quotes/");
  console.log(allRecordsRes);
  const recordsData = await allRecordsRes.json();

  //Generating random number to pull random record.
  const max = recordsData.data.length;
  let recordID = getRandomNumber(max);

  //Just making sure the id is never 0 as this will error with no record.
  if (recordID == 0) {
    recordID++;
  }

  const res = await fetch("http://localhost:1337/api/quotes/" + recordID);
  const data = await res.json();

  return data;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
