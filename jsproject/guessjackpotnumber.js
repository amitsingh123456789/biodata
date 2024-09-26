const jackpotNumber=Math.trunc(Math.random()*100)+1;
let diff;
let score=100;
function myFunction(){
 const guessNumber=document.querySelector("#guess").value;
diff=Math.abs(guessNumber-jackpotNumber);

 if(guessNumber>jackpotNumber)
  {
	  document.querySelector(".message").innerHTML= "You Guessed too High !! Keep Try..";
	  	  if(diff>90&&diff<100)
		  {
			  score=score-9;
		  }
		  else if(diff>80&&diff<90)
		  {
			  score=score-8;
		  }
		  else if(diff>70&&diff<80)
		  {
			  score=score-7;
		  }
		  else if(diff>60&&diff<70)
		  {
			  score=score-6;
		  }
		  else if(diff>50&&diff<60)
		  {
			  score=score-5;
		  }
		  		  else if(diff>40&&diff<50)
		  {
			  score=score-4;
		  }
		  		  else if(diff>30&&diff<40)
		  {
			  score=score-3;
		  }
		  		  else if(diff>20&&diff<30)
		  {
			  score=score-2;
		  }
		  		  else if(diff>10&&diff<20)
		  {
			  score=score-1;
		  }
		  else{
			  score--;
		  }
		  


	  
  }
else if(guessNumber<jackpotNumber)  {
	  document.querySelector(".message").innerHTML= "You Guessed too Low !! Keep Try..";
	  	  	  if(diff>90&&diff<100)
		  {
			  score=score-9;
		  }
		  else if(diff>80&&diff<90)
		  {
			  score=score-8;
		  }
		  else if(diff>70&&diff<80)
		  {
			  score=score-7;
		  }
		  else if(diff>60&&diff<70)
		  {
			  score=score-6;
		  }
		  else if(diff>50&&diff<60)
		  {
			  score=score-5;
		  }
		  		  else if(diff>40&&diff<50)
		  {
			  score=score-4;
		  }
		  		  else if(diff>30&&diff<40)
		  {
			  score=score-3;
		  }
		  		  else if(diff>20&&diff<30)
		  {
			  score=score-2;
		  }
		  		  else if(diff>10&&diff<20)
		  {
			  score=score-1;
		  }
		  else{
			  score--;
		  }
	  
  }
 else 
  {
	  document.querySelector('.message').textContent= 'You Won The Match. Great!!!';
	  document.querySelector('#score').textContent= score;

	  
  }
 

}