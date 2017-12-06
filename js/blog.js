var arrBody=document.getElementsByClassName("body");
var arrTit=document.getElementsByClassName("blogtit");
for(let i=0;i<arrTit.length;i++){
	arrTit[i].onclick=function(){
		// console.log(i)
		
		for(j=0;j<arrTit.length;j++){
			arrTit[j].classList.remove("selected");
			arrBody[j].style.display="none";
		};
		arrTit[i].classList.add("selected");
		arrBody[i].style.display="block";
	}
	
}
