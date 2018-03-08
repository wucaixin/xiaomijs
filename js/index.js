//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");

	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<l;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<l;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);	
	}

	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
		
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}

//闪购
{
	function shangou(parentt){
		const prev=parentt.querySelector(".danpin_btn1");
		const next=parentt.querySelector(".danpin_btn2");
		const inner=parentt.querySelector(".danpin_inner");
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if(n===1){
				this.classList.add("disable");
			}
			if(n===2){
				n=1;
				return;
			}
			inner.style.marginLeft=-1226*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				prev.classList.add("disable");
			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-1226*n+"px";
		}
	}
	const shangouList=document.querySelectorAll(".danpin");
	shangouList.forEach(function(ele){
		shangou(ele);
	})
}


//搭配
{
	function dapei(parents){
	const types=parents.querySelectorAll(".type");
	const goods=parents.querySelectorAll(".zhineng_right1");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const dapeiList=document.querySelectorAll(".dapei_rightzong");
	dapeiList.forEach(function(ele){
		dapei(ele);
	})
}
