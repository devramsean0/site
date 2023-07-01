import { Grid, NavLink } from "theme-ui";

export function TypeNavigator(params: {packageName: string, version: String}) {
    return (
        <Grid columns={[1, 5, 4]}>
            <NavLink href={`/docs/${params.packageName}/${params.version}/class`}>Classes</NavLink>
            <NavLink href={`/docs/${params.packageName}/${params.version}/enum`}>Enums</NavLink>
            <NavLink href={`/docs/${params.packageName}/${params.version}/function`}>Functions</NavLink>
            <NavLink href={`/docs/${params.packageName}/${params.version}/interface`}>Interfaces</NavLink>
        </Grid>
    )
}