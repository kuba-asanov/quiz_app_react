import { ActionTypes, questionTypes } from "./types"


const initialValue: questionTypes[] = [
    {
        question: "Какова высота самой высокой вершины в Кыргызстане пика Победы?",
        answers: ["7349", '7430', "7447", "7439"],
        rightAnswer: "7439"
    },
    {
        question: "Общая длина реки — 1030 км, из них лишь 260 км пролегает в пределах Кыргызстана. Как называется река?",
        answers: ["нет такой реки", "Чу", "Куркуроо", "Нарын"],
        rightAnswer: "Нарын"
    },
    {
        question: "В какой области больше всего городов и поселков городского типа?",
        answers: ["В Чуйской области", "В Жалал-Абадской области", "В Ошской области","В Нарынской области"],
        rightAnswer: "В Жалал-Абадской области"
    },
    {
        question: "На какой высоте над уровнем моря расположено озеро Иссык-Куль?",
        answers: ["1609", "1605", "1600","1590"],
        rightAnswer: "1609"
    },
    {
        question: "Сколько национальностей проживает на территории КР?",
        answers: ["100", "50", "70",],
        rightAnswer: "100"
    },


]


const questionsReducer = (state = initialValue, action: ActionTypes) => {
    switch (action.type) {
        default:
            return state
    }
}

export type RootType = ReturnType<typeof questionsReducer>
export default questionsReducer