import { VersionSelector } from "@/components/docs/versionSelector";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { docsGetListOfProjectVersions, docsGetListOfProjects, docsGetReadmeFromProject } from "@/lib/docsFsUtils";
import { useRouter } from "next/router";
import { Container, Select, Button } from "theme-ui";

export default function DocsPackageIndex({ readme, versions }: { readme: string, versions: string[] }) {
    const router = useRouter();
    const { packageName } = router.query;
    return (
        <>
            <Navbar />
            <Container>
                <center>
                    <h1>{packageName} Documentation</h1>
                    <VersionSelector packageName={String(packageName)} versions={versions} includeAdditionalURL={false}/>
                </center>
            </Container>
            <br />
            <Container sx={{border: "1px solid black", backgroundColor: "white"}} dangerouslySetInnerHTML={{ __html: readme }}></Container>
            <Footer />
        </>
    )
}
export async function getStaticPaths() {
    const directories = await docsGetListOfProjects();
    const paths = directories.map((post) => ({
        params: { packageName: post },
    }))
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const packageName = ctx.params.packageName;
    const readme = await docsGetReadmeFromProject(packageName);
    const versions = await docsGetListOfProjectVersions(packageName);
    return {
        props: {
            readme: readme,
            versions: versions
        }
    }
}