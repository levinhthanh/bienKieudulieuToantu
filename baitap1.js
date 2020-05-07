let diemLy = parseInt(prompt('Nhập điểm môn lý:'))
let diemHoa = parseInt(prompt('Nhập điểm môn hóa:'))
let diemSinh = parseInt(prompt('Nhập điểm môn sinh:'))
let sum = diemLy + diemHoa + diemSinh;
let ave = sum/3;
document.write('Điểm trung bình 3 môn:'+ave);
document.write('<br>'+'Điểm tổng 3 môn:'+sum);
