import { TypeNavigator } from "@/components/docs/typeNavigator";
import { VersionSelector } from "@/components/docs/versionSelector";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { docsGetListOfProjects, docsGetListOfProjectVersions, docsGetProjectVersion } from "@/lib/docsFsUtils";
import { useRouter } from "next/router";
import { Container } from "theme-ui";
import { ProjectParser } from "typedoc-json-parser";

export default function DocsPackageVersionClassIndex({ element, versions }: { element: any, versions: string[] }) {
    const router = useRouter();
    const { packageName, version} = router.query;
    return (
        <>
            <Navbar />
            <Container>
                <center>
                    <h1>{packageName} Documentation</h1>
                    <h2>Documentation from {version}</h2>
                    <h2>Class List</h2>
                    <VersionSelector packageName={String(packageName)} versions={versions} includeAdditionalURL additionalURL="class"/>
                    <br />
                    <TypeNavigator packageName={String(packageName)} version={String(version)} />
                </center>
            </Container>
            <Container>
                <h3>Classes</h3>
                <ul>
                    {element.map((child: any) => {
                        return (
                            <li key={child.name}>
                                <a href={`/docs/${packageName}/${version}/class/${child.name}`}>{child.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </Container>
            <Footer />
        </>
    )
}
export async function getStaticPaths() {
    const paths: any[] = []
    const projects = await docsGetListOfProjects();
    for (const project of projects) {
        const versions = await docsGetListOfProjectVersions(project);
        for (const version of versions) {
            paths.push({
                params: {
                    packageName: project,
                    version,
                }
            })
        }
    }
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const type = "classes" // The type of element this page does
    const { packageName, version} = ctx.params
    const data = await docsGetProjectVersion(String(packageName), String(version));
    const parser = new ProjectParser({ data })
    const element = parser[type];
    const jsonElement = JSON.parse(JSON.stringify(element))
    const versions = await docsGetListOfProjectVersions(String(packageName));
    return {
        props: {
            element: jsonElement,
            versions: versions
        }
    }
}