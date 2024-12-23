export type TypeRegion = {
    index: string;
    name: string;
    title?: string;
    description?: string;
}
export type TypeRegionsCulture = {
    [language: string]: TypeRegion[];
}