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
  .then(answers => {
    console.log(answers)


    const bandName = generateSlug(answers.length, { format: 'title' })

    if ( answers.animationType === "pulse") {
      chalkAnimation.pulse(bandName)
      } else if (answers.animationType === "glitch") {
        chalkAnimation.glitch(bandName)
      } else if (answers.animationType === "radar") {
        chalkAnimation.radar(bandName)
      } else if (answers.animationType === "neon") {
        chalkAnimation.neon(bandName)
      } else if (answers.animationType === "rainbow") {
        chalkAnimation.rainbow(bandName)
      } else if (answers.animationType === "karaoke") {
        chalkAnimation.karaoke(bandName)
      }
  })
  .catch(err => console.log(err))