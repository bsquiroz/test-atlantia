export const formaPercent = (number: number): string => {
    const strNumber = (number * 100).toString();

    if (strNumber.includes("-")) return strNumber.slice(1) + "%";
    return strNumber + "%";
};
