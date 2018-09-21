    function testFunction(test){
        //document.getElementById("testVariable").innerHTML = "Hello World!";
        alert(test);  
    }
    

    
    function resetShark(){
        
        sessionStorage.setItem("courage",0);
         sessionStorage.setItem("nourishment",0);
          sessionStorage.setItem("cunning",0);
           sessionStorage.setItem("strength",0);
           
    }
    
    function addAttribute(attribute){
        alert("BEFORE " +sessionStorage.courage + " "
           + sessionStorage.nourishment  + " "
           + sessionStorage.cunning + " "
           + sessionStorage.strength)
           
           
        switch(attribute){
            case "courage":
                 sessionStorage.courage = Number(sessionStorage.courage)+1;
                break;
            case "nourishment":
                sessionStorage.nourishment = Number(sessionStorage.nourishment)+1;
                break;
            case "cunning":
                sessionStorage.cunning = Number(sessionStorage.cunning)+1;
                break;
            case "strength":
                sessionStorage.strength = Number(sessionStorage.strength)+1;
                break;
            default:
            
                break;
        }
        
        alert("AFTER " +sessionStorage.courage + " "
           + sessionStorage.nourishment  + " "
           + sessionStorage.cunning + " "
           + sessionStorage.strength)
    }
    
    function calculateShark(){
       // alert("calculate shark called!");
        
        var courage = Number(sessionStorage.courage);
        var nourishment = Number(sessionStorage.nourishment);
        var cunning = Number(sessionStorage.cunning);
        var strength = Number(sessionStorage.strength);
        
        var shark;
        var sharkImage;
        var sharkText;
      
        
        
        //C HAMMERHEAD
        //S MEGALODON 
        //Cu LEMON
        //N WHALE
        if (courage>=4){
            shark="Hammerhead Shark";
            sharkImage = "hammer";
            sharkText = "Hammer boy!";
        }
        else if(strength>=4){
            shark = "Megalodon";
            sharkImage = "meg";
            sharkText = "Hammer boy!";
        }
        else if (cunning>=4){
            shark = "Lemon Shark";
            sharkImage = "lemon";
            sharkText = "Hammer boy!";
        }
        else if (nourishment>=4){
            shark = "Whale Shark";
            sharkImage = "whale";
            sharkText = "Hammer boy!";
        }
          //++++ BLUE
        else if (
            (courage == 2 && nourishment == 1 && cunning == 1 && strength == 1)||
            (courage == 1 && nourishment == 2 && cunning == 1 && strength == 1)||
            (courage == 1 && nourishment == 1 && cunning == 2 && strength == 1)||
            (courage == 1 && nourishment == 1 && cunning == 1 && strength == 2)){
            
            shark = "Blue";
            sharkImage = "blue";
            sharkText = "Hammer boy!";
        }
        
        //C+S BULL
        //C+Cu FRILLED
        //C+N NURSE
        //S+Cu GREAT WHITE
        //S+N SLEEPER
        //Cu+N TIGER
        else if ((courage>=2 && strength >=2)||courage==3){
            shark = "Bull Shark";
            sharkImage = "bull";
            sharkText = "Hammer boy!";
        }
        else if (courage>=2 && cunning >=2){
            shark = "Frilled Shark";
            sharkImage = "frilled";
            sharkText = "Hammer boy!";
        }
        else if ((courage>=2 && nourishment >=2)||nourishment==3){
            shark = "Nurse Shark";
            sharkImage = "nurse";
            sharkText = "Hammer boy!";
        }
        else if ((strength>=2 && cunning >=2)||strength==3){
            shark = "Great White Shark";
            sharkImage = "white";
            sharkText = "Hammer boy!";
        }
        else if (strength>=2 && nourishment>=2){
            shark = "Greenland Shark";
            sharkImage = "greenland";
            sharkText = "Hammer boy!";
        }
        else if ((cunning>=2 && nourishment>=2)||cunning==3){
            shark = "Tiger Shark";
            sharkImage = "tiger";
            sharkText = "Hammer boy!";
        }else{
            //In case of error give the ugly shark
            shark = "Goblin Shark";
            sharkImage = "goblin";
            sharkText = "Hammer boy!";
        }
        
        document.getElementById("sharkResult").textContent = shark;
        sharkImage = "./images/sharks/"+sharkImage+".jpg";
        //alert(sharkImage);
        document.getElementById("sharkImage").src = sharkImage;
        
        document.getElementById("sharkDescription").textContent = sharkText;
       
    }
    
    
    
     //Shark attributes::
        
        //Courage
        //Strength
        //Cunning
        //Nourishment
        
        //C HAMMERHEAD
        //S MEGALODON 
        //Cu LEMON
        //N WHALE
        //C+S BULL
        //C+Cu FRILLED
        //C+N NURSE
        //S+Cu GREAT WHITE
        //S+N GREENLAND
        //Cu+N TIGER
        //++++ BLUE\
        //10 shark options
        
        //Final sharks::
        
        //Great White Shark STRENGTH
        
        //Whale Shark NOURISHMENT
        
        //Sleeper Shark PATIENCE
        
        //Lemon Shark CUNNING+
        /*The lemon shark (Negaprion brevirostris) is a stocky and powerful shark. 
        A member of the family Carcharhinidae, lemon sharks can grow to 3.4 metres (11 ft) in length.
        They are often found in shallow subtropical waters and are known to inhabit 
        and return to specific nursery sites for breeding. Often feeding at night, 
        these sharks use electroreceptors to find their main source of prey: fish. 
        Lemon sharks enjoy the many benefits of group living such as enhanced 
        communication, courtship, predatory behavior, and protection. 
        This species of shark gives birth to live young, and the females are polyandrous 
        and have a biennial reproductive cycle. 
        Lemon sharks are not thought to be a large threat to humans. */
        
           //Hammerhead Shark  CUNNING+COURAGE
        /*The hammerhead sharks are a group of sharks in the family Sphyrnidae, 
        so named for the unusual and distinctive structure of their heads, which
        are flattened and laterally extended into a "hammer" shape called a 
        cephalofoil. Most hammerhead species are placed in the genus Sphyrna, 
        while the winghead shark is placed in its own genus, Eusphyra. Many, 
        but not necessarily mutually exclusive, functions have been proposed 
        for the cephalofoil, including sensory reception, manoeuvering, and 
        prey manipulation. Hammerheads are found worldwide in warmer waters 
        along coastlines and continental shelves. Unlike most sharks, 
        hammerheads usually swim in schools during the day, becoming solitary 
        hunters at night. Some of these schools can be found near Malpelo Island 
        in Colombia, Cocos Island off Costa Rica, and near Molokai in Hawaii. 
        Large schools are also seen in the waters off southern and eastern Africa. 
        */
        
        
        //Nurse Shark PATIENCE + NOURISHMENT
        /*Nurse sharks are an important species for shark research 
        (predominantly in physiology).[3] They are robust and able to tolerate 
        capture, handling, and tagging extremely well.[4] As inoffensive as 
        nurse sharks may appear, they are ranked fourth in documented shark 
        bites on humans,[5] likely due to incautious behavior by divers on 
        account of the nurse shark's slow, sedentary nature. */
        
        //Bull Shark COURAGE + STRENGTH
        /*The bull shark (Carcharhinus leucas), also known as the Zambezi shark 
        (informally "zambi") in Africa, and Lake Nicaragua shark in Nicaragua, 
        is a requiem shark commonly found worldwide in warm, shallow waters 
        along coasts and in rivers. The bull shark is known for its aggressive 
        nature, and presence in warm, shallow brackish and freshwater systems 
        including estuaries and rivers.
    
        Bull sharks can thrive in both salt and fresh water and can travel far up rivers. 
        They have been known to travel up the Mississippi River as far as Alton, 
        human-shark interactions have been recorded. Larger-sized bull sharks are probably 
        responsible for the majority of near-shore shark attacks, including many bites 
        attributed to other species.[4]
    
        Unlike the river sharks of the genus Glyphis, bull sharks are not true 
        freshwater sharks, despite their ability to survive in freshwater habitats. 
        */
        
        
        //Tiger Shark NOURISHMENT
        /*The tiger shark is a solitary, mostly nocturnal hunter. It is notable 
        for having the widest food spectrum of all sharks, with a range of prey 
        that includes crustaceans, fish, seals, birds, squid, turtles, sea snakes, 
        dolphins, and even other smaller sharks. It also has a reputation as a 
        "garbage eater",[5] consuming a variety of inedible, man-made objects 
        that linger in its stomach. Though apex predators, tiger sharks are 
        sometimes taken by groups of killer whales.[6] It is considered a near 
        threatened species due to finning and fishing by humans.[2]

        The tiger shark is second only to the great white in recorded 
        fatal attacks on humans.[7] */
