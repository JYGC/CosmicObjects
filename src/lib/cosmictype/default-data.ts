import { newCosmicTypeDTO } from "./dtos";

export default [
    newCosmicTypeDTO("Star", "Mass of gas with hydrogen fusion at center"),
    newCosmicTypeDTO("Planet", "Object orbiting stars with no fusion"),
    newCosmicTypeDTO("Nebula", "Gas clouds forming stars"),
    newCosmicTypeDTO("Galaxy", "Large collections of stars")
];