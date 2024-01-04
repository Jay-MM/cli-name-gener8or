import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation';

const length = parseInt(process.argv[2])

const bandName = generateSlug(length, { format: 'title' })


chalkAnimation.pulse(bandName)