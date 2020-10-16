export default [
    {
        id: 'monsters',
        title: 'A Den of Monsters',
        map: {
            top: '70%',
            left: '70%'
        },
        image: 'monsters.jpg',
        description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
        choices: [{
            id: 'negotiate',
            description: 'Negotiate with them',
            result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
            hp: 0,
            gold: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
            hp: -30,
            gold: 50
        }, {
            id: 'run',
            description: 'Run away like good Sir Robin',
            result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
            hp: -50,
            gold: 0
        }]
    },
    {
        id: 'ragnaros',
        title: 'Raid boss: Ragnaros',
        map: {
            top: '17%',
            left: '37%'
        },
        image: '../assets/ragnaros.jpg',
        audio: 'bossfight.mp3',
        action: 'dragon-growl.aiff',
        description: `
        This is the "ranged" mechanic of the fight, Ragnaros will 
        target a random enemy player with mana and blast them for 
        a significant amount of fire damage. ... After 3 minutes of 
        combat, Ragnaros will submerge and summon several Son of Flame 
        enemies to swarm and attack your raid. What do you do?
    `,
        choices: [{
            id: 'run',
            description: 'Give up (so weak) ',
            result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
            hp: -35,
            gold: 35
        }, {
            id: 'fight',
            description: 'Fight ',
            result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
            hp: -45,
            gold: 0
        }, {
            id: 'heal',
            description: 'You thow up a Holy Word: Shield!',
            result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
            hp: 0,
            gold: 90
        }]
    },
    {
        id: 'treasure',
        title: 'A Golden Treasure',
        map: {
            top: '55%',
            left: '30%'
        },
        prerequisites: ['dragon', 'monsters'],
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'A Wooden Chest',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'A Golden Chest',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'A Jeweled Chest',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }]
    }
];