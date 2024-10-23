// Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.classList.toggle('open');
});

// Arrays with the information for all pages.

const arrays = {

    origins: [

        {
            id: "india",
            shortName: "The Indian Legend of Chaturanga",
            longName: "The Legend of King Shihram and the Birth of Chess",
            summary: 'Chess is widely believed to have originated in India around the 6th century under the name Chaturanga, which means "four divisions of the military" in Sanskrit. ',
            storyLong: [
                "In ancient India, King Shihram was devastated by the loss of his son in battle. His grief clouded his mind, making him question the meaning of leadership and the endless cycle of war. One day, a wise sage named Sissa ibn Dahir visited the king, offering a solution to ease his sorrow. Sissa introduced the king to a new game—chess—designed to teach the values of strategy, sacrifice, and the balance of power. Each piece on the board, from the humble pawn to the mighty king, represented different elements of a kingdom and warfare.",

                "As Shihram began to play, he slowly discovered the deeper lessons the game had to offer. War, like chess, was not solely about brute strength or the size of an army, but about foresight, careful planning, and using all available resources wisely. Even the smallest piece could turn the tide of battle if properly positioned. The game showed him that leadership required making tough sacrifices, protecting the vulnerable, and thinking many steps ahead to secure victory.",

                "With this newfound wisdom, King Shihram felt a sense of peace and clarity that had long eluded him. Realizing the power of the game's teachings, he ordered that chess be shared throughout the kingdom, so others could benefit from its lessons. Over time, chess became a symbol of wisdom and strategy, and the legend of King Shihram lives on as a story of how a simple game transformed a king's understanding of life, leadership, and war.",
            ],

            imageSummary: {
                imageURL: "images/indian-king.webp",
                imageAlt: "Indian King",
            },

            imageText: {
                imageURL: "images/india.webp",
                imageAlt: "Taj Mahal view",
            }
        },
        {
            id: "persia",
            shortName: "The Persian Game of Shatranj",
            longName: "A Tale of Shah and Vizier",
            summary: 'In Persia, it became known as Shatranj. Shatranj introduced the term "Shah," meaning "king", and "Shah Mat," meaning "the king is helpless."',
            storyLong: [
                "In Persia, a story tells of a king who was challenged by a game that would later evolve into modern chess. This legend focuses on the Persian king, Shah Khosrow I, and his vizier, Buzurjmihr, known for his incredible wisdom. According to this tale, a foreign king sent Shah Khosrow a mysterious game board along with a challenge: If the Persians could figure out the rules and master the game, they would be declared wise; if not, they would face humiliation.",

                "The game was Shatranj, the Persian version of chess, which had pieces such as the Shah (king), Fers (vizier), and Rukh (chariot). The Shah studied the game but couldn't solve it on his own. He turned to his most trusted vizier, Buzurjmihr, whose reputation for intelligence was unmatched. Buzurjmihr quickly discerned the rules of the game and showed the king how to play. His strategy and insight led Shah Khosrow to victory, impressing the foreign ruler.",

                "More than a mere test of wits, this story showcases the cultural importance of chess in Persia, where intellect and cunning were highly valued. Shatranj soon became a popular game in Persian courts, symbolizing the battle of minds and the balance of power. The Persian story not only celebrates the intellectual depth of chess but also cements its place in the cultural history of the region, as it spread across the Middle East and eventually into Europe, where it evolved into the modern game we know today.",
            ],

            imageSummary: {
                imageURL: "images/persian.webp",
                imageAlt: "Hasht Behesht Palace",
            },

            imageText: {
                imageURL: "images/chess-wood.webp",
                imageAlt: "Wooden chess board",
            }
        },
        {
            id: "china",
            shortName: "The Chinese Xiangqi",
            longName: "The Chinese Emperor's Challenge",
            summary: 'Chess could have evolved from the ancient Chinese game "Xiangqi." Xiangqi shares many similarities with chess, such as the goal of capturing the opponent\'s general.',
            storyLong: [
                "A intriguing story comes from China, where chess is thought to have roots in a game called Xiangqi, or Chinese Chess. This tale begins with an emperor named Wu Di, during the Han dynasty, faced unrest in his empire as warlords vied for power. To strengthen his leadership and show that warfare wasn't always necessary to maintain control, he commissioned a court strategist to invent a game that represented battle but could be won through clever strategy rather than actual bloodshed.",

                "The strategist devised Xiangqi, a game played on a board with river-like divisions and pieces symbolizing different military units. The emperor, fascinated by the idea, saw the game as an allegory for leadership. Rather than using armies to conquer his foes, he could outthink and outmaneuver them, using strategy to maintain peace and control. The game quickly became popular among the emperor's advisors and generals, who saw it as a way to sharpen their strategic minds without engaging in real battles.",

                "This story emphasizes chess's ability to teach strategy and foresight, principles that are still relevant today. The game of Xiangqi, though different in form from modern chess, shares many of its strategic elements and has helped shape the development of chess as a global phenomenon.",
            ],

            imageSummary: {
                imageURL: "images/xiangqi.webp",
                imageAlt: "Xiangqi board",
            },

            imageText: {
                imageURL: "images/emperor-chinese.webp",
                imageAlt: "Chinese Emperor",
            }
        },
    ],

    pieces: [
        {
            id: "board",
            shortName: "chess board",
            summary: "In chess, the game begins with both players facing identical arrangements of pieces on an 8x8 board.",
            longExplanation: "In chess, the game begins with both players facing identical arrangements of pieces on an 8x8 board. From White's perspective, pawns occupy the second rank, with rooks placed at the corners, followed by knights, bishops, and the queen on her color (white for White, black for Black). The king stands next to the queen. Black mirrors this setup, with their pawns on the seventh rank and major pieces on the eighth. While White moves first, both sides aim to control the center, develop pieces efficiently, and protect their king while launching strategic attacks on the opponent.",

            imageSummary: {
                imageURL: "images/chess-board-start.webp",
                imageAlt: "Chess board organized",
            },
        },
        {
            id: "king",
            shortName: "king",
            summary: "The King's survival is paramount, and although slow, his ability to move in any direction reflects his strategic importance in the kingdom.",

            role: "The King is the most important piece on the board, yet the weakest in movement. He can only move one square at a time in any direction. If he is checkmated, the game is over, so protecting him is the ultimate goal.",

            importance: "Just as an army will fight to protect its ruler, chess players must guard their King at all costs, using the rest of the pieces to shield him from attacks. His slow movement makes him vulnerable, but his survival is non-negotiable.",

            symbolism: "The King resembles the commander-in-chief on a battlefield or the sovereign ruler in medieval society. While he doesn't engage in direct combat, his capture or death signifies the defeat of the army. He is the figurehead, and all pieces on the chessboard work to ensure his safety, just as an army exists to protect its monarch.",

            position: "",

            imageSummary: {
                imageURL: "images/bw-king.webp",
                imageAlt: "King in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-king.webp",
                imageAlt: "King's valid movements",
            },

        },
        {
            id: "queen",
            shortName: "queen",
            summary: "The Queen's ability to cover great distances mirrors the influence a strong Queen had on both domestic and foreign affairs.",

            role: "The Queen is the most powerful piece, capable of moving any number of squares in any direction—vertically, horizontally, or diagonally. Her versatility makes her a force to be reckoned with on the board.",

            importance: "The Queen's wide range of movement allows her to dominate the board. Like a general who can adapt to changing battle conditions, the Queen can quickly pivot between offensive and defensive maneuvers, making her a key asset in both attacking and protecting her King.",

            symbolism: "The Queen embodies the chief strategist or general of an army. In medieval times, the Queen was not just the King's spouse but often a key political figure with influence over royal decisions and alliances. On the chessboard, the Queen is the most versatile and powerful member of the court, reflecting her ability to influence the entire battlefield with her sweeping movement.",

            imageSummary: {
                imageURL: "images/bw-queen.webp",
                imageAlt: "Queen in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-queen.webp",
                imageAlt: "Queen's valid movements",
            },
        },
        {
            id: "bishop",
            shortName: "bishop",
            summary: "The Bishop moves diagonally, covering a lot of ground but only on squares of the same color it starts on.",

            role: "The Bishop moves diagonally, covering a lot of ground but only on squares of the same color it starts on. Each player has two Bishops, one for light squares and one for dark squares.",

            importance: "Bishops can move quickly and unpredictably through the diagonal paths of battle. They work best in open spaces, where their range isn't blocked by other pieces. Skilled players can use them to control critical areas of the board and execute surprise attacks.",

            symbolism: "The Bishop mirrors the war elephants of ancient armies, which were used for their strength and ability to charge through the battlefield, crushing anything in their path. On the other hand, they were also considerate a spiritual leader and advisor to the King and Queen. In medieval society, bishops were close to the monarchy, providing guidance, religious counsel, and often influencing political decisions. They were figures of both spiritual and temporal power.",

            imageSummary: {
                imageURL: "images/bw-bishop.webp",
                imageAlt: "Bishop in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-bishop.webp",
                imageAlt: "Bishop's valid movements",
            },
        },
        {
            id: "knight",
            shortName: "knight",
            summary: "The Knight's unpredictable movement reflects the ability to flank enemies and launch surprise attacks, just as cavalry did on medieval battlefields.",


            role: 'The Knight moves in an "L" shape: two squares in one direction and one square perpendicular. It is the only piece that can jump over others, making it uniquely positioned to launch unexpected attacks.',

            importance: "Knights, like cavalry, are unpredictable and can strike in places where other pieces can't reach. Their ability to jump over obstacles means they often catch the opponent off-guard. The Knight's unusual movement makes it a key tool for creating disruptive, tactical strikes.",

            symbolism: "The Knight represents the cavalry in warfare. Cavalry units were highly mobile, riding horses to flank the enemy and break through lines where foot soldiers couldn't. Their ability to quickly reposition made them essential for surprise maneuvers. Knights were also noblemen, bound by chivalric codes of honor and loyalty to the King and Queen.",

            imageSummary: {
                imageURL: "images/bw-knight.webp",
                imageAlt: "Knight in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-knight.webp",
                imageAlt: "Knight's valid movements",
            }

        },
        {
            id: "rook",
            shortName: "rook",
            summary: "The Rook's straight-line movement is symbolic of the walls of a castle, which provide strength and security.",

            role: "The Rook moves in straight lines—horizontally or vertically—across the board and can traverse long distances. It is one of the most powerful pieces in the endgame, often used in conjunction with the King to deliver checkmate.",

            importance: "Just as chariots were used to strike deep into enemy territory, Rooks can launch powerful, long-range attacks. Positioned wisely, they can control entire ranks and files, making them valuable for both attack and defense.",

            symbolism: "Just like a fortress defending a kingdom, the Rook is a key piece in both offensive and defensive strategies. The Rook also represents the chariot or war machine, often positioned at the flanks of the battlefield. Chariots were crucial in ancient warfare, providing speed and brute force, breaking through enemy lines with their swift, straightforward attacks.",

            imageSummary: {
                imageURL: "images/bw-rook.webp",
                imageAlt: "Rook in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-rook.webp",
                imageAlt: "Rook's valid movements",
            }
        },
        {
            id: "pawn",
            shortName: "pawn",
            summary: "Pawns may seem weak individually, but together they form a solid defense and can lead to a powerful offense.",

            role: "Pawns are the most numerous pieces on the board, and they move forward one square at a time, capturing diagonally. Except its first movement that can be 2 steps forward. Being the only pieces that moves depending on the type of action. Though they seem weak, they have the potential to promote into any other piece if they reach the opposite end of the board.",

            importance: "Pawns are often seen as the game's foot soldiers, starting out weak but capable of achieving greatness if they persevere. ",

            symbolism: "Like infantry on the front lines of battle, Pawns may seem weak individually, but together they form a solid defense and can lead to a powerful offense. Their ability to promote symbolizes the notion that any soldier, given the right opportunities, can achieve significant status and power on the battlefield.",

            imageSummary: {
                imageURL: "images/bw-pawn.webp",
                imageAlt: "Pawn in black and white",
            },

            imageMoves: {
                imageURL: "images/moves-pawn.webp",
                imageAlt: "Pawn's valid movements",
            }
        },
    ],

    strategies: [
        {
            id: "scholar-q-b",
            shortName: "scholar's Mate QxB",
            longName: [
                "Scholar's Mate",
                "(Queen x Bishop)",
            ],
            summary: "Deliver a quick checkmate using the Queen and Bishop.",
            plan: "Checkmate in four moves by attacking the weak f7 (or f2 for White) square, which is only protected by the King. Using the Queen and a Bishop",

            imageSummary: {
                imageURL: "images/scholar-mate-qb.webp",
                imageAlt: "Queen and Bishop side to side",
            },

            roundComplete: [
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-w1.webp",
                        imageAlt: "e4",
                        caption: "White opens the center with a pawn move, aiming to control the center.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-b1.webp",
                        imageAlt: "e5",
                        caption: "Black mirrors the move with its pawn to e5, classical opening.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qb-w2.webp",
                        imageAlt: "Qf3",
                        caption: "White immediately brings the Queen out to f3, eyeing the weak f7 square (protected only by Black's King).",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-qb-b2.webp",
                        imageAlt: "Nc6",
                        caption: "Black develops the Knight, attacking e5 but neglects the defense of f7.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qb-w3.webp",
                        imageAlt: "Bc4",
                        caption: "White develops the Bishop to c4, targeting f7 alongside the Queen.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-qb-b3.webp",
                        imageAlt: "Nd4",
                        caption: "Black develops the Knight, attacking the Queen, but does not stop the upcoming threat.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qb-w4.webp",
                        imageAlt: "Qxf7#: Checkmate",
                        caption: "White's Queen captures the f7 pawn, delivering checkmate. Black's King is trapped with no legal moves.",
                    },
                },
            ],
            winner: "White Wins!",
        },
        {
            id: "scholar-q-k",
            shortName: "scholar's Mate QxK",
            longName: [
                "Scholar's Mate",
                "(Queen x Knight)",
            ],
            summary: "Deliver a quick checkmate using the Queen and Knight.",
            plan: "Checkmate in five moves by attacking the weak f7 (or f2 for White) square, which is only protected by the King. Using the Queen and a Knight.",
            
            imageSummary: {
                imageURL: "images/scholar-mate-qk.webp",
                imageAlt: "Queen and Knight side to side",
            },
            roundComplete: [
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-w1.webp",
                        imageAlt: "e4",
                        caption: "White opens the center with a pawn move, aiming to control the center.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-b1.webp",
                        imageAlt: "e5",
                        caption: "Black mirrors the move with its pawn to e5, classical opening.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qk-w2.webp",
                        imageAlt: "Nf3",
                        caption: "White develops the Knight to f3, preparing to join the attack on f7.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-qk-b2.webp",
                        imageAlt: "Bc5",
                        caption: "Black develops the Bishop to c5, not aware of the upcoming threat.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qk-w3.webp",
                        imageAlt: "Nxe5",
                        caption: "White develops the Knight, then attacks the weak f7 square.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-qk-b3.webp",
                        imageAlt: "Nd4",
                        caption: "Black develops the Knight, attacking the Knight, but does not stop the upcoming threat.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qk-w4.webp",
                        imageAlt: "Qf3",
                        caption: "White develops the Queen to f3, attacking the weak f7 square.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-qk-b4.webp",
                        imageAlt: "Nd4",
                        caption: "Black develops the Knight, now attacking the Queen, but does not stop the upcoming threat yet.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qk-w5.webp",
                        imageAlt: "Qxf7#: Checkmate",
                        caption: "White's Queen captures the f7 pawn, delivering checkmate. Black's King is trapped with no legal moves.",
                    },
                },
            ],
            winner: "White Wins!",
        },
        {
            id: "fool",
            shortName: "fool's Mate",
            longName: [
                "Fool's Mate",
                "(Early mistake)",
            ],
            summary: "Fastest checkmate in chess! Example of a beginner's blunder.",
            plan: "This kind of checkmate only occurs by chance. It should not happen but it actually does happen.",
            imageSummary: {
                imageURL: "images/fool-mate.webp",
                imageAlt: "Jester",
            },
            roundComplete: [
                {
                    whiteTurn: {
                        imageURL: "images/str-foolmate-w1.webp",
                        imageAlt: "f3",
                        caption: "White weakens their King's defenses by pushing the f3 pawn.",
                    },

                    blackTurn: {
                        imageURL: "images/str-foolmate-b1.webp",
                        imageAlt: "e5",
                        caption: "Black takes control of the center with e5.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-foolmate-w2.webp",
                        imageAlt: "g4",
                        caption: "White makes another weak move, opening the diagonal toward their King.",
                    },

                    blackTurn: {
                        imageURL: "images/str-foolmate-b2.webp",
                        imageAlt: "Qh4#",
                        caption: "Black delivers checkmate with the Queen on h4. The White King is trapped and cannot escape.",
                    },
                },
            ],
            winner: "Black Wins!",
        },
        {
            id: "smothered",
            shortName: "smothered Mate",
            longName: [
                "Smothered Mate",
                "(Confined King)",
            ],
            summary: "The King is surrounded by its own pieces, unable to escape.",
            plan: "This checkmate occurs when the opponent's king is surrounded (or \"smothered\") by its own pieces, and a knight delivers the final check.",
            imageSummary: {
                imageURL: "images/smothered-mate.webp",
                imageAlt: "King behind bars",
            },
            roundComplete: [
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-w1.webp",
                        imageAlt: "e4",
                        caption: "White stakes a claim to the center with their Pawn.",
                    },

                    blackTurn: {
                        imageURL: "images/str-scholarmate-b1.webp",
                        imageAlt: "e5",
                        caption: "Black mirrors with e5, setting the stage for a classical duel.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-scholarmate-qk-w2.webp",
                        imageAlt: "Nf3",
                        caption: "White develops their Knight to f3, attacking Black's e5 Pawn.",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b2.webp",
                        imageAlt: "Nc6",
                        caption: "Black responds protecting the center and getting their Knight into the action.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-smotheredmate-w3.webp",
                        imageAlt: "Bc4",
                        caption: "White places the Bishop on a powerful diagonal aiming at the f7 square.",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b3.webp",
                        imageAlt: "Nd4",
                        caption: "Black developes the Knight to d4, targeting White's Bishop.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-smotheredmate-w4.webp",
                        imageAlt: "Nxe5",
                        caption: "White sacrifices Knight and captures the Pawn on e5. Aiming for f7 square.",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b4.webp",
                        imageAlt: "Qg5",
                        caption: "Black develop the Queen to g5, attacking White's Knight on e5 and the g2 Pawn.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-smotheredmate-w5.webp",
                        imageAlt: "Nxf7",
                        caption: "White captures the f7 Pawn with the Knight, attacking the White's Queen and Rook.",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b5.webp",
                        imageAlt: "Qxg2",
                        caption: "Black's Queen captures the Pawn on g2, threatening checkmate by attacking White's Rook on f1.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-smotheredmate-w6.webp",
                        imageAlt: "Rf1",
                        caption: "White defends by moving the Rook to f1, trying to block the checkmate.",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b6.webp",
                        imageAlt: "Qxe4+",
                        caption: "Black's Queen captures the e5 Pawn and delivers a check.",
                    },
                },
                {
                    whiteTurn: {
                        imageURL: "images/str-smotheredmate-w7.webp",
                        imageAlt: "Be2",
                        caption: "White protects the King with the Bishop, confining the King",
                    },

                    blackTurn: {
                        imageURL: "images/str-smotheredmate-b7.webp",
                        imageAlt: "Nf3#",
                        caption: "White develop the Knight to f3 and delivers checkmate, completing the smothered mate.",
                    },
                },
            ],
            winner: "Black Wins!",
        },
    ],
};

// Function for Aesthetic and Button for top

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

const toTop = (() => {
    let button = document.getElementById('to-top');
    window.onscroll = () => {
      button.classList [
          (document.documentElement.scrollTop > 200) ? 'remove' : 'add'
        ]('not-reveal')
    }
    button.onclick = () => {
      window.scrollTo({
        top:0, behavior:'smooth'
      })
    }
})();

// Stating Pages content by "active page"

const activePage = document.querySelector('.active');
const homePage = activePage.classList.contains('home');
const originsPage = activePage.classList.contains('origins');
const piecesPage = activePage.classList.contains('pieces');
const strategiesPage = activePage.classList.contains('strategies');

if (originsPage) {
    createSpecificPage('origins', arrays.origins, 'origins-sum', 'stories')

} else if (piecesPage) {
    createSpecificPage('pieces', arrays.pieces, 'pieces-summary', 'profile');
    
} else if (strategiesPage) {
    createSpecificPage('strategies', arrays.strategies, 'strategies-sum', 'strategies');

} else {
    createHomePage(arrays);
    formSubmit();
}

// Origins long-stories' template.

function createStoryTemplate(origin) {

    let anchor = document.createElement('a');

    let section = document.createElement('section');
    let longName = document.createElement('h2');
    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let storyPart1 = document.createElement('p');
    let storyPart2 = document.createElement('p');
    let storyPart3 = document.createElement('p');

    longName.textContent = origin.longName;

    storyPart1.textContent = origin.storyLong[0];
    storyPart2.textContent = origin.storyLong[1];
    storyPart3.textContent = origin.storyLong[2];

    storyPart3.setAttribute('class', 'lone-p')

    summaryImage = getImgWithAttributes(origin.imageSummary.imageURL, origin.imageSummary.imageAlt);

    textImage = getImgWithAttributes(origin.imageText.imageURL, origin.imageText.imageAlt);

    firstDiv.appendChild(storyPart1);
    firstDiv.appendChild(summaryImage);

    secondDiv.appendChild(textImage);
    secondDiv.appendChild(storyPart2);

    firstDiv.setAttribute('class', 'first-part');
    secondDiv.setAttribute('class', 'second-part');

    anchor.setAttribute('name', origin.id);
    
    section.appendChild(anchor);
    section.appendChild(addCloseButton(section));
    section.appendChild(longName);
    section.appendChild(firstDiv);
    section.appendChild(secondDiv);
    section.appendChild(storyPart3);

    section.setAttribute('class', `not-reveal origin ${origin.id}`);

    return section;
}

// Pieces profile's template.

function createPieceTemplate(piece) {

    let anchor = document.createElement('a');

    let section = document.createElement('section');
    let pieceName = document.createElement('h2');
    let titleImage = getImgWithAttributes(piece.imageSummary.imageURL, piece.imageSummary.imageAlt);
    let titleDiv = document.createElement('div');

    anchor.setAttribute('name', piece.id);
    pieceName.textContent = capitalize(piece.shortName);

    titleDiv.appendChild(anchor);
    titleDiv.appendChild(addCloseButton(section));
    titleDiv.appendChild(pieceName);
    titleDiv.setAttribute('class', 'profile-header');

    section.setAttribute('class', `not-reveal piece ${piece.id}`);

    if (piece.longExplanation) {

        let figureBoard = document.createElement('figure');
        let caption = document.createElement('figcaption');

        caption.textContent = piece.longExplanation;

        figureBoard.setAttribute('class', 'board');

        figureBoard.appendChild(caption);
        figureBoard.appendChild(titleImage);

        section.appendChild(titleDiv);
        section.appendChild(figureBoard);

    } else {

        titleDiv.appendChild(titleImage);
        section.appendChild(titleDiv);

        let movesDiv = document.createElement('div');
        let roleTitle = document.createElement('h3');
        let movesFig = document.createElement('figure');
        let movesCaption = document.createElement('figcaption');
        let role = document.createElement('p');
        let importanceDiv = document.createElement('div');
        let importanceTitle = document.createElement('h3');
        let importance = document.createElement('p');
        let symbolismDiv = document.createElement('div');
        let symbolismTitle = document.createElement('h3');
        let symbolism = document.createElement('p');
        let otherInfoDiv = document.createElement('div');

        roleTitle.textContent = "Role in Chess";
        role.textContent = piece.role;

        let movesImage = getImgWithAttributes(piece.imageMoves.imageURL, piece.imageMoves.imageAlt);
        movesCaption.textContent = piece.imageMoves.imageAlt;

        movesFig.appendChild(movesImage);
        movesFig.appendChild(movesCaption)

        movesDiv.appendChild(roleTitle);
        movesDiv.appendChild(role);
        movesDiv.appendChild(movesFig);

        movesDiv.setAttribute('class', 'moves')

        importanceTitle.textContent = "Strategic Importance";
        importance.textContent = piece.importance;

        importanceDiv.appendChild(importanceTitle);
        importanceDiv.appendChild(importance);

        symbolismTitle.textContent = "Symbolism";
        symbolism.textContent = piece.symbolism;

        symbolismDiv.appendChild(symbolismTitle);
        symbolismDiv.appendChild(symbolism);

        otherInfoDiv.setAttribute('class', 'other-info');
        
        otherInfoDiv.appendChild(importanceDiv);
        otherInfoDiv.appendChild(symbolismDiv);

        section.appendChild(movesDiv);
        section.appendChild(otherInfoDiv);
    }

    return section;
}

// Strategy details template.

function createStrategyTemplate(strategy) {

    let anchor = document.createElement('a');

    let section = document.createElement('section');
    let nameDiv = document.createElement('div');
    let title = document.createElement('h2');
    let subtitle = document.createElement('h3');
    let plan = document.createElement('p');
    let rounds = document.createElement('div');

    strategy.roundComplete.forEach((round, i) => {
        let numberRound = i + 1;
        rounds.appendChild(roundTemplate(round, numberRound));
    });

    let winner = document.createElement('h3');

    winner.setAttribute('class', 'winner')

    title.textContent = strategy.longName[0];
    subtitle.textContent = strategy.longName[1];
    plan.textContent = strategy.plan;

    nameDiv.appendChild(title);
    nameDiv.appendChild(subtitle);
    nameDiv.appendChild(plan);

    winner.textContent = `${strategy.winner}`;

    anchor.setAttribute('name', strategy.id);

    section.appendChild(anchor);
    section.appendChild(addCloseButton(section));
    section.appendChild(nameDiv);
    section.appendChild(rounds);
    section.appendChild(winner);

    section.setAttribute('class', `not-reveal strategy ${strategy.id}`);

    return section;
}

// Create a template for every round in the strategy part.

function roundTemplate(roundInfo, index) {

    let round = document.createElement('div');
    let roundTitle = document.createElement('h2');

    roundTitle.textContent = `Round ${index}`;
    round.setAttribute('class', 'round');

    let whitesTurn = turnTemplate('white', roundInfo.whiteTurn);

    round.appendChild(roundTitle)
    round.appendChild(whitesTurn);

    if (roundInfo.hasOwnProperty('blackTurn')) {
        let blacksTurn = turnTemplate('black', roundInfo.blackTurn);
        round.appendChild(blacksTurn);
    }

    return round;
}

function turnTemplate(colorSide, turn) {

    let div = document.createElement('div');
    let title = document.createElement('h3');
    let figure = document.createElement('figure');
    let caption = document.createElement('figcaption');

    div.setAttribute('class', `${colorSide}-turn`);

    title.textContent = `${capitalize(colorSide)}'s Move`;
    caption.textContent = turn.caption;

    moveImg = getImgWithAttributes(turn.imageURL, `${capitalize(colorSide)}'s ${turn.imageAlt}`);

    figure.appendChild(caption);
    figure.appendChild(moveImg);

    div.appendChild(title);
    div.appendChild(figure);

    div.setAttribute('class', 'turn');

    return div;
}

// General Function to create Summary cards.

function createCardTemplate(element) {

    let anchor = document.createElement('a');

    let card = document.createElement('section');
    let elementName = document.createElement('h3');
    let cardSummary = document.createElement('p');
    let cardHeader = document.createElement('div');

    cardHeader.setAttribute('class', 'card-header');

    elementName.textContent = capitalize(element.shortName);

    summaryImage = getImgWithAttributes(element.imageSummary.imageURL, element.imageSummary.imageAlt);

    cardSummary.textContent = element.summary;

    cardHeader.appendChild(elementName);
    cardHeader.appendChild(summaryImage);

    card.appendChild(cardHeader);
    card.appendChild(cardSummary);

    anchor.setAttribute('class', 'card');
    anchor.setAttribute('href', `#${element.id}`);

    anchor.appendChild(card);

    return anchor;
}

function createHomePageCard(element, pageURL, elementType) {

    let anchor = document.createElement('a');

    let card = document.createElement('div');
    let elementName = document.createElement('h3');

    elementName.textContent = capitalize(element.shortName);
    card.appendChild(elementName);

    summaryImage = getImgWithAttributes(element.imageSummary.imageURL, element.imageSummary.imageAlt);
    card.appendChild(summaryImage);

    let cardSummary = document.createElement('p');
    cardSummary.textContent = element.summary;
    card.appendChild(cardSummary);

    anchor.textContent = `Go to ${elementType}`;

    card.setAttribute('class', 'home-card');
    anchor.setAttribute('href', pageURL);

    card.appendChild(anchor);

    return card;
}

// General Function to create each page.

function createSpecificPage(pageName, specificPage, cardsID, longInfoID) {

    let longInfos = document.querySelector(`#${longInfoID}`);
    let cards = document.querySelector(`#${cardsID}`);

    specificPage.forEach(element => {

        let card = createCardTemplate(element);
        let longInfo;

        switch (pageName) {
            case 'origins':
                longInfo = createStoryTemplate(element);
                break;
            case 'pieces':
                longInfo = createPieceTemplate(element);
                break;
            case 'strategies':
                longInfo = createStrategyTemplate(element);
                break;
            default:
                break;
        }

        card.addEventListener('click', () => {

            if (longInfo.classList.contains('not-reveal')) {

                longInfo.classList.toggle('long-info');
                longInfo.classList.toggle('not-reveal');
            }
        });

        cards.appendChild(card);
        longInfos.appendChild(longInfo);
    });
}

function createHomePage(arrays) {

    let originCards = document.querySelector('#origins-cards');
    let pieceCards = document.querySelector('#pieces-cards');
    let strategyRandom = document.querySelector('#strategy-card');

    // For origins y pieces cards
    for (let i = 0; i < 3; i++) {
        let origin = arrays.origins[i];
        let piece = arrays.pieces[i + 1]; // Skip the Board one.

        let originCard = createHomePageCard(origin, 'origins.html', 'Origins');

        let pieceCard = createHomePageCard(piece, 'pieces.html', 'Pieces Profile');

        originCards.appendChild(originCard);
        pieceCards.appendChild(pieceCard);       
    }

    // For strategy

    let random = Math.floor(Math.random() * arrays.strategies.length);

    let strategyCard = createHomePageCard(arrays.strategies[random], 'strategies.html', 'Strategies');
    strategyCard.setAttribute('class', 'strategy-home')
    strategyRandom.appendChild(strategyCard);
}

// Functions for easier coding.

function getImgWithAttributes(imageURL, imageAlt) {
    let img = document.createElement('img');

    img.setAttribute('src', imageURL);
    img.setAttribute('alt', imageAlt);
    img.setAttribute('loading', 'lazy');

    return img;
}

function addCloseButton(section) {
    let closeButton = document.createElement('button');

    closeButton.textContent = 'Close ✖';
    closeButton.setAttribute('class', 'close-button');

    closeButton.addEventListener('click', () => {
        section.classList.toggle('long-info');
        section.classList.toggle('not-reveal');
    });

    return closeButton;
}

// Dealing with the Form

function formSubmit() {
    const form = document.getElementById('form');
    const subscribeSection = document.getElementById('subscribe-section');
    const thankYouMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        subscribeSection.classList.add('not-reveal');
        thankYouMessage.classList.remove('not-reveal');
    });
}

// Footer

const currentyear = document.querySelector('#currentyear');
const olastModified = document.querySelector('#lastModified');

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

olastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;