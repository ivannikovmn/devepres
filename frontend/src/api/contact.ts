export async function sendContactForm(data: unknown) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}