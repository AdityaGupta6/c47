class Game {
   constructor() {

   }
   getState() {
      var gsr = database.ref("gamestate");
      gsr.on('value', (data) => {
         gamestate = data.val();

      })
   }
   updateState(state) {
      database.ref("/").update({
         gamestate: state
      })

   }
   async start() {
      if (gamestate === 0) {

         player1 = new Player();
         var playerCountRef = await database.ref("playerCount").once("value")
         if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player1.getPlayerCount()
         }
         form1 = new Form()
         form1.display();
      }
      plants1 = createSprite(380, 290);
      plants1.addImage("plant1", plant1_img)
      plants1.scale = 0.3;
      plants2 = createSprite(380, 430);
      plants2.addImage("plant2", plant1_img);
      plants2.scale = 0.3;
      plants3 = createSprite(380, 570);
      plants3.addImage("plant3", plant1_img)
      plants3.scale = 0.3;
      plants4 = createSprite(380, 160);
      plants4.addImage("plant4", plant1_img)
      plants4.scale = 0.3;
      plants = [plants1, plants2, plants3, plants4]
   }
   play() {
      background(bg)
      form1.hide()
      Player.getPlayerInfo();
      var index = 0;

   

      for (var plr in allPlayers) {
         index = index + 1;

            if (index === player1.index) {
               camera.position.x = cars[index - 1].x;
               camera.position.y = displayHeight/2;
              
            
         }
            }

            if (frameCount % 200 === 0) {
               zombie1 = createSprite(1377,random(100,600) , 100, 100);
               zombie1.velocityX =  -6;
             
                   zombie1.addAnimation("zombie1",zombieImage);
               sound.play()
               zombie1.lifetime=230;
               zombieGroup.add(zombie1)
               console.log(frameCount)
            }

            if (frameCount %100 === 0) {
               zombie2 = createSprite(1377,random(100,600) , 100, 100);
               zombie2.velocityX =  -6;
               zombie2.addAnimation("zombie2",zombieImage1);
                  sound.play()
               zombie2.lifetime=230;
               zombie2.scale=2;
               zombieGroup1.add(zombie2)
            }
            if (frameCount % 900 === 0) {
               zombie3 = createSprite(1377,random(100,600) , 100, 100);
               zombie3.velocityX =  -6;
               zombie3.addAnimation("zombie2",zombieImage2);
                  sound.play()
               zombie3.lifetime=230;
               zombie3.scale=0.8;
               zombieGroup2.add(zombie3)
            }
            if (frameCount % 180 === 0) {
               zombie4 = createSprite(1377,random(100,600) , 100, 100);
               zombie4.velocityX =  -10;
               zombie4.addAnimation("zombie4",zombieImage3);
                  sound.play()
               zombie4.lifetime=230;
               zombie4.scale=0.7;
               zombieGroup3.add(zombie4)
            }

            drawSprites()

   }



}