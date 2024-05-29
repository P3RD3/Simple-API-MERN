export async function login(username, password) {
    const url = 'http://localhost:8080/api/login';
    const loginData = {
        username: username,
        password: password
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken':'allowedtoken1',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};