/* ----------------------------------------------------------------------------
   Lore shots.

   Not portraits. These are photographs of things happening - several figures in
   one frame, doing something to each other - where the point is the moment
   rather than the plastic. They sit in their own section because they do not
   belong to a deck: a scene can hold people from both sides at once.

   Each entry is { src, title, when, text, figures } where figures is a list of
   ids from collection.js. An id that does not exist is skipped rather than
   breaking the page, so you can name somebody before their card is written.
---------------------------------------------------------------------------- */

window.SCENES = [

  /* Five frames of one crowd, sent together. The squad is a cohort rather
     than a unit: everybody in it was bought or built in 2026. */
  {
    src: "images/scenes/september-2026-squad-01.jpg",
    title: "The September 2026 squad",
    text:
      "Every figure on this baseplate arrived this year. That is the only " +
      "thing they have in common and it is the whole of what the name means — " +
      "not a unit, not a side, not a people. A year's intake, stood up " +
      "together on green.\n\n" +
      "There are police in it and prisoners, construction workers and a " +
      "mummy, two green rangers, a sponge, a werewolf, a king with a sugar " +
      "skull and a man wearing nothing but a top hat. Four of them are on the " +
      "enemy deck and standing in the same row as the people they fight.\n\n" +
      "The catalogue records a 2026 arrival date on a hundred and eight " +
      "cards. Not all of them are in the frame.",
    figures: [
      "nick-b-carpenter", "the-skull-king", "the-skull-trickster", "reznod",
      "the-second-werewolf", "the-one-armed-mummy", "the-crab-alien",
      "spongebob", "the-native-in-the-skeleton-mask",
    ],
  },

  {
    src: "images/scenes/september-2026-squad-02.jpg",
    title: "The squad, from the left",
    text:
      "The working end of it. Red hard hats at the back, the hospital driver " +
      "in his reflective bands holding his card up, the biplane man in his " +
      "leather flying cap, and Texalm in the ski goggles and the stitched " +
      "coat.\n\n" +
      "Down at the front, a sponge having the worst moment of his life, and " +
      "at the right edge a man in a brown jacket with a translucent yellow " +
      "shield nearly as tall as he is.",
    figures: [
      "spongebob", "the-hospital-driver", "jay-cortes", "texalm",
      "the-natives-son", "the-native-in-the-skeleton-mask",
      "the-white-haired-adventurer", "connor", "nick-b-carpenter",
    ],
  },

  {
    src: "images/scenes/september-2026-squad-03.jpg",
    title: "The squad, through the middle",
    text:
      "Nick B Carpenter in the front rank with the yellow blade and the " +
      "yellow shield, and this is the frame that earns the whole name.\n\n" +
      "For twenty years he was a transparent cone with a head on it, standing " +
      "in the background of everything with no story attached. The head came " +
      "off the cone and onto a body in September, and here he is in the " +
      "middle of a crowd with both hands full. Everybody else here was bought " +
      "or built this year. He is the only one who was already here and only " +
      "became a person this year.",
    figures: [
      "nick-b-carpenter", "the-native-in-the-skeleton-mask",
      "the-white-haired-adventurer", "the-natives-son",
      "the-brother-with-the-hilt", "the-brother-in-blue", "the-blue-lady",
    ],
  },

  {
    src: "images/scenes/september-2026-squad-04.jpg",
    title: "The squad, towards the right",
    text:
      "Where the line turns. The brother in blue is stood in the open with " +
      "nothing printed on him at all, and two steps to his right the deck " +
      "changes: the Skull Trickster in his top hat, and beside him the Skull " +
      "King in the chrome crown.\n\n" +
      "Nobody has said whether those two have met, and this photograph does " +
      "not say it either. They are standing next to each other because that " +
      "is where they fitted on the plate.",
    figures: [
      "the-brother-in-blue", "the-skull-trickster", "the-skull-king",
      "the-second-werewolf", "the-officer-in-the-visor", "laura",
      "the-brother-with-the-hilt", "the-native-in-the-skeleton-mask",
    ],
  },

  {
    src: "images/scenes/september-2026-squad-05.jpg",
    title: "The squad, the far end",
    text:
      "This is where the year's villains ended up, and they are standing " +
      "shoulder to shoulder.\n\n" +
      "The Skull Trickster in the top hat and the Skull King in the crown. " +
      "Reznod in front with the green blade lit and the blaster still in the " +
      "other hand. The Snow Operator with a hairpiece sitting on top of a " +
      "sealed hood, and the Yellow Operator in the grey breathing rig. The " +
      "Masked Mercenary with only his eyes showing. The Crab Alien in his " +
      "dead trooper's armour, and the One-Armed Mummy at the end of the row " +
      "with one red eye lit through the wrappings.\n\n" +
      "Four of the five frames are a year's shopping. This one is a line-up.",
    figures: [
      "the-skull-trickster", "the-skull-king", "reznod", "the-snow-operator",
      "the-yellow-operator", "the-masked-mercenary", "the-crab-alien",
      "the-one-armed-mummy", "the-second-werewolf", "the-banker",
    ],
  },

  {
    src: "images/scenes/the-arms-dealers-meeting.jpg",
    title: "The arms dealers, in company",
    text:
      "A deal, or the setting up of one. A wide-brimmed hat in the foreground " +
      "with his back to us, a man in a red jacket and a breathing mask up on " +
      "the crates, somebody at a console in teal, and a fourth handling a " +
      "mounted piece on a stand.\n\n" +
      "The two arms dealers are catalogued and sit on the villain deck. Nobody " +
      "has said who the other men in the frame are, or whether this is their " +
      "crew or their customers - so the card names only the ones already " +
      "written down.",
    figures: ["the-arms-dealer", "the-modified-arms-dealer"],
  },

  {
    src: "images/scenes/kenjen-in-disguise.jpg",
    title: "Kenjen, in disguise",
    text:
      "In among blue troopers and wearing their kit, and the only face in the " +
      "frame that is furious about it. He was built by an ancient " +
      "civilization and frozen until somebody needed him, and this is what " +
      "needing him looks like: a man walking through a formation that does " +
      "not know what he is.",
    figures: ["kenjen"],
  },

  {
    src: "images/scenes/kenjen-out-of-the-coma.jpg",
    title: "Kenjen, out of the coma",
    text:
      "Awake, and not pleased about the interval. Out of the blue kit and " +
      "into a studded jerkin, teeth bared, bare-armed. The man's whole " +
      "history is being put under and taken back out again - a stasis " +
      "chamber first, and now this - and he has woken up angry both times.",
    figures: ["kenjen"],
  },

  {
    src: "images/scenes/the-verdauf-brothers-reunite.jpg",
    title: "The Verdauf brothers, reunited",
    text:
      "Two men in the same light green Verdauf plate, facing each other, one " +
      "reaching out.\n\n" +
      "It is worth knowing what their cards say before you look at it. The " +
      "Green Captain pushed his younger brother into an escape pod and set " +
      "the bomb off himself, and everyone else lived. The Younger Brother has " +
      "been walking around in his father's armour ever since. Whatever this " +
      "photograph is, it is the two of them in the same frame again.",
    figures: ["the-green-captain", "the-younger-brother"],
  },

  {
    src: "images/scenes/the-second-against-the-twin.jpg",
    title: "The Second against one of the Twins",
    text:
      "A blitz, caught at the instant it is stopped. The Second comes in low " +
      "and almost horizontal with one neon green blade out ahead of him, a " +
      "boot clipping the standing water, and the green trail of his own path " +
      "still hanging in the air behind him. One of the Twins is planted and " +
      "turning into it, catching the green on an orange blade with a second " +
      "held clear.\n\n" +
      "Both of these men are on the good deck, both are Demigods, and both " +
      "are in the First Circle. They are on the same side.\n\n" +
      "That is not without precedent here - the Twins' own card says the two " +
      "of them once fought each other, and that it was not about power, it " +
      "was teenage ego, and that they meditated for thirty years afterwards. " +
      "Whether this is that kind of fight or a real one is unwritten. So is " +
      "which Twin this is, though the blue one is the alpha of the pair.",
    figures: ["the-second", "the-twins"],
  },

  {
    src: "images/scenes/the-second-against-the-red-baron.jpg",
    title: "The Second against the Red Baron",
    text:
      "The Second in the air, coming down out of a leap with the green blade " +
      "overhead. The Red Baron braced under him in the water, red blade up to " +
      "take it, the spikes on both shoulders raking out and the belt of white " +
      "crosses catching the light.\n\n" +
      "This one is the war as the catalogue has it: the second in command of " +
      "the First Circle against a professional assassin who can use shadows " +
      "and who enjoys taking skulls. Good against enemy, Demigod against " +
      "Champion.\n\n" +
      "Nothing anywhere says these two have ever met. The picture is the " +
      "first record of it.",
    figures: ["the-second", "the-red-baron"],
  },

  {
    src: "images/scenes/reznod-against-the-purple-shadow.jpg",
    title: "Reznod against the Purple Shadow",
    text:
      "Reznod driven back on one side of the frame, the Purple Shadow coming " +
      "across him on the other, blades crossed between them in a burst of " +
      "sparks. A wet floor under both of them and a hall going back into the " +
      "dark.\n\n" +
      "Both of them are on the enemy deck. Reznod stands on Quinn's own rung, " +
      "at the top of the villain side; the Purple Shadow is the Sith who " +
      "reached the shadow people through the dark arts and opened the portal " +
      "that let Quinn get to them in the first place. He is the reason the " +
      "shadow dimension is in this world at all.\n\n" +
      "So this is two of the enemy's own fighting each other, and it is the " +
      "most interesting unwritten thing on either card. Nothing says what it " +
      "is over.",
    figures: ["reznod", "the-purple-shadow"],
  },

  {
    src: "images/scenes/eight-in-the-ruined-city.jpg",
    title: "Eight, in the ruined city",
    text:
      "Eight of them standing together on broken ground with a city burning " +
      "behind - a whole block gutted and smoking, fires still going in the " +
      "rubble at their feet. Nobody is fighting. They are looking up at " +
      "something out of frame.\n\n" +
      "Only one man in it is identified. The Second is at the front right in " +
      "the black armour - white sigils across the chest, a black helmet with " +
      "a broad silver stripe over the crown and a dark visor, the bare silver " +
      "machine arm, and green light at the fingertips.\n\n" +
      "The other seven are not named anywhere yet, and this card is not going " +
      "to guess at seven people. Left to right, what is actually in the " +
      "frame:\n\n" +
      "A dark-bearded man in navy with a globe printed in a white ring on the " +
      "chest, brass cylinders on his belt, holding a curved sabre with a gold " +
      "hilt.\n\n" +
      "A pilot in an orange and white flight suit, helmet on with the goggles " +
      "pushed up over it, ear cups, tattoos down one arm.\n\n" +
      "Behind them, a bearded man in a grey knit cap and a purple shirt under " +
      "a dark waistcoat embroidered all over in gold scrollwork, carrying a " +
      "rig across his shoulders that ends in two dark cylinders lit blue, " +
      "with a small blue lamp at his chest.\n\n" +
      "At the front, a stubbled man with dark curls in green and cream plate " +
      "with a target ring worked into the breastplate, a long rifle held " +
      "across him.\n\n" +
      "Behind him, a man with pale blond hair and a cream scarf in a quilted " +
      "tan tunic, with a segmented gold pauldron and a full gold arm down one " +
      "side.\n\n" +
      "A smiling man in blue and white chequered armour under a blue helmet " +
      "with vents at the sides.\n\n" +
      "And at the right edge, auburn hair over a white high-collared shirt and " +
      "a deep red patterned robe, holding a blue lightsaber lit.\n\n" +
      "Say who any of them are and they get written in.",
    figures: ["the-second"],
  },

];
