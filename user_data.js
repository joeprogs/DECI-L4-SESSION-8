// 1st Feb 2025

fetch("https://randomuser.me/api")
  .then((data) => {
    data
      .json()
      .then((json) => {
        const email = json["results"][0]["email"];
        const nameObject = json["results"][0]["name"];
        const fullNameWithTitle = `${nameObject["title"]}. ${nameObject["first"]} ${nameObject["last"]}`;
        console.log(`Name: ${fullNameWithTitle}`);
        console.log(`Email: ${email}`);
      })
      .catch(() => {
        console.error("Could not get json data.");
      });
  })
  .catch(() => {
    console.error("Could not get a response.");
  });
