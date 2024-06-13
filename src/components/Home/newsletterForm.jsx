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
            <form onSubmit={handleSubmit} class="newsletterForm-supercontainer">
                <div class="newsletterForm-container">
                    <input name="firstName" required id="firstName" placeholder="Enter your first name" class="newsletterForm-input" />
                    <input name="lastName" required id="lastName" placeholder="Enter your last name" class="newsletterForm-input" />
                </div>
                <div class="newsletterForm-container">
                    <input type="email" name="email" required id="email" placeholder="Enter your email" class="newsletterForm-input" />
                    <button type="submit" class="newsletterForm-button"><svg
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="send"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                        fill="#ff2a23"
                        width="32"
                        height="32"
                        >
                            <g>
                                <path d="M9,8l0,5.287l7.054,1.495c0.628,0.133 0.966,0.665 0.989,1.164c0,0.009 0.001,0.022 0.001,0.034c0,0.004 0,0.008 0,0.012c0,0.005 0,0.009 0,0.013c0,0.012 -0.001,0.025 -0.001,0.034c-0.023,0.498 -0.361,1.031 -0.989,1.164l-7.054,1.495l0,5.627c0.02,0.001 0.049,-0.002 0.09,-0.017c4.386,-1.524 15.41,-7.808 15.41,-8.308c0,-0.5 -11.075,-6.473 -15.41,-7.984c-0.041,-0.014 -0.07,-0.017 -0.09,-0.016Zm17.555,7.992l0,-0.011l0,-0.003c-0.011,-0.698 -0.39,-1.289 -0.925,-1.685c-3.631,-2.688 -11.512,-6.642 -15.882,-8.165c-0.624,-0.218 -1.3,-0.158 -1.843,0.185c-0.554,0.349 -0.905,0.958 -0.905,1.667l0,5.712c0,0.708 0.496,1.32 1.189,1.467l3.931,0.833l-3.931,0.834c-0.693,0.146 -1.189,0.758 -1.189,1.467l0,6.052c0,0.709 0.351,1.317 0.905,1.667c0.543,0.343 1.219,0.403 1.843,0.185c4.371,-1.527 12.29,-5.85 15.881,-8.505c0.536,-0.397 0.915,-0.987 0.925,-1.685l0,-0.003l0.001,-0.012Z" />
                            </g>
                    </svg>
                </button>
                </div>
            </form>
            {responseMesssage()}
        </div>
    )
}