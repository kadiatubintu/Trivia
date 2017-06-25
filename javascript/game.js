
$(document).ready(function(){

	var score = 0;
    var number = 100;
    var intervalId;
    var restartId;
	
	//hiding all the questions on page load
	$(".questions").hide();
	$(".result").hide();

	//removing the start button and showing question 1 
 	$(".button2").on("click",  function(){
	 intervalId = setInterval(decrement, 1000);
    function decrement() {
      number--;
      $("#timer").html("<h2>" + number + "</h2>");
	  }	
	  $(".button2").remove();
	  $("#q1").show();
	});

	function stop() {
      clearInterval(intervalId);
    }
    $(".button1").on("click", stop);//pausing the timer

 	//displaying the next questions per input choice
	$("#q1 #a1").on("click", function(){
	 process("q1");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q2").fadeIn(200);

		}, 2000)
	});	


	$("#q2 #a2").on("click", function(){
	 process("q2");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q3").fadeIn(200);

		}, 2000)
	});

	$("#q3 #a3").on("click", function(){
	 process("q3");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q4").fadeIn(200);

		}, 2000)
	});

	$("#q4 #a4").on("click", function(){
	 process("q4");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q5").fadeIn(200);

		}, 2000)
	});

	$("#q5 #a5").on("click", function(){
	 process("q5");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q6").fadeIn(200);

		}, 2000)
	});

	$("#q6 #a6").on("click", function(){
	 process("q6");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q7").fadeIn(200);

		}, 2000)
	});

	$("#q7 #a7").on("click", function(){
	 process("q7");
  	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q8").fadeIn(200);

		}, 2000)
	});

	$("#q8 #a8").on("click", function(){
	 process("q8");
	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q9").fadeIn(200);

		}, 2000)
	});

	$("#q9 #a9").on("click", function(){
   	 process("q9");
 	 setTimeout(function(){
	 $(".questions").hide();
	 $("#q10").fadeIn(200);

		}, 2000)
	});

	$("#q10 #a10").on("click", function(){
	 process("q10");
	 setTimeout(function(){
	 $(".questions").hide();
	 $(".result").fadeIn(200);

		}, 2000)
	});
	//setting the answers
	sessionStorage.setItem("a1", "c");
	sessionStorage.setItem("a2", "a");
	sessionStorage.setItem("a3", "b");
	sessionStorage.setItem("a4", "c");
	sessionStorage.setItem("a5", "c");
	sessionStorage.setItem("a6", "d");
	sessionStorage.setItem("a7", "b");
	sessionStorage.setItem("a8", "d");
	sessionStorage.setItem("a9", "c");
	sessionStorage.setItem("a10", "a");

	function process(q){
		if(q =="q1"){
		 var submitted = $("input[name=a1]:checked").val();
			if(submitted == sessionStorage.a1){
			  $("#p1").text("Correct!")
			  $("#img1").show();
				score++;
			  }else{
				($("#p1").text("Nope!"))
			  }
	}
		if(q =="q2"){
			var submitted = $("input[name=a2]:checked").val();
			 if(submitted == sessionStorage.a2){
			  $("#p2").text("Correct!")
			  $("#img2").show();
				score++;
			   }else{
				($("#p2").text("Nope!"))
				}
	}
		if(q =="q3"){
			var submitted = $("input[name=a3]:checked").val();
			 if(submitted == sessionStorage.a3){
			  $("#p3").text("Correct!")
			  $("#img3").show();
				score++;
				}else{
				 ($("#p3").text("Nope!"))
			    }
	   		 }
		if(q =="q4"){
			var submitted = $("input[name=a4]:checked").val();
			if(submitted == sessionStorage.a4){
			  $("#p4").text("Correct!")
			  $("#img4").show();
				score++;
			   }else{
				($("#p4").text("Nope!"))

			   }
			}
		if(q =="q5"){
			var submitted = $("input[name=a5]:checked").val();
			if(submitted == sessionStorage.a5){
			 $("#p5").text("Correct!")
			 $("#img5").show();
				score++;
				}else{
				 ($("#p5").text("Nope!"))

				}
			}
		if(q =="q6"){
			var submitted = $("input[name=a6]:checked").val();
			 if(submitted == sessionStorage.a6){
			 $("#p6").text("Correct!")
			 $("#img6").show();
				score++;
				}else{
				 ($("#p6").text("Nope!"))
				
				}
			}
		if(q =="q7"){
			var submitted = $("input[name=a7]:checked").val();
			if(submitted == sessionStorage.a7){
			  $("#p7").text("Correct!")	 
			  $("#img7").show();
				score++;
			   }else{
				($("#p7").text("Nope!"))

				}
			}
		if(q =="q8"){
			var submitted = $("input[name=a8]:checked").val();
			if(submitted == sessionStorage.a8){
			  $("#p8").text("Correct!")		 
			  $("#img8").show();
				score++;
			   }else{
				($("#p8").text("Nope!"))
				
				}
			}
		if(q =="q9"){
			var submitted = $("input[name=a9]:checked").val();
			if(submitted == sessionStorage.a9){
			  $("#p9").text("Correct!")
			  $("#img9").show();
				score++;
			   }else{
				($("#p9").text("Nope!"))

				}
			}
		if(q =="q10"){
			var submitted = $("input[name=a10]:checked").val();
			if(submitted == sessionStorage.a10){
			  $("#p10").text("Correct!")		
			  $("#img10").show();
				score++;
			   }else{
				($("#p10").text("Nope!"))
			    }
		    }
		$(".result").html("<p>Your Final Score is: "+score+" out of 10</p>");	
		if(score <= 7){
			$(".result").append("<p>YOU CAN DO BETTER!</p>")
			}else if(score == 8){
			$(".result").append("<p>YOU ARE DOING GREAT!</p>")
			}else 
			$(".result").append("<p>YOU ARE A BONAFIDE TRIVIA KING!</p>")
	
	 };

  });



