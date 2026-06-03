import { mockSubmit } from "../api/mockSubmit"

type FormState = "idle" | "loading" | "success" | "error"

export function renderContactForm(container: HTMLElement) {
  let state: FormState = "idle"

  container.innerHTML = `
    <form id="contactForm">
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="phone" placeholder="Phone" />
      <textarea name="comment" placeholder="Comment"></textarea>

      <button type="submit">Send</button>

      <p id="status"></p>
    </form>
  `

  const form = container.querySelector("#contactForm") as HTMLFormElement
  const status = container.querySelector("#status") as HTMLParagraphElement

  const setState = (newState: FormState) => {
    state = newState

    if (state === "loading") status.textContent = "Sending..."
    if (state === "success") status.textContent = "Success!"
    if (state === "error") status.textContent = "Error!"
    if (state === "idle") status.textContent = ""
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
  
    const formData = new FormData(form)

    const data: Record<string, string> = {}
    
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })
  
    function validate(data: any) {
      if (!data.name) return "Name required"
      if (!data.email.includes("@")) return "Invalid email"
      if (!data.comment) return "Comment required"
      return null
    }
  
    const error = validate(data)
  
    if (error) {
      setState("error")
      status.textContent = error
      return
    }
  
    try {
      setState("loading")
      await mockSubmit(data)
      setState("success")
      form.reset()
    } catch (e) {
      setState("error")
    }
  })
}