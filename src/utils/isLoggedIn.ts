export default function isLoggedIn() {
    // Check if window is defined to ensure we're in a client-side context
    if (typeof window !== "undefined") {
        // Access localStorage only if we're in a client-side context
        const isLogged = localStorage.getItem('isLogged');
        return isLogged ? true : false;
    }
    // If we're not in a client-side context, return false by default
    return false;
}