
         // Game Logic (JavaScript)
        let score = 0;
        let currentStage = 0;
        let currentQuestionIndex = 0;
        let wrongAttempts = 0;
        let marketQuestions = [
          { question: "On your way to the market, Omar suddenly had to leave due to an emergency, so you ended up heading to the market on your own. Before parting, Omar said, \"People in the market usually like to ask questions, and those questions are often meant to test your skills in Arabic. You know, I’m not a local here myself, so I’ve struggled a bit too, but i've got the hang out of it. Trust me, answering their questions will help you a lot and improve your Arabic as well, so you won’t have a hard time communicating. Translate 'Apple' to Arabic (Pronunciation: Tuffāḥ)", answer: 'تفاح' },
            { question: "Translate 'Dog' to Arabic(Pronunciation: Kalb)", answer: 'كلب' },
            { question: "Translate 'Book' to Arabic(Pronunciation: Kitāb)", answer: 'كتاب' },
            { question: "Translate 'House' to Arabic(Pronunciation: Manzil)", answer: 'منزل' },
            { question: "Translate 'School' to Arabic(Pronunciation: Madrasa)", answer: 'مدرسة' },
            { question: "Translate 'Pen' to Arabic(Pronunciation: Qalam)", answer: 'قلم' },
            { question: "After browsing through some shops and picking up a few items, you noticed the locals eagerly testing your Arabic skills with various questions. Then,  a man approached you—a well-known figure in the town called \"Vendor.\" Renowned for his mastery of both English and Arabic, Vendor is famous for being able to translate anything with ease. With a warm smile, he offered, \"Do you need help with your language skills? I’d be happy to assist you.\" You were delighted by his offer, relieved to have someone who could both understand and guide you. As you continued your way through the shops, purchasing more items, Vendor stayed by your side. He kept asking you questions, each one a mix of challenge and encouragement. Yet, despite answering some, Vendor’s curiosity never seemed to run out, as he persistently kept testing your knowledge, eager to help you improve. Translate 'كرسي' to English (hint: You sit on it.) Pronunciation: Kursī", answer: 'Chair' },
            { question: "Translate 'شمس' to English (hint: It shines brightly in the sky during the day.) Pronunciation: Shams ", answer: 'Sun' },
            { question: "Translate 'قمر' to English (hint: It appears in the night sky and has phases.) Pronunciation: Qamar", answer: 'Moon' },
            { question: "Translate 'ماء' to English (hint: You drink it to stay hydrated.) Pronunciation: Māʾ", answer: 'Water' },
            { question: "Translate 'نار' to English (hint: It burns and provides heat.) Pronunciation: Nār ", answer: 'Fire' },
            { question: "Translate 'قطة' to English (hint: A small, furry pet that meows.) Pronunciation: Qiṭṭa", answer: 'Cat' },
            { question: "Translate 'عصفور' to English (hint: A creature with wings that can fly.) Pronunciation: ʿUṣfūr ", answer: 'Bird' },
            { question: "Translate 'زهرة' to English (hint: A beautiful plant with petals, often fragrant.) Pronunciation: Zahra ", answer: 'Flower' },
        ];

        let townExplorationText = [
            "The sun hung low over the cobbled streets of the bustling town square, casting long shadows that stretched toward colorful stalls. You could hear the calls of vendors, each one beckoning passersby with promises of the finest goods. As you stepped further into the square, your attention was drawn to a figure standing proudly behind a stall piled high with gleaming copper and bright fabrics. This was Vendor, a kind yet mischievous man known for testing travelers with riddles and questions. He waved at you, his voice booming above the noise. “Ah, traveler! Come here! You look like someone eager to learn,” he said, gesturing for you to approach. Before you could reply, he held up a beautifully crafted إبريق (pronounced ibreeq), a traditional kettle. “Tell me,” he began, “do you know what we call this in Arabic?”",
          "After a brief hesitation, you smiled and answered correctly. “إبريق,” you said, pronouncing the word carefully. Vendor nodded approvingly. “Very good! You’ll find that an إبريق is essential for making قهوة (pronounced qahwa), or Arabic coffee. Speaking of which…” He poured a small cup of steaming, spiced coffee and handed it to you. “Here, taste this. It’s not just a drink—it’s part of our hospitality.” As you sipped the rich, fragrant قهوة, you noticed the way the people around you carried themselves—with pride in their culture and a deep sense of community. Vendor leaned closer, his voice lowering conspiratorially. “Did you know that sharing قهوة is a way of welcoming strangers into our homes? You, my friend, are no longer a stranger here.”",
            "As you wandered further, you found yourself at a quiet corner of the market, where a young boy sat by a basket filled with freshly baked خبز (pronounced khobz), or bread. He grinned up at you. “Would you like to try some خبز?” he asked shyly. You took a piece and bit into its warm, soft crust. The boy explained, “In our culture, bread is life. We even have a saying: ‘عيش وملح’ (pronounced aish wa melh), which means ‘bread and salt,’ symbolizing deep friendship.” His words lingered in your mind as you thanked him and continued through the market, marveling at the rich layers of meaning woven into the language.",
            "Your next stop was a vibrant stall covered in fruits and vegetables. An elderly woman with a radiant smile stood behind it, slicing a juicy بطيخ (pronounced bateekh), or watermelon. “Here, have a taste,” she said, offering you a slice. The sweet, refreshing flavor was perfect under the hot sun. “We say that بطيخ is the fruit of summer,” she explained. “It brings families together, especially during picnics and celebrations.” You couldn’t help but smile, realizing how even simple things like fruit held cultural significance here.",
            "Finally, as the day began to fade, you found yourself at a pottery stall run by a gentle man named Harith. He carefully lifted a beautifully painted كوب (pronounced koob), or cup, and handed it to you. “This is for you,” he said. “A كوب is more than just a vessel—it holds stories. Imagine the conversations and laughter shared over it.” You thanked him, touched by his kindness. As you left the market, the words you had learned danced in your mind: إبريق, قهوة, خبز, بطيخ, كوب. Each one felt like a small key to unlocking the soul of the town, a reminder that language isn’t just about communication—it’s about connection, history, and shared humanity."
        ];

        // Change background helper function
        function changeBackground(imageUrl) {
            document.body.style.backgroundImage = `url('${imageUrl}')`;
        }

        // Start the game
        document.getElementById("start-button").addEventListener("click", startGame);

        function startGame() {
            currentStage = 1;
            score = 0;
            currentQuestionIndex = 0;
            wrongAttempts = 0;
            document.getElementById("score").innerText = score;
            changeBackground('https://i.postimg.cc/q7Zhnc3v/Screenshot-2025-02-17-210538.png'); 
            displayText("You find yourself in the town square. An mysterious man approaches you.");
            createChoice("Talk to the mysterious man", talkToNPC);
            document.getElementById("start-button").style.display = 'none';  
        }

        function displayText(text) {
            document.getElementById("game-text").innerText = text;
            document.getElementById("choices-container").innerHTML = '';  
        }

        function createChoice(buttonText, callback) {
            let button = document.createElement('button');
            button.innerText = buttonText;
            button.onclick = callback;
            document.getElementById("choices-container").appendChild(button);
        }

        // Talk to the NPC
        function talkToNPC() {
            changeBackground('https://i.postimg.cc/sxqv3JCq/ebasd-jpg.png'); 
            displayText("'Hey there! You know, not many people come from outside the town these days—it’s mostly the same faces around here, though still lively as ever. So, tell me, what brings you all the way out here? Oh, and I’ve been meaning to ask you something. I’m getting on in years, and my memory isn’t as sharp as it used to be—how do you say 'apple' in Arabic? It’s such a basic word, but I figure you’d remember it better than I do, being younger and all. Haha- Oh, by the way, my name is Omar, if you were wondering what my name was. (Type your answer below)'");

            let answerField = document.createElement('input');
            answerField.setAttribute('id', 'answer-input');
            answerField.placeholder = 'Enter translation...';
            document.getElementById("choices-container").appendChild(answerField);

            let submitButton = document.createElement('button');
            submitButton.innerText = "Submit";
            submitButton.onclick = () => checkAnswer(answerField.value);
            document.getElementById("choices-container").appendChild(submitButton);
        }

        // Check the answer
        function checkAnswer(answer) {
            if (answer.trim().toLowerCase() === 'تفاح') {
                score += 10;
                document.getElementById("score").innerText = score;
                displayText("Omar: 'Ah, that’s right! Of course, how could I forget? Thanks for reminding me. See, this old brain of mine isn’t what it used to be'");
                createChoice("Continue", continueGame);
            } else {
                wrongAttempts++;
                displayText("Omar:' I don't think it sounds like that. Try again'");
                createChoice("Try Again", tryAgain);
            }
        }

        // Retry the question
        function tryAgain() {
            document.getElementById("choices-container").innerHTML = '';
            let answerField = document.createElement('input');
            answerField.setAttribute('id', 'answer-input');
            answerField.placeholder = 'Enter translation...';
            document.getElementById("choices-container").appendChild(answerField);

            let submitButton = document.createElement('button');
            submitButton.innerText = "Submit";
            submitButton.onclick = () => checkAnswerAfterTryAgain(answerField.value);
            document.getElementById("choices-container").appendChild(submitButton);
        }

        // Check answer after retry
        function checkAnswerAfterTryAgain(answer) {
            if (answer.trim().toLowerCase() === 'تفاح') {
                score += 10;
                document.getElementById("score").innerText = score;
                displayText("Omar: 'Ah, that’s right! Of course, how could I forget? Thanks for reminding me. See, this old brain of mine isn’t what it used to be'");
                createChoice("Continue", continueGame);
            } else {
                if (wrongAttempts >= 5) {
                    displayText("Omar: 'You've had several tries. Let's move on to the next.'");
                    createChoice("Go Back", goBack);
                } else {
                    displayText("Omar: That's not right. Try again'");
                    createChoice("Try Again", tryAgain);
                }
            }
        }

        // Go back to previous options
        function goBack() {
            wrongAttempts = 0;
            changeBackground('https://i.postimg.cc/q7Zhnc3v/Screenshot-2025-02-17-210538.png'); 
            displayText("You decided to take a break and go back to the previous choice.");
            createChoice("Return to Omar", continueGame);
            createChoice("Go to Market", goToMarket);
        }

        // Continue the game
        function continueGame() {
            displayText("Omar: 'Since you're new around here, do you want to take a look around the town?. Do you want to explore the town or go to the market first?'");
            createChoice("Explore Town", exploreTown);
            createChoice("Go to Market", goToMarket);
        }

        // Explore the town
        let townIndex = 0;  
        function exploreTown() {
            changeBackground('https://i.postimg.cc/BZYZWNqn/Screenshot-2025-02-18-194419.png'); 
            if (townIndex < townExplorationText.length) {
                displayText(townExplorationText[townIndex]);
                townIndex++;
                createChoice("Continue", exploreTown);  
            } else {
                displayText("You have explored the town and met some interesting people. Now, where would you like to go?");
                createChoice("Go to Market", goToMarket);
                createChoice("Return to Omar", continueGame);
            }
        }

        // Go to market
        function goToMarket() {
            changeBackground('https://i.postimg.cc/RZfvHBwW/www-jpg.png'); 
            displayText("You head to the market. The vendor asks you to match a word in English to its Arabic equivalent.");
            askMarketQuestion();
        }

        // Ask a market question
        function askMarketQuestion() {
            if (currentQuestionIndex >= marketQuestions.length) {
                displayText("As you reached the end of your shopping and answered Vendor's final question, he smiled warmly and said, \"You’ve done remarkably well today. I can see your Arabic has already improved! You’ve worked through all the questions in the market with great effort—well done!\" Feeling a sense of accomplishment, you thanked Vendor for his guidance and support. \"You’ve truly been a big help,\" you said with a grateful nod. Vendor chuckled. \"It was my pleasure. Helping others with language is what I enjoy most. Keep practicing, and soon you’ll be speaking like a local!\" With that, he bid you farewell, leaving you with newfound confidence and a stronger connection to the language. The words echoed in your mind as you walked away: You have completed all questions at the market. Great job.");
                createChoice("Go Back to Start", goBackToStart);
                return;
            }

            let question = marketQuestions[currentQuestionIndex];
            displayText(question.question);

            let answerField = document.createElement('input');
            answerField.setAttribute('id', 'answer-input');
            answerField.placeholder = 'Enter translation...';
            document.getElementById("choices-container").appendChild(answerField);

            let submitButton = document.createElement('button');
            submitButton.innerText = "Submit";
            submitButton.onclick = () => checkMarketAnswer(answerField.value);
            document.getElementById("choices-container").appendChild(submitButton);
        }

        // Check market answer
        function checkMarketAnswer(answer) {
            let correctAnswer = marketQuestions[currentQuestionIndex].answer;
            if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                score += 10;
                document.getElementById("score").innerText = score;
                displayText("Vendor: 'Correct! Well done.'");
                currentQuestionIndex++;
                createChoice("Next Question", askMarketQuestion);
            } else {
                displayText("Vendor: 'That's incorrect. Try again'");
                createChoice("Try Again", askMarketQuestion);
            }
        }

        // Function to reset the game and go back to the start
        function goBackToStart() {
            currentStage = 0; 
            score = 0;        
            currentQuestionIndex = 0;
            wrongAttempts = 0;

            document.getElementById("score").innerText = score;
            changeBackground('https://i.postimg.cc/q7Zhnc3v/Screenshot-2025-02-17-210538.png'); 
            displayText("You have succesfully reached the end i hope u learned something new! (refresh if u want to redo it again).");
            document.getElementById("start-button").style.display = 'block'; 
            document.getElementById("choices-container").innerHTML = ''; 
        }
    

