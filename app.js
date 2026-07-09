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
  }
];

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
  "His and Hers."
];

const pentagonNames = ["Ray", "Bee", "Mike", "Mel", "Qwarra"];
const room = {
  width: 16,
  depth: 12,
  height: 7.2,
  backZ: -5.7,
  leftX: -7.8,
  rightX: 7.8
};

const canvas = document.querySelector("#love-scene");
const intro = document.querySelector("#intro");
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

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x120b12);
scene.fog = new THREE.FogExp2(0x160f18, 0.022);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2.9, 10.8);

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
controls.minDistance = 4.8;
controls.maxDistance = 16;
controls.maxPolarAngle = Math.PI * 0.62;
controls.minPolarAngle = Math.PI * 0.2;
controls.target.set(0, 1.65, -1.2);

const textureLoader = new THREE.TextureLoader();
const gallery = new THREE.Group();
const heartField = new THREE.Group();
const chatGroup = new THREE.Group();
const pentagonGroup = new THREE.Group();
const messageGroup = new THREE.Group();
const roomGroup = new THREE.Group();
scene.add(roomGroup, gallery, heartField, chatGroup, pentagonGroup, messageGroup);

let selectedIndex = 0;
let hoveredCard = null;
let started = false;
let pentagonMode = false;
let followSelected = true;
const cards = [];
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const clock = new THREE.Clock();
const tempWorldPosition = new THREE.Vector3();
const tempCameraOffset = new THREE.Vector3();

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
buildGallery();
buildHeartField();
buildChatBeats();
buildLongMessageWall();
buildPentagon();
focusMemory(0, false);

beginBtn.addEventListener("click", beginExperience);
prevBtn.addEventListener("click", () => focusMemory(selectedIndex - 1));
nextBtn.addEventListener("click", () => focusMemory(selectedIndex + 1));
pentagonBtn.addEventListener("click", () => focusMemory(memories.findIndex((memory) => memory.pentagon)));
finalBtn.addEventListener("click", showFinalNote);
musicBtn.addEventListener("click", toggleMusic);
closeStory.addEventListener("click", () => storyPanel.classList.remove("is-open"));
closeFinal.addEventListener("click", () => finalNote.classList.remove("is-open"));
window.addEventListener("resize", onResize);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("click", onSceneClick);
window.addEventListener("keydown", onKeydown);

renderer.setAnimationLoop(animate);

function buildLights() {
  scene.add(new THREE.HemisphereLight(0xffd5e5, 0x2a1b29, 1.5));

  const windowGlow = new THREE.DirectionalLight(0xffb0c8, 2.5);
  windowGlow.position.set(-4, 7, 6);
  scene.add(windowGlow);

  const signGlow = new THREE.PointLight(0xff5aa4, 32, 20);
  signGlow.position.set(0, 4.6, -4.6);
  scene.add(signGlow);

  const tealLamp = new THREE.PointLight(0x63d7cf, 14, 14);
  tealLamp.position.set(5.4, 2.4, 1.8);
  scene.add(tealLamp);

  const tableWarmth = new THREE.PointLight(0xffd18b, 18, 13);
  tableWarmth.position.set(-3.4, 1.55, 2.6);
  scene.add(tableWarmth);
}

function buildMemoryRoom() {
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x4b302c,
    roughness: 0.58,
    metalness: 0.05
  });
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0x3f2637,
    roughness: 0.74,
    metalness: 0.02
  });
  const sideWallMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e2534,
    roughness: 0.78,
    metalness: 0.02
  });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(room.width, 0.18, room.depth), floorMaterial);
  floor.position.set(0, -1.15, 0);
  roomGroup.add(floor);

  const rug = new THREE.Mesh(
    new THREE.BoxGeometry(8.8, 0.04, 5.7),
    new THREE.MeshStandardMaterial({
      color: 0xe690b1,
      roughness: 0.92,
      metalness: 0,
      emissive: 0x210612,
      emissiveIntensity: 0.16
    })
  );
  rug.position.set(0, -1.02, 1.1);
  roomGroup.add(rug);

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(room.width, room.height, 0.2), wallMaterial);
  backWall.position.set(0, 2.35, room.backZ);
  roomGroup.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, room.height, room.depth), sideWallMaterial);
  leftWall.position.set(room.leftX, 2.35, 0);
  roomGroup.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, room.height, room.depth), sideWallMaterial);
  rightWall.position.set(room.rightX, 2.35, 0);
  roomGroup.add(rightWall);

  const ceiling = new THREE.Mesh(
    new THREE.BoxGeometry(room.width, 0.14, room.depth),
    new THREE.MeshStandardMaterial({
      color: 0x1d1822,
      roughness: 0.8,
      metalness: 0.02
    })
  );
  ceiling.position.set(0, room.height - 1.16, 0);
  roomGroup.add(ceiling);

  buildWindowWall();
  buildNeonSign();
  buildSofaCorner();
  buildDateTable();
  buildSoftRoomDetails();
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
  const countsBefore = memories.slice(0, index).filter((item) => item.wall === memory.wall).length;
  const sideColumns = [-4.9, -2.45, 0, 2.45, 4.9];
  const backRows = [
    { y: 1.9, columns: [-5.55, -1.85, 1.85, 5.55] },
    { y: 4.25, columns: [-5.15, -1.7, 1.7, 5.15] }
  ];
  const sideRows = [1.65, 4.15];
  const tilt = ((countsBefore % 5) - 2) * 0.018;

  if (memory.wall === "left") {
    const row = Math.floor(countsBefore / sideColumns.length);
    const col = countsBefore % sideColumns.length;
    const y = sideRows[Math.min(row, sideRows.length - 1)];
    const z = sideColumns[col] + Math.max(0, row - 1) * 0.18;
    return {
      wall: "left",
      position: new THREE.Vector3(room.leftX + 0.18, y, z),
      rotation: new THREE.Euler(0, Math.PI / 2, tilt),
      cameraOffset: new THREE.Vector3(4.35, 0.55, 0.12)
    };
  }

  if (memory.wall === "right") {
    const row = Math.floor(countsBefore / sideColumns.length);
    const col = countsBefore % sideColumns.length;
    const y = sideRows[Math.min(row, sideRows.length - 1)];
    const z = sideColumns[col] - Math.max(0, row - 1) * 0.18;
    return {
      wall: "right",
      position: new THREE.Vector3(room.rightX - 0.18, y, z),
      rotation: new THREE.Euler(0, -Math.PI / 2, tilt),
      cameraOffset: new THREE.Vector3(-4.35, 0.55, 0.12)
    };
  }

  const row = Math.floor(countsBefore / backRows[0].columns.length);
  const rowConfig = backRows[Math.min(row, backRows.length - 1)];
  const col = countsBefore % rowConfig.columns.length;
  const x = rowConfig.columns[col] + Math.max(0, row - 1) * 0.22;
  const y = rowConfig.y;
  return {
    wall: "back",
    position: new THREE.Vector3(x, y, room.backZ + 0.18),
    rotation: new THREE.Euler(0, 0, tilt),
    cameraOffset: new THREE.Vector3(0, 0.48, 4.55)
  };
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
      -6.5 + Math.random() * 13,
      0.15 + Math.random() * 5.2,
      -4.8 + Math.random() * 9.2
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
    mesh.position.set(-5.5 + lane * 3.65, 5.65 + (index % 2) * 0.24, -3.82 + Math.floor(index / 4) * 1.05);
    mesh.rotation.x = -0.16;
    mesh.userData.phase = index * 0.6;
    chatGroup.add(mesh);
  });
}

function buildLongMessageWall() {
  const sideSlots = [-4.9, -2.45, 0, 2.45, 4.9];
  wallMessages.forEach((message, index) => {
    const texture = makeTextTexture(message.text, index + 20, 980, 340, {
      fontSize: 24,
      lineHeight: 34,
      title: message.title
    });
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.94,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.18, 0.76), material);
    const slot = sideSlots[index % sideSlots.length];
    if (index < sideSlots.length) {
      mesh.position.set(room.rightX - 0.16, 5.28, slot);
      mesh.rotation.y = -Math.PI / 2;
    } else {
      mesh.position.set(room.leftX + 0.16, 5.28, slot);
      mesh.rotation.y = Math.PI / 2;
    }
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

async function beginExperience() {
  started = true;
  intro.classList.add("is-hidden");
  storyPanel.classList.add("is-open");
  try {
    await audio.play();
    musicBtn.textContent = "Pause song";
  } catch {
    musicBtn.textContent = audioReady ? "Play song" : "Music";
  }
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

function focusMemory(rawIndex, openPanel = true) {
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

  followSelected = true;
  updateCameraTargetFromCard(card);

  if (openPanel && started) {
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
  targetCamera.position.set(0, 3.25, 8.4);
  targetCamera.lookAt.set(0, 2.1, -2.3);
}

function updateCameraTargetFromCard(card) {
  card.getWorldPosition(tempWorldPosition);
  tempCameraOffset.copy(card.userData.cameraOffset);
  targetCamera.position.copy(tempWorldPosition).add(tempCameraOffset);
  targetCamera.position.x = THREE.MathUtils.clamp(targetCamera.position.x, room.leftX + 1.6, room.rightX - 1.6);
  targetCamera.position.z = THREE.MathUtils.clamp(targetCamera.position.z, -3.95, 7.3);
  targetCamera.position.y = THREE.MathUtils.clamp(targetCamera.position.y, 1.75, 5.35);
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
  if (event.target !== canvas || !hoveredCard) {
    return;
  }
  focusMemory(hoveredCard.userData.index);
}

function onKeydown(event) {
  if (event.key === "ArrowLeft") {
    focusMemory(selectedIndex - 1);
  }
  if (event.key === "ArrowRight") {
    focusMemory(selectedIndex + 1);
  }
  if (event.key.toLowerCase() === "p") {
    focusMemory(memories.findIndex((memory) => memory.pentagon));
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  const elapsed = clock.getElapsedTime();
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

  camera.position.lerp(targetCamera.position, 0.035);
  controls.target.lerp(targetCamera.lookAt, 0.04);

  cards.forEach((card, index) => {
    const isActive = index === selectedIndex;
    const isHover = card === hoveredCard;
    const targetScale = isActive ? 1.12 : isHover ? 1.08 : 1;
    card.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    card.userData.glow.material.opacity = isActive ? 0.3 : isHover ? 0.18 : 0;
  });

  heartField.children.forEach((heart) => {
    heart.position.y = heart.userData.baseY + Math.sin(elapsed * heart.userData.floatSpeed + heart.userData.phase) * 0.22;
    heart.rotation.z += 0.006;
  });

  controls.update();
  renderer.render(scene, camera);
}
