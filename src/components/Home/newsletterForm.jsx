import { createSignal } from "solid-js";
import "../../styles/newsletterForm.css";

export default function NewsletterForm() {
    const [responseMesssage, setResponseMessage] = createSignal("");
    const handleSubmit = async (e) => {
        e.preventDefault();
       const formData = new FormData(e.target);
       const response = await fetch("/api/subscribe/", {
              method: "POST",
              body: formData
        });
        const data = await response.json();
        setResponseMessage(data.message);
    };
    return (
        <div>
            <h2>Subscribe to my newsletter</h2>
            <p>
                Get updates on my latest projects, blog posts and what I'm learning.
                I promise to keep it spam free, and at a maximum of one email per month
            </p>
            <form onSubmit={handleSubmit} class="newsletterForm-container">
                <input type="email" name="email" id="email" placeholder="Enter your email" class="newsletterForm-input" />
                <button type="submit" class="newsletterForm-button">Subscribe</button>
            </form>
            {responseMesssage()}
        </div>
    )
}