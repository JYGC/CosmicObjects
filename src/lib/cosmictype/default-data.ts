import { newCosmicType } from "./schemas";

export default [
    newCosmicType("Star", "Mass of gas with hydrogen fusion at center"),
    newCosmicType("Planet", "Object orbiting stars with no fusion"),
    newCosmicType("Nebula", "Gas clouds forming stars"),
    newCosmicType("Galaxy", "Large collections of stars")
];