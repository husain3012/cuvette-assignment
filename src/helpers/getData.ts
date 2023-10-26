import dayjs from "dayjs"
import { IComparisonGraph, IQuestionAnalysis, ISkill, IStatistics, ISyllabusAnalysis } from "../types"

export const getSkillData = (): ISkill => {

    return {
        skillName: "Hypertext Markup Language",
        duration: 15,
        submittedOn: dayjs().subtract(3, "days").toDate(),
        numberOfQuestions: 15,
        skillIcon: "/html5-logo.png",
    }



}

export const getSyllabusAnalysis = (): ISyllabusAnalysis => {
    return {
        topics: [
            {
                topic: "HTML Tools, Forms, History",
                percentage: 80,
                color: "#438AF6",
            },
            {
                topic: "Tags & References in HTML",
                percentage: 60,
                color: "#FF9142",
            },
            {
                topic: "Tables & CSS Basics",
                percentage: 24,
                color: "#FB5E5E",
            },
            {
                topic: "Tables & CSS Basics",
                percentage: 96,
                color: "#2EC971",
            },
        ],
    };
}


export const getGraphData = (skillData: IStatistics): IComparisonGraph => {

    return {
        analysis: "",
        averagePercentile: 72,
        percentile: skillData?.percentile || 0,
        data: Array.from({ length: 101 }, (_v, k) => ({
            percentile: k,
            number: Math.floor(50 + Math.random() * 10 - Math.abs(k - 55)), // random nice data points
        })),
    };
}

export const getQuestionAnalysisData = (skillData: IStatistics): IQuestionAnalysis => {
    return {
        analysis: "There is a score of improvement",
        correct: skillData?.correct || 0,
        total: 15,
    }
}

export const fetchUserStats = (): IStatistics => {

 
    return {
        correct: 7,
        percentile: 37,
        rank: 121311,
        total: 15
    }

}