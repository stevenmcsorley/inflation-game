function updateTime() {
    const currentDate = new Date(); // Get the current date and time
    // Update the in-game date and time variables based on currentDate
    const inGameDate = currentDate.toLocaleDateString(); // Format as a date string
    const inGameTime = currentDate.toLocaleTimeString(); // Format as a time string

    // Update the in-game clock display with inGameDate and inGameTime
    document.getElementById('clock').textContent = `Date: ${inGameDate} - Time: ${inGameTime}`;

    // Call this function at regular intervals (e.g., every second)
    setTimeout(updateTime, 1000); // 1000 milliseconds = 1 second
}

// Call updateTime to start tracking time
updateTime();


// Function to fetch economic data from the server
async function fetchEconomicData() {
    try {
        const response = await fetch('/get-economic-data');
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Failed to fetch economic data:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error while fetching economic data:', error);
        return null;
    }
}

// Function to display economic data on the dashboard
function displayEconomicData(data) {
    const economicDataContainer = document.getElementById('economic-data-container');
    
    // Clear any existing data
    economicDataContainer.innerHTML = '';

    // Loop through the economic data and create HTML elements to display it
    data.forEach(item => {
        const dataElement = document.createElement('div');
        dataElement.className = 'border p-4 rounded'; // Apply styling to the data box
        dataElement.innerHTML = `
            <p class="font-bold text-lg">${item.data_type}</p>
            <p class="text-xs text-gray-500">Description: ${item.description}</p>
            <p class="text-md">Value: ${item.value}</p>
            <p class="text-sm text-gray-500">Date Updated: ${item.date_updated}</p>
        `;
        economicDataContainer.appendChild(dataElement);
    });
}

// Call the fetchEconomicData function when the dashboard page loads
window.addEventListener('load', async () => {
    const economicData = await fetchEconomicData();
    if (economicData) {
        displayEconomicData(economicData);
    }
});

// Function to fetch economic calendar data from the server
async function fetchEconomicCalendarData() {
    try {
        const response = await fetch('/get-economic-calendar');
        if (response.ok) {
            return await response.json();
        } else {
            // Handle errors, e.g., display an error message to the user
            console.error('Failed to fetch economic calendar data');
            return [];
        }
    } catch (error) {
        console.error(error);
        // Handle errors, e.g., display an error message to the user
        return [];
    }
}

// Function to display economic calendar data on the dashboard
function displayEconomicCalendarData(data) {
    const economicCalendarContainer = document.getElementById('economic-calendar-container');

    // Clear any existing data
    economicCalendarContainer.innerHTML = '';

    // Loop through the economic calendar data and create HTML elements to display it
    data.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.innerHTML = `
            <p>Date: ${event.date} - Time: ${event.time}</p>
            <p>Country: ${event.country}</p>
            <p>Indicator: ${event.indicator}</p>
            <p>Actual: ${event.actual || 'N/A'}</p>
            <p>Previous: ${event.previous || 'N/A'}</p>
            <p>Consensus: ${event.consensus || 'N/A'}</p>
            <p>Forecast: ${event.forecast || 'N/A'}</p>
        `;
        eventElement.classList.add('event-card'); // Add styling class
        economicCalendarContainer.appendChild(eventElement);
    });
}

// Call the fetchEconomicCalendarData function when the dashboard page loads
window.addEventListener('load', async () => {
    const economicCalendarData = await fetchEconomicCalendarData();
    if (economicCalendarData) {
        displayEconomicCalendarData(economicCalendarData);
    }
});


// Function to fetch employment details from the server
async function fetchEmploymentDetails() {
    try {
      const response = await fetch("/get-user-employment-details");
      if (response.ok) {
        return await response.json();
      } else {
        console.error("Failed to fetch employment details");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  // Function to display employment details on the dashboard
  function displayEmploymentDetails(data) {
    const employmentStatusElement = document.getElementById("employment-status");
    const skillElement = document.getElementById("skill");
    const experienceElement = document.getElementById("experience");
  
    if (employmentStatusElement) {
      employmentStatusElement.textContent = data.employment_status || "N/A";
    }
  
    if (skillElement) {
      skillElement.textContent = data.skill || "N/A";
    }
  
    if (experienceElement) {
      experienceElement.textContent = data.experience || "N/A";
    }
  }
  
  // Call the fetchEmploymentDetails function and display the data when the dashboard page loads
  window.addEventListener("load", async () => {
    const employmentDetails = await fetchEmploymentDetails();
    if (employmentDetails) {
      displayEmploymentDetails(employmentDetails);
    }
  });
  

  // Function to fetch weekly outgoings data from the server
async function fetchWeeklyOutgoings() {
    try {
        const response = await fetch("/weekly-outgoings", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.error("Failed to fetch weekly outgoings");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to display weekly outgoings on the dashboard
function displayWeeklyOutgoings(data) {
    const outgoingsList = document.getElementById("outgoings-list");

    // Clear existing outgoings
    outgoingsList.innerHTML = "";

    // Iterate over the outgoings data and create list items
    for (const key in data) {
        // Exclude "player_id" from the list
        if (key !== "player_id") {
            const value = parseFloat(data[key]);
            if (!isNaN(value)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${key}: £${value.toFixed(2)}`;
                outgoingsList.appendChild(listItem);
            }
        }
    }
}



// Call the fetchWeeklyOutgoings function and display the data when the dashboard page loads
window.addEventListener("load", async () => {
    const weeklyOutgoings = await fetchWeeklyOutgoings();
    if (weeklyOutgoings) {
        displayWeeklyOutgoings(weeklyOutgoings);
    }
});
