let problem=document.getElementById("problem");
let answer=document.getElementById("answer");
let leftproblem=document.getElementById("leftproblem");
let link_redo=document.getElementById("redo");
var num_maxproblem=2;
var num_leftproblem=num_maxproblem;
function inputChange(event){
  if (parseInt(answer.value, 10) ==trueans){
		answer.value="";
		problem.innerText="";
		num_leftproblem-=1;

		if (num_leftproblem==0){
			leftproblem.style.color="black";
			leftproblem.innerText="お疲れ様でした！";

			document.getElementById("instruct_while_doing").style.visibility="hidden";
			link_redo.style.visibility="visible";
		}
		else{
			next_quest();
			leftproblem.innerText="残りの問題数は"+String(num_leftproblem)+"/"+String(num_maxproblem)+"ですよ";
		}
	}
}

answer.addEventListener('change', inputChange);
problem.innerText="begin";
var trueans;

next_quest();
leftproblem.innerText="残りの問題数は"+String(num_leftproblem)+"/"+String(num_maxproblem)+"ですよ";
link_redo.style.visibility="hidden";



function next_quest(){
	problem.innerText="b22egin";

	let a1,a2;

	let type_problem=Math.random()*4;
	if(type_problem<1){//sum
		a1=Math.floor(Math.random()*2000);
		a2=Math.floor(Math.random()*2000);
		trueans=a1+a2;
		problem.innerText = String(a1)+"+"+String(a2);

	}
	else if(type_problem<2){
		a1=Math.floor(Math.random()*2000);
		a2=Math.floor(Math.random()*a1);
		trueans=a1-a2;
		problem.innerText = String(a1)+"-"+String(a2);


	}
	else if(type_problem<3){
		a1=Math.floor(Math.random()*100);
		a2=Math.floor(Math.random()*100);
		trueans=a1*a2;
		problem.innerText = String(a1)+"*"+String(a2);


	}
	else{
		a2=Math.floor(Math.random()*49)+1;
		a1=Math.floor(Math.random()*50);
		trueans=a1;
		problem.innerText = String(a1*a2)+"/"+String(a2);


	}

}
