/**
 * 輸入 年, 月，會在 Console 上把當月的日曆印出
 * 
 * @param {*} mon int 0 ~ 11 (一到十二月)
 * @param {*} year int YYYY 
 */
function print_calendar_to_console(mon, year) {

    // 當月的第一天
    let firstDayObj = new Date(year, mon, 1);
    let firstDayWeekDay = firstDayObj.getDay();

    // 月曆標題 str
    let ym_title = ` ${firstDayObj.getFullYear()} 年 ${firstDayObj.getMonth() + 1} 月`;
    // 星期幾的標題 str
    let day_of_the_week_title = "日\t一\t二\t三\t四\t五\t六";

    // clone 一份 firstDayObj，這之後要用來跑 loop 依序填充日期，所以稱為 Tip
    let theDateTip = new Date(firstDayObj); 

    // 第一 row，有可能有 0 ~ 6 個空位，總之看本月第一天會座落在第幾個，在那之前的都顯示 space
    let first_row_list = [];
    for (var i=0; i<=6; i++) {
        if (i<firstDayWeekDay) {
            // 上個月的，顯示 space
            first_row_list.push(" ");
        } else {
            // 這個月的
            // print the date 
            first_row_list.push(String(theDateTip.getDate()));
            // date += 1 
            theDateTip.setDate(theDateTip.getDate() + 1); 
        }
    }

    let first_row_str = first_row_list.join("\t");

    // 處理 2 ~ 6 row，其中第五跟第六不一定會有，但反正沒有就顯示 space
    let row = 2;
    let row_str = "";
    let row_list = [];

    while (row <=6) {
        // 清空此列
        row_list = [];

        // 把週日到週六填滿
        for (var i=0; i<=6; i++) {
            if (mon===theDateTip.getMonth()) {
                // 這個月的
                // print date
                row_list.push(String(theDateTip.getDate()));
                // date + 1
                theDateTip.setDate(theDateTip.getDate() + 1); 
            } else {
                // 下個月的，顯示 space
                row_list.push(" ");
            }
        }

        row_str += row_list.join("\t") + "\n";

        // 下一列，一直到第六列
        row++;
    }

    // 印出日曆
    console.log(`
${ym_title}
${day_of_the_week_title}
${first_row_str}
${row_str}
    `);
    return;
}

