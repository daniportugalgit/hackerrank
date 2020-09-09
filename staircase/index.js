function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let spaceString = '';
    let hashtags = i;
    let hashtagString = '';

    for (let j = 0; j < spaces; j++) {
      spaceString += ' ';
    }

    for (let k = 0; k < hashtags; k++) {
      hashtagString += '#';
    }

    console.log(spaceString + hashtagString);
  }
}

staircase(10);
/**should print
         #
        ##
       ###
      ####
     #####
    ######
   #######
  ########
 #########
##########
*/