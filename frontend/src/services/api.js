const BASE_URL = "http://localhost:5000";

export const fetchPatients = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/patients`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};