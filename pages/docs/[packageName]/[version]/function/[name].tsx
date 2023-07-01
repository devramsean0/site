import { TypeNavigator } from "@/components/docs/typeNavigator";
import { VersionSelector } from "@/components/docs/versionSelector";
import { Navbar } from "@/components/navbar";
import { docsGetListOfProjectVersions, docsGetListOfProjects, docsGetProjectVersion } from "@/lib/docsFsUtils";
import { useRouter } from "next/router";
import { Container, Grid, Link } from "theme-ui";
import { ProjectParser } from "typedoc-json-parser";

export default function DocsPackageVersionClassData({ element, versions }: { element: any, versions: string[] }) {
    const router = useRouter();
    const { packageName, version, name} = router.query;
    return (
        <>
        <Navbar />
            <Container>
                <center>
                    <h1>{packageName} Documentation</h1>
                    <h2>Documentation from {version}</h2>
                    <h2>Function {name}</h2>
                    <VersionSelector packageName={String(packageName)} versions={versions} includeAdditionalURL={true} additionalURL={`/function/${name}`}/>
                    <br />
                    <TypeNavigator packageName={String(packageName)} version={String(version)} />
                </center>
            </Container>
            <Grid columns={[1, null, 2]}>
                <Container>
                    <h3>Description</h3>
                    <p>{element.comment.description}</p>
                    <hr />
                    <p>
                        ID: {element.id}
                    </p>
                    <Link href={element.source.url}>View Source Code</Link>
                </Container>
                <Container>
                    <h4>Parameters</h4>
                    {element.parameters.map((property: any) => {
                        return (
                            <details key={property.name}>
                                <summary>{property.name}</summary>
                                {property.comment.description}
                                <hr />
                                <p>
                                    ID: {property.id}
                                    <br />
                                    <Link href={property.source.url}>View Source Code</Link>
                                    <br />
                                    Parent ID: {property.parentId}
                                </p>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {property.parameters.map((parameter: any) => {
                                            return (
                                                <tr key={parameter.name}>
                                                    <td>{parameter.name}</td>
                                                    <td>{parameter.type}</td>
                                                    <td>{parameter.comment.description}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </details>
                        )
                    })}
                </Container>
            </Grid>
        </>
    )
}
export async function getStaticPaths() {
    const type = "functions" // The type of element this page does
    const paths: any[] = []
    const projects = await docsGetListOfProjects();
    for (const project of projects) {
        const versions = await docsGetListOfProjectVersions(project);
        for (const version of versions) {
            const unparsedData = await docsGetProjectVersion(project, version);
            const parser = new ProjectParser({ data: unparsedData })
            const elements = parser[type];
            for (const element of elements) {
                paths.push({
                    params: {
                        packageName: project,
                        version,
                        name: element.name // fix: use element.name instead of name
                    }
                })
            }
        }
    }
    return { paths, fallback: false }
}
export async function getStaticProps(ctx: any) {
    const type = "functions" // The type of element this page does
    const { packageName, version, name } = ctx.params
    const data = await docsGetProjectVersion(String(packageName), String(version));
    const parser = new ProjectParser({ data })
    const element = parser[type].find((element: any) => element.name === name);
    const jsonElement = JSON.parse(JSON.stringify(element))
    const versions = await docsGetListOfProjectVersions(String(packageName));
    return {
        props: {
            element: jsonElement,
            versions
        }
    }
}