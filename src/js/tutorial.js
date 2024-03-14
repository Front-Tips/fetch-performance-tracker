document
  .getElementById("fetchDataBtn")
  .addEventListener("click", async () => {
    // Mark the start time of
    // the fetch operation
    performance.mark("startFetch");

    // Fetch data from Public APIs
    const response = await fetch(
      // 10 users
      // "https://jsonplaceholder.typicode.com/users"
      // 5000 photos
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = await response.json();

    // Mark the end time of the
    // fetch operation
    performance.mark("endFetch");

    // Measure the time taken
    // for the fetch operation
    performance.measure(
      "fetchTime",
      "startFetch",
      "endFetch"
    );

    // Retrieve the measure object
    // and display the duration
    const measure =
      performance.getEntriesByName(
        "fetchTime"
      )[0];

    // Display the fetched data
    // in the container
    document.getElementById(
      "timeValue"
    ).textContent =
      measure.duration.toFixed(2);

    document.getElementById(
      "dataContainer"
    ).textContent = JSON.stringify(
      data,
      null,
      0
    );
  });
