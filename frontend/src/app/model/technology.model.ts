export class Technology{
    id!: number;
    name!: string;
    description!: string;
    state!: Technology.State;
    color!: string;
    level?: number;
    
}

export namespace Technology{
    export enum State {NotLearned = 0,Scheduled,Learning,Update,Operationnal}
}