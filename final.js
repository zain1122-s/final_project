async function fetchUsers() {
    try {
        
        const response = await fetch('https://randomuser.me/api/?results=500');
        
     
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

      
        const data = await response.json();

        
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';

        
        data.results.forEach((user, idx) => {
            const userDiv = document.createElement('div');
            userDiv.style.border = "1px solid #ccc";
            userDiv.style.padding = "10px";
            userDiv.style.marginBottom = "10px";

            userDiv.innerHTML = `
                <h3>User ${idx + 1}</h3>
                <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Cell:</strong> ${user.cell}</p>
                <p><strong>Picture:</strong> <img src="${user.picture.large}" alt="User Picture"></p>
            `;
            userList.appendChild(userDiv);
        });
    } catch (error) {
      
        console.error('Error fetching data:', error);
    }
}


document.getElementById('fetch-users').addEventListener('click', fetchUsers);







 async function fetchFemaleUsers() {
            try {
                // Fetch the data from the Random User API for females
                const response = await fetch('https://randomuser.me/api/?gender=female&results=10');
                
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const data = await response.json();

                // Get the container for displaying female users
                const femaleUserList = document.getElementById('female-user-list');
                femaleUserList.innerHTML = ''; // Clear previous data

                // Loop through each female user and display their information
                data.results.forEach((user, idx) => {
                    const userDiv = document.createElement('div');
                    userDiv.style.border = "1px solid #ccc";
                    userDiv.style.padding = "10px";
                    userDiv.style.marginBottom = "10px";

                    userDiv.innerHTML = `
                        <h3>Female User ${idx + 1}</h3>
                        <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Cell:</strong> ${user.cell}</p>
                        <p><strong>Picture:</strong> <img src="${user.picture.large}" alt="User Picture"></p>
                    `;
                    femaleUserList.appendChild(userDiv);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        // Async function to fetch male users
        async function fetchMaleUsers() {
            try {
                // Fetch the data from the Random User API for males
                const response = await fetch('https://randomuser.me/api/?gender=male&results=10');
                
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const data = await response.json();

                // Get the container for displaying male users
                const maleUserList = document.getElementById('male-user-list');
                maleUserList.innerHTML = ''; // Clear previous data

                // Loop through each male user and display their information
                data.results.forEach((user, idx) => {
                    const userDiv = document.createElement('div');
                    userDiv.style.border = "1px solid #ccc";
                    userDiv.style.padding = "10px";
                    userDiv.style.marginBottom = "10px";

                    userDiv.innerHTML = `
                        <h3>Male User ${idx + 1}</h3>
                        <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Cell:</strong> ${user.cell}</p>
                        <p><strong>Picture:</strong> <img src="${user.picture.large}" alt="User Picture"></p>
                    `;
                    maleUserList.appendChild(userDiv);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        // Event listeners for the buttons
        document.getElementById('fetch-users-btn').addEventListener('click', fetchFemaleUsers);
        document.getElementById('fetch-male-users-btn').addEventListener('click', fetchMaleUsers);