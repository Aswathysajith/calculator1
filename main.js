 let outputScreen = document.getElementById("output-screen");
  function display(num){
    outputScreen.value += num;
 }
 function Clearscreen()
      {
         outputScreen.value = " ";

        }
        function del(){
            outputScreen.value = outputScreen.value.slice(0, -1);
         }
 function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
     }
     catch(err)
     {
      
        outputScreen.value ="Error";
        
     }
   
        }

           
    