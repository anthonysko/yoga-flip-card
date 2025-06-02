document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContent = document.querySelector('.menu-content');
  const startButton = document.getElementById('start-button');
  const flashcard = document.getElementById('flashcard');
  const sanskritToEnglishButton = document.getElementById('sanskrit-to-english');
  const englishToSanskritButton = document.getElementById('english-to-sanskrit');
  const randomModeButton = document.getElementById('random-mode');
  const previousButton = document.getElementById('previous-button');
  const nextButton = document.getElementById('next-button');

  // Sample yoga poses data (replace with actual data or Firebase integration)
	const poses = [
		// Sun Salutation Poses
		{ sanskrit: "Tadasana / Samasthiti", english: "Mountain Pose", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Tadasana" },
		{ sanskrit: "Hasta Uttanasana", english: "Standard backward Bend", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Hasta+Uttanasana" },
		{ sanskrit: "Uttanasana", english: "Standing Forward Bend", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Uttanasana" },
		{ sanskrit: "Ardha Uttanasana", english: "Half Standing Forward Bend", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Ardha+Uttanasana" },
		{ sanskrit: "Anjaneyasana", english: "Crescent Lunge", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Anjaneyasana" },
		{ sanskrit: "Phalakasana", english: "Plank Pose", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Phalakasana" },
		{ sanskrit: "Ashtanga Namaskara", english: "Knee Chest Chin", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Ashtanga+Namaskara" },
		{ sanskrit: "Chaturanga Dandasana", english: "Low Plank Pose", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Chaturanga+Dandasana" },
		{ sanskrit: "Urdhva Mukha Svanasana", english: "Upward Facing Dog", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Urdhva+Mukha+Svanasana" },
		{ sanskrit: "Adho Mukha Svanasana", english: "Downward Facing Dog", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Adho+Mukha+Svanasana" },
		{ sanskrit: "Bhujangasana", english: "Cobra Pose", group: "sun-salutation", image: "https://via.placeholder.com/200?text=Bhujangasana" },

		// Standing Poses
		{ sanskrit: "Virabhadrasana I", english: "Warrior I", group: "standing", image: "https://via.placeholder.com/200?text=Virabhadrasana+I" },
		{ sanskrit: "Virabhadrasana II", english: "Warrior II", group: "standing", image: "https://via.placeholder.com/200?text=Virabhadrasana+II" },
		{ sanskrit: "Trikonasana", english: "Triangle Pose", group: "standing", image: "https://via.placeholder.com/200?text=Trikonasana" },
		{ sanskrit: "Parivrtta Trikonasana", english: "Revolving Triangle", group: "standing", image: "https://via.placeholder.com/200?text=Parivrtta+Trikonasana" },
		{ sanskrit: "Utthita Parsvakonasana", english: "Extended Side Angle", group: "standing", image: "https://via.placeholder.com/200?text=Utthita+Parsvakonasana" },
		{ sanskrit: "Utkatasana", english: "Chair Pose", group: "standing", image: "https://via.placeholder.com/200?text=Utkatasana" },
		{ sanskrit: "Prasarita Padottanasana", english: "Wide Leg Forward Bend Pose", group: "standing", image: "https://via.placeholder.com/200?text=Prasarita+Padottanasana" },
		{ sanskrit: "Utthita Hasta Padangusthasana", english: "Standing Hand to Toe Pose", group: "standing", image: "https://via.placeholder.com/200?text=Utthita+Hasta+Padangusthasana" },
		{ sanskrit: "Parsvottanasana", english: "Pyramid Pose", group: "standing", image: "https://via.placeholder.com/200?text=Parsvottanasana" },
		{ sanskrit: "Ardha Chandrasana", english: "Standing Side Bend", group: "standing", image: "https://via.placeholder.com/200?text=Ardha+Chandrasana" },

		// Sitting Poses
		{ sanskrit: "Padmasana", english: "Lotus Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Padmasana" },
		{ sanskrit: "Paschimottanasana", english: "Seated Forward Bend Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Paschimottanasana" },
		{ sanskrit: "Baddha Konasana", english: "Butterfly Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Baddha+Konasana" },
		{ sanskrit: "Janu Sirsasana", english: "One Leg Seated Forward Bend Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Janu+Sirsasana" },
		{ sanskrit: "Navasana", english: "Boat Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Navasana" },
		{ sanskrit: "Gomukhasana", english: "Cow Face Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Gomukhasana" },
		{ sanskrit: "Ardha Matsyendrasana", english: "Half Spinal Twist", group: "sitting", image: "https://via.placeholder.com/200?text=Ardha+Matsyendrasana" },
		{ sanskrit: "Kapotasana", english: "Pigeon Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Kapotasana" },
		{ sanskrit: "Eka Pada Rajakapotasana", english: "One Leg King Pigeon", group: "sitting", image: "https://via.placeholder.com/200?text=Eka+Pada+Rajakapotasana" },
		{ sanskrit: "Marichyasana", english: "Sage Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Marichyasana" },
		{ sanskrit: "Upavistha Konasana", english: "Side Split Forward Bend сортировать Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Upavistha+Konasana" },
		{ sanskrit: "Hanumanasana", english: "Monkey Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Hanumanasana" },
		{ sanskrit: "Eka Pada Sirsasana", english: "Foot Behind Head Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Eka+Pada+Sirsasana" },
		{ sanskrit: "Purvottanasana", english: "Upward Plank Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Purvottanasana" },
		{ sanskrit: "Ustrasana", english: "Camel Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Ustrasana" },
		{ sanskrit: "Sasangasana", english: "Rabbit Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Sasangasana" },
		{ sanskrit: "Balasana", english: "Child Pose", group: "sitting", image: "https://via.placeholder.com/200?text=Balasana" },

		// Inverted Poses
		{ sanskrit: "Shirsasana", english: "Headstand", group: "inverted", image: "https://via.placeholder.com/200?text=Sirsasana" },
		{ sanskrit: "Sarvangasana", english: "Shoulder Stand", group: "inverted", image: "https://via.placeholder.com/200?text=Sarvangasana" },
		{ sanskrit: "Halasana", english: "Plow Pose", group: "inverted", image: "https://via.placeholder.com/200?text=Halasana" },
		{ sanskrit: "Pincha Mayurasana", english: "Forearm Stand", group: "inverted", image: "https://via.placeholder.com/200?text=Pincha+Mayurasana" },
		{ sanskrit: "Adho Mukha Vrksasana", english: "HandStand", group: "inverted", image: "https://via.placeholder.com/200?text=Handstand" },

		// Arm Balancing Poses
		{ sanskrit: "Utpluthih Padmasana", english: "Elevated Lotus Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Utpluthih+Padmasana" },
		{ sanskrit: "Vasisthasana", english: "Side Plank Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Vasisthasana" },
		{ sanskrit: "Visvamitrasana", english: "Flying Warrior", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Visvamitrasana" },
		{ sanskrit: "Bakasana", english: "Crow Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Bakasana" },
		{ sanskrit: "Parsva Bakasana", english: "Side Crow", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Parsva+Bakasana" },
		{ sanskrit: "Kukkutasana", english: "Scissors Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Kukkutasana" },
		{ sanskrit: "Astavakrasana", english: "Eight Angle Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Astavakrasana" },
		{ sanskrit: "Tittibhasana", english: "Firefly Pose", group: "arm-balancing", image: "https://via.placeholder.com/200?text=Tittibhasana" },

		// Leg Balancing Poses
		{ sanskrit: "Vrksasana", english: "Tree Pose", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Vrksasana" },
		{ sanskrit: "Natarajasana", english: "Dance Pose", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Natarajasana" },
		{ sanskrit: "Garudasana", english: "Eagle Pose", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Garudasana" },
		{ sanskrit: "Ardha Chandrasana", english: "Half Moon Pose", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Ardha+Chandrasana" },
		{ sanskrit: "Urdhva Prasarita Eka Padasana", english: "Standing Split", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Urdhva+Prasarita+Eka+Padasana" },
		{ sanskrit: "Padangusthasana", english: "Toe Stand", group: "leg-balancing", image: "https://via.placeholder.com/200?text=Padangusthasana" },

		// Supine Poses
		{ sanskrit: "Savasana", english: "Corpse Pose", group: "supine", image: "https://via.placeholder.com/200?text=Savasana" },
		{ sanskrit: "Supta Padangusthasana", english: "Reclining Hand-to-Big-Toe Pose", group: "supine", image: "https://via.placeholder.com/200?text=Supta+Padangusthasana" },
		{ sanskrit: "Ananda Balasana", english: "Happy Baby Pose", group: "supine", image: "https://via.placeholder.com/200?text=Ananda+Balasana" },
		{ sanskrit: "Setu Bandhasana", english: "Bridge Pose", group: "supine", image: "https://via.placeholder.com/200?text=Setu+Bandhasana" },
		{ sanskrit: "Matsyasana", english: "Fish Pose", group: "supine", image: "https://via.placeholder.com/200?text=Matsyasana" },
		{ sanskrit: "Supta Virasana", english: "Resting Hero Pose", group: "supine", image: "https://via.placeholder.com/200?text=Supta+Virasana" },
		{ sanskrit: "Pavanamuktasana", english: "Wind Release Pose", group: "supine", image: "https://via.placeholder.com/200?text=Pavanamuktasana" },
		{ sanskrit: "Urdhva Dhanurasana", english: "Wheel Pose", group: "supine", image: "https://via.placeholder.com/200?text=Urdhva+Dhanurasana" },

		// Prone Poses
		{ sanskrit: "Bhujangasana", english: "Cobra Pose", group: "prone", image: "https://via.placeholder.com/200?text=Bhujangasana" },
		{ sanskrit: "Salabhasana", english: "Locust Pose", group: "prone", image: "https://via.placeholder.com/200?text=Salabhasana" },
		{ sanskrit: "Dhanurasana", english: "Bow Pose", group: "prone", image: "https://via.placeholder.com/200?text=Dhanurasana" },
		{ sanskrit: "Sphinx Pose", english: "Sphinx Pose", group: "prone", image: "https://via.placeholder.com/200?text=Sphinx+Pose" }
	];
	let currentPoses = poses; // Default to all poses
	let currentIndex = 0;
	let isSanskritFirst = true; // Sanskrit to English by default
	let isRandomMode = false;
	let usedIndices = []; // Track used indices for random mode

	function displayCard() {
			if (currentPoses.length === 0) {
					document.getElementById("pose-name").textContent = "No Poses in Group";
					document.getElementById("pose-image").style.display = "none";
					return;
			}
			const pose = currentPoses[currentIndex];
			const poseName = isSanskritFirst ? pose.sanskrit : pose.english;
			document.getElementById("pose-name").textContent = poseName;
			const poseImage = document.getElementById("pose-image");
			if (pose.image) {
					//poseImage.src = pose.image;
					//poseImage.style.display = "block";
			} else {
					//poseImage.style.display = "none";
			}
	}

	function flipCard() {
			isSanskritFirst = !isSanskritFirst;
			displayCard();
	}

	function getRandomIndex() {
			if (usedIndices.length === currentPoses.length) {
					usedIndices = []; // Reset when all poses are used
			}
			let randomIndex;
			do {
					randomIndex = Math.floor(Math.random() * currentPoses.length);
			} while (usedIndices.includes(randomIndex));
			usedIndices.push(randomIndex);
			return randomIndex;
	}

	function nextCard() {
			if (currentPoses.length === 0) return;
			if (isRandomMode) {
					currentIndex = getRandomIndex();
			} else {
					currentIndex = (currentIndex + 1) % currentPoses.length;
			}
			isSanskritFirst = document.getElementById("revision-mode").value === "sanskrit-to-english";
			displayCard();
	}

	function prevCard() {
			if (currentPoses.length === 0) return;
			if (isRandomMode) {
					currentIndex = getRandomIndex();
			} else {
					currentIndex = (currentIndex - 1 + currentPoses.length) % currentPoses.length;
			}
			isSanskritFirst = document.getElementById("revision-mode").value === "sanskrit-to-english";
			displayCard();
	}

	function selectGroup(group) {
			currentIndex = 0;
			isSanskritFirst = document.getElementById("revision-mode").value === "sanskrit-to-english";
			usedIndices = []; // Reset used indices when changing group
			if (group === "all") {
					currentPoses = poses;
			} else {
					currentPoses = poses.filter(pose => pose.group === group);
			}
			displayCard();
			if (window.innerWidth <= 768) {
					toggleSidebar(); // Close sidebar on mobile after selection
			}
	}

	function changeMode() {
			isSanskritFirst = document.getElementById("revision-mode").value === "sanskrit-to-english";
			displayCard();
	}

	function toggleRandomMode() {
			isRandomMode = document.getElementById("random-mode").checked;
	}

	function toggleSidebar() {
			const sidebar = document.querySelector(".sidebar");
			sidebar.classList.toggle("hidden");
	}

	// Initialize sidebar menu
	const menuItems = document.querySelectorAll("#group-menu li");
	menuItems.forEach(item => {
			item.addEventListener("click", () => {
					menuItems.forEach(i => i.classList.remove("active"));
					item.classList.add("active");
					selectGroup(item.getAttribute("data-group"));
			});
	});

	// Keyboard controls
	document.addEventListener("keydown", (event) => {
			if (event.key === "ArrowRight") {
					nextCard();
			} else if (event.key === "ArrowLeft") {
					prevCard();
			} else if(event.key === " "){
					flipCard();
			} else if (event.code === "KeyR") {
					const randomCheckbox = document.getElementById("random-mode");
					randomCheckbox.checked = !randomCheckbox.checked;
					toggleRandomMode();
			} else if (event.code === "KeyT") {
					const revisionMode = document.getElementById("revision-mode");
					revisionMode.value = revisionMode.value === "sanskrit-to-english" ? "english-to-sanskrit" : "sanskrit-to-english";
					changeMode();
			} else if (event.key === "Tab") {
					event.preventDefault();
					const currentActive = document.querySelector("#group-menu li.active");
					const menuArray = Array.from(menuItems);
					let nextIndex = menuArray.indexOf(currentActive);
					if (event.shiftKey) {
							nextIndex = (nextIndex - 1 + menuArray.length) % menuArray.length;
					} else {
							nextIndex = (nextIndex + 1) % menuArray.length;
					}
					menuItems.forEach(i => i.classList.remove("active"));
					menuArray[nextIndex].classList.add("active");
					selectGroup(menuArray[nextIndex].getAttribute("data-group"));
			}
	});

	// Initialize with the first card
	displayCard();
});