export async function login(username, password) {
    const url = 'http://localhost:8080/api/login';
    const loginData = {
        username: username,
        password: password
    };
    try {

        console.log("Sending login request with data:", loginData);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken':'allowedtoken1',
            },
            body: JSON.stringify(loginData),
        });

        console.log("Response status:", response.status); 

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
        } else {
            console.error('Login successful, but no redirect URL provided');
        }
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};