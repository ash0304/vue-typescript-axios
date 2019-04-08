class AuthService {
    public setAccessToken(accessToken: string) {
        localStorage.setItem('memberAccessToken', accessToken);
    }

    public setAuthenticated(isAuthenticated: string) {
        localStorage.setItem('memberIsAuthenticated', isAuthenticated);
    }

    public getAccessToken() {
        return localStorage.getItem('memberAccessToken');
    }
}

export const authService = new AuthService();
