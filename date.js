// JavaScript Document<!-- Begin
d = new Array(
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
);
m = new Array(
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
);

today = new Date();
day = today.getDate();
year = today.getYear();

if (year < 2000)    
year = year + 1900; 

end = "th";
if (day==1 || day==21 || day==31) end="st";
if (day==2 || day==22) end="nd";
if (day==3 || day==23) end="rd";
day+=end;

document.write("");
document.write(d[today.getDay()]+", "+m[today.getMonth()]+" ");
document.write(day+" " + year);
document.write(" ");
