var marioTheme = new Audio('mariotheme.mp3');
var marioPipe = new Audio('mariopipe.mp3');
var marioItsame = new Audio('marioitsame.mp3');
var marioUnderground = new Audio('mariounderground.mp3');

//LEVEL 1-1 FACTS

document.getElementById("block1").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>ALL-TIME BEST:</b> Considered to be the best-selling video game of all time and one of the most recognizable video game characters in the world, Mario was created by Shigeru Miyamoto. Since his first appearance in the 1981 Nintendo game, Donkey Kong as Jumpman, Mario has featured in over 200 video games, and several television shows and comics.";
});

document.getElementById("block2").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
    document.getElementById("textbox").innerHTML = "<b>THEME SONG:</b> Nintendo composer Koji Kondo provided the iconic soundtrack to Super Mario Bros. The main theme, known as 'Ground Theme', is one of the most recognisable pieces of game music ever recorded. The tune remained in the Billboard ringtone charts for 125 weeks and has been performed in concert by live orchestras."; 
    marioTheme.play();
});

document.getElementById("block3").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
    document.getElementById("textbox").innerHTML = "<b>AN UNLIKELY STAR:</b> Mario was born in 1981 and is based on a real person: Mario Segale, who rented warehouses to Nintendo. Super Mario was a forerunner in the jump and run games. In 2015, Nintendo confirmed that their Mario character is indeed named after Segale.";
});

document.getElementById("block4").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>WHY MARCH 10TH?:</b> National Mario Day, meant to celebrate and honor the Mario character owned by Nintendo, is celebrated on March 10th. The date was chosen because it looks like Mario's name - MAR10.";
});

document.getElementById("block5").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>HOW MARIO DAY IS CELEBRATED:</b> People celebrate National Mario Day in a variety of ways. Some play Nintendo, watch gangster movies or movies featuring people named Mario, and some incorporate mushrooms into their meal (because Mario lives in Mushroom Kingdom).";
});

//LEVEL 1-2 FACTS

document.getElementById("block6").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>MARIO'S FIRST APPEARANCE:</b> Nintendo had been struggling to enter the arcade game market and its president Hiroshi Yamauchi hired game designer Shigeru Miyamoto to design a game - which went on to become Donkey Kong.";
});

document.getElementById("block7").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>MOVIE ADAPTATIONS:</b> Super Mario Bros. was the first ever game to receive a movie adaptation, both animated and live-action. The first animated film was called Super Mario Bros.: Peach-Hime Kyushutsu Dai Sakusen! released in 1986 only in Japan. The first live-action film was the infamous Super Mario Bros. movie released in 1993.";
});

document.getElementById("block8").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>THE FIRST GAME:</b> The first Super Mario Bros game has sold 40.24 million copies, although that figure is skewed by the fact that it was bundled with the Nintendo Entertainment System console. It was until recently, however, considered the best-selling game of all time. It has been pushed into second place by Wii Sports on 41.65 million units.";
});

document.getElementById("block9").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block"; 
	document.getElementById("textbox").innerHTML = "<b>NOT ALWAYS A PLUMBER:</b> Mario was not originally known as Mario - he was known as Mr. Jumpman and was a carpenter. He's also appeared as a doctor in the 1990 puzzle title Dr Mario and its sequels.";    
});

document.getElementById("block10").addEventListener("click", function(){
    document.getElementById("textbox").style.display = "block";
	document.getElementById("textbox").innerHTML = "<b>MARIO THE VILLIAN:</b> Donkey Kong Jr, the 1982 sequel to Donkey Kong, is the only game in which Mario officially stars as the antagonist. He has trapped poor Donkey Kong in a cage and the ape's son must rescue him. In the game's promotional material, Mario even gets a specially twirled moustache, highlighting his evil nature.";
});

//BACKGROUND CHANGE


document.getElementById("pipe").addEventListener("click", function(){
	document.getElementById("textbox").style.display = "none";
    marioPipe.play();
    document.getElementById("pipe").style.display = "none";
    document.getElementById("pipe2").style.display = "block";
    marioTheme.pause();
    
    document.getElementById("maincard").style.backgroundImage = "url(img/Background2.svg)";
	document.getElementById("world").style.display = "none";
	document.getElementById("world2").style.display = "inline-block";
    
    document.getElementById("blocks").style.display = "none";   document.getElementById("blocks2").style.display = "block";
    
    document.getElementById("star").style.display = "none";
    document.getElementById("mushroom").style.display = "block";
    
    marioUnderground.play();
});

document.getElementById("pipe2").addEventListener("click", function(){
	document.getElementById("textbox").style.display = "none";
    marioPipe.play();
    document.getElementById("pipe").style.display = "block";
    document.getElementById("pipe2").style.display = "none";
    marioTheme.play();
    
    document.getElementById("maincard").style.backgroundImage = "url(img/Background.svg)";
	document.getElementById("world").style.display = "inline-block";
	document.getElementById("world2").style.display = "none";
    
    document.getElementById("blocks").style.display = "block";   document.getElementById("blocks2").style.display = "none";
    
    document.getElementById("star").style.display = "block";
    document.getElementById("mushroom").style.display = "none";
    
    marioUnderground.pause();
});

//OTHER

document.getElementById("mario").addEventListener("click", function(){
    marioItsame.play();
});

