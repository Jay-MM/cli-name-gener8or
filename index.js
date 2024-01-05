import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer'

inquirer.prompt([
  {
    type: "number",
    name: "length",
    message: "How long should the name be?",
    default: 3,
  },
  {
    type: "list",
    name: "animationType",
    message: "Select the type of animation that you desire: ",
    default: "rainbow",
    choices: ["rainbow","pulse","glitch","radar","neon","karaoke"]
  }
])
// .then( answers => {
// console.log(answers)
// const { length, animationType } = answers

  .then(({ length, animationType })  => {//can destructure right away 
    


    const bandName = generateSlug(length, { format: 'title' })

    if ( animationType === "pulse") {
      chalkAnimation.pulse(bandName)
      } else if (animationType === "glitch") {
        chalkAnimation.glitch(bandName)
      } else if (animationType === "radar") {
        chalkAnimation.radar(bandName)
      } else if (animationType === "neon") {
        chalkAnimation.neon(bandName)
      } else if (animationType === "rainbow") {
        chalkAnimation.rainbow(bandName)
      } else if (animationType === "karaoke") {
        chalkAnimation.karaoke(bandName)
      }
  })
  .catch(err => console.log(err))