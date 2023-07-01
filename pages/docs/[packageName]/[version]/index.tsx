import { TypeNavigator } from "@/components/docs/typeNavigator";
import { VersionSelector } from "@/components/docs/versionSelector";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { docsGetListOfProjects, docsGetReadmeFromProject, docsGetListOfProjectVersions } from "@/lib/docsFsUtils";
import { GetStaticPathsContext} from "next";
import { useRouter } from "next/router";
import { Container } from "theme-ui";

export default function DocsPackageVersionIndex({ readme, versions }: { readme: string, versions: string[] }) {
    const router = useRouter();
    const { packageName, version } = router.query;
    return (
        <>
            <Navbar />
            <Container>
                <center>
                    <h1>{packageName} Documentation</h1>
                    <h2>Documentation from {version}</h2>
                    <VersionSelector packageName={String(packageName)} versions={versions} includeAdditionalURL={false}/>
                    <br />
                    <TypeNavigator packageName={String(packageName)} version={String(version)} />
                </center>
            </Container>
            <br />
            <Container sx={{border: "1px solid black", backgroundColor: "white"}} dangerouslySetInnerHTML={{ __html: readme }}></Container>
            <Footer />
        </>
    )
}
export async function getStaticPaths(ctx: GetStaticPathsContext) {
    const paths: any[] = []
    const projects = await docsGetListOfProjects();
    for (const project of projects) {
        const versions = await docsGetListOfProjectVersions(project);
        for (const version of versions) {
            paths.push({
                params: {
                    packageName: project,
                    version
                }
            })
        }
    }
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const { packageName, version } = ctx.params
    const readme = await docsGetReadmeFromProject(String(packageName), String(version));
    const versions = await docsGetListOfProjectVersions(String(packageName));
    return {
        props: {
            readme,
            versions
        }
    }
}
