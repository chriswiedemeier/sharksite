    function testFunction(test){
        //document.getElementById("testVariable").innerHTML = "Hello World!";
        alert(test);  
    }
    
    var courage = 0;
    var nourishment = 0;
    var cunning = 0;
    var strength = 0;
    
    function resetShark(){
        courage = 0;
        nourishment = 0;
        cunning = 0;
        strength = 0;
    }
    
    function addAttribute(attribute){
        
        switch(attribute){
            case "courage":
                courage++;
                break;
            case "nourishment":
                nourishment++;
                break;
            case "cunning":
                cunning++;
                break;
            case "strength":
                strength++;
                break;
            default:
            
                break;
        }
    }
    
    function calculateShark(){
        var shark;
        
        shark = "Courage: " + courage +" Nourishment: " + nourishment 
        +" Cunning: " + cunning + " Strength: " + strength;
        
        return shark;
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
        //S+N SLEEPER
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
