const API_URL = import.meta.env.VITE_API_URL;

export async function generateSummary(text: string) {
  const res = await fetch(`${API_URL}/api/ai-summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
}