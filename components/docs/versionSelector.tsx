import { useRouter } from "next/router";
import { Select, Button } from "theme-ui";

export function VersionSelector(params: {packageName: string, versions: string[], includeAdditionalURL: boolean, additionalURL?: string }) {
    const router = useRouter();
    const branchVersions = params.versions.filter((v) => v.startsWith("branch"));
    const releaseVersions = params.versions.filter((v) => v.startsWith("v"));
    const gotoFunction = (e: any) => {
        const version = (document.getElementById("versionSelect") as any).value;
        if (params.includeAdditionalURL === false) {
            router.push(`/docs/${params.packageName}/${version}`);
        } else {
            router.push(`/docs/${params.packageName}/${version}/${params.additionalURL}`);
        }
    }
    return (
        <>
            <label htmlFor="versionSelect">Select Version:</label>
            <Select name="versionSelect" id="versionSelect" defaultValue="branch-main">
                {releaseVersions.map((version) => {
                    return <option key={version} value={version}>{version}</option>
                })}
                 {branchVersions.map((version) => {
                    return <option key={version} value={version}>{version}</option>
                })}
            </Select>
            <Button onClick={gotoFunction}>Go</Button>
        </>
    )
}
