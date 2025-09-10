const BASE_URL = "http://localhost:1212/api";

// Handles API requests for both login and signup.
const sendAuthRequest = async (endpoint: string, name: string, password: string) => {
  const res = await fetch(`${BASE_URL}/users${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "An unknown error occurred.");
  }
  
  return await res.json();
};

// Logs in a user.
export const login = async (name: string, password: string) => {
  return sendAuthRequest("/login", name, password);
};

// Signs up a new user.
export const signup = async (name: string, password: string) => {
  return sendAuthRequest("", name, password);
};