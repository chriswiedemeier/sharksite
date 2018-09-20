//Returns the shark quiz data structure
    function initializeSharkQuiz(){
        
        
    //sharkquiz[0].question = Who is the strongest?
    //sharkquiz[0].answers.a = Superman
    //sharkquiz[0].answers.a.text =
    //sharkquiz[0].answers.a.reward = 
    
    //Shark Quiz is an array of question objects, a text question, 
    //multiple 'answer' objects with text and rewards
        var sharkQuiz = [
            
          {
            question: "Who is the strongest?",
            answers: {
              a: {text: "Superman", reward: "strength"},
              b: {text: "The Terminator", reward: "danger"},
              c: {text: "Tom Cruiz", reward: "style"},
              d: {text: "The Great White", reward: "shark"}
            },
          },
          
           {
            question: "Who is the wiliest?",
            answers: {
              a: {text: "Coyote", reward: "cunning"},
              b: {text: "Barracuta", reward: "danger"},
              c: {text: "Liam Neeson", reward: "style"},
              d: {text: "Goblin Shark", reward: "shark"}
            },
          }
          
        ];
        
        return sharkQuiz;
    }