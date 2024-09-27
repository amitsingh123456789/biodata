const jackpotNumber=Math.trunc(Math.random()*1000)+1;
let diff;
let score=1000;
    let count = 0;

function myFunction(){
	count++;
 const guessNumber=document.querySelector("#guess").value;
diff=Math.abs(guessNumber-jackpotNumber);

 if(guessNumber>jackpotNumber)
  {
	  document.querySelector(".message").innerHTML= "You Guessed too High !! Keep Try..";
	  	  if(diff>900&&diff<1000)
		  {
			  score=score-90;
		  }
		  else if(diff>800&&diff<900)
		  {
			  score=score-80;
		  }
		  else if(diff>700&&diff<800)
		  {
			  score=score-70;
		  }
		  else if(diff>600&&diff<700)
		  {
			  score=score-60;
		  }
		  else if(diff>500&&diff<600)
		  {
			  score=score-50;
		  }
		  		  else if(diff>400&&diff<500)
		  {
			  score=score-40;
		  }
		  		  else if(diff>300&&diff<400)
		  {
			  score=score-30;
		  }
		  		  else if(diff>200&&diff<300)
		  {
			  score=score-20;
		  }
		  		  else if(diff>100&&diff<200)
		  {
			  score=score-10;
		  }
		  else{
			  score--;
		  }
		  


	  
  }
else if(guessNumber<jackpotNumber)  {
	  document.querySelector(".message").innerHTML= "You Guessed too Low !! Keep Try..";
	  	  	  if(diff>900&&diff<1000)
		  {
			  score=score-90;
		  }
		  else if(diff>800&&diff<900)
		  {
			  score=score-80;
		  }
		  else if(diff>700&&diff<800)
		  {
			  score=score-70;
		  }
		  else if(diff>600&&diff<700)
		  {
			  score=score-60;
		  }
		  else if(diff>500&&diff<600)
		  {
			  score=score-50;
		  }
		  		  else if(diff>400&&diff<500)
		  {
			  score=score-40;
		  }
		  		  else if(diff>300&&diff<400)
		  {
			  score=score-30;
		  }
		  		  else if(diff>200&&diff<300)
		  {
			  score=score-20;
		  }
		  		  else if(diff>100&&diff<200)
		  {
			  score=score-10;
		  }
		  else{
			  score--;
		  }
	  
  }
 else if (count<12 && guessNumber==jackpotNumber) 
  {

	  

	  document.querySelector('.message').textContent= 'You Won . Great!!!';
	  document.querySelector('#score').textContent= score;
document.body.style.backgroundColor = "green";
		  

	  

	  
  }
  else if(count>12)
  {
	  	  document.querySelector('.message').textContent= 'You Lost . !!!';
		  document.body.style.backgroundColor = "red";

	  
  }
 

}