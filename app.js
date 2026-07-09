import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const memories = [
  {
    title: "The first spark",
    kicker: "3 Step Theory",
    image: "assets/photos/first-date.jpeg",
    aspect: 960 / 1280,
    text: "It started with Ray meeting Bee at 3 Step Theory, then that easy curiosity grew into the kind of connection that makes every reply feel warm."
  },
  {
    title: "270 Degrees",
    kicker: "First date energy",
    image: "assets/photos/toast.jpeg",
    aspect: 960 / 1280,
    text: "The restaurant idea became something real: a sunset, a table, flowers, and the start of memories that still feel bright."
  },
  {
    title: "Pentagon 5",
    kicker: "Ray, Bee, Mike, Mel, Qwarra",
    image: "assets/photos/pentagon-five.jpeg",
    aspect: 1280 / 960,
    pentagon: true,
    text: "This one is for the Pentagon 5: you, me, Mike, Mel, and Qwarra. The group photo holds that shared movie-date kind of joy."
  },
  {
    title: "Happy us",
    kicker: "Soft proof",
    image: "assets/photos/happy-us.jpeg",
    aspect: 960 / 1280,
    text: "There is a kind of happiness that does not need to shout. It just sits there in a photo and says, yes, this is us."
  },
  {
    title: "Happy us again",
    kicker: "More of us",
    image: "assets/photos/happy-us-again.jpeg",
    aspect: 960 / 1280,
    text: "Another little reminder that being around you turns ordinary moments into something worth keeping."
  },
  {
    title: "How you care",
    kicker: "Warm heart things",
    image: "assets/photos/care.jpeg",
    aspect: 960 / 1280,
    text: "Your care shows up in notes, long messages, checking in, and in the way you make love feel gentle and alive."
  },
  {
    title: "Golden hearts",
    kicker: "Raybee",
    image: "assets/photos/golden-hearts.jpeg",
    aspect: 785 / 1600,
    text: "Raybee with golden hearts: a little glowing symbol for how bright this relationship feels."
  },
  {
    title: "Our video calls",
    kicker: "Distance still close",
    image: "assets/photos/video-calls.jpeg",
    aspect: 780 / 1600,
    text: "Even through a screen, you still find a way to feel present. I miss you, but these calls keep the warmth nearby."
  },
  {
    title: "Girlfriend day",
    kicker: "The day it became us",
    image: "assets/photos/girlfriend-day.jpeg",
    aspect: 960 / 1280,
    text: "The girlfriend day deserves its own orbit because some days quietly change the whole sky."
  },
  {
    title: "Magical kisses",
    kicker: "You and me",
    image: "assets/photos/kisses.jpeg",
    aspect: 960 / 1280,
    text: "Some photos carry a whole feeling. This one keeps the softness, the closeness, and the magic."
  },
  {
    title: "Car photo",
    kicker: "Last photo in the car",
    image: "assets/photos/car-photo.jpeg",
    aspect: 960 / 1280,
    text: "A car photo can still hold a whole chapter when the person beside you means this much."
  },
  {
    title: "This photo wow",
    kicker: "Camera with a heart",
    image: "assets/photos/wow.jpeg",
    aspect: 960 / 1280,
    text: "The chat said the camera would love Bee if it had a heart. Honestly, fair."
  },
  {
    title: "Everything is better",
    kicker: "With you",
    image: "assets/photos/everything-better.jpeg",
    aspect: 785 / 1600,
    text: "Everything is better with you because you bring play, warmth, faith, depth, and that unmistakable Bee energy."
  },
  {
    title: "Your recent post",
    kicker: "Seen and loved",
    image: "assets/photos/recent-post.jpeg",
    aspect: 751 / 1600,
    text: "The recent post is here because being proud of each other is one of the sweetest parts of this."
  }
];

const chatBeats = [
  "Heyy Bee, it is Ray. We met at 3 Step Theory.",
  "EDM ofc. Oontz.",
  "I love flowers too much. Hence Bee, bees love flowers too.",
  "I got home safely. I enjoyed the date and every moment with you.",
  "I loved the flowers very much."
];

const pentagonNames = ["Ray", "Bee", "Mike", "Mel", "Qwarra"];
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
scene.fog = new THREE.FogExp2(0x080b12, 0.024);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 3.2, 15);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 6;
controls.maxDistance = 23;
controls.maxPolarAngle = Math.PI * 0.58;
controls.minPolarAngle = Math.PI * 0.24;
controls.target.set(0, 1.2, 0);

const textureLoader = new THREE.TextureLoader();
const gallery = new THREE.Group();
const heartField = new THREE.Group();
const chatGroup = new THREE.Group();
const pentagonGroup = new THREE.Group();
scene.add(gallery, heartField, chatGroup, pentagonGroup);

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

textureLoader.load("assets/generated/rooftop-sunset.png", (texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  const geometry = new THREE.PlaneGeometry(64, 30);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.74,
    depthWrite: false
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 5.4, -22);
  plane.renderOrder = -2;
  scene.add(plane);
});

scene.add(new THREE.HemisphereLight(0xffdfb5, 0x17253c, 1.8));

const keyLight = new THREE.DirectionalLight(0xffb678, 2.4);
keyLight.position.set(-5, 8, 8);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x4ed2c6, 22, 30);
rimLight.position.set(7, 3, 2);
scene.add(rimLight);

const floorGeometry = new THREE.CircleGeometry(18, 96);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x161b26,
  roughness: 0.62,
  metalness: 0.18,
  transparent: true,
  opacity: 0.58
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.25;
scene.add(floor);

const railMaterial = new THREE.MeshStandardMaterial({
  color: 0xffd18b,
  roughness: 0.24,
  metalness: 0.78,
  emissive: 0x2b190a,
  emissiveIntensity: 0.25
});
for (let i = -4; i <= 4; i += 1) {
  const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.9, 0.05), railMaterial);
  rail.position.set(i * 1.9, -0.36, -5.8);
  scene.add(rail);
}
const railTop = new THREE.Mesh(new THREE.BoxGeometry(17.4, 0.06, 0.06), railMaterial);
railTop.position.set(0, 0.58, -5.8);
scene.add(railTop);

buildGallery();
buildHeartField();
buildChatBeats();
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

function buildGallery() {
  memories.forEach((memory, index) => {
    const angle = (index / memories.length) * Math.PI * 2;
    const radius = 8.8;
    const y = (index % 3) * 0.62 + 0.25;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius * 0.58;

    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.lookAt(0, 1.1, 0);
    group.rotateY(Math.PI);
    group.userData = { memory, index, baseScale: 1 };

    const isLandscape = memory.aspect > 1;
    const imageHeight = isLandscape ? 1.88 : 2.45;
    const imageWidth = imageHeight * memory.aspect;
    const frameGeometry = new THREE.PlaneGeometry(imageWidth + 0.2, imageHeight + 0.2);
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: memory.pentagon ? 0xffd18b : 0x161b26,
      roughness: 0.36,
      metalness: memory.pentagon ? 0.42 : 0.12,
      emissive: memory.pentagon ? 0x4a2308 : 0x030508,
      emissiveIntensity: memory.pentagon ? 0.55 : 0.18
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

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(imageWidth + 0.34, imageHeight + 0.34),
      new THREE.MeshBasicMaterial({
        color: memory.pentagon ? 0xffd18b : 0xff8274,
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

function buildHeartField() {
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0.22);
  heartShape.bezierCurveTo(0.5, 0.72, 1.28, 0.26, 0.82, -0.42);
  heartShape.bezierCurveTo(0.55, -0.82, 0.1, -1.08, 0, -1.24);
  heartShape.bezierCurveTo(-0.1, -1.08, -0.55, -0.82, -0.82, -0.42);
  heartShape.bezierCurveTo(-1.28, 0.26, -0.5, 0.72, 0, 0.22);

  const geometry = new THREE.ShapeGeometry(heartShape);
  const palette = [0xff8274, 0xffd18b, 0xd94c78, 0x4ed2c6];
  for (let i = 0; i < 58; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: palette[i % palette.length],
      transparent: true,
      opacity: 0.18 + Math.random() * 0.22,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const heart = new THREE.Mesh(geometry, material);
    const radius = 4 + Math.random() * 12;
    const angle = Math.random() * Math.PI * 2;
    heart.position.set(Math.cos(angle) * radius, 0.2 + Math.random() * 8, Math.sin(angle) * radius - 2);
    const scale = 0.045 + Math.random() * 0.12;
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
    const texture = makeTextTexture(beat, index);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.84,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3.25, 0.86), material);
    const angle = (index / chatBeats.length) * Math.PI * 2 + 0.55;
    mesh.position.set(Math.cos(angle) * 6.4, 3.4 + (index % 2) * 0.66, Math.sin(angle) * 4.1 - 1.2);
    mesh.lookAt(0, 2.2, 0);
    mesh.rotateY(Math.PI);
    mesh.userData.phase = index * 0.6;
    chatGroup.add(mesh);
  });
}

function buildPentagon() {
  const points = [];
  for (let i = 0; i < 5; i += 1) {
    const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
    points.push(new THREE.Vector3(Math.cos(angle) * 1.9, Math.sin(angle) * 1.9, 0));
  }
  points.push(points[0].clone());

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: 0xffd18b, transparent: true, opacity: 0.82 })
  );
  pentagonGroup.add(line);

  const nodeGeometry = new THREE.SphereGeometry(0.12, 24, 16);
  pentagonNames.forEach((name, index) => {
    const node = new THREE.Mesh(
      nodeGeometry,
      new THREE.MeshStandardMaterial({
        color: index === 1 ? 0xff8274 : 0x4ed2c6,
        emissive: index === 1 ? 0x40150d : 0x0b302f,
        emissiveIntensity: 0.8,
        roughness: 0.34
      })
    );
    node.position.copy(points[index]);
    node.userData.name = name;
    pentagonGroup.add(node);
  });

  const labelTexture = makeTextTexture("Pentagon 5", 10, 620, 150);
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 0.58),
    new THREE.MeshBasicMaterial({
      map: labelTexture,
      transparent: true,
      depthWrite: false
    })
  );
  label.position.y = -2.55;
  pentagonGroup.add(label);
  pentagonGroup.position.set(0, 1.72, 1.42);
  pentagonGroup.visible = false;
}

function makeTextTexture(text, seed, width = 860, height = 230) {
  const pixelRatio = 2;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width * pixelRatio;
  canvasEl.height = height * pixelRatio;
  const ctx = canvasEl.getContext("2d");
  ctx.scale(pixelRatio, pixelRatio);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = seed % 2 ? "rgba(12, 16, 24, 0.72)" : "rgba(255, 247, 236, 0.12)";
  roundedRect(ctx, 0, 0, width, height, 26);
  ctx.fill();
  ctx.strokeStyle = seed % 2 ? "rgba(78, 210, 198, 0.58)" : "rgba(255, 209, 139, 0.58)";
  ctx.lineWidth = 3;
  roundedRect(ctx, 2, 2, width - 4, height - 4, 24);
  ctx.stroke();
  ctx.fillStyle = "#fff7ec";
  ctx.font = "700 34px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, text, 36, 72, width - 72, 42);
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

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let drawY = y;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, drawY);
      line = `${word} `;
      drawY += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line.trim(), x, drawY);
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
  targetCamera.position.set(0, 3.8, 10.5);
  targetCamera.lookAt.set(0, 1.5, 0);
}

function updateCameraTargetFromCard(card) {
  card.getWorldPosition(tempWorldPosition);
  tempCameraOffset.copy(tempWorldPosition).normalize().multiplyScalar(4.7);
  tempCameraOffset.y = 1.5;
  targetCamera.position.copy(tempWorldPosition).add(tempCameraOffset);
  targetCamera.position.y = Math.max(targetCamera.position.y, 1.7);
  targetCamera.lookAt.copy(tempWorldPosition).lerp(new THREE.Vector3(0, 1.2, 0), 0.32);
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
  gallery.rotation.y += started ? 0.0009 : 0.00035;
  chatGroup.rotation.y -= 0.00055;
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
    const targetScale = isActive ? 1.2 : isHover ? 1.12 : 1;
    card.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    card.userData.glow.material.opacity = isActive ? 0.26 : isHover ? 0.18 : 0;
  });

  heartField.children.forEach((heart) => {
    heart.position.y = heart.userData.baseY + Math.sin(elapsed * heart.userData.floatSpeed + heart.userData.phase) * 0.35;
    heart.rotation.z += 0.006;
  });

  chatGroup.children.forEach((card, index) => {
    card.position.y += Math.sin(elapsed * 0.7 + index) * 0.0018;
  });

  controls.update();
  renderer.render(scene, camera);
}
