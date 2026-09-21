// ========================================
// NEWSROOM LOCKDOWN
// PUZZLE SYSTEM
// ========================================


// ========================================
// FALLBACK PUZZLE BANK
// ========================================

const puzzlePool = {

    // ========================================
    // 1. DESK
    // Medium direct knowledge / current affairs
    // ========================================

    1: [

        {
            title: "THE DESK — SPORTS",

            description:
                "In cricket, how many legal deliveries are normally bowled in a standard over?",

            answer: "6",

            reward: "Desk Key"
        },

        {
            title: "THE DESK — SCIENCE",

            description:
                "Which planet has the most prominent ring system in our Solar System?",

            answer: "SATURN",

            reward: "Desk Key"
        },

        {
            title: "THE DESK — TECHNOLOGY",

            description:
                "In artificial intelligence, what does LLM stand for?",

            answer: "LARGE LANGUAGE MODEL",

            reward: "Desk Key"
        },

        {
            title: "THE DESK — GEOGRAPHY",

            description:
                "Which country is home to the city of Istanbul, a city located across Europe and Asia?",

            answer: "TURKEY",

            reward: "Desk Key"
        },

        {
            title: "THE DESK — ARTS",

            description:
                "Who painted the famous artwork The Starry Night?",

            answer: "VINCENT VAN GOGH",

            reward: "Desk Key"
        }

    ],


    // ========================================
    // 2. FILES
    // News investigation
    // ========================================

    2: [

        {
            title: "THE FILES — NEWS INVESTIGATION",

            description:
                "NEWS BRIEF:\n\nA technology company announces that it is expanding its computing infrastructure to support the training and operation of increasingly large AI models.\n\nQUESTION:\n\nWhich type of processor is commonly used for the large-scale parallel computations involved in modern AI workloads?",

            answer: "GPU",

            reward: "File Fragment"
        },

        {
            title: "THE FILES — HEADLINE CLUE",

            description:
                "Three headlines are displayed on the newsroom terminal:\n\nMARKET ALERT\nELECTION UPDATE\nTECHNOLOGY BREAKTHROUGH\n\nThe editor says the hidden clue is formed using the FIRST LETTER of each headline.\n\nQUESTION:\n\nWhat three-letter code is revealed?",

            answer: "MET",

            reward: "File Fragment"
        },

        {
            title: "THE FILES — TRUST CHECK",

            description:
                "Two headlines report a supposed scientific discovery.\n\nHEADLINE A:\n\"Researchers publish their findings in a peer-reviewed scientific journal.\"\n\nHEADLINE B:\n\"Anonymous social-media account claims the discovery is definitely true.\"\n\nThe newsroom requires verifiable evidence before publishing a major claim.\n\nQUESTION:\n\nWhich source should the newsroom investigate first?",

            answer: "A",

            reward: "File Fragment"
        },

        {
            title: "THE FILES — CODED HEADLINE",

            description:
                "A hidden clue appears beneath a headline:\n\n14 — 5 — 23 — 19\n\nUsing A=1, B=2, C=3 ... Z=26,\ndecode the hidden word.\n\nQUESTION:\n\nWhat word is revealed?",

            answer: "NEWS",

            reward: "File Fragment"
        },

        {
            title: "THE FILES — SOURCE CHECK",

            description:
                "A reporter is verifying a company's announcement.\n\nSOURCE A: An anonymous social-media post.\nSOURCE B: The company's official statement.\nSOURCE C: A message shared by an unknown account.\n\nQUESTION:\n\nWhich source is the strongest primary source for verifying what the company officially announced?",

            answer: "B",

            reward: "File Fragment"
        }

    ],


    // ========================================
    // 3. COMPUTER
    // Medium AI / technology / cybersecurity
    // ========================================

    3: [

        {
            title: "THE COMPUTER — AI",

            description:
                "An AI system creates images from text by starting with random noise and gradually transforming it into an image.\n\nWhat type of generative AI model is commonly associated with this process?",

            answer: "DIFFUSION MODEL",

            reward: "Terminal Code"
        },

        {
            title: "THE COMPUTER — CYBERSECURITY",

            description:
                "A user receives an email claiming to be from their bank. The email asks them to click a link and enter their password immediately.\n\nWhat type of cyberattack does this most closely describe?",

            answer: "PHISHING",

            reward: "Terminal Code"
        },

        {
            title: "THE COMPUTER — TECHNOLOGY",

            description:
                "Which computer component provides temporary working memory for programs and data that are currently being used?",

            answer: "RAM",

            reward: "Terminal Code"
        },

        {
            title: "THE COMPUTER — AI",

            description:
                "An AI model learns by receiving rewards for useful actions and penalties for poor actions while interacting with an environment.\n\nWhat type of machine learning is this?",

            answer: "REINFORCEMENT LEARNING",

            reward: "Terminal Code"
        },

        {
            title: "THE COMPUTER — CYBERSECURITY",

            description:
                "A website uses HTTPS to protect information sent between a user's browser and the website.\n\nWhat security technology is commonly used to encrypt this communication?",

            answer: "TLS",

            reward: "Terminal Code"
        }

    ],


    // ========================================
    // 4. SERVER
    // Information / briefing → ONE question
    // ========================================

    4: [

        {
            title: "THE SERVER — AI BRIEFING",

            description:
                "INTELLIGENCE BRIEF:\n\nLarge language models process text by breaking it into smaller units. These units can represent words, parts of words, punctuation, or other pieces of text. The model uses these units when processing and generating language.\n\nQUESTION:\n\nWhat are these smaller units of text commonly called?",

            answer: "TOKENS",

            reward: "Server Key"
        },

        {
            title: "THE SERVER — SCIENCE BRIEFING",

            description:
                "INTELLIGENCE BRIEF:\n\nEarth's atmosphere contains a region with a high concentration of ozone. This region absorbs a large portion of the Sun's harmful ultraviolet radiation, helping protect living organisms.\n\nQUESTION:\n\nWhat is this region commonly called?",

            answer: "OZONE LAYER",

            reward: "Server Key"
        },

        {
            title: "THE SERVER — NEWSROOM BRIEFING",

            description:
                "INTELLIGENCE BRIEF:\n\nA primary source provides information directly from the original person, organization, document, dataset, or event being reported. Journalists often use primary sources when verifying important claims.\n\nQUESTION:\n\nIf a company publishes an official statement about its own product launch, what type of source is that statement?",

            answer: "PRIMARY SOURCE",

            reward: "Server Key"
        },

        {
            title: "THE SERVER — SPACE BRIEFING",

            description:
                "INTELLIGENCE BRIEF:\n\nA planet's orbital period is the time required to complete one orbit around the Sun. Among the eight planets, the planet farthest from the Sun takes the longest time to complete an orbit.\n\nQUESTION:\n\nWhich planet has the longest orbital period?",

            answer: "NEPTUNE",

            reward: "Server Key"
        },

        {
            title: "THE SERVER — CYBER BRIEFING",

            description:
                "INTELLIGENCE BRIEF:\n\nA cryptographic hash converts data into a fixed-length string of characters. Even a small change in the original data should produce a different hash value. Hashes are commonly used to check whether data has been altered.\n\nQUESTION:\n\nWhat security purpose does this demonstrate?",

            answer: "DATA INTEGRITY",

            reward: "Server Key"
        }

    ],


    // ========================================
    // 5. EXIT
    // Medium logic / code / password
    // ========================================

    5: [

        {
            title: "THE MASTER EXIT — CODE",

            description:
                "The newsroom terminal displays:\n\n3 — 1 — 20 — 1\n\nUsing A=1, B=2, C=3 ... Z=26,\ndecode the hidden word.",

            answer: "CATA",

            reward: "Freedom"
        },

        {
            title: "THE MASTER EXIT — CODE",

            description:
                "The terminal displays:\n\n13 — 5 — 4 — 9 — 1\n\nUsing A=1, B=2, C=3 ... Z=26,\ndecode the hidden word.",

            answer: "MEDIA",

            reward: "Freedom"
        },

        {
            title: "THE MASTER EXIT — NUMBER SEQUENCE",

            description:
                "The terminal displays:\n\n2 — 4 — 8 — 16 — ?\n\nEach number follows the same pattern.\n\nWhat number should replace the question mark?",

            answer: "32",

            reward: "Freedom"
        },

        {
            title: "THE MASTER EXIT — PASSWORD",

            description:
                "A four-digit password follows these rules:\n\n• The first digit is 4.\n• The second digit is 2 more than the first.\n• The third digit is half of the second.\n• The fourth digit is the sum of the first and third digits.\n\nWhat is the four-digit password?",

            answer: "4637",

            reward: "Freedom"
        },

        {
            title: "THE MASTER EXIT — FINAL CLUE",

            description:
                "The terminal displays:\n\n20 — 18 — 21 — 20 — 8\n\nUsing A=1, B=2, C=3 ... Z=26,\ndecode the hidden newsroom word.",

            answer: "TRUTH",

            reward: "Freedom"
        }

    ]

};


// ========================================
// CURRENT PUZZLES
// ========================================

let currentPuzzles = {};


// ========================================
// GENERATE RANDOM PUZZLES
// ========================================

export function generateRandomPuzzles() {

    currentPuzzles = {};

    for (let number = 1; number <= 5; number++) {

        const questions = puzzlePool[number];

        const randomIndex =
            Math.floor(
                Math.random() * questions.length
            );

        currentPuzzles[number] = {
            ...questions[randomIndex],
            completed: false
        };
    }

    console.log(
        "New puzzle set generated:",
        currentPuzzles
    );
}


// ========================================
// GET PUZZLE
// ========================================

export function getPuzzle(number) {

    if (
        Object.keys(currentPuzzles).length === 0
    ) {
        generateRandomPuzzles();
    }

    return currentPuzzles[number];
}


// ========================================
// CHECK PUZZLE ANSWER
// ========================================

export function checkPuzzle(number, userAnswer) {

    const puzzle = currentPuzzles[number];

    if (!puzzle) {

        return {
            correct: false,
            message: "Puzzle not found."
        };

    }

    const correct =
        userAnswer
            .toUpperCase()
            .trim() ===
        puzzle.answer
            .toUpperCase()
            .trim();

    if (correct) {

        puzzle.completed = true;

        return {
            correct: true,
            reward: puzzle.reward,
            message:
                `Puzzle solved! You found: ${puzzle.reward}`
        };

    }

    return {
        correct: false,
        message: "Incorrect answer."
    };
}