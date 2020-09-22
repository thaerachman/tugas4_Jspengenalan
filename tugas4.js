
var s1 = 10
var s2 = 12
var s3 = 7

console.log ("tinggi siswa1",s1,",","tinggi siswa2",s2,",","Tinggi siswa3",s3)
console.log()
if (s1>s2){
	if (s1>s3){
		console.log ("siswa1 adalah yang tertinggi")
		console.log ("urutan tinggi:","siswa1:",s1,"siswa2:",s2,"siswa3:",s3)
	}else { 
		console.log ("siswa3 lebih tinggi dari siswa2")
		console.log ("urutan tinggi:","siswa1:",s1,"siswa3:",s3,"siswa2:",s2)

	}

}else {
	if (s1 < s3){
		console.log ("siswa1 lebih pendek dari siswa3")
		console.log ("urutan tinggi:","siswa2:",s2,"siswa3:",s3,"siswa1:",s1)
	}else {
		console.log ("siswa3 adalah yang terpendek")
		console.log ("urutan tinggi:","siswa2:",s2,"siswa1:",s1,"siswa3:",s3)

	}

}

