import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const memories = [
  {
    title: "The first spark",
    kicker: "3 Step Theory",
    image: "assets/photos/first-date.jpeg",
    aspect: 960 / 1280,
    wall: "back",
    text:
      "Ray meeting Bee at 3 Step Theory still feels like the first tiny door opening. The message was simple, 'Heyy Bee, it is Ray,' but it became curiosity, late-night conversation, Oontz jokes, and the first proof that something warm was starting."
  },
  {
    title: "Tamambo Restaurant",
    kicker: "First date energy",
    image: "assets/photos/toast.jpeg",
    aspect: 960 / 1280,
    wall: "back",
    featured: true,
    text:
      "This memory is Tamambo: the table, the toast, the soft light, the glasses, the flowers, and the message after: 'I got home safely. I enjoyed the date and every moment with you.' It was calm, exciting, and real in that soft way only us can be."
  },
  {
    title: "The flowers",
    kicker: "Bee loves flowers",
    image: "assets/photos/girlfriend-day.jpeg",
    aspect: 960 / 1280,
    wall: "left",
    text:
      "Flowers became their own language between us. Bee loves flowers, bees love flowers, and the favorite gifts became flowers, wine, chocolates, cute notes, and GitHub links. This wall keeps the part where love turned into tiny thoughtful things."
  },
  {
    title: "Pentagon 5",
    kicker: "Ray, Bee, Mike, Mel, Qwarra",
    image: "assets/photos/pentagon-five.jpeg",
    aspect: 1280 / 960,
    wall: "right",
    pentagon: true,
    text:
      "This one is for the Pentagon 5: you, me, Mike, Mel, and Qwarra. The movie-date memory has its own corner because love gets sweeter when the people around us are laughing, sharing snacks, taking photos, and making the night feel bigger than just one date."
  },
  {
    title: "Happy us",
    kicker: "Soft proof",
    image: "assets/photos/happy-us.jpeg",
    aspect: 960 / 1280,
    wall: "left",
    text:
      "There is a kind of happiness that does not need to announce itself. It sits in a photo, in a shoulder leaning closer, in the look that says yes, this is us."
  },
  {
    title: "Happy us again",
    kicker: "More of us",
    image: "assets/photos/happy-us-again.jpeg",
    aspect: 960 / 1280,
    wall: "right",
    text:
      "Another reminder that being around you turns ordinary minutes into keepers. A second happy-us photo because one would never be enough."
  },
  {
    title: "How you care",
    kicker: "Warm heart things",
    image: "assets/photos/care.jpeg",
    aspect: 960 / 1280,
    wall: "back",
    text:
      "Your care shows up in the softest ways: checking in, holding my hand, saying love is not contingent on small things, reminding me to keep warm, and making affection feel steady enough to rest inside."
  },
  {
    title: "Golden hearts",
    kicker: "Raybee",
    image: "assets/photos/golden-hearts.jpeg",
    aspect: 785 / 1600,
    wall: "left",
    text:
      "Raybee, golden hearts, honey among rocks. Even the captions around us started sounding like a private language: RayBee to the world, Raybee on the decks, and a sun-and-bee symbol that somehow says us without needing a paragraph."
  },
  {
    title: "Our video calls",
    kicker: "Distance still close",
    image: "assets/photos/video-calls.jpeg",
    aspect: 780 / 1600,
    wall: "right",
    text:
      "Even through a screen, you still find a way to feel present. The calls, the smiles, the little pauses, and 'lovely to hear your voice as always' all earned a place on the wall because distance still felt close."
  },
  {
    title: "Girlfriend day",
    kicker: "The day it became us",
    image: "assets/photos/girlfriend-day.jpeg",
    aspect: 960 / 1280,
    wall: "back",
    text:
      "Girlfriend day deserves its own glow because some days quietly change everything. That photo holds the joy of choosing each other out loud, of becoming Ray's girlfriend and Bee's boyfriend without the sweetness needing to be hidden."
  },
  {
    title: "Magical kisses",
    kicker: "You and me",
    image: "assets/photos/kisses.jpeg",
    aspect: 960 / 1280,
    wall: "left",
    text:
      "Some photos carry a whole feeling: closeness, softness, trust, and the kind of magic that does not need explaining."
  },
  {
    title: "The car chapter",
    kicker: "Last photo in the car",
    image: "assets/photos/car-photo.jpeg",
    aspect: 960 / 1280,
    wall: "right",
    text:
      "The car memories belong here too: sunsets through the windshield, music playing, hands close, herbal tea talk, Oontz in the background, and those small rides that somehow felt like a whole chapter."
  },
  {
    title: "This photo wow",
    kicker: "Camera with a heart",
    image: "assets/photos/wow.jpeg",
    aspect: 960 / 1280,
    wall: "left",
    text:
      "The camera would love Bee if it had a heart. This one keeps that exact wow feeling: a picture that makes you stop for a second and just smile."
  },
  {
    title: "Everything is better",
    kicker: "With you",
    image: "assets/photos/everything-better.jpeg",
    aspect: 785 / 1600,
    wall: "right",
    text:
      "Everything is better with you. Movies, music, ordinary days, late replies, little jokes, study dates, cozy movie ideas, and even the planning become warmer when your hand is in mine."
  },
  {
    title: "Your recent post",
    kicker: "Seen and loved",
    image: "assets/photos/recent-post.jpeg",
    aspect: 751 / 1600,
    wall: "back",
    text:
      "The recent post is here because being proud of each other is one of the sweetest parts of this. His and hers, soft proof, public joy, and the kind of post that says we are each other's person without needing to shout."
  },
  {
    title: "Long messages",
    kicker: "The words I keep",
    image: "assets/photos/video-calls.jpeg",
    aspect: 780 / 1600,
    wall: "right",
    text:
      "The long messages matter because they make love feel detailed: safe-arrived texts, date reflections, flowers, reassurance, faith, peace, and the way she wrote that the GitHub links, notes, and gallery are where she goes whenever she misses me."
  },
  {
    title: "Marathon pace",
    kicker: "Go with the flow",
    image: "assets/photos/happy-us-again.jpeg",
    aspect: 960 / 1280,
    wall: "left",
    text:
      "Bee once said to relax, go with the flow, and let the heart guide it because it is a marathon, not a sprint. That belongs here because it shaped how Raybee learned to feel safe, patient, and real."
  },
  {
    title: "Date philosophy",
    kicker: "Simple and sophisticated",
    image: "assets/photos/everything-better.jpeg",
    aspect: 785 / 1600,
    wall: "right",
    text:
      "Sophisticated dates bring the dressing up, wine, good food, lovely settings, and photos. Simple dates bring depth, bonding, games, walks, study dates, and conversation. Bee said the combination is ideal, and honestly that sounds like us."
  },
  {
    title: "Safe space",
    kicker: "Love in her language",
    image: "assets/photos/care.jpeg",
    aspect: 960 / 1280,
    wall: "back",
    text:
      "One of the longest messages said thank you for the flowers, the GitHub links, the safe space, the shoulder to lean on, and loving her in the ways she wants to be loved. This room is built from that sentence."
  },
  {
    title: "DJ Raybee",
    kicker: "May the Oontz",
    image: "assets/photos/golden-hearts.jpeg",
    aspect: 785 / 1600,
    wall: "left",
    text:
      "DJ Raybee on the decks, May the Oontz be with us, and the kind of music jokes that became part of the relationship. Some love stories have a soundtrack; ours has a full set."
  },
  {
    title: "Missing you",
    kicker: "Notes, links, gallery",
    image: "assets/photos/recent-post.jpeg",
    aspect: 751 / 1600,
    wall: "right",
    text:
      "She said that whenever she misses Ray, she visits the GitHub links, reads the notes, or looks at the gallery. That is why this room needed to feel less like a page and more like a place she can enter."
  },
  {
    title: "Desk and GitHub links",
    kicker: "Laptop corner",
    image: "assets/photos/video-calls.jpeg",
    aspect: 780 / 1600,
    area: "desk",
    text:
      "This belongs by the desk and laptop because the GitHub links became part of the love language. She said she visits the links, reads the notes, and looks at the gallery whenever she misses Ray."
  },
  {
    title: "Music setup",
    kicker: "Speaker system",
    image: "assets/photos/golden-hearts.jpeg",
    aspect: 785 / 1600,
    area: "music",
    text:
      "The music corner is for the speaker system, the laptop, Virtual DJ, Raybee on the decks, and every 'May the Oontz be with us' moment that turned the room into a tiny dance floor."
  },
  {
    title: "Kitchen things",
    kicker: "Tea, food, cooking",
    image: "assets/photos/everything-better.jpeg",
    aspect: 785 / 1600,
    area: "kitchen",
    text:
      "The kitchen keeps the everyday sweetness: herbal tea, food plans, cooking, breakfast ideas, snacks, and the practical love of making sure each other eats and feels cared for."
  },
  {
    title: "Her home",
    kicker: "Forever grateful",
    image: "assets/photos/care.jpeg",
    aspect: 960 / 1280,
    area: "sitting",
    text:
      "Thank you so much for inviting me into your home. Words alone cannot say it, but I'm forever grateful for the trust, warmth, space, and comfort you shared with me."
  },
  {
    title: "Balcony after kitchen",
    kicker: "Soft air",
    image: "assets/photos/car-photo.jpeg",
    aspect: 960 / 1280,
    area: "balcony",
    text:
      "After the kitchen, the balcony holds the quieter air: calls, safe journeys, sunsets, missing each other, and the feeling that even a small pause outside can become a memory."
  }
];

const memoryAreas = {
  "The first spark": "desk",
  "Tamambo Restaurant": "balcony",
  "The flowers": "kitchen",
  "Pentagon 5": "sitting",
  "Happy us": "sitting",
  "Happy us again": "bedroom",
  "How you care": "bedroom",
  "Golden hearts": "music",
  "Our video calls": "desk",
  "Girlfriend day": "bedroom",
  "Magical kisses": "bedroom",
  "The car chapter": "balcony",
  "This photo wow": "sitting",
  "Everything is better": "kitchen",
  "Your recent post": "sitting",
  "Long messages": "desk",
  "Marathon pace": "sitting",
  "Date philosophy": "kitchen",
  "Safe space": "bedroom",
  "DJ Raybee": "music",
  "Missing you": "desk"
};

const wallMessages = [
  {
    title: "After the date",
    text:
      "I got home safely. I enjoyed the date and every moment with you. I look forward to spending more time with you. I also loved the flowers very much."
  },
  {
    title: "Dates, her way",
    text:
      "Sophisticated dates spark romance: lovely settings, good food, good wine, dressing up, awesome photos, and enjoying the moment. Simple dates help us understand each other in depth."
  },
  {
    title: "Raybee",
    text:
      "I love RayBee. To RayBee. Raybee on the decks. May the Oontz be with us. Some names become a whole tiny universe."
  },
  {
    title: "Tamambo calm",
    text:
      "I do love cuddling, especially with you. You make me feel calm and relaxed. Also at Tamambo, we agreed to ask and talk gently."
  },
  {
    title: "A long message",
    text:
      "Thank you for the flowers and the GitHub links. Thank you for loving me in the ways I want to be loved. You make me smile, laugh, and be at peace."
  },
  {
    title: "Answered prayers",
    text:
      "I prayed for a love like this, for a partner like you, and God answered me. You are a symbol of my answered prayers."
  },
  {
    title: "When she misses me",
    text:
      "Every time I miss you, I visit the GitHub links, read your notes, or look at our gallery. You'll always be in my heart wherever I go."
  },
  {
    title: "Steady love",
    text:
      "My love for you is not contingent upon such things. Never doubt my love for you. Please take care of yourself for me."
  },
  {
    title: "Her home",
    text:
      "Thank you so much for inviting me into your home. Words alone cannot say it, but I'm forever grateful for the trust, warmth, and space you shared with me."
  },
  {
    title: "Safe space",
    text:
      "Thank you for providing a safe space for me to share my thoughts and emotions. Thank you for being nonjudgmental, soft, understanding, and kind."
  },
  {
    title: "Home too",
    text:
      "You can call this our home too. I enjoyed hosting you very much. As you do your work, if you need my company I'll be a phone call away."
  },
  {
    title: "Morning links",
    text:
      "I spent all morning looking at the GitHub links you made for me. They reminded me how much you actually love me. I really miss you."
  },
  {
    title: "Music laptop",
    text:
      "Virtual DJ, laptop and a controller deck. Right now, laptop, Virtual DJ and a mouse. If the music is slapping, the room becomes Raybee on the decks."
  },
  {
    title: "Bedroom comfort",
    text:
      "Watching a movie in bed. I do love cuddling, especially with you. You make me feel calm and relaxed, and your voice soothes me."
  },
  {
    title: "Kitchen comfort",
    text:
      "I love indomie. I love herbal teas, lattes and coffee. The kitchen keeps the little everyday things that make home feel cared for."
  },
  {
    title: "Best relationship",
    text:
      "You can share anything with me and always rely on me to hear you out and do what it takes to give us the best relationship ever."
  },
  {
    title: "Voice note",
    text:
      "I enjoy your company, I love talking to you, and you make me feel safe and grounded. I am comfortable around you and your voice soothes me."
  },
  {
    title: "Favorite gifts",
    text:
      "My favorite gifts will always be flowers, then wine and chocolates, but what emotionally satisfies me is the cute notes and GitHub links."
  },
  {
    title: "Worth more",
    text:
      "I look at you with so much admiration and love because what we have here is worth more than any valuable thing."
  },
  {
    title: "Closer",
    text:
      "We came from 270 Degrees to being a degree hotter each time we cuddle and get closer and closer."
  },
  {
    title: "Best friend",
    text:
      "Thank you for being my best friend, my partner, my lover, my confidant, my boyfriend, and my handsome man."
  },
  {
    title: "Company",
    text:
      "I have kept you good company. If you need company, I am a phone call away."
  },
  {
    title: "RayBee adventures",
    text:
      "Here is to RayBee and to many more exciting, fulfilling, fun, and heartwarming adventures. May the Oontz be with us."
  }
];

const chatBeats = [
  "Heyy Bee, it is Ray. We met at 3 Step Theory.",
  "EDM ofc. Oontz.",
  "I love flowers too much. Hence Bee, bees love flowers too.",
  "I got home safely. I enjoyed the date and every moment with you.",
  "I loved the flowers very much.",
  "Relax and go with the flow. It is a marathon, not a sprint.",
  "Sophisticated dates spark romance. Simple dates build depth.",
  "I do love cuddling, especially with you.",
  "Lovely to hear your voice as always.",
  "Yeah, we connect in an interesting way. I love it.",
  "I love RayBee.",
  "MAY THE OONTZ BE WITH US!",
  "Every time I miss you, I visit the GitHub links.",
  "RayBee to the world.",
  "You can call this our home too.",
  "Thank you for providing a safe space for me.",
  "Thank you so much for inviting me into your home.",
  "His and Hers.",
  "Your voice soothes me.",
  "You are my best friend and my life partner.",
  "Cute notes and GitHub links.",
  "I spent all morning looking at the GitHub links.",
  "I am a phone call away if you ever need me.",
  "I prayed for a love like this.",
  "This is always a safe space for both of us.",
  "May the Oontz be with us."
];

const letterNotes = [
  {
    title: "On the desk",
    text:
      "Every time I miss you, I visit the GitHub links, read your notes, or look at our gallery. I close my eyes and smile.",
    x: -4.2,
    y: -0.31,
    z: 2.42,
    w: 0.94,
    h: 0.58,
    rotation: { x: -Math.PI / 2, y: 0, z: -0.08 },
    color: "#fff0de"
  },
  {
    title: "Bedside letter",
    text:
      "You make me feel calm and relaxed. I am comfortable around you, and your voice soothes me.",
    x: 4.3,
    y: -0.06,
    z: -4.82,
    w: 0.82,
    h: 0.55,
    rotation: { x: -Math.PI / 2, y: 0, z: 0.18 },
    color: "#ffdce9"
  },
  {
    title: "Kitchen note",
    text:
      "I love indomie. I love herbal teas, lattes and coffee. Little home things count too.",
    x: -5.42,
    y: -0.24,
    z: -2.6,
    w: 0.76,
    h: 0.5,
    rotation: { x: -Math.PI / 2, y: 0, z: -0.2 },
    color: "#fff7d6"
  },
  {
    title: "Home",
    text:
      "You can call this our home too. I enjoyed hosting you very much. If you need my company, I am a phone call away.",
    x: -5.61,
    y: 2.55,
    z: 4.15,
    w: 0.76,
    h: 0.52,
    rotation: { x: 0, y: Math.PI / 2, z: 0.02 },
    color: "#ffe4ee"
  },
  {
    title: "Gift language",
    text:
      "Flowers, wine, chocolates, cute notes, and GitHub links - the little things that say I paid attention.",
    x: -2.25,
    y: 0.03,
    z: 4.34,
    w: 0.84,
    h: 0.54,
    rotation: { x: -Math.PI / 2, y: 0, z: 0.14 },
    color: "#fff0de"
  },
  {
    title: "Oontz letter",
    text:
      "RayBee on the decks. Virtual DJ, laptop, mouse, speakers, and May the Oontz be with us.",
    x: 4.34,
    y: -0.25,
    z: 5.08,
    w: 0.84,
    h: 0.52,
    rotation: { x: -Math.PI / 2, y: 0, z: -0.12 },
    color: "#e0fffb"
  },
  {
    title: "Balcony letter",
    text:
      "I got home safely. Safe journey as you go back home. I love you very much, Ray.",
    x: -6.7,
    y: -0.98,
    z: -8.35,
    w: 0.84,
    h: 0.52,
    rotation: { x: -Math.PI / 2, y: 0, z: 0.08 },
    color: "#ffe8cf"
  },
  {
    title: "Safe space",
    text:
      "Thank you for being nonjudgmental, soft, understanding, and kind. Thank you for holding space for me.",
    x: 8.61,
    y: 2.7,
    z: -2.95,
    w: 0.78,
    h: 0.54,
    rotation: { x: 0, y: -Math.PI / 2, z: -0.02 },
    color: "#ffdce9"
  },
  {
    title: "Answered prayers",
    text:
      "I prayed for a love like this, for a partner like you, and God answered me.",
    x: 8.61,
    y: 4.05,
    z: -4.65,
    w: 0.78,
    h: 0.54,
    rotation: { x: 0, y: -Math.PI / 2, z: 0.02 },
    color: "#fff7d6"
  },
  {
    title: "RayBee",
    text:
      "Here is to many more exciting, fulfilling, fun, and heartwarming adventures.",
    x: -0.92,
    y: -0.34,
    z: 4.55,
    w: 0.74,
    h: 0.48,
    rotation: { x: -Math.PI / 2, y: 0, z: 0.24 },
    color: "#ffe4ee"
  }
];

const pentagonNames = ["Ray", "Bee", "Mike", "Mel", "Qwarra"];
const room = {
  width: 18,
  depth: 17,
  height: 6.4,
  floorY: -1.15,
  sitting: { minX: -5.8, maxX: 5.8, minZ: 0.4, maxZ: 7.0 },
  bedroom: { minX: 2.0, maxX: 8.8, minZ: -6.2, maxZ: 0.4 },
  kitchen: { minX: -8.8, maxX: -2.0, minZ: -6.2, maxZ: 0.4 },
  balcony: { minX: -8.8, maxX: -2.0, minZ: -9.5, maxZ: -6.2 }
};

const walkZones = [
  { minX: -5.25, maxX: 5.25, minZ: 0.55, maxZ: 6.28 },
  { minX: -5.25, maxX: -2.35, minZ: -0.98, maxZ: 1.55 },
  { minX: 2.35, maxX: 5.25, minZ: -0.98, maxZ: 1.55 },
  { minX: -8.18, maxX: -2.42, minZ: -5.88, maxZ: 0.1 },
  { minX: 2.42, maxX: 8.18, minZ: -5.88, maxZ: 0.1 },
  { minX: -8.1, maxX: -2.7, minZ: -8.92, maxZ: -5.0 }
];

const cameraZones = [
  { minX: -5.65, maxX: 5.65, minZ: 0.48, maxZ: 6.82 },
  { minX: -8.55, maxX: -2.05, minZ: -5.95, maxZ: 0.48 },
  { minX: 2.05, maxX: 8.55, minZ: -5.95, maxZ: 0.48 },
  { minX: -8.55, maxX: -2.05, minZ: -9.18, maxZ: -5.95 }
];

const furnitureColliders = [
  { minX: -4.25, maxX: 1.28, minZ: 5.03, maxZ: 6.62 },
  { minX: -2.8, maxX: 0.12, minZ: 3.65, maxZ: 4.98 },
  { minX: -5.65, maxX: -3.05, minZ: 1.68, maxZ: 3.68 },
  { minX: 3.05, maxX: 5.65, minZ: 4.22, maxZ: 6.08 },
  { minX: 3.26, maxX: 7.08, minZ: -5.58, maxZ: -2.9 },
  { minX: 7.42, maxX: 8.62, minZ: -3.45, maxZ: -2.04 },
  { minX: -8.42, maxX: -2.92, minZ: -5.78, maxZ: -4.64 },
  { minX: -6.38, maxX: -4.62, minZ: -3.22, maxZ: -1.96 },
  { minX: -8.42, maxX: -7.62, minZ: -8.75, maxZ: -7.95 },
  { minX: -3.18, maxX: -2.38, minZ: -8.75, maxZ: -7.95 }
];

const canvas = document.querySelector("#love-scene");
const intro = document.querySelector("#intro");
const movementStatus = document.querySelector("#movementStatus");
const currentTitle = document.querySelector("#currentTitle");
const storyPanel = document.querySelector("#storyPanel");
const storyImage = document.querySelector("#storyImage");
const storyKicker = document.querySelector("#storyKicker");
const storyTitle = document.querySelector("#storyTitle");
const storyText = document.querySelector("#storyText");
const finalNote = document.querySelector("#finalNote");
const beginBtn = document.querySelector("#beginBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const pentagonBtn = document.querySelector("#pentagonBtn");
const finalBtn = document.querySelector("#finalBtn");
const musicBtn = document.querySelector("#musicBtn");
const closeStory = document.querySelector("#closeStory");
const closeFinal = document.querySelector("#closeFinal");
const joystick = document.querySelector("#joystick");
const joystickKnob = document.querySelector("#joystickKnob");
const interactBtn = document.querySelector("#interactBtn");
const controlsHint = document.querySelector("#controlsHint");
const memoryPrompt = document.querySelector("#memoryPrompt");
const memoryPromptTitle = document.querySelector("#memoryPromptTitle");
const memoryPromptHint = document.querySelector("#memoryPromptHint");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x120b12);
scene.fog = new THREE.FogExp2(0x160f18, 0.017);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 4.1, 15.5);
applyResponsiveCamera();

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: true
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 4.4;
controls.maxDistance = 25;
controls.maxPolarAngle = Math.PI * 0.62;
controls.minPolarAngle = Math.PI * 0.2;
controls.target.set(0, 1.65, -0.9);
controls.enabled = false;

const textureLoader = new THREE.TextureLoader();
const gallery = new THREE.Group();
const heartField = new THREE.Group();
const chatGroup = new THREE.Group();
const pentagonGroup = new THREE.Group();
const messageGroup = new THREE.Group();
const noteGroup = new THREE.Group();
const roomGroup = new THREE.Group();
const avatarGroup = new THREE.Group();
scene.add(roomGroup, gallery, heartField, chatGroup, pentagonGroup, messageGroup, noteGroup, avatarGroup);

let selectedIndex = 0;
let hoveredCard = null;
let nearbyCard = null;
let started = false;
let pentagonMode = false;
let followSelected = false;
let cameraMode = "walk";
const cards = [];
const pressedKeys = new Set();
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const clock = new THREE.Clock();
const tempWorldPosition = new THREE.Vector3();
const tempCameraOffset = new THREE.Vector3();
const tempQuaternion = new THREE.Quaternion();
const tempNormal = new THREE.Vector3();
const moveVector = new THREE.Vector3();
const forwardVector = new THREE.Vector3();
const rightVector = new THREE.Vector3();
const proposedPosition = new THREE.Vector3();

const avatar = {
  group: avatarGroup,
  parts: {},
  radius: 0.34,
  speed: 2.85,
  heading: Math.PI,
  walkCycle: 0,
  isMoving: false
};

const joystickState = {
  pointerId: null,
  x: 0,
  y: 0
};

const view = {
  yaw: Math.PI,
  pitch: 0
};

const lookState = {
  pointerId: null,
  lastX: 0,
  lastY: 0,
  dragDistance: 0,
  active: false
};

const LOOK_YAW_SPEED = 0.0034;
const LOOK_PITCH_SPEED = 0.0028;
const LOOK_PITCH_MIN = -0.42;
const LOOK_PITCH_MAX = 0.5;
const LOOK_CLICK_THRESHOLD = 6;
let nearbyPromptCard = null;
let hasMovedOnce = false;

const targetCamera = {
  position: camera.position.clone(),
  lookAt: controls.target.clone()
};

const audio = new Audio("assets/audio/summer-love.mp3");
audio.loop = true;
audio.volume = 0.46;
audio.preload = "auto";
let audioReady = false;

audio.addEventListener("canplaythrough", () => {
  audioReady = true;
});

audio.addEventListener("error", () => {
  musicBtn.textContent = "Music paused";
});

buildLights();
buildMemoryRoom();
buildAvatar();
buildGallery();
buildHeartField();
buildChatBeats();
buildLongMessageWall();
buildPentagon();
setAvatarPosition(1.85, 3.45);
updateWalkCamera(true);
focusMemory(0, false);
setupJoystick();
setupLookControls();

beginBtn.addEventListener("click", beginExperience);
prevBtn.addEventListener("click", () => focusMemory(selectedIndex - 1, true, true));
nextBtn.addEventListener("click", () => focusMemory(selectedIndex + 1, true, true));
pentagonBtn.addEventListener("click", () => focusMemory(memories.findIndex((memory) => memory.pentagon), true, true));
finalBtn.addEventListener("click", showFinalNote);
musicBtn.addEventListener("click", toggleMusic);
interactBtn.addEventListener("click", openNearbyMemory);
closeStory.addEventListener("click", () => {
  storyPanel.classList.remove("is-open");
  cameraMode = "walk";
});
closeFinal.addEventListener("click", () => {
  finalNote.classList.remove("is-open");
  cameraMode = "walk";
});
window.addEventListener("resize", onResize);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("click", onSceneClick);
window.addEventListener("keydown", onKeydown);
window.addEventListener("keyup", onKeyup);

renderer.setAnimationLoop(animate);

function buildLights() {
  scene.add(new THREE.HemisphereLight(0xffd5e5, 0x251929, 1.45));

  const balconyGlow = new THREE.DirectionalLight(0xffcfab, 2.7);
  balconyGlow.position.set(-8, 8, -9);
  scene.add(balconyGlow);

  const sittingGlow = new THREE.PointLight(0xff8fbe, 24, 18);
  sittingGlow.position.set(0, 3.8, 4.8);
  scene.add(sittingGlow);

  const musicGlow = new THREE.PointLight(0x70d6d0, 18, 13);
  musicGlow.position.set(4.8, 2.4, 5.2);
  scene.add(musicGlow);

  const kitchenGlow = new THREE.PointLight(0xffd18b, 16, 12);
  kitchenGlow.position.set(-5.5, 2.6, -3.6);
  scene.add(kitchenGlow);

  const bedroomGlow = new THREE.PointLight(0xffa8cf, 14, 11);
  bedroomGlow.position.set(5.6, 2.2, -3.8);
  scene.add(bedroomGlow);
}

function buildMemoryRoom() {
  buildApartmentShell();
  buildApartmentMural();
  buildSittingRoom();
  buildDeskCorner();
  buildMusicCorner();
  buildBedroomRoom();
  buildKitchenRoom();
  buildBalconyRoom();
  buildRealisticDetails();
  buildLettersAndNotes();
}

function makeRoomMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.68,
    metalness: options.metalness ?? 0.04,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0,
    transparent: Boolean(options.opacity),
    opacity: options.opacity ?? 1
  });
}

function addBox(width, height, depth, color, x, y, z, options = {}) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    makeRoomMaterial(color, options)
  );
  mesh.position.set(x, y, z);
  if (options.rotation) {
    mesh.rotation.set(options.rotation.x || 0, options.rotation.y || 0, options.rotation.z || 0);
  }
  roomGroup.add(mesh);
  return mesh;
}

function addCylinder(radiusTop, radiusBottom, height, color, x, y, z, options = {}) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, options.segments || 24),
    makeRoomMaterial(color, options)
  );
  mesh.position.set(x, y, z);
  if (options.rotation) {
    mesh.rotation.set(options.rotation.x || 0, options.rotation.y || 0, options.rotation.z || 0);
  }
  roomGroup.add(mesh);
  return mesh;
}

function addSphere(radius, color, x, y, z, options = {}) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, options.widthSegments || 24, options.heightSegments || 16),
    makeRoomMaterial(color, options)
  );
  mesh.position.set(x, y, z);
  if (options.scale) {
    mesh.scale.set(options.scale.x || 1, options.scale.y || 1, options.scale.z || 1);
  }
  roomGroup.add(mesh);
  return mesh;
}

function buildAvatar() {
  const skin = makeRoomMaterial(0x8c5f4c, { roughness: 0.58 });
  const hair = makeRoomMaterial(0x171018, { roughness: 0.7 });
  const blush = makeRoomMaterial(0xff9fc0, { roughness: 0.7, emissive: 0x1f0610, emissiveIntensity: 0.18 });
  const cream = makeRoomMaterial(0xfff0de, { roughness: 0.8 });
  const denim = makeRoomMaterial(0x2f4058, { roughness: 0.66 });
  const shoe = makeRoomMaterial(0xf5d5df, { roughness: 0.6 });
  const glass = makeRoomMaterial(0x70d6d0, { roughness: 0.25, metalness: 0.4, emissive: 0x062827, emissiveIntensity: 0.2 });
  const dark = makeRoomMaterial(0x161018, { roughness: 0.44 });

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.62, 40),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.018;
  avatarGroup.add(shadow);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 0.82, 24), blush);
  body.position.y = 0.95;
  avatarGroup.add(body);
  avatar.parts.body = body;

  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.16), cream);
  collar.position.set(0, 1.36, 0.18);
  avatarGroup.add(collar);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.18, 18), skin);
  neck.position.y = 1.43;
  avatarGroup.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 32, 24), skin);
  head.position.y = 1.72;
  head.scale.set(0.92, 1.06, 0.9);
  avatarGroup.add(head);
  avatar.parts.head = head;

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.33, 32, 18), hair);
  hairCap.position.set(0, 1.82, -0.02);
  hairCap.scale.set(1.0, 0.72, 1.04);
  avatarGroup.add(hairCap);

  const hairBack = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 18), hair);
  hairBack.position.set(0, 1.55, -0.22);
  hairBack.scale.set(1.0, 1.25, 0.72);
  avatarGroup.add(hairBack);

  const glassesLeft = new THREE.Mesh(new THREE.TorusGeometry(0.084, 0.01, 8, 24), glass);
  glassesLeft.position.set(-0.095, 1.74, 0.265);
  avatarGroup.add(glassesLeft);
  const glassesRight = glassesLeft.clone();
  glassesRight.position.x = 0.095;
  avatarGroup.add(glassesRight);
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.014, 0.018), glass);
  bridge.position.set(0, 1.74, 0.27);
  avatarGroup.add(bridge);

  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.007, 8, 20, Math.PI), dark);
  smile.position.set(0, 1.63, 0.285);
  smile.rotation.z = Math.PI;
  avatarGroup.add(smile);

  const armGeometry = new THREE.CylinderGeometry(0.055, 0.06, 0.72, 16);
  const leftArm = new THREE.Mesh(armGeometry, skin);
  leftArm.position.set(-0.38, 0.98, 0.02);
  leftArm.rotation.z = -0.2;
  avatarGroup.add(leftArm);
  avatar.parts.leftArm = leftArm;

  const rightArm = new THREE.Mesh(armGeometry, skin);
  rightArm.position.set(0.38, 0.98, 0.02);
  rightArm.rotation.z = 0.2;
  avatarGroup.add(rightArm);
  avatar.parts.rightArm = rightArm;

  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 18, 14), skin);
  leftHand.position.set(-0.46, 0.62, 0.03);
  avatarGroup.add(leftHand);
  avatar.parts.leftHand = leftHand;

  const rightHand = leftHand.clone();
  rightHand.position.x = 0.46;
  avatarGroup.add(rightHand);
  avatar.parts.rightHand = rightHand;

  const legGeometry = new THREE.CylinderGeometry(0.075, 0.085, 0.72, 16);
  const leftLeg = new THREE.Mesh(legGeometry, denim);
  leftLeg.position.set(-0.13, 0.36, 0);
  avatarGroup.add(leftLeg);
  avatar.parts.leftLeg = leftLeg;

  const rightLeg = new THREE.Mesh(legGeometry, denim);
  rightLeg.position.set(0.13, 0.36, 0);
  avatarGroup.add(rightLeg);
  avatar.parts.rightLeg = rightLeg;

  const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.08, 0.28), shoe);
  leftShoe.position.set(-0.13, 0.05, 0.08);
  avatarGroup.add(leftShoe);
  avatar.parts.leftShoe = leftShoe;

  const rightShoe = leftShoe.clone();
  rightShoe.position.x = 0.13;
  avatarGroup.add(rightShoe);
  avatar.parts.rightShoe = rightShoe;

  const tinyHeart = new THREE.Mesh(
    new THREE.ShapeGeometry(makeHeartShape()),
    new THREE.MeshBasicMaterial({ color: 0xffd18b, transparent: true, opacity: 0.86 })
  );
  tinyHeart.position.set(0.03, 1.0, 0.37);
  tinyHeart.scale.set(0.07, 0.07, 0.07);
  avatarGroup.add(tinyHeart);

  avatarGroup.rotation.y = avatar.heading;
}

function makeHeartShape() {
  const heart = new THREE.Shape();
  heart.moveTo(0, 0.08);
  heart.bezierCurveTo(0, 0.16, -0.16, 0.18, -0.16, 0.03);
  heart.bezierCurveTo(-0.16, -0.08, -0.04, -0.14, 0, -0.2);
  heart.bezierCurveTo(0.04, -0.14, 0.16, -0.08, 0.16, 0.03);
  heart.bezierCurveTo(0.16, 0.18, 0, 0.16, 0, 0.08);
  return heart;
}

function setAvatarPosition(x, z) {
  avatarGroup.position.set(x, room.floorY + 0.02, z);
}

function addFloor(area, color, label) {
  const width = area.maxX - area.minX;
  const depth = area.maxZ - area.minZ;
  const x = (area.minX + area.maxX) / 2;
  const z = (area.minZ + area.maxZ) / 2;
  addBox(width, 0.16, depth, color, x, room.floorY, z, {
    roughness: 0.62,
    emissive: 0x140711,
    emissiveIntensity: 0.08
  });
  addRoomFloorLabel(label, x, z);
}

function addRoomFloorLabel(text, x, z) {
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 0.48),
    new THREE.MeshBasicMaterial({
      map: makeTextTexture(text, text.length, 740, 180, { fontSize: 34 }),
      transparent: true,
      opacity: 0.24,
      depthWrite: false
    })
  );
  label.position.set(x, room.floorY + 0.095, z);
  label.rotation.x = -Math.PI / 2;
  roomGroup.add(label);
}

function addWall(width, height, depth, color, x, z, options = {}) {
  return addBox(width, height, depth, color, x, room.floorY + height / 2, z, {
    roughness: 0.78,
    metalness: 0.02,
    opacity: options.opacity,
    emissive: options.emissive || 0x08020a,
    emissiveIntensity: options.emissiveIntensity ?? 0.04
  });
}

function buildApartmentShell() {
  addFloor(room.sitting, 0x462b3b, "Sitting room");
  addFloor(room.bedroom, 0x34283a, "Bedroom");
  addFloor(room.kitchen, 0x3b3040, "Kitchen");
  addFloor(room.balcony, 0x2a2f3c, "Balcony");

  const wall = 0x2f2030;
  const accentWall = 0x4b2940;
  addWall(11.6, room.height, 0.16, accentWall, 0, room.sitting.minZ);
  addWall(0.16, room.height, 6.6, wall, room.sitting.minX, 3.7);
  addWall(0.16, room.height, 6.6, wall, room.sitting.maxX, 3.7);

  addWall(6.8, room.height, 0.16, 0x2a2233, 5.4, room.bedroom.minZ);
  addWall(0.16, room.height, 6.6, 0x2b2232, room.bedroom.maxX, -2.9);
  addWall(0.16, room.height, 6.6, 0x2d1f2d, room.bedroom.minX, -2.9, { opacity: 0.72 });

  addWall(6.8, room.height, 0.16, 0x33283a, -5.4, room.kitchen.minZ, { opacity: 0.64 });
  addWall(0.16, room.height, 6.6, 0x2b2232, room.kitchen.minX, -2.9);
  addWall(0.16, room.height, 6.6, 0x2d1f2d, room.kitchen.maxX, -2.9, { opacity: 0.72 });

  addBox(6.7, 0.92, 0.1, 0x392f3c, -5.4, room.floorY + 0.46, room.balcony.minZ, {
    roughness: 0.48,
    metalness: 0.18
  });
  for (let i = 0; i < 7; i += 1) {
    addBox(0.06, 1.08, 0.06, 0x70d6d0, -8.1 + i * 0.9, room.floorY + 0.55, room.balcony.minZ + 0.02, {
      roughness: 0.28,
      metalness: 0.42,
      emissive: 0x062726,
      emissiveIntensity: 0.22
    });
  }

  addBox(room.width, 0.12, room.depth, 0x17111c, 0, room.height - 1.15, -1.25, {
    roughness: 0.84,
    opacity: 0.58
  });
}

function buildApartmentMural() {
  const mural = new THREE.Mesh(
    new THREE.PlaneGeometry(9.4, 1.55),
    new THREE.MeshBasicMaterial({
      map: makeSignTexture("270 Degrees Restaurant"),
      transparent: true,
      opacity: 0.32,
      depthWrite: false
    })
  );
  mural.position.set(0, 5.15, room.sitting.minZ + 0.09);
  roomGroup.add(mural);
}

function buildSittingRoom() {
  addBox(4.4, 0.54, 1.28, 0xc6648d, -1.5, -0.69, 5.75, {
    roughness: 0.56,
    emissive: 0x250612,
    emissiveIntensity: 0.14
  });
  addBox(4.55, 1.05, 0.28, 0xc6648d, -1.5, -0.12, 6.35, {
    roughness: 0.56,
    emissive: 0x250612,
    emissiveIntensity: 0.14
  });
  addBox(0.34, 0.86, 1.44, 0xc6648d, -3.95, -0.38, 5.75);
  addBox(0.34, 0.86, 1.44, 0xc6648d, 0.95, -0.38, 5.75);
  addBox(2.55, 0.16, 1.15, 0x8a4f33, -1.35, -0.49, 4.35, { roughness: 0.42 });
  addBox(2.15, 0.045, 1.0, 0xff9fc0, -1.35, -0.38, 4.35, { roughness: 0.76, opacity: 0.36 });
  addBox(0.64, 0.42, 0.15, 0xffc9d9, -2.5, 0.02, 6.2, { roughness: 0.86 });
  addBox(0.64, 0.42, 0.15, 0x70d6d0, -1.45, 0.02, 6.2, { roughness: 0.86 });
  addBox(0.64, 0.42, 0.15, 0xffd18b, -0.4, 0.02, 6.2, { roughness: 0.86 });
}

function buildDeskCorner() {
  addBox(2.35, 0.16, 1.1, 0x7b4c39, -4.35, -0.43, 2.35, { roughness: 0.42 });
  addBox(0.08, 0.92, 0.08, 0x3a2523, -5.3, -0.9, 1.92);
  addBox(0.08, 0.92, 0.08, 0x3a2523, -3.4, -0.9, 1.92);
  addBox(0.08, 0.92, 0.08, 0x3a2523, -5.3, -0.9, 2.78);
  addBox(0.08, 0.92, 0.08, 0x3a2523, -3.4, -0.9, 2.78);
  addBox(0.82, 0.08, 0.55, 0x141821, -4.35, -0.28, 2.2, { roughness: 0.3, metalness: 0.25 });
  addBox(0.82, 0.56, 0.06, 0x131923, -4.35, 0.02, 1.92, {
    roughness: 0.24,
    metalness: 0.22,
    emissive: 0x16383d,
    emissiveIntensity: 0.7
  });
  addBox(0.82, 0.16, 0.82, 0x4b3948, -4.35, -0.62, 3.45, { roughness: 0.74 });
  addBox(0.16, 0.68, 0.16, 0x2a2028, -4.35, -0.86, 3.45, { roughness: 0.46 });
  addBox(0.9, 0.52, 0.16, 0x5b3d52, -4.35, -0.38, 3.1, { roughness: 0.72 });
}

function buildMusicCorner() {
  addBox(1.85, 0.16, 0.92, 0x5f3a35, 4.35, -0.43, 5.0, { roughness: 0.42 });
  addBox(0.7, 0.08, 0.48, 0x141821, 4.35, -0.28, 4.86, { roughness: 0.3, metalness: 0.25 });
  addBox(0.7, 0.48, 0.06, 0x11171f, 4.35, -0.02, 4.62, {
    roughness: 0.24,
    metalness: 0.22,
    emissive: 0x173d39,
    emissiveIntensity: 0.76
  });
  [-0.78, 0.78].forEach((offset) => {
    addBox(0.44, 1.4, 0.44, 0x13151d, 4.35 + offset, -0.43, 5.72, {
      roughness: 0.32,
      metalness: 0.12,
      emissive: 0x061b1b,
      emissiveIntensity: 0.25
    });
    addBox(0.24, 0.24, 0.04, 0x70d6d0, 4.35 + offset, -0.1, 5.48, {
      roughness: 0.26,
      emissive: 0x0b3836,
      emissiveIntensity: 0.85
    });
    addBox(0.32, 0.32, 0.04, 0xff9fc0, 4.35 + offset, -0.62, 5.48, {
      roughness: 0.26,
      emissive: 0x3a0617,
      emissiveIntensity: 0.5
    });
  });
}

function buildBedroomRoom() {
  addBox(3.4, 0.42, 2.25, 0x6a4560, 5.2, -0.73, -4.25, { roughness: 0.72 });
  addBox(3.55, 0.42, 0.24, 0x7b506e, 5.2, -0.25, -5.25, { roughness: 0.68 });
  addBox(3.18, 0.16, 2.05, 0xffb7cf, 5.2, -0.46, -4.08, { roughness: 0.88 });
  addBox(0.7, 0.28, 0.48, 0xfff0de, 4.35, -0.22, -5.0, { roughness: 0.9 });
  addBox(0.7, 0.28, 0.48, 0x70d6d0, 6.1, -0.22, -5.0, { roughness: 0.9 });
  addBox(1.25, 2.35, 0.62, 0x6f4635, 8.05, 0.05, -2.8, { roughness: 0.54 });
  addBox(0.06, 2.2, 0.04, 0xffd18b, 8.05, 0.08, -2.45, { roughness: 0.32, metalness: 0.32 });
  for (let i = 0; i < 3; i += 1) {
    addBox(0.38, 0.08, 1.5, 0x704737, 2.3, 0.32 + i * 0.62, -4.55, { roughness: 0.5 });
    addBox(0.18, 0.36, 0.22, i % 2 ? 0xffd18b : 0xff9fc0, 2.34, 0.55 + i * 0.62, -5.05 + i * 0.34, { roughness: 0.66 });
  }
}

function buildKitchenRoom() {
  addBox(4.6, 0.2, 0.78, 0x7a5948, -5.4, -0.38, -5.3, { roughness: 0.48 });
  addBox(4.75, 1.0, 0.66, 0x4f3740, -5.4, -0.9, -5.28, { roughness: 0.58 });
  addBox(0.95, 1.9, 0.72, 0xd7ced5, -8.05, -0.12, -4.95, { roughness: 0.38, metalness: 0.08 });
  addBox(0.76, 0.08, 0.5, 0x151820, -5.2, -0.23, -5.08, { roughness: 0.36 });
  addBox(0.44, 0.05, 0.35, 0xffd18b, -4.42, -0.2, -5.05, { roughness: 0.44, emissive: 0x3b1b07, emissiveIntensity: 0.24 });
  addBox(1.52, 0.12, 0.98, 0x8a4f33, -5.5, -0.48, -2.6, { roughness: 0.48 });
  addBox(0.42, 0.34, 0.42, 0xfff0de, -5.95, -0.25, -2.55, { roughness: 0.72 });
  addBox(0.34, 0.14, 0.34, 0x70d6d0, -5.15, -0.18, -2.45, { roughness: 0.64 });
}

function buildBalconyRoom() {
  addBox(0.52, 0.52, 0.52, 0x6f4b3a, -8.05, -0.78, -8.35, { roughness: 0.72 });
  addBox(0.52, 0.52, 0.52, 0x6f4b3a, -2.75, -0.78, -8.35, { roughness: 0.72 });
  [-8.05, -2.75].forEach((x) => {
    addBox(0.08, 0.72, 0.08, 0x5fae73, x, -0.2, -8.35, { roughness: 0.6 });
    addBox(0.52, 0.08, 0.52, 0x70a870, x, 0.18, -8.35, { roughness: 0.84 });
  });
  const city = new THREE.Mesh(
    new THREE.PlaneGeometry(6.2, 2.2),
    new THREE.MeshBasicMaterial({
      map: makeBalconyTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false
    })
  );
  city.position.set(-5.4, 2.2, room.balcony.minZ - 0.04);
  roomGroup.add(city);
}

function buildRealisticDetails() {
  buildShellDetails();
  buildSittingRoomDetails();
  buildDeskDetails();
  buildMusicDetails();
  buildBedroomDetails();
  buildKitchenDetails();
  buildBalconyDetails();
}

function buildShellDetails() {
  const trimColor = 0xffb7cf;
  const darkTrim = 0x241822;
  addBox(11.5, 0.08, 0.08, trimColor, 0, room.floorY + 0.18, room.sitting.minZ + 0.12, { roughness: 0.54 });
  addBox(0.08, 0.08, 6.4, trimColor, room.sitting.minX + 0.12, room.floorY + 0.18, 3.7, { roughness: 0.54 });
  addBox(0.08, 0.08, 6.4, trimColor, room.sitting.maxX - 0.12, room.floorY + 0.18, 3.7, { roughness: 0.54 });
  addBox(6.5, 0.08, 0.08, trimColor, 5.4, room.floorY + 0.18, room.bedroom.minZ + 0.12, { roughness: 0.54 });
  addBox(6.5, 0.08, 0.08, trimColor, -5.4, room.floorY + 0.18, room.kitchen.minZ + 0.12, { roughness: 0.54 });
  addBox(2.8, 0.04, 0.22, 0xffd18b, 4.6, room.floorY + 0.12, room.bedroom.maxZ + 0.05, { roughness: 0.44 });
  addBox(2.8, 0.04, 0.22, 0xffd18b, -4.6, room.floorY + 0.12, room.kitchen.maxZ + 0.05, { roughness: 0.44 });
  addBox(0.08, 2.9, 0.08, darkTrim, 2.04, 0.25, 0.42, { roughness: 0.48 });
  addBox(0.08, 2.9, 0.08, darkTrim, 8.74, 0.25, 0.42, { roughness: 0.48 });
  addBox(0.08, 2.9, 0.08, darkTrim, -2.04, 0.25, 0.42, { roughness: 0.48 });
  addBox(0.08, 2.9, 0.08, darkTrim, -8.74, 0.25, 0.42, { roughness: 0.48 });
  addBox(6.4, 0.08, 0.08, darkTrim, 5.4, 1.73, 0.42, { roughness: 0.48 });
  addBox(6.4, 0.08, 0.08, darkTrim, -5.4, 1.73, 0.42, { roughness: 0.48 });

  for (let i = 0; i < 8; i += 1) {
    addBox(0.018, 0.018, 6.35, 0x5f3c4d, room.sitting.minX + 1.25 + i * 1.25, room.floorY + 0.115, 3.7, {
      roughness: 0.78,
      opacity: 0.42
    });
  }
  for (let i = 0; i < 5; i += 1) {
    addBox(6.55, 0.018, 0.018, 0x54405d, -5.4, room.floorY + 0.12, room.kitchen.minZ + 1.0 + i * 1.05, {
      roughness: 0.78,
      opacity: 0.36
    });
    addBox(6.55, 0.018, 0.018, 0x4a3a52, 5.4, room.floorY + 0.12, room.bedroom.minZ + 1.0 + i * 1.05, {
      roughness: 0.78,
      opacity: 0.32
    });
  }

  [
    [0, 5.95, 0xff9fc0],
    [-5.4, -2.6, 0xffd18b],
    [5.4, -2.6, 0xff9fc0]
  ].forEach(([x, z, color]) => {
    addCylinder(0.42, 0.34, 0.34, color, x, room.height - 1.52, z, {
      roughness: 0.5,
      opacity: 0.68,
      emissive: color,
      emissiveIntensity: 0.18
    });
    addCylinder(0.04, 0.04, 0.42, 0x30202d, x, room.height - 1.24, z, { roughness: 0.4 });
  });
}

function buildSittingRoomDetails() {
  addBox(3.8, 0.035, 2.35, 0x244a50, -1.35, room.floorY + 0.13, 4.85, {
    roughness: 0.9,
    emissive: 0x06181a,
    emissiveIntensity: 0.12
  });
  for (let i = 0; i < 4; i += 1) {
    addBox(3.45, 0.012, 0.035, 0xff9fc0, -1.35, room.floorY + 0.16, 3.95 + i * 0.58, {
      roughness: 0.82,
      opacity: 0.42
    });
  }
  addBox(0.78, 0.12, 0.78, 0x7b4c39, -4.85, -0.5, 5.28, { roughness: 0.48 });
  addCylinder(0.035, 0.035, 0.75, 0x2a2028, -4.85, -0.1, 5.28, { roughness: 0.42 });
  addCylinder(0.34, 0.46, 0.5, 0xffb7cf, -4.85, 0.42, 5.28, {
    roughness: 0.62,
    emissive: 0xff6fa5,
    emissiveIntensity: 0.34
  });
  addBox(0.46, 0.52, 0.13, 0xffe1ef, -2.9, -0.08, 6.13, { roughness: 0.86 });
  addBox(0.62, 0.08, 0.92, 0x7fd1c9, -2.12, -0.34, 5.48, { roughness: 0.88, opacity: 0.58 });
  addCylinder(0.15, 0.13, 0.24, 0xfff0de, -0.55, -0.26, 4.14, { roughness: 0.58, opacity: 0.78 });
  addCylinder(0.11, 0.09, 0.06, 0x9b6a3a, -0.55, -0.1, 4.14, { roughness: 0.4 });
  addCylinder(0.28, 0.22, 0.42, 0x4a3435, 1.9, -0.94, 5.95, { roughness: 0.68 });
  addSphere(0.28, 0x5fae73, 1.8, -0.52, 5.9, { scale: { x: 1.35, y: 0.55, z: 0.45 }, roughness: 0.78 });
  addSphere(0.24, 0x70a870, 2.03, -0.38, 6.05, { scale: { x: 0.62, y: 1.2, z: 0.45 }, roughness: 0.78 });
}

function buildDeskDetails() {
  addBox(1.2, 0.035, 0.42, 0x202733, -4.35, -0.22, 2.56, { roughness: 0.52 });
  addBox(0.04, 0.035, 0.42, 0xff9fc0, -4.0, -0.18, 2.56, { roughness: 0.42, emissive: 0x3a0617, emissiveIntensity: 0.22 });
  addBox(0.04, 0.035, 0.42, 0x70d6d0, -4.18, -0.18, 2.56, { roughness: 0.42, emissive: 0x062726, emissiveIntensity: 0.22 });
  addCylinder(0.11, 0.1, 0.22, 0xfff0de, -5.0, -0.28, 2.18, { roughness: 0.58 });
  addBox(0.46, 0.04, 0.62, 0xfff0de, -4.9, -0.31, 2.7, { roughness: 0.86, opacity: 0.9 });
  addBox(0.42, 0.03, 0.08, 0xff9fc0, -4.92, -0.28, 2.55, { roughness: 0.7, opacity: 0.9 });
  addBox(0.48, 0.02, 0.05, 0x141821, -4.35, -0.18, 1.7, { roughness: 0.4 });
  addBox(0.03, 0.03, 0.86, 0x0e1016, -4.02, -0.35, 2.13, { roughness: 0.4, rotation: { y: 0.2 } });
  for (let i = 0; i < 4; i += 1) {
    addSphere(0.1, 0x202027, -4.78 + i * 0.28, -1.06, 3.76, { scale: { x: 1, y: 0.28, z: 1 }, roughness: 0.42 });
  }
}

function buildMusicDetails() {
  addBox(1.18, 0.08, 0.48, 0x1a1d26, 4.35, -0.24, 5.14, { roughness: 0.36, metalness: 0.16 });
  for (let i = 0; i < 6; i += 1) {
    addCylinder(0.035, 0.035, 0.018, i % 2 ? 0xff9fc0 : 0x70d6d0, 3.88 + i * 0.18, -0.18, 4.93, {
      segments: 14,
      rotation: { x: Math.PI / 2 },
      roughness: 0.34,
      emissive: i % 2 ? 0x3a0617 : 0x062726,
      emissiveIntensity: 0.45
    });
  }
  [-0.78, 0.78].forEach((offset) => {
    addCylinder(0.23, 0.23, 0.035, 0x2a2d34, 4.35 + offset, -0.18, 5.47, {
      segments: 28,
      rotation: { x: Math.PI / 2 },
      roughness: 0.28,
      metalness: 0.18
    });
    addCylinder(0.11, 0.11, 0.04, 0x0b0d12, 4.35 + offset, -0.18, 5.44, {
      segments: 28,
      rotation: { x: Math.PI / 2 },
      roughness: 0.36
    });
  });
  addBox(2.15, 0.035, 0.05, 0x70d6d0, 4.35, 0.36, 5.98, {
    roughness: 0.3,
    emissive: 0x0b3836,
    emissiveIntensity: 0.72
  });
}

function buildBedroomDetails() {
  addBox(3.05, 0.1, 1.95, 0xf9d3e3, 5.2, -0.33, -4.05, { roughness: 0.9, opacity: 0.68 });
  addBox(0.68, 0.2, 0.46, 0xfff0de, 4.2, -0.05, -5.06, { roughness: 0.88 });
  addBox(0.68, 0.2, 0.46, 0xffd18b, 6.22, -0.05, -5.06, { roughness: 0.88 });
  addBox(1.0, 0.14, 0.72, 0x7b4c39, 7.25, -0.5, -5.18, { roughness: 0.48 });
  addCylinder(0.12, 0.12, 0.2, 0xfff0de, 7.0, -0.32, -5.08, { roughness: 0.58 });
  addBox(0.42, 0.05, 0.54, 0x141821, 7.45, -0.32, -5.2, { roughness: 0.38, metalness: 0.18 });
  addBox(0.66, 1.78, 0.04, 0x1a2630, 8.02, 0.06, -2.44, { roughness: 0.18, metalness: 0.54, opacity: 0.68 });
  addBox(0.04, 2.26, 0.07, 0xffd18b, 7.42, 0.06, -2.46, { roughness: 0.34, metalness: 0.36 });
  addBox(0.04, 2.26, 0.07, 0xffd18b, 8.66, 0.06, -2.46, { roughness: 0.34, metalness: 0.36 });
  for (let i = 0; i < 4; i += 1) {
    addBox(0.16, 0.34 + (i % 2) * 0.18, 0.18, i % 2 ? 0x70d6d0 : 0xff9fc0, 2.34, 1.48, -5.05 + i * 0.28, {
      roughness: 0.66
    });
  }
}

function buildKitchenDetails() {
  addBox(3.4, 0.1, 0.08, 0xf2e3da, -5.4, 0.4, -5.18, { roughness: 0.82, opacity: 0.56 });
  for (let i = 0; i < 5; i += 1) {
    addBox(0.03, 0.1, 0.09, 0xff9fc0, -7.0 + i * 0.8, 0.41, -5.14, { roughness: 0.72, opacity: 0.5 });
  }
  addBox(0.8, 0.06, 0.46, 0xd7ced5, -5.78, -0.22, -5.04, { roughness: 0.22, metalness: 0.44 });
  addCylinder(0.035, 0.035, 0.34, 0xd7ced5, -5.78, 0.02, -5.04, { segments: 16, roughness: 0.18, metalness: 0.5 });
  addCylinder(0.035, 0.035, 0.42, 0xd7ced5, -5.63, 0.18, -5.02, {
    segments: 16,
    rotation: { z: Math.PI / 2 },
    roughness: 0.18,
    metalness: 0.5
  });
  addBox(0.72, 0.04, 0.4, 0x141821, -4.52, -0.12, -5.03, { roughness: 0.36, metalness: 0.22 });
  for (let i = 0; i < 3; i += 1) {
    addCylinder(0.045, 0.045, 0.02, 0xffd18b, -4.75 + i * 0.22, -0.08, -5.02, {
      segments: 18,
      roughness: 0.24,
      emissive: 0x3b1b07,
      emissiveIntensity: 0.25
    });
  }
  addBox(0.52, 0.2, 0.38, 0xfff0de, -5.4, -0.2, -2.53, { roughness: 0.8 });
  addBox(0.34, 0.1, 0.42, 0xd94c78, -5.08, -0.11, -2.54, { roughness: 0.8 });
  addCylinder(0.23, 0.18, 0.4, 0x5fae73, -7.75, -0.34, -2.15, { roughness: 0.72 });
  addSphere(0.27, 0x70a870, -7.72, 0.06, -2.15, { scale: { x: 1.25, y: 0.55, z: 0.5 }, roughness: 0.82 });
}

function buildBalconyDetails() {
  addBox(5.85, 0.05, 0.05, 0x70d6d0, -5.4, -0.22, -9.45, {
    roughness: 0.28,
    metalness: 0.42,
    emissive: 0x062726,
    emissiveIntensity: 0.32
  });
  for (let i = 0; i < 5; i += 1) {
    addSphere(0.05, 0xffd18b, -7.6 + i * 1.1, 0.08, -9.42, {
      roughness: 0.34,
      emissive: 0x3b1b07,
      emissiveIntensity: 0.65
    });
  }
  addBox(1.1, 0.08, 0.86, 0x7b4c39, -5.4, -0.78, -8.18, { roughness: 0.5 });
  addCylinder(0.1, 0.1, 0.22, 0xfff0de, -5.62, -0.62, -8.12, { roughness: 0.58 });
  addBox(0.38, 0.04, 0.48, 0xffe1ef, -5.18, -0.63, -8.15, { roughness: 0.82 });
}

function buildLettersAndNotes() {
  letterNotes.forEach((note, index) => {
    const material = new THREE.MeshBasicMaterial({
      map: makeLetterTexture(note.title, note.text, index, note.color),
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(note.w, note.h), material);
    mesh.position.set(note.x, note.y, note.z);
    mesh.rotation.set(note.rotation.x || 0, note.rotation.y || 0, note.rotation.z || 0);
    mesh.userData.phase = index * 0.45;
    noteGroup.add(mesh);
  });
}

function buildApartmentWayfinding() {
  const notes = [
    ["desk + laptop", -4.35, 1.68, 2.02, 0],
    ["speaker system", 4.35, 1.72, 5.9, 0],
    ["bed + wardrobe + shelf", 5.35, 1.86, -5.95, 0],
    ["kitchen", -5.3, 1.78, -6.08, 0],
    ["balcony after kitchen", -5.4, 1.62, -9.38, 0]
  ];
  notes.forEach(([text, x, y, z]) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.1, 0.44),
      new THREE.MeshBasicMaterial({
        map: makeTextTexture(text, text.length + 30, 760, 170, { fontSize: 30 }),
        transparent: true,
        opacity: 0.68,
        depthWrite: false
      })
    );
    mesh.position.set(x, y, z);
    roomGroup.add(mesh);
  });
}

function makeBalconyTexture() {
  const pixelRatio = 2;
  const width = 1100;
  const height = 420;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#ffb0c8");
  gradient.addColorStop(0.48, "#77516a");
  gradient.addColorStop(1, "#141823");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255, 209, 139, 0.86)";
  ctx.beginPath();
  ctx.arc(780, 100, 54, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(16, 18, 28, 0.72)";
  for (let i = 0; i < 18; i += 1) {
    const x = 50 + i * 62;
    const h = 40 + (i % 5) * 24;
    ctx.fillRect(x, height - h - 35, 36, h);
  }
  ctx.fillStyle = "rgba(255, 247, 236, 0.34)";
  ctx.font = "800 38px Georgia, 'Times New Roman', serif";
  ctx.fillText("quiet balcony air", 52, 72);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function buildWindowWall() {
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x151820,
    roughness: 0.34,
    metalness: 0.46,
    emissive: 0x06080c,
    emissiveIntensity: 0.24
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0x182632,
    roughness: 0.08,
    metalness: 0.18,
    transparent: true,
    opacity: 0.38,
    emissive: 0x12313c,
    emissiveIntensity: 0.24
  });

  const glass = new THREE.Mesh(new THREE.PlaneGeometry(5.7, 2.15), glassMaterial);
  glass.position.set(4.55, 3.2, room.backZ + 0.035);
  roomGroup.add(glass);

  for (let i = 0; i < 4; i += 1) {
    const vertical = new THREE.Mesh(new THREE.BoxGeometry(0.055, 2.3, 0.08), frameMaterial);
    vertical.position.set(2.0 + i * 1.7, 3.2, room.backZ + 0.055);
    roomGroup.add(vertical);
  }
  for (let i = 0; i < 3; i += 1) {
    const horizontal = new THREE.Mesh(new THREE.BoxGeometry(5.85, 0.055, 0.08), frameMaterial);
    horizontal.position.set(4.55, 2.15 + i * 1.05, room.backZ + 0.055);
    roomGroup.add(horizontal);
  }
}

function buildNeonSign() {
  const signTexture = makeSignTexture("270 Degrees Restaurant");
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(10.9, 2.05),
    new THREE.MeshBasicMaterial({
      map: signTexture,
      transparent: true,
      opacity: 0.78,
      depthWrite: false
    })
  );
  sign.position.set(0.15, 5.0, room.backZ + 0.155);
  roomGroup.add(sign);

  const wallWash = new THREE.Mesh(
    new THREE.PlaneGeometry(12.8, 2.75),
    new THREE.MeshBasicMaterial({
      color: 0xff5aa4,
      transparent: true,
      opacity: 0.055,
      depthWrite: false
    })
  );
  wallWash.position.set(0.15, 5.0, room.backZ + 0.145);
  roomGroup.add(wallWash);
}

function buildSofaCorner() {
  const sofaMaterial = new THREE.MeshStandardMaterial({
    color: 0xc6648d,
    roughness: 0.56,
    metalness: 0.04,
    emissive: 0x250612,
    emissiveIntensity: 0.14
  });
  const pillowMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xffc9d9, roughness: 0.86 }),
    new THREE.MeshStandardMaterial({ color: 0xf4a261, roughness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0x60d5cf, roughness: 0.78 })
  ];

  const base = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.55, 1.45), sofaMaterial);
  base.position.set(-3.95, -0.67, 4.0);
  roomGroup.add(base);

  const back = new THREE.Mesh(new THREE.BoxGeometry(4.75, 1.25, 0.28), sofaMaterial);
  back.position.set(-3.95, -0.08, 4.68);
  roomGroup.add(back);

  const armLeft = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.9, 1.6), sofaMaterial);
  armLeft.position.set(-6.44, -0.36, 4.02);
  roomGroup.add(armLeft);

  const armRight = armLeft.clone();
  armRight.position.x = -1.46;
  roomGroup.add(armRight);

  pillowMaterials.forEach((material, index) => {
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.5, 0.18), material);
    pillow.position.set(-5.2 + index * 1.24, 0.05, 4.48);
    pillow.rotation.z = (index - 1) * 0.08;
    roomGroup.add(pillow);
  });
}

function buildDateTable() {
  const wood = new THREE.MeshStandardMaterial({
    color: 0x8a4f33,
    roughness: 0.42,
    metalness: 0.06
  });
  const glass = new THREE.MeshStandardMaterial({
    color: 0xffe7c9,
    roughness: 0.08,
    metalness: 0.1,
    transparent: true,
    opacity: 0.48
  });
  const gold = new THREE.MeshStandardMaterial({
    color: 0xffc66d,
    roughness: 0.26,
    metalness: 0.54,
    emissive: 0x3b1c08,
    emissiveIntensity: 0.2
  });

  const tabletop = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.16, 1.38), wood);
  tabletop.position.set(1.75, -0.48, 2.35);
  roomGroup.add(tabletop);

  const legGeometry = new THREE.CylinderGeometry(0.045, 0.045, 0.95, 14);
  [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]
  ].forEach(([xSign, zSign]) => {
    const leg = new THREE.Mesh(legGeometry, wood);
    leg.position.set(1.75 + xSign * 1.08, -0.94, 2.35 + zSign * 0.52);
    roomGroup.add(leg);
  });

  for (let i = 0; i < 2; i += 1) {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.24, 24), glass);
    cup.position.set(1.45 + i * 0.58, -0.26, 2.2);
    roomGroup.add(cup);

    const drink = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.068, 0.06, 24), gold);
    drink.position.set(cup.position.x, -0.16, cup.position.z);
    roomGroup.add(drink);
  }

  const flowerStem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 0.7, 10),
    new THREE.MeshStandardMaterial({ color: 0x68a85c, roughness: 0.62 })
  );
  flowerStem.position.set(2.35, 0.01, 2.43);
  flowerStem.rotation.z = -0.18;
  roomGroup.add(flowerStem);

  const flower = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 18, 12),
    new THREE.MeshStandardMaterial({
      color: 0xff7ca8,
      roughness: 0.42,
      emissive: 0x401021,
      emissiveIntensity: 0.24
    })
  );
  flower.position.set(2.43, 0.37, 2.43);
  roomGroup.add(flower);
}

function buildShelves() {
  const shelfMaterial = new THREE.MeshStandardMaterial({
    color: 0x6b4536,
    roughness: 0.52,
    metalness: 0.06
  });
  const accentMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xffd18b, roughness: 0.38, emissive: 0x2d1605, emissiveIntensity: 0.16 }),
    new THREE.MeshStandardMaterial({ color: 0x70d6d0, roughness: 0.44, emissive: 0x072321, emissiveIntensity: 0.18 }),
    new THREE.MeshStandardMaterial({ color: 0xf5a6c5, roughness: 0.5, emissive: 0x2a0714, emissiveIntensity: 0.18 })
  ];

  for (let i = 0; i < 3; i += 1) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.08, 0.34), shelfMaterial);
    shelf.position.set(room.leftX + 0.12, 1.4 + i * 0.74, -3.7);
    shelf.rotation.y = Math.PI / 2;
    roomGroup.add(shelf);

    for (let j = 0; j < 4; j += 1) {
      const item = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.34 + (j % 2) * 0.18, 0.16), accentMaterials[(i + j) % accentMaterials.length]);
      item.position.set(room.leftX + 0.28, 1.66 + i * 0.74, -4.65 + j * 0.48);
      roomGroup.add(item);
    }
  }
}

function buildSoftRoomDetails() {
  const lampBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x332330, roughness: 0.44, metalness: 0.28 });
  const shadeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffb6d1,
    roughness: 0.58,
    emissive: 0xff6fa5,
    emissiveIntensity: 0.42
  });

  const lampStand = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.4, 12), lampBaseMaterial);
  lampStand.position.set(6.2, -0.32, 3.8);
  roomGroup.add(lampStand);

  const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.48, 0.54, 24), shadeMaterial);
  lampShade.position.set(6.2, 0.58, 3.8);
  roomGroup.add(lampShade);

  const mirror = new THREE.Mesh(
    new THREE.CircleGeometry(0.82, 48),
    new THREE.MeshStandardMaterial({
      color: 0x20323b,
      roughness: 0.12,
      metalness: 0.62,
      transparent: true,
      opacity: 0.74
    })
  );
  mirror.position.set(room.rightX - 0.12, 2.1, -3.65);
  mirror.rotation.y = -Math.PI / 2;
  roomGroup.add(mirror);

  const mirrorFrame = new THREE.Mesh(
    new THREE.TorusGeometry(0.84, 0.035, 12, 64),
    new THREE.MeshStandardMaterial({ color: 0xffc6da, roughness: 0.42, metalness: 0.18 })
  );
  mirrorFrame.position.copy(mirror.position);
  mirrorFrame.rotation.y = -Math.PI / 2;
  roomGroup.add(mirrorFrame);
}

function buildGallery() {
  memories.forEach((memory, index) => {
    const placement = getWallPlacement(memory, index);

    const group = new THREE.Group();
    group.position.copy(placement.position);
    group.rotation.set(placement.rotation.x, placement.rotation.y, placement.rotation.z);
    group.userData = {
      memory,
      index,
      wall: placement.wall,
      cameraOffset: placement.cameraOffset.clone()
    };

    const isLandscape = memory.aspect > 1;
    const imageHeight = memory.featured ? 1.92 : isLandscape ? 1.28 : 1.55;
    const imageWidth = imageHeight * memory.aspect;
    const frameGeometry = new THREE.PlaneGeometry(imageWidth + 0.22, imageHeight + 0.22);
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: memory.pentagon ? 0xffd18b : memory.featured ? 0xff9fc0 : 0x2b2130,
      roughness: 0.38,
      metalness: memory.pentagon ? 0.42 : 0.14,
      emissive: memory.featured ? 0x3a091b : memory.pentagon ? 0x4a2308 : 0x050408,
      emissiveIntensity: memory.featured ? 0.42 : memory.pentagon ? 0.5 : 0.18
    });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.z = -0.035;
    group.add(frame);

    const photoMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.98
    });
    const photo = new THREE.Mesh(new THREE.PlaneGeometry(imageWidth, imageHeight), photoMaterial);
    photo.userData.cardGroup = group;
    group.add(photo);

    textureLoader.load(memory.image, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      photoMaterial.map = texture;
      photoMaterial.needsUpdate = true;
    });

    const captionTexture = makeCaptionTexture(memory.title, memory.kicker, memory.featured);
    const caption = new THREE.Mesh(
      new THREE.PlaneGeometry(imageWidth + 0.22, 0.46),
      new THREE.MeshBasicMaterial({
        map: captionTexture,
        transparent: true,
        depthWrite: false
      })
    );
    caption.position.set(0, -imageHeight / 2 - 0.36, 0.02);
    group.add(caption);

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(imageWidth + 0.55, imageHeight + 0.92),
      new THREE.MeshBasicMaterial({
        color: memory.featured ? 0xff5aa4 : memory.pentagon ? 0xffd18b : 0xff9fc0,
        transparent: true,
        opacity: 0,
        depthWrite: false
      })
    );
    glow.position.z = -0.07;
    group.add(glow);
    group.userData.glow = glow;

    gallery.add(group);
    cards.push(group);
  });
}

function getWallPlacement(memory, index) {
  const area = memory.area || memoryAreas[memory.title] || "sitting";
  const countsBefore = memories
    .slice(0, index)
    .filter((item) => (item.area || memoryAreas[item.title] || "sitting") === area).length;
  const placement = getApartmentPlacement(area, countsBefore);
  return {
    wall: area,
    position: placement.position,
    rotation: placement.rotation,
    cameraOffset: placement.cameraOffset
  };
}

function getApartmentPlacement(area, count) {
  const placements = {
    sitting: [
      { position: new THREE.Vector3(-4.75, 2.15, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, -0.02), cameraOffset: new THREE.Vector3(0, 0.55, 4.7) },
      { position: new THREE.Vector3(-1.55, 2.22, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.7) },
      { position: new THREE.Vector3(1.65, 2.22, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, -0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.7) },
      { position: new THREE.Vector3(4.75, 2.15, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.02), cameraOffset: new THREE.Vector3(0, 0.55, 4.7) },
      { position: new THREE.Vector3(room.sitting.minX + 0.18, 2.08, 4.9), rotation: new THREE.Euler(0, Math.PI / 2, 0.01), cameraOffset: new THREE.Vector3(4.5, 0.55, 0) },
      { position: new THREE.Vector3(room.sitting.maxX - 0.18, 2.08, 4.9), rotation: new THREE.Euler(0, -Math.PI / 2, -0.01), cameraOffset: new THREE.Vector3(-4.5, 0.55, 0) }
    ],
    desk: [
      { position: new THREE.Vector3(room.sitting.minX + 0.18, 2.25, 1.55), rotation: new THREE.Euler(0, Math.PI / 2, 0), cameraOffset: new THREE.Vector3(4.3, 0.55, 0) },
      { position: new THREE.Vector3(room.sitting.minX + 0.18, 4.12, 2.95), rotation: new THREE.Euler(0, Math.PI / 2, -0.02), cameraOffset: new THREE.Vector3(4.3, 0.4, 0) },
      { position: new THREE.Vector3(-4.25, 4.35, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.01), cameraOffset: new THREE.Vector3(0, 0.35, 4.7) },
      { position: new THREE.Vector3(-2.45, 4.35, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, -0.01), cameraOffset: new THREE.Vector3(0, 0.35, 4.7) }
    ],
    music: [
      { position: new THREE.Vector3(room.sitting.maxX - 0.18, 2.2, 5.65), rotation: new THREE.Euler(0, -Math.PI / 2, 0.02), cameraOffset: new THREE.Vector3(-4.4, 0.55, 0) },
      { position: new THREE.Vector3(room.sitting.maxX - 0.18, 4.05, 4.25), rotation: new THREE.Euler(0, -Math.PI / 2, -0.02), cameraOffset: new THREE.Vector3(-4.4, 0.4, 0) },
      { position: new THREE.Vector3(3.4, 4.32, room.sitting.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.01), cameraOffset: new THREE.Vector3(0, 0.35, 4.7) }
    ],
    bedroom: [
      { position: new THREE.Vector3(3.05, 2.1, room.bedroom.minZ + 0.18), rotation: new THREE.Euler(0, 0, -0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(5.4, 2.16, room.bedroom.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(7.65, 2.1, room.bedroom.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(room.bedroom.maxX - 0.18, 2.42, -3.75), rotation: new THREE.Euler(0, -Math.PI / 2, -0.01), cameraOffset: new THREE.Vector3(-4.25, 0.55, 0) },
      { position: new THREE.Vector3(room.bedroom.minX + 0.18, 2.35, -3.75), rotation: new THREE.Euler(0, Math.PI / 2, 0.01), cameraOffset: new THREE.Vector3(4.25, 0.55, 0) }
    ],
    kitchen: [
      { position: new THREE.Vector3(-7.55, 2.15, room.kitchen.minZ + 0.18), rotation: new THREE.Euler(0, 0, -0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(-5.35, 2.15, room.kitchen.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(-3.15, 2.15, room.kitchen.minZ + 0.18), rotation: new THREE.Euler(0, 0, 0.01), cameraOffset: new THREE.Vector3(0, 0.55, 4.25) },
      { position: new THREE.Vector3(room.kitchen.minX + 0.18, 2.34, -3.05), rotation: new THREE.Euler(0, Math.PI / 2, 0.01), cameraOffset: new THREE.Vector3(4.25, 0.55, 0) }
    ],
    balcony: [
      { position: new THREE.Vector3(-7.35, 2.1, room.balcony.minZ + 0.16), rotation: new THREE.Euler(0, 0, -0.02), cameraOffset: new THREE.Vector3(0, 0.55, 2.45) },
      { position: new THREE.Vector3(-5.4, 2.16, room.balcony.minZ + 0.16), rotation: new THREE.Euler(0, 0, 0), cameraOffset: new THREE.Vector3(0, 0.55, 2.45) },
      { position: new THREE.Vector3(-3.45, 2.12, room.balcony.minZ + 0.16), rotation: new THREE.Euler(0, 0, 0.02), cameraOffset: new THREE.Vector3(0, 0.55, 1.65) }
    ]
  };
  const list = placements[area] || placements.sitting;
  const placement = list[Math.min(count, list.length - 1)];
  if (count >= list.length) {
    return {
      ...placement,
      position: placement.position.clone().add(new THREE.Vector3(0, 1.35, 0))
    };
  }
  return placement;
}

function buildHeartField() {
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0.22);
  heartShape.bezierCurveTo(0.5, 0.72, 1.28, 0.26, 0.82, -0.42);
  heartShape.bezierCurveTo(0.55, -0.82, 0.1, -1.08, 0, -1.24);
  heartShape.bezierCurveTo(-0.1, -1.08, -0.55, -0.82, -0.82, -0.42);
  heartShape.bezierCurveTo(-1.28, 0.26, -0.5, 0.72, 0, 0.22);

  const geometry = new THREE.ShapeGeometry(heartShape);
  const palette = [0xff9fc0, 0xffd18b, 0xd94c78, 0x70d6d0];
  for (let i = 0; i < 70; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: palette[i % palette.length],
      transparent: true,
      opacity: 0.18 + Math.random() * 0.22,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const heart = new THREE.Mesh(geometry, material);
    heart.position.set(
      -8.5 + Math.random() * 17,
      0.15 + Math.random() * 5.0,
      -9 + Math.random() * 15.5
    );
    const scale = 0.035 + Math.random() * 0.09;
    heart.scale.setScalar(scale);
    heart.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    heart.userData.floatSpeed = 0.16 + Math.random() * 0.4;
    heart.userData.baseY = heart.position.y;
    heart.userData.phase = Math.random() * Math.PI * 2;
    heartField.add(heart);
  }
}

function buildChatBeats() {
  chatBeats.forEach((beat, index) => {
    const texture = makeTextTexture(beat, index, 860, 220, {
      fontSize: 31,
      title: index % 3 === 0 ? "Saved beat" : ""
    });
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.88,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.95, 0.76), material);
    const lane = index % 4;
    mesh.position.set(-6 + lane * 4, 5.34 + (index % 2) * 0.24, -5.75 + Math.floor(index / 4) * 2.08);
    mesh.rotation.x = -0.16;
    mesh.userData.phase = index * 0.6;
    chatGroup.add(mesh);
  });
}

function buildLongMessageWall() {
  const slots = [
    { x: room.sitting.minX + 0.18, y: 5.55, z: 1.4, ry: Math.PI / 2 },
    { x: room.sitting.minX + 0.18, y: 5.55, z: 3.4, ry: Math.PI / 2 },
    { x: room.sitting.maxX - 0.18, y: 5.55, z: 3.4, ry: -Math.PI / 2 },
    { x: room.sitting.maxX - 0.18, y: 5.55, z: 5.4, ry: -Math.PI / 2 },
    { x: room.bedroom.maxX - 0.18, y: 5.55, z: -4.8, ry: -Math.PI / 2 },
    { x: room.bedroom.minX + 0.18, y: 5.55, z: -4.8, ry: Math.PI / 2 },
    { x: room.kitchen.minX + 0.18, y: 5.55, z: -4.8, ry: Math.PI / 2 },
    { x: room.kitchen.maxX - 0.18, y: 5.55, z: -4.8, ry: -Math.PI / 2 },
    { x: -7.4, y: 4.75, z: room.balcony.minZ + 0.16, ry: 0 },
    { x: -5.4, y: 4.75, z: room.balcony.minZ + 0.16, ry: 0 },
    { x: -3.4, y: 4.75, z: room.balcony.minZ + 0.16, ry: 0 },
    { x: 2.35, y: 5.55, z: room.bedroom.minZ + 0.18, ry: 0 },
    { x: 5.4, y: 5.55, z: room.bedroom.minZ + 0.18, ry: 0 },
    { x: -7.4, y: 5.55, z: room.kitchen.minZ + 0.18, ry: 0 },
    { x: -3.4, y: 5.55, z: room.kitchen.minZ + 0.18, ry: 0 }
  ];
  wallMessages.forEach((message, index) => {
    const texture = makeTextTexture(message.text, index + 20, 980, 340, {
      fontSize: 24,
      lineHeight: 34,
      title: message.title
    });
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.62,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.58, 0.55), material);
    const slot = slots[index % slots.length];
    mesh.position.set(slot.x, slot.y, slot.z);
    mesh.rotation.y = slot.ry;
    mesh.userData.phase = index * 0.5;
    messageGroup.add(mesh);
  });
}

function buildPentagon() {
  const points = [];
  for (let i = 0; i < 5; i += 1) {
    const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
    points.push(new THREE.Vector3(Math.cos(angle) * 1.25, Math.sin(angle) * 1.25, 0));
  }
  points.push(points[0].clone());

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: 0xffd18b, transparent: true, opacity: 0.86 })
  );
  pentagonGroup.add(line);

  const nodeGeometry = new THREE.SphereGeometry(0.1, 24, 16);
  pentagonNames.forEach((name, index) => {
    const node = new THREE.Mesh(
      nodeGeometry,
      new THREE.MeshStandardMaterial({
        color: index === 1 ? 0xff9fc0 : 0x70d6d0,
        emissive: index === 1 ? 0x40150d : 0x0b302f,
        emissiveIntensity: 0.8,
        roughness: 0.34
      })
    );
    node.position.copy(points[index]);
    node.userData.name = name;
    pentagonGroup.add(node);
  });

  const labelTexture = makeTextTexture("Pentagon 5", 10, 620, 150, { fontSize: 34 });
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(2.05, 0.5),
    new THREE.MeshBasicMaterial({
      map: labelTexture,
      transparent: true,
      depthWrite: false
    })
  );
  label.position.y = -1.78;
  pentagonGroup.add(label);
  pentagonGroup.position.set(0, 2.05, 0.9);
  pentagonGroup.visible = false;
}

function makeSignTexture(text) {
  const pixelRatio = 2;
  const width = 1900;
  const height = 420;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgba(255, 154, 199, 0.03)");
  gradient.addColorStop(0.45, "rgba(255, 154, 199, 0.28)");
  gradient.addColorStop(1, "rgba(255, 209, 139, 0.12)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.shadowColor = "rgba(255, 92, 170, 0.42)";
  ctx.shadowBlur = 42;
  ctx.fillStyle = "rgba(255, 223, 236, 0.48)";
  ctx.font = "900 150px Georgia, 'Times New Roman', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2 - 22);

  ctx.shadowBlur = 0;
  ctx.font = "800 32px Inter, Arial, sans-serif";
  ctx.fillStyle = "rgba(255, 247, 236, 0.22)";
  ctx.fillText("Tamambo date  |  RayBee  |  flowers  |  Oontz  |  notes  |  gallery", width / 2, height - 96);

  ctx.font = "700 22px Inter, Arial, sans-serif";
  ctx.fillStyle = "rgba(112, 214, 208, 0.18)";
  ctx.fillText("painted into the background, because this was only one landmark in the whole room", width / 2, height - 54);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeCaptionTexture(title, kicker, featured = false) {
  const pixelRatio = 2;
  const width = 780;
  const height = 170;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = featured ? "rgba(255, 183, 211, 0.22)" : "rgba(16, 12, 18, 0.78)";
  roundedRect(ctx, 0, 0, width, height, 24);
  ctx.fill();
  ctx.strokeStyle = featured ? "rgba(255, 209, 139, 0.68)" : "rgba(255, 159, 192, 0.48)";
  ctx.lineWidth = 4;
  roundedRect(ctx, 2, 2, width - 4, height - 4, 22);
  ctx.stroke();

  ctx.fillStyle = "#ffd18b";
  ctx.font = "800 24px Inter, Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(kicker.toUpperCase(), 34, 54);

  ctx.fillStyle = "#fff7ec";
  ctx.font = "800 42px Georgia, 'Times New Roman', serif";
  ctx.fillText(title, 34, 112);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeTextTexture(text, seed, width = 860, height = 230, options = {}) {
  const pixelRatio = 2;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  ctx.clearRect(0, 0, width, height);
  const isAlt = seed % 2;
  ctx.fillStyle = isAlt ? "rgba(21, 15, 24, 0.78)" : "rgba(255, 214, 231, 0.18)";
  roundedRect(ctx, 0, 0, width, height, 26);
  ctx.fill();
  ctx.strokeStyle = isAlt ? "rgba(112, 214, 208, 0.58)" : "rgba(255, 159, 192, 0.62)";
  ctx.lineWidth = 3;
  roundedRect(ctx, 2, 2, width - 4, height - 4, 24);
  ctx.stroke();

  let textY = options.title ? 96 : 70;
  if (options.title) {
    ctx.fillStyle = "#ffd18b";
    ctx.font = "800 26px Inter, Arial, sans-serif";
    ctx.fillText(options.title.toUpperCase(), 36, 52);
  }

  ctx.fillStyle = "#fff7ec";
  ctx.font = `700 ${options.fontSize || 34}px Inter, Arial, sans-serif`;
  wrapCanvasText(ctx, text, 36, textY, width - 72, options.lineHeight || 42, height - 34);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeLetterTexture(title, text, seed, paperColor = "#fff0de") {
  const pixelRatio = 2;
  const width = 840;
  const height = 540;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, paperColor);
  gradient.addColorStop(1, seed % 2 ? "#ffdbe9" : "#fff8ed");
  ctx.fillStyle = gradient;
  roundedRect(ctx, 0, 0, width, height, 28);
  ctx.fill();

  ctx.strokeStyle = "rgba(126, 73, 96, 0.28)";
  ctx.lineWidth = 5;
  roundedRect(ctx, 8, 8, width - 16, height - 16, 24);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 159, 192, 0.34)";
  ctx.fillRect(62, 132, width - 124, 3);
  for (let y = 184; y < height - 54; y += 44) {
    ctx.fillStyle = "rgba(126, 73, 96, 0.13)";
    ctx.fillRect(62, y, width - 124, 2);
  }

  ctx.fillStyle = "#7b3c57";
  ctx.font = "900 38px Georgia, 'Times New Roman', serif";
  ctx.fillText(title, 62, 88);

  ctx.fillStyle = "#4a2d38";
  ctx.font = "700 31px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, text, 62, 168, width - 124, 39, height - 74);

  ctx.fillStyle = "rgba(217, 76, 120, 0.42)";
  ctx.font = "800 28px Inter, Arial, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("RayBee", width - 62, height - 36);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxY = Infinity) {
  const words = text.split(" ");
  let line = "";
  let drawY = y;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      if (drawY <= maxY) {
        ctx.fillText(line.trim(), x, drawY);
      }
      line = `${word} `;
      drawY += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (drawY <= maxY) {
    ctx.fillText(line.trim(), x, drawY);
  }
}

function setupJoystick() {
  if (!joystick || !joystickKnob) {
    return;
  }

  const updateJoystick = (event) => {
    if (joystickState.pointerId !== event.pointerId) {
      return;
    }
    const rect = joystick.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxDistance = rect.width * 0.32;
    const rawX = event.clientX - centerX;
    const rawY = event.clientY - centerY;
    const length = Math.hypot(rawX, rawY);
    const scale = length > maxDistance ? maxDistance / length : 1;
    const knobX = rawX * scale;
    const knobY = rawY * scale;

    joystickState.x = knobX / maxDistance;
    joystickState.y = knobY / maxDistance;
    joystickKnob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;
  };

  const resetJoystick = (event) => {
    if (joystickState.pointerId !== event.pointerId) {
      return;
    }
    joystickState.pointerId = null;
    joystickState.x = 0;
    joystickState.y = 0;
    joystickKnob.style.transform = "translate(-50%, -50%)";
  };

  joystick.addEventListener("pointerdown", (event) => {
    joystickState.pointerId = event.pointerId;
    joystick.setPointerCapture(event.pointerId);
    updateJoystick(event);
  });
  joystick.addEventListener("pointermove", updateJoystick);
  joystick.addEventListener("pointerup", resetJoystick);
  joystick.addEventListener("pointercancel", resetJoystick);
}

function setupLookControls() {
  const startLook = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    lookState.pointerId = event.pointerId;
    lookState.lastX = event.clientX;
    lookState.lastY = event.clientY;
    lookState.dragDistance = 0;
    lookState.active = true;
    canvas.setPointerCapture(event.pointerId);
  };

  const moveLook = (event) => {
    if (!lookState.active || event.pointerId !== lookState.pointerId) {
      return;
    }
    const dx = event.clientX - lookState.lastX;
    const dy = event.clientY - lookState.lastY;
    lookState.lastX = event.clientX;
    lookState.lastY = event.clientY;
    lookState.dragDistance += Math.abs(dx) + Math.abs(dy);
    view.yaw -= dx * LOOK_YAW_SPEED;
    view.pitch = THREE.MathUtils.clamp(view.pitch - dy * LOOK_PITCH_SPEED, LOOK_PITCH_MIN, LOOK_PITCH_MAX);
  };

  const endLook = (event) => {
    if (event.pointerId !== lookState.pointerId) {
      return;
    }
    lookState.active = false;
    lookState.pointerId = null;
  };

  canvas.addEventListener("pointerdown", startLook);
  canvas.addEventListener("pointermove", moveLook);
  canvas.addEventListener("pointerup", endLook);
  canvas.addEventListener("pointercancel", endLook);
}

function updateAvatar(delta, elapsed) {
  const forwardInput =
    (isPressed("w") || isPressed("arrowup") ? 1 : 0) -
    (isPressed("s") || isPressed("arrowdown") ? 1 : 0) -
    joystickState.y;
  const rightInput =
    (isPressed("d") || isPressed("arrowright") ? 1 : 0) -
    (isPressed("a") || isPressed("arrowleft") ? 1 : 0) +
    joystickState.x;

  forwardVector.set(Math.sin(view.yaw), 0, Math.cos(view.yaw));
  rightVector.set(Math.cos(view.yaw), 0, -Math.sin(view.yaw));
  moveVector
    .copy(forwardVector)
    .multiplyScalar(forwardInput)
    .addScaledVector(rightVector, rightInput);

  avatar.isMoving = moveVector.lengthSq() > 0.015;
  if (avatar.isMoving) {
    if (!hasMovedOnce) {
      hasMovedOnce = true;
      controlsHint?.classList.remove("is-visible");
    }
    moveVector.normalize();
    proposedPosition.copy(avatarGroup.position).addScaledVector(moveVector, avatar.speed * delta);
    applyAvatarMove(proposedPosition.x, proposedPosition.z);

    const targetHeading = Math.atan2(moveVector.x, moveVector.z);
    avatar.heading = lerpAngle(avatar.heading, targetHeading, 1 - Math.exp(-10 * delta));
    avatar.walkCycle += delta * 9.2;
  } else {
    avatar.walkCycle += delta * 2.4;
  }

  avatarGroup.rotation.y = avatar.heading;
  animateAvatar(elapsed);
}

function animateAvatar(elapsed) {
  const stride = avatar.isMoving ? Math.sin(avatar.walkCycle) : Math.sin(elapsed * 1.7) * 0.12;
  const bounce = avatar.isMoving ? Math.abs(Math.sin(avatar.walkCycle * 2)) * 0.035 : Math.sin(elapsed * 1.4) * 0.008;

  avatarGroup.position.y = room.floorY + 0.02 + bounce;
  avatar.parts.body.rotation.x = avatar.isMoving ? Math.sin(avatar.walkCycle * 2) * 0.025 : 0;
  avatar.parts.head.rotation.y = Math.sin(elapsed * 0.8) * 0.05;
  avatar.parts.leftArm.rotation.x = stride * 0.48;
  avatar.parts.rightArm.rotation.x = -stride * 0.48;
  avatar.parts.leftHand.position.z = 0.03 + stride * 0.14;
  avatar.parts.rightHand.position.z = 0.03 - stride * 0.14;
  avatar.parts.leftLeg.rotation.x = -stride * 0.42;
  avatar.parts.rightLeg.rotation.x = stride * 0.42;
  avatar.parts.leftShoe.position.z = 0.08 - stride * 0.08;
  avatar.parts.rightShoe.position.z = 0.08 + stride * 0.08;
}

function isPressed(key) {
  return pressedKeys.has(key);
}

function applyAvatarMove(nextX, nextZ) {
  if (isAllowedAvatarPosition(nextX, nextZ)) {
    setAvatarPosition(nextX, nextZ);
    return;
  }

  if (isAllowedAvatarPosition(nextX, avatarGroup.position.z)) {
    setAvatarPosition(nextX, avatarGroup.position.z);
    return;
  }

  if (isAllowedAvatarPosition(avatarGroup.position.x, nextZ)) {
    setAvatarPosition(avatarGroup.position.x, nextZ);
  }
}

function isAllowedAvatarPosition(x, z) {
  return isInsideZones(walkZones, x, z, avatar.radius) && !hitsFurniture(x, z, avatar.radius);
}

function isInsideZones(zones, x, z, radius = 0) {
  return zones.some((zone) => (
    x >= zone.minX + radius &&
    x <= zone.maxX - radius &&
    z >= zone.minZ + radius &&
    z <= zone.maxZ - radius
  ));
}

function hitsFurniture(x, z, radius) {
  return furnitureColliders.some((item) => (
    x >= item.minX - radius &&
    x <= item.maxX + radius &&
    z >= item.minZ - radius &&
    z <= item.maxZ + radius
  ));
}

function updateWalkCamera(immediate = false) {
  if (cameraMode !== "walk") {
    return;
  }

  forwardVector.set(Math.sin(view.yaw), 0, Math.cos(view.yaw));
  const isSmallScreen = window.innerWidth <= 760;

  const distance = isSmallScreen ? 6.35 : 5.8;
  const height = (isSmallScreen ? 4.05 : 3.35) + view.pitch * 2.5;
  const lookAhead = isSmallScreen ? 0.6 : 1.65;
  const cameraPosition = getFollowCameraPosition(distance, height);

  targetCamera.position.copy(cameraPosition);
  targetCamera.lookAt
    .copy(avatarGroup.position)
    .addScaledVector(forwardVector, lookAhead);
  targetCamera.lookAt.y = room.floorY + (isSmallScreen ? 1.32 : 1.2) - view.pitch * 1.7;

  if (immediate) {
    camera.position.copy(targetCamera.position);
    controls.target.copy(targetCamera.lookAt);
    camera.lookAt(controls.target);
  }
}

function getFollowCameraPosition(distance, height) {
  for (let offset = distance; offset >= 2.35; offset -= 0.35) {
    proposedPosition
      .copy(avatarGroup.position)
      .addScaledVector(forwardVector, -offset);
    proposedPosition.y = room.floorY + height;
    if (isInsideZones(cameraZones, proposedPosition.x, proposedPosition.z, 0.05)) {
      return proposedPosition.clone();
    }
  }

  return proposedPosition
    .copy(avatarGroup.position)
    .addScaledVector(forwardVector, -2.35)
    .setY(room.floorY + height)
    .clone();
}

function updateNearbyMemory() {
  let bestCard = null;
  let bestDistance = Infinity;

  cards.forEach((card) => {
    card.getWorldPosition(tempWorldPosition);
    const distance = Math.hypot(
      tempWorldPosition.x - avatarGroup.position.x,
      tempWorldPosition.z - avatarGroup.position.z
    );
    if (distance < bestDistance && distance < 2.9) {
      bestDistance = distance;
      bestCard = card;
    }
  });

  nearbyCard = bestCard;
  if (interactBtn) {
    interactBtn.disabled = !nearbyCard;
  }

  const panelsClosed = !storyPanel.classList.contains("is-open") && !finalNote.classList.contains("is-open");

  if (nearbyCard && panelsClosed) {
    currentTitle.textContent = nearbyCard.userData.memory.title;
    movementStatus.textContent = "Nearby memory";
    showMemoryPrompt(nearbyCard);
    return;
  }

  hideMemoryPrompt();

  if (panelsClosed) {
    currentTitle.textContent = memories[selectedIndex].title;
    movementStatus.textContent = "Walking with Bee";
  }
}

function isTouchLayout() {
  return window.innerWidth <= 760 || window.matchMedia("(pointer: coarse)").matches;
}

function showMemoryPrompt(card) {
  if (!memoryPrompt || nearbyPromptCard === card) {
    return;
  }
  nearbyPromptCard = card;
  memoryPromptTitle.textContent = card.userData.memory.title;
  memoryPromptHint.textContent = isTouchLayout()
    ? "Tap View below to open this memory"
    : "Press E or Space to open this memory";
  memoryPrompt.classList.add("is-visible");
}

function hideMemoryPrompt() {
  if (!memoryPrompt || nearbyPromptCard === null) {
    return;
  }
  nearbyPromptCard = null;
  memoryPrompt.classList.remove("is-visible");
}

function openNearbyMemory() {
  if (nearbyCard) {
    focusMemory(nearbyCard.userData.index);
    return;
  }
  focusMemory(selectedIndex);
}

function moveAvatarNearCard(card) {
  card.getWorldPosition(tempWorldPosition);
  card.getWorldQuaternion(tempQuaternion);
  tempNormal.set(0, 0, 1).applyQuaternion(tempQuaternion).normalize();

  const preferredX = tempWorldPosition.x + tempNormal.x * 1.95;
  const preferredZ = tempWorldPosition.z + tempNormal.z * 1.95;
  const candidate = findNearestWalkablePoint(preferredX, preferredZ, tempWorldPosition.x, tempWorldPosition.z);
  setAvatarPosition(candidate.x, candidate.z);

  const lookDirectionX = tempWorldPosition.x - avatarGroup.position.x;
  const lookDirectionZ = tempWorldPosition.z - avatarGroup.position.z;
  if (Math.hypot(lookDirectionX, lookDirectionZ) > 0.01) {
    avatar.heading = Math.atan2(lookDirectionX, lookDirectionZ);
    avatarGroup.rotation.y = avatar.heading;
  }
  cameraMode = "walk";
  updateWalkCamera(true);
}

function findNearestWalkablePoint(preferredX, preferredZ, focusX, focusZ) {
  if (isAllowedAvatarPosition(preferredX, preferredZ)) {
    return { x: preferredX, z: preferredZ };
  }

  for (let radius = 1.2; radius <= 4.2; radius += 0.42) {
    for (let step = 0; step < 18; step += 1) {
      const angle = (step / 18) * Math.PI * 2;
      const x = focusX + Math.cos(angle) * radius;
      const z = focusZ + Math.sin(angle) * radius;
      if (isAllowedAvatarPosition(x, z)) {
        return { x, z };
      }
    }
  }

  return { x: avatarGroup.position.x, z: avatarGroup.position.z };
}

function lerpAngle(from, to, alpha) {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * THREE.MathUtils.clamp(alpha, 0, 1);
}

async function beginExperience() {
  started = true;
  intro.classList.add("is-hidden");
  storyPanel.classList.remove("is-open");
  finalNote.classList.remove("is-open");
  cameraMode = "walk";
  showControlsHint();
  try {
    await audio.play();
    musicBtn.textContent = "Pause song";
  } catch {
    musicBtn.textContent = audioReady ? "Play song" : "Music";
  }
}

function showControlsHint() {
  if (!controlsHint) {
    return;
  }
  controlsHint.textContent = isTouchLayout()
    ? "Drag the joystick to move · Drag the screen to look around · Tap View near a memory"
    : "WASD or arrow keys to move · Drag the mouse to look around · Press E or Space near a memory";
  controlsHint.classList.add("is-visible");
  window.setTimeout(() => controlsHint.classList.remove("is-visible"), 6500);
}

async function toggleMusic() {
  if (audio.paused) {
    try {
      await audio.play();
      musicBtn.textContent = "Pause song";
    } catch {
      musicBtn.textContent = "Play song";
    }
  } else {
    audio.pause();
    musicBtn.textContent = "Play song";
  }
}

function focusMemory(rawIndex, openPanel = true, guideAvatar = false) {
  const index = (rawIndex + memories.length) % memories.length;
  selectedIndex = index;
  const card = cards[index];
  const memory = memories[index];
  currentTitle.textContent = memory.title;
  storyImage.src = memory.image;
  storyImage.alt = memory.title;
  storyKicker.textContent = memory.kicker;
  storyTitle.textContent = memory.title;
  storyText.textContent = memory.text;
  pentagonMode = Boolean(memory.pentagon);
  pentagonGroup.visible = pentagonMode;

  followSelected = false;
  cameraMode = "walk";
  if (guideAvatar) {
    moveAvatarNearCard(card);
  }

  if (openPanel && started) {
    storyPanel.classList.add("is-open");
    finalNote.classList.remove("is-open");
  } else if (openPanel) {
    started = true;
    intro.classList.add("is-hidden");
    storyPanel.classList.add("is-open");
    finalNote.classList.remove("is-open");
  }
}

function showFinalNote() {
  if (!started) {
    intro.classList.add("is-hidden");
    started = true;
  }
  storyPanel.classList.remove("is-open");
  finalNote.classList.add("is-open");
  followSelected = false;
  cameraMode = "overview";
  targetCamera.position.set(0, 4.1, 12.5);
  targetCamera.lookAt.set(0, 1.7, -1.8);
}

function updateCameraTargetFromCard(card) {
  card.getWorldPosition(tempWorldPosition);
  tempCameraOffset.copy(card.userData.cameraOffset);
  targetCamera.position.copy(tempWorldPosition).add(tempCameraOffset);
  targetCamera.position.x = THREE.MathUtils.clamp(targetCamera.position.x, -9.8, 9.8);
  targetCamera.position.z = THREE.MathUtils.clamp(targetCamera.position.z, -10.2, 9.0);
  targetCamera.position.y = THREE.MathUtils.clamp(targetCamera.position.y, 1.6, 5.6);
  targetCamera.lookAt.copy(tempWorldPosition);
  targetCamera.lookAt.y += card.userData.memory.featured ? -0.05 : -0.18;
}

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  updateHover();
}

function updateHover() {
  raycaster.setFromCamera(pointer, camera);
  const photoMeshes = cards.map((card) => card.children[1]);
  const hits = raycaster.intersectObjects(photoMeshes, false);
  hoveredCard = hits.length ? hits[0].object.userData.cardGroup : null;
  canvas.classList.toggle("is-hovering", Boolean(hoveredCard));
}

function onSceneClick(event) {
  if (event.target !== canvas || !hoveredCard || lookState.dragDistance > LOOK_CLICK_THRESHOLD) {
    return;
  }
  focusMemory(hoveredCard.userData.index);
}

function onKeydown(event) {
  const key = event.key.toLowerCase();
  if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
    pressedKeys.add(key);
    event.preventDefault();
  }
  if (key === "enter" || key === " " || key === "e") {
    openNearbyMemory();
    event.preventDefault();
  }
  if (key === "p") {
    focusMemory(memories.findIndex((memory) => memory.pentagon), true, true);
  }
  if (key === "[" || key === ",") {
    focusMemory(selectedIndex - 1, true, true);
  }
  if (key === "]" || key === ".") {
    focusMemory(selectedIndex + 1, true, true);
  }
}

function onKeyup(event) {
  pressedKeys.delete(event.key.toLowerCase());
}

function onResize() {
  applyResponsiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateWalkCamera(true);
}

function applyResponsiveCamera() {
  camera.fov = window.innerWidth <= 760 ? 58 : 48;
}

function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;
  updateAvatar(delta, elapsed);
  updateWalkCamera();
  updateNearbyMemory();

  chatGroup.children.forEach((card, index) => {
    card.position.y += Math.sin(elapsed * 0.7 + index) * 0.0014;
  });
  messageGroup.children.forEach((card, index) => {
    card.position.y += Math.sin(elapsed * 0.55 + index) * 0.0009;
  });
  pentagonGroup.rotation.z = Math.sin(elapsed * 0.8) * 0.05;
  pentagonGroup.rotation.y = Math.sin(elapsed * 0.45) * 0.15;

  if (followSelected && cards[selectedIndex]) {
    updateCameraTargetFromCard(cards[selectedIndex]);
  }

  camera.position.lerp(targetCamera.position, 0.075);
  controls.target.lerp(targetCamera.lookAt, 0.085);
  camera.lookAt(controls.target);

  cards.forEach((card, index) => {
    const isActive = index === selectedIndex;
    const isNearby = card === nearbyCard;
    const isHover = card === hoveredCard;
    const targetScale = isActive ? 1.12 : isNearby ? 1.1 : isHover ? 1.08 : 1;
    card.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    card.userData.glow.material.opacity = isActive ? 0.3 : isNearby ? 0.24 : isHover ? 0.18 : 0;
  });

  heartField.children.forEach((heart) => {
    heart.position.y = heart.userData.baseY + Math.sin(elapsed * heart.userData.floatSpeed + heart.userData.phase) * 0.22;
    heart.rotation.z += 0.006;
  });

  renderer.render(scene, camera);
}
