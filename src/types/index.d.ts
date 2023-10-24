export interface ISkill {
    skillIcon: string;
    skillName: string;
    numberOfQuestions: number;
    duration: number;
    submittedOn?: Date;

}

export interface IStatistics {
    rank: number;
    percentile: number;
    correct: number;
    total: number;
}

export interface IComparisonGraph {

    percentile: number;
    averagePercentile: number;
    analysis: string;
    data: Array;


}

export interface ISyllabusTopic {
    topic: string;
    percentage: number;
    color?: string


}

export interface ISyllabusAnalysis {
    topics: ISyllabusTopic[];
}

export interface IQuestionAnalysis {
    correct: number;
    total: number;
    analysis: string;
}