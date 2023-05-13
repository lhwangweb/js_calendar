# js_calendar

之前沒有思考過用 JS 實作萬年曆，這邊嘗試實作，print 在 console 上。

## 參考資料
1. [JavaScript 實務：利用 Date 物件完成萬年曆 Perpetual Calendar - 彭彭直播 at 2020/05/01](https://www.youtube.com/watch?v=Q2x84RdNVUY)
2. [萬年曆](http://ant4js.blogspot.com/2009/01/calendar.html)
3. [JavaScript - 萬年曆製作](https://dotblogs.com.tw/newmonkey48/2017/07/18/113407)

## 思路

1. 閏年什麼的都沒有必要自己處理，用 JS 的 Date() 物件就好。

2. 日期增減也可以交給 Date 的 setDate 處理，跨月或跨年都可以處理，Date 物件會自動變更月份。

範例一 月底往後

```javascript
let one_date = new Date(2023, 4, 31);

one_date; // Wed May 31 2023 00:00:00 GMT+0800

one_date.setDate(one_date.getDate() + 1);

one_date; // Thu Jun 01 2023 00:00:00 GMT+0800

```

範例二 月初往前

```javascript
let another_date = new Date(2023, 0, 1);

another_date; // Sun Jan 01 2023 00:00:00 GMT+0800

another_date.setDate(another_date.getDate() - 1); // setDate(0) 會變成上個月的最後一天

another_date; // Sat Dec 31 2022 00:00:00 GMT+0800 
```

範例三 就算日期塞了超過 31 也行，反正超過的都會自動往後累進

```javascript
let test_date = new Date(2023, 0, 100);

test_date; // Mon Apr 10 2023 00:00:00 GMT+0800

```

3. 日曆的橫列數，必為 4~6 列，因此佈局規則很固定。

4. 把想印出來的月份第一天 Date 物件產出，然後 getDay() 取得當天是星期幾，就知道在第一列的第幾個位置。

5. 之後依序把整個日曆填滿即可。


## 執行範例

```javascript
> print_calendar_to_console(9, 2023);

 2023 年 10 月
日	一	二	三	四	五	六
1	2	3	4	5	6	7
8	9	10	11	12	13	14
15	16	17	18	19	20	21
22	23	24	25	26	27	28
29	30	31	 	 	 	 
 	 	 	 	 

> print_calendar_to_console(6, 2023);
 2022 年 7 月
日	一	二	三	四	五	六
 	 	 	 	 	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	 	 	 	 	 	 



```
