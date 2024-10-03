        function append(value) {
            document.getElementById('result').value += value;
        }

        function cl() {
			var a=0;
            document.getElementById('result').value=a;
        }

        function del() {
           document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
        }

        function calculate() {
            try {
               var x= document.getElementById('result').value;
			   var y= eval(x);
			   document.getElementById('result').value=y;
			   
            } catch (error) {
                document.getElementById('result').value = 'Error';
            }
        }