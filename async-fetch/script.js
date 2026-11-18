
// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Get HTML elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const userContainer = document.getElementById("userContainer");


// FUNCTION TO FETCH USERS
async function fetchUsers() {

    // Show loading state
    status.textContent = "Loading users...";
    status.className = "loading";

    // Clear previous user data
    userContainer.innerHTML = "";

    // Disable button while fetching
    fetchBtn.disabled = true;
    fetchBtn.textContent = "Loading...";

    try {

        // Fetch data from API
        const response = await fetch(API_URL);

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        // Convert response into JSON
        const users = await response.json();

        // Check empty state
        if (users.length === 0) {

            status.textContent = "No users found.";
            status.className = "";

            return;
        }

        // Display users
        displayUsers(users);

        // Show success message
        status.textContent = `Successfully loaded ${users.length} users.`;
        status.className = "success";

    } catch (error) {

        // Handle errors
        status.textContent = "Something went wrong! " + error.message;
        status.className = "error";

        // Log error in console
        console.error("Error:", error);

    } finally {

        // Enable button again
        fetchBtn.disabled = false;
        fetchBtn.textContent = "Load Users";
    }
}


// FUNCTION TO DISPLAY USERS
function displayUsers(users) {

    // Clear previous data
    userContainer.innerHTML = "";

    users.forEach(user => {

        // Create user card
        const card = document.createElement("div");
        card.className = "user-card";

        // Create user name
        const name = document.createElement("h3");
        name.textContent = user.name;

        // Create email
        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        // Create company
        const company = document.createElement("p");
        company.textContent = "Company: " + user.company.name;

        // Add elements to card
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(company);

        // Add card to container
        userContainer.appendChild(card);

    });
}


// BUTTON CLICK EVENT
fetchBtn.addEventListener("click", fetchUsers);
