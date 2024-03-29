import dayjs from "dayjs";
import {diffChars} from 'diff';

const regExpToFindLink = new RegExp(/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i);
export const stringValidation = (str, num) => str.length >= num ? str.slice(0, num) + '...' : str;

export const handleErrors = (title, body) => {
    if (!title) {
        document.getElementById('textareaName').classList.add('textarea--error');
    }
    if (!body) {
        document.getElementById('textareaBody').classList.add('textarea--error');
    }
};

export const removingErrorHandling = (val) => {
    const elemClassList = document.getElementById(`${val}`).classList;

    if (elemClassList.value.includes('textarea--error')) {
        elemClassList.remove('textarea--error');
    }
}

export const showAnimation = (el, className, flag) => {
    const animatedElemClassList = document.getElementById(el).classList;

    switch (flag) {
        case 'red':
            animatedElemClassList.add(className);
            break;
        case 'green':
            animatedElemClassList.add(className);
            setTimeout(() => {
                animatedElemClassList.remove(className);
            }, 1000);
            break;
        default:
            console.log(new Error('No flag to get animation.'));
            break;
    }
}

export const getTimeStamp = () => Math.floor(new Date().getTime() / 1000);

export const convertingTimestamp = (timestamp) => {
    if (!timestamp) return;

    if (typeof timestamp !== "number") {
        console.log(new Error('Произошла ошибка в конвертации даты.'))
    }

    return dayjs(timestamp * 1000).format('DD.MM.YYYY - HH:mm');
}

