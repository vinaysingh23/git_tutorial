let number=[20,30,40,'s',10];
function doubleEle(num)
{
   if((num>='a'&&num<='z') || (num>='A'&& num<='Z'))
	{
		return num;
	}else
		return 2*num;
}

let arr=number.map(doubleEle);
console.log(arr);
