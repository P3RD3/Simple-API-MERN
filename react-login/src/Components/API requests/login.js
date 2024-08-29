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
                'accesstoken': 'allowedtoken1',
            },
            body: JSON.stringify(loginData),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            let errorMessage = 'Login failed. Please try again.';
            if (response.status === 401) {
                errorMessage = 'Invalid credentials';
            }
            const errorData = await response.json();
            throw new Error(errorMessage);
        }

        const data = await response.json();
        if (data.redirectUrl) {
            return { success: true, redirectUrl: data.redirectUrl };
        } else {
            return { success: true };
        }
    } catch (error) {
        console.error('Login request failed:', error.message);
        throw error;
    }
}
