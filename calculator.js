function pheptinhcong()
{
   let num1=+document.getElementById('so1').value;
   let num2=+document.getElementById('so2').value;
   let toantu=document.getElementById('cong').value;
   let ketqua=0;
   ketqua=num1+num2;
   document.getElementById('ketqua').innerHTML='Kết quả '+toantu +' bằng = '+ketqua;
}
function pheptinhtru()
{
   let num1=+document.getElementById('so1').value;
   let num2=+document.getElementById('so2').value;
   let toantu=document.getElementById('tru').value;
   let ketqua=0;
   ketqua=num1-num2;
   document.getElementById('ketqua').innerHTML='Kết quả '+toantu +' bằng = '+ketqua;
}
function pheptinhnhan()
{
   let num1=+document.getElementById('so1').value;
   let num2=+document.getElementById('so2').value;
   let toantu=document.getElementById('nhan').value;
   let ketqua=0;
   ketqua=num1*num2;
   document.getElementById('ketqua').innerHTML='Kết quả '+toantu +' bằng = '+ketqua;
}
function pheptinhchia()
{
   let num1=+document.getElementById('so1').value;
   let num2=+document.getElementById('so2').value;
   let toantu=document.getElementById('chia').value;
   let ketqua=0;
   ketqua=num1/num2;
   document.getElementById('ketqua').innerHTML='Kết quả '+toantu +' bằng = '+ketqua;
}