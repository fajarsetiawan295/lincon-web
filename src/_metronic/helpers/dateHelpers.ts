
export const dateNowDMY = (): string => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const year = currentDate.getFullYear();

    return `${day}-${month}-${year}`;
}
