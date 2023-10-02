import { Navbar } from "@/components/navbar";
import { MDhandler } from "@/lib/md";
import { Container, Grid, Link } from "theme-ui";

export default function TrafficLightProjectHome(props: {posts: any[]}) {
    return (
        <>
            <Navbar />
            <center>
                <h1>Traffic Light Project</h1>
                <Container>
                    <h2>Financials</h2>
                    <p>
                        You can see all the financials for the project <Link href="/files/traffic-light-project/financials.xlsx">here</Link>
                    </p>
                </Container>
                <Container>
                    <h2>The project diary</h2>
                    <p>
                        Here is a list & link to all the diary entries related to this project
                    </p>
                    <Grid columns={[2, null, 3]} gap={3}>
                        {props.posts.map((element: any) => {
                            return (
                                <div key={element.slug}>
                                    <h3>{element.title}</h3>
                                    <p>
                                        {element.date}
                                        <br />
                                        {element.description}
                                    </p>
                                    <Link href={`/traffic-light-project/${element.slug}`}>Read more here!</Link>
                                </div>
                            )
                        })}
                    </Grid>
                </Container>
            </center>
        </>
    )
};

export function getStaticProps() {
    const md = new MDhandler("_projects/traffic-light-project/webdiary")
    const posts = md.getAllPosts([
        'title',
        'description',
        'date',
        'slug'
    ]);
    return {
        props: {
            posts
        },
    };
}