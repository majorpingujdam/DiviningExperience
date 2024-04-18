// Function to make an API request to the Tarot API
async function getTarotReading(question) {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards/random?n=10&q=${encodeURIComponent(question)}`);
    const data = await response.json();
    return data;
  }
  
  // Function to generate a story based on the tarot cards and user's question
  function generateStory(cards, question) {
    const storyTemplates = [
      // Story Template 1
      function () {
        const storyParts = [];
        storyParts.push(`Seeking answers to the question "${question}", a young person embarked on a journey of self-discovery.\n\n`);
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `The ${card.name} appeared, representing ${card.meaning}, signifying the beginning of their quest.\n\n`;
          } else if (index === cards.length - 1) {
            sentence = `Finally, the ${card.name} emerged, symbolizing ${card.meaning}, marking the end of their transformative journey.\n\n`;
          } else {
            const sentenceStarts = [
              `As they journeyed on, the ${card.name} manifested`,
              `In a surprising turn of events, the ${card.name} revealed itself`,
              `The ${card.name} suddenly came into focus`,
              `With each passing moment, the ${card.name} grew more significant`
            ];
            const randomStart = sentenceStarts[Math.floor(Math.random() * sentenceStarts.length)];
            sentence = `${randomStart}, embodying ${card.meaning}, guiding them further along their path.\n\n`;
          }
          storyParts.push(sentence);
        });
        storyParts.push(`Through the lessons and insights gained from each tarot card, the young person found clarity and understanding related to their question "${question}".\n`);
        return storyParts.join(" ");
      },
      // Story Template 2
      function () {
        const storyParts = [];
        storyParts.push(`In a realm of mystical enchantment, a brave soul sought answers to the enigmatic question: "${question}".\n\n`);
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `As they stepped forward, the ${card.name} materialized, whispering tales of ${card.meaning}, setting the stage for an epic adventure.\n\n`;
          } else if (index === cards.length - 1) {
            sentence = `In a grand finale, the ${card.name} emerged from the mists, its essence of ${card.meaning} forever etched in their heart.\n\n`;
          } else {
            const sentenceStarts = [
              `The enigmatic ${card.name} appeared, radiating with ${card.meaning}`,
              `A mysterious force drew them towards the ${card.name}, which emanated ${card.meaning}`,
              `As if guided by an unseen hand, the ${card.name} materialized, pulsating with ${card.meaning}`,
              `The ${card.name} danced into view, its ${card.meaning} intertwining with their destiny`
            ];
            const randomStart = sentenceStarts[Math.floor(Math.random() * sentenceStarts.length)];
            sentence = `${randomStart}, urging them to venture deeper into the unknown.\n\n`;
          }
          storyParts.push(sentence);
        });
        storyParts.push(`With each step, each revelation, they pieced together the fragments of their destiny, forever changed by the profound wisdom bestowed upon them by the tarot. The answer to their question "${question}" became clearer with each passing moment.\n`);
        return storyParts.join(" ");
      },
      // Story Template 3
      function () {
        const storyParts = [];
        storyParts.push(`Amidst the chaos of an uncertain world, a seeker turned to the ancient wisdom of the tarot, desperate for clarity on the question that haunted them: "${question}".\n\n`);
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `The ${card.name} emerged from the shadows, its message of ${card.meaning} a beacon of hope in troubled times.\n\n`;
          } else if (index === cards.length - 1) {
            sentence = `With a final flourish, the ${card.name} revealed itself, its promise of ${card.meaning} a guiding light for the path ahead.\n\n`;
          } else {
            const sentenceStarts = [
              `Whispers of ${card.meaning} echoed through the air as the ${card.name} came into focus`,
              `The ${card.name} shimmered with an ethereal glow, its ${card.meaning} permeating the seeker's soul`,
              `In a dance of shadows and light, the ${card.name} emerged, its ${card.meaning} a silent promise`,
              `The seeker's heart quickened as the ${card.name} appeared, its ${card.meaning} a tantalizing secret`
            ];
            const randomStart = sentenceStarts[Math.floor(Math.random() * sentenceStarts.length)];
            sentence = `${randomStart}, strengthening their resolve to unravel the mysteries that lay ahead.\n\n`;
          }
          storyParts.push(sentence);
        });
        storyParts.push(`Armed with the knowledge bestowed by the tarot, the seeker emerged from their journey, ready to face the challenges posed by their question "${question}" with newfound clarity and purpose.\n`);
        return storyParts.join(" ");
      }
    ];
  
    // Randomly select a story template
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const selectedTemplate = storyTemplates[randomIndex];
  
    // Generate the story using the selected template
    const story = selectedTemplate();
    return story;
  }
  
  // Function to display the generated story
  function displayStory(story) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>Tarot Card Reading</h2>
      <textarea rows="30" cols="40" readonly>${story}</textarea>
    `;
  }
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    try {
      const reading = await getTarotReading(question);
      const story = generateStory(reading.cards, question);
      displayStory(story);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch tarot cards. Please try again later.');
    }
  });