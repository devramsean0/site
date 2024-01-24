<script>
    import Typewriter from 'svelte-typewriter';
</script>
<div class="h-screen">
    <section class="flex justify-center">
        <div class="rounded-full gradient-bg w-fit flex space-x-20">
            <img src="/github.svg" alt="github" class="w-20 h-20" />
            <img src="/user_placeholder.svg" alt="Me!" class="w-20 h-20" />
            <img src="/email-fill.svg" alt="email" class="w-20 h-20" />
        </div>
    </section>
    <section class="flex flex-col justify-center h-full">
        <h1 class="text-8xl gradient-text">Sean Outram</h1>
        <Typewriter mode="loopRandom">
            <h2 class="text-4xl">A round peg in a square hole.</h2>
            <h2 class="text-4xl">Software developer.</h2>
        </Typewriter>
    </section>
    <section class="gradient-bg w-full h-screen flex justify-center">
        <div class="bg-background mt-10 mx-52 px-10 pb-5 h-fit rounded-lg">
            <h2 class="text-4xl text-center">About Me</h2>
            <p>
                I’m a 15yr old Neurodivergent secondary school student and software developer
                from the UK,
                <br />
                my favourite activities are building websites, My chosen stack is
                generally Tailwind CSS, Next.js and Typescript.
                <br />
                However, I am using Ruby and rails in combination now.
                I like cooking up storms (and bugs) while working on HCB!
            </p>
        </div>
        <div class="grid place-content-center grid-cols-2 w-full">
            <h1>t</h1>
            <h1>t</h1>
            <h1>t</h1>
            <h1>t</h1>
        </div>
    </section>
</div>