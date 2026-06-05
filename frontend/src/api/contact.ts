export async function sendContactForm(data: unknown) {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  
    if (!response.ok) {
      throw new Error("Request failed")
    }
  
    return response.json()
  }