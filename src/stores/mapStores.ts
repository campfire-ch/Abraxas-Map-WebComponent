import { atom } from "nanostores"
import type { TypeRegionsCulture } from "../types/regions"
export const selectedRegionStore = atom<string | null>(null)

export const regionsCulture: TypeRegionsCulture = {
    "de": [
        {
            index: "frauenfled",
            name: "Fraeunfeld",
            title: "",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non necessitatibus, officia impedit molestiae repellendus tempore ratione deserunt sunt temporibus animi accusantium perferendis laboriosam. Facere non cum iure ipsa in!"
        },
        {
            index: "bern",
            name: "Bern",
            description: "Bern ipsum dolor sit amet consectetur adipisicing elit. Distinctio non necessitatibus, officia impedit molestiae repellendus tempore ratione deserunt sunt temporibus animi accusantium perferendis laboriosam. Facere non cum iure ipsa in!"

        },
    ],
    "fr": [
        {
            index: "frauenfled",
            name: "Fraeunfeld",
        },
        {
            index: "bern",
            name: "Berne",
        },
    ]
}