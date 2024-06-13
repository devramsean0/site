import { createSignal, onMount } from "solid-js";
import "../../styles/guestbook.css";

export function Guestbook() {
    const [entries, setEntries] = createSignal([{ name: 'System', gravitarURL: "", message: 'Loading Entries...', content: ""}]); // Create with an initial entry, replaced on load
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/guestbook/", {
            method: "POST",
            body: formData
      });
      const data = await response.json();
      setEntries(data.entries);
    }

    const handleLoad = async () => {
        const response = await fetch("/api/guestbook/", {
            method: "GET"
        });
        const data = await response.json();
        setEntries(data.entries);
    }

    onMount(handleLoad)
    return (
        <div>
            <h2>My Guestlog</h2>
            <p>Please leave a message :)</p>
            <form class="guestbook-form-supercontainer" onSubmit={handleSubmit}>
                <div class="guestbook-form-container">
                    <input name="name" required id="name" placeholder="Enter your name" class="guestbook-form-input"/>
                    <input name="email" id="email" placeholder="Enter your email! (not required)" class="guestbook-form-input"/>
                </div>
                <div class="guestbook-form-container">
                    <textarea name="message" required id="message" placeholder="Enter your message" class="guestbook-form-input"></textarea>
                    <button type="submit" class="guestbook-form-button">
                        <svg
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
            <div class="guestbook-entries-container" onLoad={() => handleLoad()}>
                {entries().map(entry => (
                    <div class="guestbook-entry">
                        <img alt="profile" src={entry.gravitarURL} class="guestbook-entry-photo" loading="lazy"/>
                        <div class="guestbook-entry-content">
                            <h4>{entry.name}</h4>
                            <p>{entry.message || entry.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p>
                You can update your photos by visiting <a href="https://en.gravatar.com/">Gravitar</a>
            </p>
        </div>
    );
}