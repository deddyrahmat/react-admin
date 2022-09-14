
// proses mencari nilai persen
export const resultPercent = (sub, total) => {
    let value = sub/total * 100;
    return value.toFixed(1);
}

export const diffDay = ( dateEndParam) => {
    // let dateStart = new Date(dateStartParam).getTime();
    let dateEnd = new Date(dateEndParam).getTime();

    // console.log("Start Campagne", dateStart);
    // console.log("eEnd Campagne", dateEnd);

    let now = new Date().getTime();

    // let oneDay = 24 * 60 * 60 * 1000;

    // let diffDays = Math.round(Math.round((end - start) / oneDay));
    let diffDays = Math.round(Math.round(dateEnd - now) / 1000 / 60 / 60 / 24);
    // console.log("Sisa hari", diffDays, "hari");

    return diffDays;
}
