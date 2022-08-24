import { TechnologyService } from "../services/technology.service";
import { Technology } from "./technology.model";

export class Project{
    id!: number;
    name!: string;
    dateAdded!: Date;
    description!: string;
    technologies!: number[];
    technologyObject?: (Technology | undefined)[];
    imageUrl?: string;
    anchorText?: string;
    sourceCodeUrl?: string;
    videoLink?: string;
    experienceId?: number;

}