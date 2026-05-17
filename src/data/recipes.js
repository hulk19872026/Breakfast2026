// Global Breakfast Bible — Recipe Database
// 60 representative recipes across all 6 continents
// Add more from the PDF by following the same structure

export const RECIPES = [
  // ── EUROPE ──────────────────────────────────────────────────────────────────
  {
    id: 1, name: 'Classic Butter Croissant', country: 'France', flag: '🇫🇷', continent: 'Europe',
    ingredients: ['flour', 'butter', 'yeast', 'milk', 'sugar', 'salt', 'egg'],
    description: 'Flaky laminated pastry with 27 buttery layers — the crown jewel of French baking.',
    prepTime: '45 min + overnight', servings: '12', calories: '340',
    tags: ['Vegetarian', 'Weekend Project', 'Classic'],
    steps: [
      'Combine flour, salt, sugar, yeast. Add cold milk and softened butter. Knead 5 min into a shaggy dough. Refrigerate overnight.',
      'Beat cold lamination butter into a flat 20cm square between two sheets of parchment.',
      'Roll dough into a 40cm square. Enclose butter block. Perform 3 letter folds, chilling 30 min between each.',
      'Roll to 5mm thick. Cut into triangles. Roll from base to tip. Curve into crescents.',
      'Prove 2–3 hours until puffy and jiggly. Brush with egg wash. Bake at 200°C for 18–20 min until deep amber gold.',
    ]
  },
  {
    id: 2, name: 'Pain Perdu (French Toast)', country: 'France', flag: '🇫🇷', continent: 'Europe',
    ingredients: ['bread', 'eggs', 'milk', 'butter', 'vanilla', 'sugar', 'cinnamon'],
    description: 'Lost bread — stale baguette soaked in vanilla custard and pan-fried until caramelised gold.',
    prepTime: '10 min', servings: '2', calories: '380',
    tags: ['Vegetarian', 'Quick', 'Sweet'],
    steps: [
      'Whisk together eggs, milk, vanilla extract, sugar, and cinnamon in a shallow bowl.',
      'Soak thick-cut stale bread slices for 30 seconds per side until saturated but not falling apart.',
      'Fry in foaming butter over medium heat 3 min per side until deep golden.',
      'Dust with powdered sugar. Serve with maple syrup and fresh berries.',
    ]
  },
  {
    id: 3, name: 'Crepes with Jam', country: 'France', flag: '🇫🇷', continent: 'Europe',
    ingredients: ['flour', 'eggs', 'milk', 'butter', 'sugar', 'salt', 'jam'],
    description: 'Paper-thin golden crepes folded into quarters with jam, honey, or Nutella.',
    prepTime: '25 min', servings: '8', calories: '190',
    tags: ['Vegetarian', 'Quick', 'Sweet'],
    steps: [
      'Blend flour, eggs, milk, melted butter, sugar, and salt until completely smooth. Rest 20 min.',
      'Pour a thin ladle of batter into a hot buttered pan. Immediately tilt to coat in a thin circle.',
      'Cook 1–1.5 min per side until pale golden spots appear.',
      'Fold into quarters. Fill with jam, lemon and sugar, or Nutella.',
    ]
  },
  {
    id: 4, name: 'Full English Breakfast', country: 'United Kingdom', flag: '🇬🇧', continent: 'Europe',
    ingredients: ['eggs', 'bacon', 'sausage', 'baked beans', 'mushrooms', 'tomato', 'bread', 'butter'],
    description: "Britain's legendary fry-up — the complete morning plate that built an empire.",
    prepTime: '25 min', servings: '2', calories: '740',
    tags: ['High Protein', 'Weekend', 'Classic'],
    steps: [
      'Place bacon and sausages under a hot grill. Cook 10 min, turning once, until golden.',
      'Fry eggs in butter sunnyside up in a separate pan.',
      'Heat baked beans in a small saucepan. Halve tomatoes and grill alongside bacon.',
      'Sauté mushrooms in butter with a pinch of thyme until golden.',
      'Toast bread and butter generously. Plate everything simultaneously on a warm plate.',
    ]
  },
  {
    id: 5, name: 'Scottish Porridge', country: 'United Kingdom', flag: '🇬🇧', continent: 'Europe',
    ingredients: ['oats', 'water', 'salt', 'milk', 'honey', 'berries'],
    description: 'Slow-cooked rolled oats in water and milk — Scotland\'s legendary warming breakfast.',
    prepTime: '10 min', servings: '2', calories: '280',
    tags: ['Vegan', 'High Fiber', 'Quick', 'Gluten-Free'],
    steps: [
      'Combine oats with equal parts water and milk in a saucepan. Add a generous pinch of salt.',
      'Bring to a simmer over medium heat, stirring frequently.',
      'Cook 5–8 min until thick, creamy, and smooth. Add more milk if too thick.',
      'Top with honey drizzled in a spiral, fresh berries, and a pinch more salt.',
    ]
  },
  {
    id: 6, name: 'Greek Yogurt with Honey & Walnuts', country: 'Greece', flag: '🇬🇷', continent: 'Europe',
    ingredients: ['yogurt', 'honey', 'walnuts', 'cinnamon', 'berries'],
    description: 'Thick strained yogurt, Hymettus thyme honey, and crunchy walnuts — ancient Greek perfection.',
    prepTime: '3 min', servings: '1', calories: '280',
    tags: ['Vegetarian', 'Gluten-Free', 'No-Cook', 'Quick'],
    steps: [
      'Spoon thick, cold Greek yogurt into a wide bowl.',
      'Drizzle Hymettus honey (or any good thyme honey) generously in a spiral.',
      'Scatter a generous handful of walnut halves across the honey.',
      'Dust lightly with ground cinnamon. Add seasonal berries.',
    ]
  },
  {
    id: 7, name: 'Kanelbullar (Swedish Cinnamon Buns)', country: 'Sweden', flag: '🇸🇪', continent: 'Europe',
    ingredients: ['flour', 'butter', 'yeast', 'milk', 'sugar', 'cardamom', 'cinnamon', 'egg'],
    description: 'Soft, pillowy Swedish buns scented with cardamom — the heart of Swedish fika culture.',
    prepTime: '30 min + 2 hrs', servings: '20', calories: '210',
    tags: ['Vegetarian', 'Sweet', 'Make-Ahead', 'Crowd-Pleaser'],
    steps: [
      'Combine flour, yeast, sugar, salt, and ground cardamom. Add warm milk, softened butter, and egg. Knead 10 min. Prove 1 hour.',
      'Make filling: beat soft butter with sugar and cinnamon into a smooth paste.',
      'Roll proved dough into a large rectangle. Spread filling evenly to every edge.',
      'Roll up tightly from the long edge. Cut into 2cm rounds. Twist each round into a bun shape.',
      'Prove 30–45 min until puffed. Brush with egg wash. Scatter pearl sugar. Bake 200°C for 12 min.',
    ]
  },
  {
    id: 8, name: 'Bircher Muesli', country: 'Switzerland', flag: '🇨🇭', continent: 'Europe',
    ingredients: ['oats', 'apple', 'milk', 'yogurt', 'honey', 'lemon', 'nuts', 'berries'],
    description: "Overnight-soaked oats with grated apple — Dr. Bircher-Benner's original 1900 recipe.",
    prepTime: '5 min + overnight', servings: '2', calories: '340',
    tags: ['Vegetarian', 'Make-Ahead', 'High Fiber'],
    steps: [
      'Combine oats, milk, yogurt, grated apple (skin on), lemon juice, and honey in a bowl.',
      'Stir well. Cover and refrigerate overnight (minimum 4 hours).',
      'In the morning, stir and add a splash of milk if too thick.',
      'Top with toasted nuts and fresh berries. Eat cold.',
    ]
  },
  {
    id: 9, name: 'Kaiserschmarrn', country: 'Austria', flag: '🇦🇹', continent: 'Europe',
    ingredients: ['eggs', 'flour', 'milk', 'butter', 'sugar', 'raisins', 'powdered sugar', 'jam'],
    description: "Emperor's torn pancake — fluffy caramelised shreds served with plum jam and powdered sugar.",
    prepTime: '20 min', servings: '2', calories: '480',
    tags: ['Vegetarian', 'Sweet', 'Weekend'],
    steps: [
      'Separate eggs. Whisk yolks with flour, milk, and sugar until smooth.',
      'Whip whites to stiff peaks. Gently fold into the yolk batter in two additions.',
      'Melt butter in a large oven-safe pan. Pour in batter. Scatter raisins. Cook 3 min until set on base.',
      'Transfer to oven at 180°C for 8 min. Tear into rough pieces with two forks.',
      'Sprinkle with sugar. Return to heat to caramelise. Dust heavily with powdered sugar. Serve with warm jam.',
    ]
  },
  {
    id: 10, name: 'Churros with Chocolate', country: 'Spain', flag: '🇪🇸', continent: 'Europe',
    ingredients: ['flour', 'water', 'salt', 'oil', 'cinnamon', 'sugar', 'dark chocolate', 'cream'],
    description: 'Golden fried dough sticks rolled in cinnamon sugar with dark chocolate dipping sauce.',
    prepTime: '25 min', servings: '4', calories: '420',
    tags: ['Sweet', 'Street Food', 'Vegan'],
    steps: [
      'Bring water, oil, and salt to a boil. Remove from heat and immediately add flour. Stir vigorously into a smooth dough.',
      'Transfer dough to a piping bag fitted with a star nozzle.',
      'Pipe 15cm lengths into hot oil (180°C). Fry 3 min until golden and crispy.',
      'Drain, then toss in cinnamon-sugar mixture.',
      'Melt dark chocolate with warm cream for dipping sauce. Serve immediately.',
    ]
  },
  {
    id: 11, name: 'Pan con Tomate', country: 'Spain', flag: '🇪🇸', continent: 'Europe',
    ingredients: ['bread', 'tomatoes', 'olive oil', 'garlic', 'salt'],
    description: 'Catalan grilled bread rubbed with garlic and ripe tomato — 5 ingredients, absolute perfection.',
    prepTime: '5 min', servings: '2', calories: '220',
    tags: ['Vegan', 'Quick', '5 Ingredients'],
    steps: [
      'Toast thick slices of sourdough or rustic bread until very golden and crispy.',
      'Rub a halved raw garlic clove firmly across the hot toast surface — it acts as a grater.',
      'Cut a very ripe tomato in half. Rub the cut side against the bread until only the skin remains.',
      'Drizzle your best extra-virgin olive oil generously over. Season with flaky sea salt.',
    ]
  },
  {
    id: 12, name: 'Danish Wienerbrød', country: 'Denmark', flag: '🇩🇰', continent: 'Europe',
    ingredients: ['flour', 'butter', 'yeast', 'milk', 'sugar', 'cardamom', 'egg', 'jam', 'almonds'],
    description: 'The original Danish pastry — laminated with 27 butter layers, filled with almond cream.',
    prepTime: '40 min + overnight', servings: '16', calories: '340',
    tags: ['Vegetarian', 'Weekend Project', 'Special Occasion'],
    steps: [
      'Make enriched dough with flour, yeast, sugar, cardamom, milk, egg. Refrigerate overnight.',
      'Laminate with cold butter: enclose in dough and perform 4 letter folds, chilling 30 min between each.',
      'Roll to 5mm. Cut into squares. Add almond cream or jam filling. Shape into desired forms.',
      'Prove 45–60 min until puffed. Brush with egg wash.',
      'Bake at 200°C for 14–16 min until deep golden. Cool slightly before eating.',
    ]
  },
  {
    id: 13, name: 'Rye Smørrebrød with Smoked Salmon', country: 'Denmark', flag: '🇩🇰', continent: 'Europe',
    ingredients: ['rye bread', 'butter', 'smoked salmon', 'cream cheese', 'dill', 'lemon', 'capers'],
    description: 'Dense Danish rye open sandwich with cold-smoked salmon, cream cheese, and dill.',
    prepTime: '8 min', servings: '2', calories: '340',
    tags: ['High Protein', 'No-Cook', 'Omega-3'],
    steps: [
      'Spread cold, salted butter generously on dense rye bread (rugbrød) all the way to every edge.',
      'Spread a thin layer of cream cheese over the butter.',
      'Lay smoked salmon slices, overlapping, across the cream cheese.',
      'Add capers, thin cucumber slices, and generous fresh dill.',
      'Squeeze lemon. Season with white pepper. Eat with a fork and knife — never picked up.',
    ]
  },
  {
    id: 14, name: 'Finnish Pannukakku', country: 'Finland', flag: '🇫🇮', continent: 'Europe',
    ingredients: ['eggs', 'flour', 'milk', 'sugar', 'butter', 'salt', 'vanilla', 'jam'],
    description: 'Oven-baked Finnish pancake that puffs up dramatically before collapsing into golden custard.',
    prepTime: '35 min', servings: '6', calories: '280',
    tags: ['Vegetarian', 'Weekend', 'Kid-Friendly'],
    steps: [
      'Whisk together eggs, milk, flour, sugar, salt, and vanilla until completely smooth. Rest 10 min.',
      'Place a 30x20cm baking dish in the oven at 225°C for 5 min until hot.',
      'Add butter — it should sizzle immediately. Pour in batter all at once.',
      'Bake 20–25 min until puffed, deeply golden, and the edges are crispy. It will deflate on removal.',
      'Cut into squares. Serve with lingonberry jam and lightly whipped cream.',
    ]
  },
  {
    id: 15, name: 'Italian Frittata', country: 'Italy', flag: '🇮🇹', continent: 'Europe',
    ingredients: ['eggs', 'cheese', 'vegetables', 'olive oil', 'salt', 'pepper', 'onion'],
    description: 'Italian oven-finished omelette — golden outside, tender inside, with cheese and seasonal vegetables.',
    prepTime: '20 min', servings: '4', calories: '290',
    tags: ['Vegetarian', 'Gluten-Free', 'High Protein'],
    steps: [
      'Beat 6 eggs with grated Parmesan, salt, and white pepper.',
      'Sauté diced onion and seasonal vegetables in olive oil in an oven-safe frying pan until soft.',
      'Pour egg mixture over vegetables. Cook on stovetop 3–4 min until edges are set.',
      'Transfer to 190°C oven or finish under a hot grill for 3 min until surface is golden.',
      'Slide onto a board. Cut into wedges. Serve warm or at room temperature.',
    ]
  },

  // ── ASIA ─────────────────────────────────────────────────────────────────────
  {
    id: 16, name: 'Tamagoyaki (Rolled Omelette)', country: 'Japan', flag: '🇯🇵', continent: 'Asia',
    ingredients: ['eggs', 'soy sauce', 'mirin', 'sugar', 'dashi', 'oil'],
    description: 'Sweet-savory layered rolled omelette — Japan\'s most essential breakfast preparation.',
    prepTime: '10 min', servings: '2', calories: '160',
    tags: ['Gluten-Free', 'High Protein', 'Classic'],
    steps: [
      'Beat 3 eggs with soy sauce, mirin, sugar, and dashi until well combined.',
      'Heat a rectangular tamagoyaki pan with a thin brush of neutral oil over medium heat.',
      'Pour ⅓ of the egg mixture. When almost set, roll toward one edge using chopsticks.',
      'Add another ⅓ of the mixture, letting it run under the roll. Roll again when set.',
      'Repeat with remaining egg. Slice into 6 even rounds. Serve with steamed rice.',
    ]
  },
  {
    id: 17, name: 'Tamago Kake Gohan (TKG)', country: 'Japan', flag: '🇯🇵', continent: 'Asia',
    ingredients: ['rice', 'egg', 'soy sauce', 'sesame oil', 'nori'],
    description: "Raw egg on hot rice — Japan's simplest, most beloved 3-minute breakfast.",
    prepTime: '3 min', servings: '1', calories: '320',
    tags: ['Gluten-Free', 'High Protein', '3 Minutes'],
    steps: [
      'Place a generous bowl of very hot, freshly cooked Japanese short-grain rice.',
      'Crack one very fresh egg directly on top of the hot rice.',
      'Add 1 tsp soy sauce and a few drops of toasted sesame oil.',
      'Mix vigorously with chopsticks until the egg becomes creamy and coats every grain.',
      'Top with shredded nori strips and sesame seeds. Eat immediately.',
    ]
  },
  {
    id: 18, name: 'Miso Soup with Tofu', country: 'Japan', flag: '🇯🇵', continent: 'Asia',
    ingredients: ['miso paste', 'dashi', 'tofu', 'wakame', 'green onion', 'sesame oil'],
    description: 'Umami-rich fermented soybean broth with silken tofu and wakame seaweed.',
    prepTime: '8 min', servings: '2', calories: '120',
    tags: ['Vegan', 'Gluten-Free', 'Low Calorie'],
    steps: [
      'Heat dashi stock to just below a simmer — never boil once miso is added.',
      'Dissolve white miso paste by pressing it through a small strainer directly into the hot dashi.',
      'Add cubed soft tofu and rehydrated dried wakame seaweed. Warm 1 min.',
      'Ladle into warmed bowls. Top with thinly sliced green onion and a drop of sesame oil.',
    ]
  },
  {
    id: 19, name: 'Chinese Congee (Jook)', country: 'China', flag: '🇨🇳', continent: 'Asia',
    ingredients: ['rice', 'water', 'ginger', 'soy sauce', 'sesame oil', 'green onion', 'egg'],
    description: "Silky slow-cooked rice porridge — China's most comforting morning bowl.",
    prepTime: '45 min', servings: '4', calories: '220',
    tags: ['Gluten-Free', 'Low Calorie', 'Make-Ahead'],
    steps: [
      'Combine 1 cup rice with 8 cups water in a pot. Bring to a boil, skimming any foam.',
      'Reduce to lowest simmer. Add ginger slices. Cook 35–40 min, stirring occasionally.',
      'The rice should completely dissolve into a silky, smooth porridge.',
      'Season with soy sauce and white pepper.',
      'Ladle into bowls. Top with sesame oil, fresh ginger, green onion, fried shallots, and a fried egg.',
    ]
  },
  {
    id: 20, name: 'Masala Dosa', country: 'India', flag: '🇮🇳', continent: 'Asia',
    ingredients: ['rice', 'lentils', 'potatoes', 'onion', 'mustard seeds', 'curry leaves', 'oil', 'chilli', 'turmeric'],
    description: 'Crispy fermented rice and lentil crêpe filled with spiced potato masala.',
    prepTime: '30 min + overnight', servings: '4', calories: '280',
    tags: ['Vegan', 'Gluten-Free', 'Classic Indian'],
    steps: [
      'Soak rice and urad lentils separately. Blend with water to a smooth batter. Ferment overnight in a warm place.',
      'Make potato filling: fry mustard seeds, curry leaves, sliced onion, and green chilli in oil. Add turmeric and cooked, mashed potatoes. Season.',
      'Heat a flat griddle until very hot. Pour a ladle of batter and spread in a thin circle with the back of the ladle.',
      'Drizzle oil around the edges. Cook until very crispy and golden. Place potato filling on one half.',
      'Fold and serve immediately with sambar and fresh coconut chutney.',
    ]
  },
  {
    id: 21, name: 'Aloo Paratha', country: 'India', flag: '🇮🇳', continent: 'Asia',
    ingredients: ['flour', 'potatoes', 'onion', 'green chilli', 'coriander', 'butter', 'yogurt'],
    description: 'Flaky whole-wheat flatbread stuffed with spiced mashed potato and fried in butter.',
    prepTime: '25 min', servings: '4', calories: '350',
    tags: ['Vegetarian', 'Classic Indian'],
    steps: [
      'Mix whole-wheat flour with water, salt, and a little oil into a smooth, soft dough. Rest 20 min.',
      'Make filling: combine mashed potatoes, finely diced onion, green chilli, fresh coriander, ginger, spices, and salt.',
      'Stuff a golf-ball of filling inside a larger ball of dough. Seal completely. Roll flat to 5mm.',
      'Cook on a hot, dry tawa (griddle) 1.5 min per side. Apply butter generously to each side.',
      'Cook until both sides have golden spots and the butter is absorbed. Serve with cold yogurt.',
    ]
  },
  {
    id: 22, name: 'Poha (Flattened Rice)', country: 'India', flag: '🇮🇳', continent: 'Asia',
    ingredients: ['poha', 'onion', 'mustard seeds', 'turmeric', 'lemon', 'curry leaves', 'oil', 'chilli', 'peanuts'],
    description: 'Light, quick spiced flattened rice tossed with mustard seeds and fresh curry leaves.',
    prepTime: '12 min', servings: '2', calories: '280',
    tags: ['Vegan', 'Gluten-Free', 'Quick'],
    steps: [
      'Rinse flattened rice (poha) under cold water for 30 seconds. Drain in a colander for 10 min.',
      'Heat oil in a wide pan. Add mustard seeds — let them pop. Add curry leaves and sliced green chilli.',
      'Add finely diced onion. Cook 3 min until translucent. Add turmeric and roasted peanuts.',
      'Add drained poha. Toss very gently to coat without breaking the flakes.',
      'Season with salt, a pinch of sugar, and fresh lemon juice. Top with coriander and sev.',
    ]
  },
  {
    id: 23, name: 'Nasi Lemak', country: 'Malaysia', flag: '🇲🇾', continent: 'Asia',
    ingredients: ['rice', 'coconut milk', 'anchovies', 'peanuts', 'egg', 'cucumber', 'sambal'],
    description: "Malaysia's national breakfast — fragrant coconut rice with crispy anchovies and fiery sambal.",
    prepTime: '35 min', servings: '4', calories: '520',
    tags: ['Gluten-Free', 'Classic Malaysian', 'National Dish'],
    steps: [
      'Wash rice. Cook with coconut milk, water, a pandan leaf knot, and salt until fluffy.',
      'Deep fry dried anchovies until golden and crispy. Drain.',
      'Fry peanuts until golden. Hard-boil or fry eggs.',
      'Assemble: mound of rice in the center, surrounded by fried anchovies, roasted peanuts, sliced cucumber, a hard-boiled egg.',
      'Serve with sambal (chilli paste with anchovies and tamarind) on the side.',
    ]
  },
  {
    id: 24, name: 'Kaya Toast with Soft-Boiled Eggs', country: 'Singapore', flag: '🇸🇬', continent: 'Asia',
    ingredients: ['bread', 'kaya jam', 'butter', 'eggs', 'soy sauce', 'pepper'],
    description: "Singapore's kopitiam classic — crispy toast with coconut-egg jam and runny soft-boiled eggs.",
    prepTime: '8 min', servings: '1', calories: '380',
    tags: ['Classic Singaporean', 'Quick'],
    steps: [
      'Toast thin slices of white bread until shatteringly crispy — traditionally over charcoal.',
      'Spread kaya jam (coconut-pandan-egg jam) generously on one slice. Add a thin slice of cold salted butter.',
      'Sandwich together. Cut diagonally into triangles.',
      'Bring water to a boil. Lower 2 eggs. Turn off heat. Leave 8–9 min for a soft yolk.',
      'Crack eggs into a small bowl. Season with a few drops of dark soy sauce and white pepper. Dip toast into the egg.',
    ]
  },
  {
    id: 25, name: 'Shakshuka', country: 'Israel', flag: '🇮🇱', continent: 'Middle East',
    ingredients: ['eggs', 'tomatoes', 'peppers', 'onion', 'garlic', 'cumin', 'paprika', 'olive oil', 'feta'],
    description: 'Eggs poached in a vibrant, spiced tomato and pepper sauce — Israel\'s beloved breakfast.',
    prepTime: '20 min', servings: '3', calories: '280',
    tags: ['Vegetarian', 'Gluten-Free', 'High Protein'],
    steps: [
      'Heat olive oil in a wide skillet. Sauté diced onion and red pepper until soft, 8 min.',
      'Add minced garlic, ground cumin, smoked paprika, and a pinch of cayenne. Cook 1 min.',
      'Add crushed tomatoes. Season with salt. Simmer 10 min until thick and deeply flavored.',
      'Use a spoon to create 4–5 wells in the sauce. Crack an egg into each well.',
      'Cover and cook 5 min until whites are just set and yolks remain runny. Crumble feta over. Serve with crusty bread.',
    ]
  },
  {
    id: 26, name: 'Turkish Menemen', country: 'Turkey', flag: '🇹🇷', continent: 'Middle East',
    ingredients: ['eggs', 'tomatoes', 'peppers', 'olive oil', 'paprika', 'chilli', 'parsley'],
    description: 'Soft scrambled eggs cooked directly in a fresh tomato and pepper sauce.',
    prepTime: '15 min', servings: '2', calories: '240',
    tags: ['Vegetarian', 'Gluten-Free', 'Quick'],
    steps: [
      'Heat olive oil in a copper or cast-iron pan. Fry diced green peppers 5 min until softened.',
      'Add diced fresh tomatoes and sweet paprika. Cook 8–10 min until thick and concentrated.',
      'Season generously with salt and red chilli flakes.',
      'Beat 3 eggs. Pour over the sauce. Stir gently with slow, wide motions until barely set — custardy, not dry.',
      'Remove from heat immediately. Scatter fresh parsley. Serve from the pan with crusty bread.',
    ]
  },
  {
    id: 27, name: 'Turkish Kahvaltı Spread', country: 'Turkey', flag: '🇹🇷', continent: 'Middle East',
    ingredients: ['eggs', 'cheese', 'olives', 'tomatoes', 'cucumber', 'honey', 'cream', 'bread', 'butter'],
    description: 'The legendary Turkish breakfast spread — 20+ small dishes for a shared communal morning feast.',
    prepTime: '15 min', servings: '4', calories: '450',
    tags: ['Vegetarian', 'Special Occasion', 'Communal'],
    steps: [
      'Arrange small bowls and plates: Kalamata olives, green olives, sliced ripe tomatoes, cucumber slices.',
      'Add various cheeses: white beyaz peynir, aged kaşar, string cheese.',
      'Prepare eggs: both soft-boiled and butter-fried sunnyside-up.',
      'Include honey, clotted cream (kaymak), butter, rose jam, tahini, and grape molasses.',
      'Brew strong black çay (tea) in a two-tiered teapot. Serve everything simultaneously at the table.',
    ]
  },
  {
    id: 28, name: 'Lebanese Labneh Flatbread', country: 'Lebanon', flag: '🇱🇧', continent: 'Middle East',
    ingredients: ['labneh', 'flatbread', 'olive oil', "za'atar", 'sumac', 'mint', 'olives', 'tomatoes', 'cucumber'],
    description: 'Levantine strained yogurt on warm bread with za\'atar and the finest olive oil.',
    prepTime: '5 min', servings: '2', calories: '235',
    tags: ['Vegetarian', 'No-Cook', 'Quick'],
    steps: [
      'Warm a piece of Lebanese mountain bread or pita briefly in a dry pan until soft and fragrant.',
      'Spread labneh (strained yogurt) very thickly, swirling with the back of a spoon to create texture.',
      'Drizzle your finest extra-virgin olive oil generously over the labneh.',
      'Sprinkle za\'atar herb blend and a pinch of sumac. Add fresh mint leaves.',
      'Serve with olives, sliced tomatoes, and cucumber alongside.',
    ]
  },
  {
    id: 29, name: 'Ful Medames', country: 'Egypt', flag: '🇪🇬', continent: 'Africa',
    ingredients: ['fava beans', 'lemon', 'olive oil', 'garlic', 'cumin', 'parsley', 'tomatoes', 'bread'],
    description: "Egypt's ancient fava bean breakfast — cooked since the Pharaohs, unchanged for 5,000 years.",
    prepTime: '15 min', servings: '4', calories: '280',
    tags: ['Vegan', 'Gluten-Free', 'High Protein', 'Ancient Recipe'],
    steps: [
      'Drain and rinse canned fava beans. Place in a saucepan with a splash of water.',
      'Add minced garlic, ground cumin, and a generous squeeze of lemon juice.',
      'Warm over medium heat, mashing some beans roughly against the side of the pan — keep plenty of texture.',
      'Season generously with salt. Drizzle with excellent olive oil.',
      'Top with chopped fresh parsley, diced tomatoes, and a hard-boiled egg. Serve with warm pita.',
    ]
  },
  {
    id: 30, name: 'Moroccan Msemen', country: 'Morocco', flag: '🇲🇦', continent: 'Africa',
    ingredients: ['flour', 'semolina', 'butter', 'oil', 'honey', 'salt'],
    description: 'Square layered Moroccan flatbread cooked on a griddle — served with argan oil and dark honey.',
    prepTime: '40 min + 20 min rest', servings: '8', calories: '310',
    tags: ['Vegetarian', 'Classic Moroccan'],
    steps: [
      'Mix flour, fine semolina, and salt. Add warm water gradually and knead into a smooth, elastic dough. Rest 20 min.',
      'Divide into balls. Flatten each into a very thin disc. Brush with melted butter-oil mixture.',
      'Fold in thirds to create a long rectangle. Brush again. Fold into a square. Rest 10 min.',
      'Flatten each square gently with a rolling pin into a thin sheet.',
      'Cook on a hot dry griddle over medium heat, 3 min per side, until golden and slightly crispy. Serve with honey.',
    ]
  },
  {
    id: 31, name: 'Ethiopian Injera with Ful', country: 'Ethiopia', flag: '🇪🇹', continent: 'Africa',
    ingredients: ['teff flour', 'fava beans', 'berbere', 'niter kibbeh', 'garlic', 'onion', 'lemon'],
    description: 'Fermented teff sourdough flatbread with spiced fava beans — Ethiopia\'s breakfast foundation.',
    prepTime: '20 min + overnight', servings: '4', calories: '380',
    tags: ['Vegan', 'Gluten-Free', 'High Fiber', 'Fermented'],
    steps: [
      'Ferment teff flour batter with water overnight until bubbly and slightly sour.',
      'Cook injera on a hot, dry flat pan: pour in a thin spiral from the outside in. Cover. Cook 3 min until surface is fully dry and holes appear.',
      'Fry diced onion and garlic in niter kibbeh (spiced Ethiopian butter) until golden.',
      'Add berbere spice blend. Fry 1 min. Add drained fava beans and lemon juice.',
      'Serve the ful on the injera — tear off pieces to scoop the stew.',
    ]
  },
  {
    id: 32, name: 'Kenyan Mandazi', country: 'Kenya', flag: '🇰🇪', continent: 'Africa',
    ingredients: ['flour', 'coconut milk', 'sugar', 'yeast', 'cardamom', 'egg', 'oil'],
    description: 'East African fried doughnuts scented with cardamom — eaten with spiced chai.',
    prepTime: '30 min + 1 hr prove', servings: '16', calories: '180',
    tags: ['Vegan', 'Street Food'],
    steps: [
      'Combine flour, yeast, sugar, and ground cardamom. Add coconut milk and egg. Knead into a smooth dough.',
      'Cover and prove 1 hour until doubled.',
      'Roll to 1cm thickness. Cut into triangles or rounds.',
      'Deep fry in batches at 175°C until golden and puffed all the way through, about 4 min.',
      'Drain on paper towels. Serve hot with spiced Kenyan chai.',
    ]
  },
  {
    id: 33, name: 'South African Boerewors Eggs', country: 'South Africa', flag: '🇿🇦', continent: 'Africa',
    ingredients: ['boerewors', 'eggs', 'tomatoes', 'onion', 'chilli', 'oil', 'bread'],
    description: "Spiced farmer's sausage cooked in its own fat with eggs and tomatoes.",
    prepTime: '20 min', servings: '2', calories: '520',
    tags: ['High Protein', 'Gluten-Free'],
    steps: [
      'Place boerewors in a cold, heavy pan. Add 3 tbsp water. Heat medium — the water prevents burning before fat renders.',
      'As water evaporates, the sausage begins to fry in its own fat. Cook 10 min per side until deep golden.',
      'Remove sausage. In the same fat, fry diced onion until golden.',
      'Add diced tomatoes and chilli. Cook 4 min.',
      'Crack eggs into the sauce. Cover. Cook 3–4 min until set. Serve with crusty bread.',
    ]
  },
  {
    id: 34, name: 'Nigerian Akara (Bean Fritters)', country: 'Nigeria', flag: '🇳🇬', continent: 'Africa',
    ingredients: ['black-eyed peas', 'onion', 'egg', 'chilli', 'oil', 'salt'],
    description: 'Crispy West African bean fritters — Lagos breakfast street food eaten with pap porridge.',
    prepTime: '25 min + overnight soak', servings: '6', calories: '280',
    tags: ['Vegan', 'Gluten-Free', 'Street Food'],
    steps: [
      'Soak black-eyed peas overnight. Drain and rub between your hands to remove the skins. Rinse well.',
      'Blend skinned peas with diced onion, scotch bonnet chilli, and a splash of water into a thick, smooth paste.',
      'Add egg, salt, and a pinch of pepper. Beat vigorously to incorporate air — the batter should be light.',
      'Heat oil to 175°C. Drop heaped tablespoons of batter into the oil.',
      'Fry 3–4 min per side until golden and cooked through. Drain. Serve hot.',
    ]
  },

  // ── THE AMERICAS ─────────────────────────────────────────────────────────────
  {
    id: 35, name: 'American Buttermilk Pancakes', country: 'United States', flag: '🇺🇸', continent: 'Americas',
    ingredients: ['flour', 'eggs', 'buttermilk', 'butter', 'sugar', 'baking powder', 'baking soda', 'maple syrup'],
    description: 'Fluffy, thick American pancakes with a golden crust and a cloud-like interior.',
    prepTime: '20 min', servings: '4', calories: '380',
    tags: ['Vegetarian', 'Classic', 'Weekend'],
    steps: [
      'Whisk together flour, baking powder, baking soda, sugar, and salt in a large bowl.',
      'In a separate bowl, beat eggs with buttermilk and melted butter.',
      'Pour wet into dry. Fold gently until just combined — lumpy batter is correct. Over-mixing kills fluffiness.',
      'Heat a griddle over medium. Brush with butter. Pour ¼ cup batter per pancake.',
      'Wait until bubbles cover the surface and edges look set (2–3 min) before flipping. Cook 1 min more. Serve with maple syrup.',
    ]
  },
  {
    id: 36, name: 'Eggs Benedict', country: 'United States', flag: '🇺🇸', continent: 'Americas',
    ingredients: ['eggs', 'English muffin', 'bacon', 'butter', 'egg yolks', 'lemon', 'salt'],
    description: 'Poached eggs on English muffins with Canadian bacon and silky hollandaise.',
    prepTime: '25 min', servings: '2', calories: '560',
    tags: ['High Protein', 'Weekend', 'Classic'],
    steps: [
      'Make hollandaise: whisk 3 egg yolks with 1 tbsp lemon juice in a heatproof bowl over barely simmering water.',
      'Slowly drizzle in 150g melted butter while whisking constantly until thick and glossy. Season.',
      'Poach eggs: add a splash of white vinegar to barely simmering water. Swirl and slide eggs in. 3 min.',
      'Toast and butter English muffin halves. Pan-fry Canadian bacon slices 2 min per side.',
      'Stack: muffin → bacon → egg → hollandaise. Dust with smoked paprika.',
    ]
  },
  {
    id: 37, name: 'Avocado Toast', country: 'United States', flag: '🇺🇸', continent: 'Americas',
    ingredients: ['bread', 'avocado', 'lemon', 'salt', 'chilli flakes', 'olive oil', 'egg'],
    description: 'Smashed ripe avocado on toasted sourdough — the modern breakfast that started a cultural moment.',
    prepTime: '7 min', servings: '1', calories: '380',
    tags: ['Vegetarian', 'Quick', 'Modern'],
    steps: [
      'Toast sourdough bread until deeply golden and audibly crispy.',
      'Halve a ripe avocado. Scoop flesh into a bowl. Add lemon juice, salt, and chilli flakes.',
      'Smash roughly with a fork — keep it textured, not smooth.',
      'Spread generously on the toast. Drizzle extra-virgin olive oil.',
      'Top with a poached or soft-fried egg. Finish with everything bagel seasoning or more chilli flakes.',
    ]
  },
  {
    id: 38, name: 'Huevos Rancheros', country: 'Mexico', flag: '🇲🇽', continent: 'Americas',
    ingredients: ['eggs', 'corn tortillas', 'tomatoes', 'chillies', 'onion', 'garlic', 'beans', 'avocado', 'cheese'],
    description: 'Ranch-style eggs on crispy tortillas with charred tomato salsa.',
    prepTime: '25 min', servings: '4', calories: '520',
    tags: ['Vegetarian', 'Gluten-Free', 'High Protein'],
    steps: [
      'SALSA: Char tomatoes, serrano chillies, ¼ onion, and garlic directly on a dry comal until blackened in spots.',
      'Blend charred vegetables until smooth. Fry in oil over medium-high 5–7 min until it darkens.',
      'Season generously with salt.',
      'Briefly fry corn tortillas in oil until crispy but not brittle. Drain.',
      'Top tortillas with warm refried beans, fried eggs, ranchero salsa, crumbled queso fresco, crema, and avocado.',
    ]
  },
  {
    id: 39, name: 'Chilaquiles Verdes', country: 'Mexico', flag: '🇲🇽', continent: 'Americas',
    ingredients: ['tortilla chips', 'salsa verde', 'eggs', 'cheese', 'cream', 'avocado', 'onion', 'cilantro'],
    description: 'Tortilla chips briefly simmered in green salsa until just softened — Mexico City\'s classic hangover cure.',
    prepTime: '15 min', servings: '2', calories: '460',
    tags: ['Vegetarian', 'Quick', 'Classic Mexican'],
    steps: [
      'Warm salsa verde in a wide pan with a splash of chicken or vegetable broth. Bring to a gentle simmer.',
      'Add tortilla chips. Toss quickly to coat. Cook 2 min — the chips should be moistened but still have some crunch.',
      'Transfer to plates immediately — they soften fast.',
      'Top with fried or scrambled eggs.',
      'Add Mexican crema, crumbled queso fresco, finely diced white onion, and fresh cilantro. Serve with sliced avocado.',
    ]
  },
  {
    id: 40, name: 'Jamaican Ackee & Saltfish', country: 'Jamaica', flag: '🇯🇲', continent: 'Americas',
    ingredients: ['ackee', 'salt cod', 'onion', 'tomatoes', 'scotch bonnet', 'thyme', 'olive oil', 'peppers'],
    description: "Jamaica's national dish — creamy ackee with saltfish, the Caribbean morning classic.",
    prepTime: '30 min + overnight soak', servings: '4', calories: '380',
    tags: ['Gluten-Free', 'High Protein', 'National Dish'],
    steps: [
      'Soak salt cod in cold water overnight, changing water twice. Drain, boil 15 min, drain again. Flake, removing all bones.',
      'Sauté diced onion, sliced peppers, and a whole scotch bonnet in oil until soft.',
      'Add flaked saltfish and dried thyme. Cook 3 min.',
      'Drain canned ackee carefully. Fold gently into the saltfish mixture — do not stir vigorously.',
      'Cook 3 min just to warm through. Season with black pepper. Serve with bammy or festival.',
    ]
  },
  {
    id: 41, name: 'Trinidadian Doubles', country: 'Trinidad & Tobago', flag: '🇹🇹', continent: 'Americas',
    ingredients: ['flour', 'yeast', 'turmeric', 'cumin', 'water', 'chickpeas', 'curry powder', 'garlic', 'onion', 'tamarind'],
    description: "Trinidad's street food icon — two soft fried flatbreads loaded with curried chickpeas and chutneys.",
    prepTime: '30 min + 1 hr prove', servings: '6', calories: '380',
    tags: ['Vegan', 'Street Food', 'National Dish'],
    steps: [
      'BARA: Combine flour, yeast, turmeric, cumin, salt, and warm water. Knead into a soft dough. Prove 1 hour.',
      'CHANNA: Fry onion and garlic in oil. Add curry powder — fry 1 min. Add chickpeas and water. Simmer 20 min until thick.',
      'Pull off a small piece of bara dough. Stretch paper-thin with oiled fingers into a 10cm disc.',
      'Fry in hot oil 30–45 seconds per side until puffed and pale golden. Drain.',
      'Stack two bara. Ladle curried channa over both. Add tamarind sauce, cucumber chutney, coconut chutney, and pepper sauce.',
    ]
  },
  {
    id: 42, name: 'Brazilian Pão de Queijo', country: 'Brazil', flag: '🇧🇷', continent: 'Americas',
    ingredients: ['tapioca starch', 'egg', 'cheese', 'milk', 'oil', 'salt'],
    description: 'Gluten-free chewy cheese bread balls from Minas Gerais — impossible to eat just one.',
    prepTime: '25 min', servings: '24', calories: '95',
    tags: ['Vegetarian', 'Gluten-Free', 'Quick'],
    steps: [
      'Bring milk, oil, and salt to a boil. Pour immediately over the tapioca starch in a bowl.',
      'Stir vigorously — the dough will be lumpy and sticky. This is correct. Cool 10 min.',
      'Add eggs one at a time, beating vigorously after each. Add grated cheese. Mix well.',
      'With wet or oiled hands, roll into 4cm balls. Place on a greased baking sheet.',
      'Bake at 200°C for 18–22 min until puffed and golden. Eat immediately while warm and stretchy inside.',
    ]
  },
  {
    id: 43, name: 'Brazilian Tapioca Crepe', country: 'Brazil', flag: '🇧🇷', continent: 'Americas',
    ingredients: ['tapioca starch', 'water', 'coconut', 'condensed milk', 'mango', 'banana'],
    description: "Northeast Brazil's naturally gluten-free cassava crêpe — fuses in seconds in a dry pan.",
    prepTime: '8 min', servings: '2', calories: '310',
    tags: ['Vegan', 'Gluten-Free', 'Quick', 'Classic Brazilian'],
    steps: [
      'Hydrate tapioca starch: mix with water until it has the texture of damp sand that clumps when squeezed.',
      'Heat a non-stick pan over medium heat — completely dry, no oil.',
      'Sprinkle 3 tbsp hydrated starch into the pan. Spread into a thin circle with the back of a spoon.',
      'Cook 1.5–2 min undisturbed until the surface is fully dry and the crêpe lifts cleanly.',
      'Flip. Cook 30 sec. Fill immediately with grated coconut and condensed milk. Fold in half. Add mango slices.',
    ]
  },
  {
    id: 44, name: 'Argentine Medialunas', country: 'Argentina', flag: '🇦🇷', continent: 'Americas',
    ingredients: ['flour', 'butter', 'yeast', 'milk', 'sugar', 'egg', 'dulce de leche'],
    description: "Argentina's glazed butter croissants — smaller, sweeter, and sticky with warm sugar syrup.",
    prepTime: '40 min + 3 hrs', servings: '16', calories: '225',
    tags: ['Vegetarian', 'Sweet', 'Classic Argentine'],
    steps: [
      'Make enriched dough: combine flour, yeast, sugar, milk, butter, egg. Knead 8 min. Prove 1 hour.',
      'Laminate with cold butter: 3 letter folds, chilling 20 min between each.',
      'Roll to 4mm. Cut small triangles (base 8cm). Roll from base to tip. Curve into crescents.',
      'Prove 45 min. Bake at 190°C for 14–16 min until deep golden.',
      'IMMEDIATELY brush with warm almíbar (sugar syrup boiled 3 min). Apply 2 coats. The sticky glaze is essential.',
    ]
  },
  {
    id: 45, name: 'Venezuelan Arepa', country: 'Venezuela', flag: '🇻🇪', continent: 'Americas',
    ingredients: ['masarepa', 'water', 'salt', 'cheese', 'avocado', 'black beans'],
    description: "Venezuela's cornerstone — hand-formed corn cake split and filled with any combination you choose.",
    prepTime: '15 min', servings: '4', calories: '420',
    tags: ['Gluten-Free', 'Classic Venezuelan', 'Quick'],
    steps: [
      'Combine harina PAN (pre-cooked white corn flour) with warm water, salt, and optionally a bit of butter.',
      'Knead into a smooth, slightly moist dough — like playdough. Rest 3 min.',
      'Form into balls. Flatten into discs 10cm wide and 2cm thick. Smooth the edges.',
      'Cook on a hot, dry comal or griddle 5–6 min per side until a pale golden crust forms.',
      'Rest 2 min. Split open horizontally like a book. Fill generously with cheese, avocado, black beans.',
    ]
  },
  {
    id: 46, name: 'Colombian Changua (Milk & Egg Soup)', country: 'Colombia', flag: '🇨🇴', continent: 'Americas',
    ingredients: ['milk', 'water', 'eggs', 'green onion', 'cilantro', 'bread', 'salt'],
    description: "Bogotá's distinctive warming milk and egg soup — Colombia's unique highland breakfast.",
    prepTime: '10 min', servings: '2', calories: '285',
    tags: ['Vegetarian', 'Quick', 'Classic Colombian'],
    steps: [
      'Combine equal parts whole milk and water in a saucepan. Add sliced green onion and salt.',
      'Bring to a very gentle simmer — do not boil hard (milk will scald).',
      'Slide 2 eggs gently into the simmering liquid. Poach 3–4 min until whites are just set.',
      'Place pieces of day-old bread in each bowl.',
      'Ladle the hot changua broth and a poached egg over the bread. Top with abundant fresh cilantro.',
    ]
  },
  {
    id: 47, name: 'Peruvian Huevos a la Chorrillana', country: 'Peru', flag: '🇵🇪', continent: 'Americas',
    ingredients: ['eggs', 'onion', 'tomatoes', 'aji amarillo paste', 'garlic', 'oil', 'cilantro', 'rice'],
    description: "Lima's classic scrambled eggs with caramelized onion and the floral Peruvian golden chilli.",
    prepTime: '20 min', servings: '2', calories: '340',
    tags: ['Vegetarian', 'Gluten-Free', 'Classic Peruvian'],
    steps: [
      'Heat oil in a wide pan. Add sliced onion. Cook over medium heat 12–15 min until very soft and deeply golden.',
      'Add minced garlic and ají amarillo paste. Cook 2 min. The paste colors everything golden-orange.',
      'Add diced fresh tomatoes. Cook 5 min until broken down.',
      'Beat 4 eggs. Pour over the vegetable mixture. Cook over medium-low heat, folding gently.',
      'Remove while still slightly custardy. Add fresh cilantro. Serve with white rice.',
    ]
  },

  // ── OCEANIA ───────────────────────────────────────────────────────────────────
  {
    id: 48, name: 'Full Australian Breakfast', country: 'Australia', flag: '🇦🇺', continent: 'Oceania',
    ingredients: ['eggs', 'bacon', 'sausage', 'mushrooms', 'tomatoes', 'sourdough', 'avocado', 'butter', 'olive oil'],
    description: "Australia's café-style fry-up — the Full English's more laid-back Antipodean cousin, with avocado.",
    prepTime: '22 min', servings: '2', calories: '680',
    tags: ['High Protein', 'Weekend'],
    steps: [
      'Roast flat Portobello mushrooms gill-side up in the oven with olive oil, thyme, salt, and pepper at 200°C for 15 min.',
      'Place bacon, sausages, and halved tomatoes under a hot grill. Cook 8–10 min, turning sausages and bacon.',
      'Poach or fry eggs to your preference.',
      'Toast thick slices of sourdough. Butter while hot.',
      'Smash avocado with lemon, salt, and chilli flakes. Plate everything with relish and a flat white coffee.',
    ]
  },
  {
    id: 49, name: 'Vegemite on Toast', country: 'Australia', flag: '🇦🇺', continent: 'Oceania',
    ingredients: ['bread', 'butter', 'vegemite'],
    description: "Australia's beloved yeast extract on hot buttered toast — divisive to foreigners, sacred to Australians.",
    prepTime: '3 min', servings: '1', calories: '215',
    tags: ['Vegan', '3 Minutes', '5 Ingredients'],
    steps: [
      'Toast bread to deep golden — cold or barely warm toast does not work.',
      'Spread cold, unsalted butter generously while the toast is still hot. The butter must melt completely.',
      'Apply Vegemite using the very tip of a knife in the thinnest possible scraping. Much less than you think.',
      'The finished toast should taste deeply savory and umami-rich, not overwhelmingly salty.',
      'Eat immediately while hot. With strong coffee.',
    ]
  },
  {
    id: 50, name: 'NZ Manuka Honey Porridge', country: 'New Zealand', flag: '🇳🇿', continent: 'Oceania',
    ingredients: ['oats', 'milk', 'manuka honey', 'kiwifruit', 'hazelnuts', 'vanilla'],
    description: 'Stone-cut oats in grass-fed milk with world-famous NZ manuka honey and golden kiwifruit.',
    prepTime: '12 min', servings: '2', calories: '420',
    tags: ['Vegetarian', 'Gluten-Free', 'Premium'],
    steps: [
      'Combine oats, milk, and a pinch of salt in a saucepan. Add vanilla extract.',
      'Bring to a gentle simmer over medium heat, stirring frequently.',
      'Cook 8–12 min (longer for stone-cut oats) until thick and creamy.',
      'Pour into warmed bowls.',
      'Drizzle manuka honey on top — do NOT stir in, as heat destroys its beneficial compounds. Add sliced kiwifruit and toasted hazelnuts.',
    ]
  },
  {
    id: 51, name: 'New Zealand Pavlova Stack', country: 'New Zealand', flag: '🇳🇿', continent: 'Oceania',
    ingredients: ['egg whites', 'sugar', 'vinegar', 'cornstarch', 'vanilla', 'cream', 'kiwifruit', 'passion fruit', 'berries'],
    description: 'Individual meringues with a crispy shell and marshmallow interior, topped with cream and fresh fruit.',
    prepTime: '20 min + overnight cooling', servings: '4', calories: '390',
    tags: ['Vegetarian', 'Gluten-Free', 'Weekend', 'Make-Ahead'],
    steps: [
      'Beat 4 egg whites to soft peaks. Add 200g caster sugar one tablespoon at a time. Beat to stiff, glossy peaks.',
      'Fold in white wine vinegar, cornstarch, and vanilla very gently — 5 folds only.',
      'Spoon into 4 mounds on parchment. Create an indentation in each center.',
      'Bake at 120°C for 1 hr 15 min. Turn oven off. Leave inside with door closed overnight.',
      'Fill centers with whipped cream. Top with sliced kiwifruit, passion fruit pulp, and berries.',
    ]
  },
  {
    id: 52, name: 'Fijian Kokoda', country: 'Fiji', flag: '🇫🇯', continent: 'Oceania',
    ingredients: ['white fish', 'lime juice', 'coconut cream', 'tomatoes', 'spring onion', 'chilli', 'coriander'],
    description: 'Pacific ceviche — fresh reef fish cured in lime juice and bathed in coconut cream.',
    prepTime: '35 min', servings: '4', calories: '280',
    tags: ['Gluten-Free', 'High Protein', 'No-Cook', 'Pacific Heritage'],
    steps: [
      'Cut very fresh white fish (wahoo, snapper, or mahi-mahi) into 1.5cm cubes.',
      'Place in a glass bowl. Cover completely with fresh lime juice. Press down to submerge.',
      'Refrigerate 25–30 min until fish is opaque all the way through — the lime "cooks" it.',
      'Drain half the lime juice. Add full-fat coconut cream, diced tomatoes, sliced spring onion, and minced chilli.',
      'Toss gently. Season with salt. Scatter fresh coriander. Serve in coconut shells.',
    ]
  },

  // ── MORE ASIA ─────────────────────────────────────────────────────────────────
  {
    id: 53, name: 'Korean Doenjang Jjigae', country: 'South Korea', flag: '🇰🇷', continent: 'Asia',
    ingredients: ['doenjang paste', 'tofu', 'zucchini', 'anchovy stock', 'garlic', 'mushrooms', 'green onion'],
    description: "Korea's deeply savory fermented soybean paste soup — the morning that sustains.",
    prepTime: '15 min', servings: '2', calories: '195',
    tags: ['Gluten-Free', 'Low Calorie', 'Fermented', 'Classic Korean'],
    steps: [
      'Make anchovy-kelp stock: simmer 5 dried anchovies and 1 piece dried kelp in 700ml water for 10 min. Strain.',
      'Dissolve 2 tbsp doenjang paste into the stock by pressing through a small strainer.',
      'Add cubed firm tofu, sliced zucchini, minced garlic, and sliced mushrooms.',
      'Simmer 8–10 min until vegetables are tender. Do not over-boil — keep the paste\'s complex flavors.',
      'Add sliced green onion. Serve immediately with steamed short-grain rice alongside.',
    ]
  },
  {
    id: 54, name: 'Vietnamese Pho Bo', country: 'Vietnam', flag: '🇻🇳', continent: 'Asia',
    ingredients: ['rice noodles', 'beef broth', 'beef', 'ginger', 'star anise', 'onion', 'herbs', 'bean sprouts', 'lime'],
    description: "Vietnam's aromatic slow-simmered beef broth with rice noodles and a pile of fresh herbs.",
    prepTime: '25 min (with pre-made broth)', servings: '4', calories: '350',
    tags: ['Gluten-Free', 'High Protein'],
    steps: [
      'Char a halved onion and thick ginger slices directly over a flame until blackened. Rinse.',
      'Simmer beef broth with charred onion, ginger, star anise, cinnamon stick, and cloves for 20 min. Strain.',
      'Cook rice noodles separately according to package. Drain.',
      'Slice beef (eye of round or sirloin) paper-thin against the grain. Keep refrigerated until serving.',
      'Assemble: noodles in deep bowl, raw beef on top (it cooks in the hot broth). Pour boiling broth over. Add herbs, lime, bean sprouts, hoisin, and sriracha.',
    ]
  },
  {
    id: 55, name: 'Banh Mi Trung Chien (Egg Sandwich)', country: 'Vietnam', flag: '🇻🇳', continent: 'Asia',
    ingredients: ['baguette', 'eggs', 'pate', 'vegetables', 'herbs', 'soy sauce', 'chilli', 'mayo'],
    description: 'Vietnamese fried egg sandwich on a crispy baguette with pickled vegetables and fresh herbs.',
    prepTime: '8 min', servings: '1', calories: '480',
    tags: ['Quick', 'Street Food'],
    steps: [
      'Fry 2 eggs sunnyside up in a hot, oiled pan. Season with salt, white pepper.',
      'Split a Vietnamese baguette (thin crust, airy inside) horizontally. Spread pâté on one side, mayo on the other.',
      'Add quick-pickled daikon and carrot (grated, soaked in vinegar + sugar + salt 10 min).',
      'Add sliced cucumber, fresh jalapeño rings, and abundant cilantro.',
      'Place fried eggs inside. Drizzle with Maggi seasoning sauce or soy sauce. Close and eat immediately.',
    ]
  },
  {
    id: 56, name: 'Thai Khao Tom (Rice Soup)', country: 'Thailand', flag: '🇹🇭', continent: 'Asia',
    ingredients: ['rice', 'chicken broth', 'ginger', 'lemongrass', 'fish sauce', 'lime', 'herbs', 'egg'],
    description: "Thailand's soothing morning rice soup — clear, gingery broth with cooked rice and fragrant herbs.",
    prepTime: '15 min', servings: '2', calories: '195',
    tags: ['Gluten-Free', 'Low Calorie', 'Classic Thai'],
    steps: [
      'Bring chicken broth to a simmer. Add sliced ginger and bruised lemongrass. Simmer 5 min to infuse.',
      'Add cooked jasmine rice. Simmer 5 min.',
      'Season with fish sauce and lime juice. Taste — it should be clean, slightly sour, and fragrant.',
      'Poach an egg directly in the simmering soup 3 min.',
      'Serve topped with Thai basil, cilantro, sliced green onion, fried shallots, white pepper, and a lime wedge.',
    ]
  },
  {
    id: 57, name: 'Moroccan Beghrir (1000-Hole Pancakes)', country: 'Morocco', flag: '🇲🇦', continent: 'Africa',
    ingredients: ['semolina', 'flour', 'yeast', 'eggs', 'milk', 'butter', 'honey', 'salt'],
    description: 'Lacy semolina crêpes with a thousand holes — dipped in warm honey butter before eating.',
    prepTime: '30 min + 20 min rest', servings: '8', calories: '220',
    tags: ['Vegetarian', 'Classic Moroccan'],
    steps: [
      'Blend fine semolina, flour, yeast, eggs, milk, salt, and baking powder into a smooth, pourable batter.',
      'Rest 20 min — the yeast activates and creates the bubble structure.',
      'Pour small amounts onto a hot, dry non-stick pan. Do NOT spread. Do NOT flip.',
      'As the pancake sets from the bottom up, hundreds of holes appear on the surface. This is the sign of success.',
      'Remove when the surface is fully dry and matte. Immediately dip in warm honey-butter. Eat hot.',
    ]
  },
  {
    id: 58, name: 'Cachapa con Queso', country: 'Venezuela', flag: '🇻🇪', continent: 'Americas',
    ingredients: ['sweet corn', 'masarepa', 'sugar', 'salt', 'cheese', 'butter', 'milk'],
    description: 'Venezuelan sweet corn pancake folded over fresh white cheese — sweet-savory perfection.',
    prepTime: '20 min', servings: '4', calories: '380',
    tags: ['Vegetarian', 'Gluten-Free', 'Classic Venezuelan'],
    steps: [
      'Blend fresh sweet corn kernels (from 3–4 ears) with masarepa (corn flour), sugar, salt, and a splash of milk.',
      'The batter should be thick and slightly grainy — not smooth. Visible corn pieces are correct.',
      'Pour ½ cup batter per cachapa onto a hot, buttered griddle. Spread gently into a thick circle.',
      'Cook 4–5 min until edges look set and the base is caramelized golden.',
      'Flip. Cook 3 more min. Place a thick slice of queso de mano (fresh white cheese) on one half. Fold over. Eat immediately.',
    ]
  },
  {
    id: 59, name: 'Idli with Sambar', country: 'India', flag: '🇮🇳', continent: 'Asia',
    ingredients: ['rice', 'lentils', 'tamarind', 'tomatoes', 'vegetables', 'mustard seeds', 'curry leaves', 'sambar powder'],
    description: "South India's steamed rice-lentil cakes with tangy lentil soup — a nutritionally complete meal.",
    prepTime: '20 min + overnight', servings: '4', calories: '320',
    tags: ['Vegan', 'Gluten-Free', 'Classic Indian', 'Fermented'],
    steps: [
      'Ferment rice-lentil batter overnight. By morning it should be bubbly, slightly sour, and risen.',
      'Steam batter in oiled idli moulds for 10 min until spongy and a toothpick comes out clean.',
      'SAMBAR: Cook toor dal until soft. Add tamarind water, tomatoes, vegetables, sambar powder.',
      'Simmer 15 min. Temper with mustard seeds, curry leaves, and dried chilli in hot oil. Pour over sambar.',
      'Serve hot idli with sambar and fresh coconut chutney alongside.',
    ]
  },
  {
    id: 60, name: 'Roti Canai with Curry', country: 'Malaysia', flag: '🇲🇾', continent: 'Asia',
    ingredients: ['flour', 'egg', 'butter', 'oil', 'water', 'sugar', 'salt', 'curry'],
    description: 'Flaky, layered Malaysian flatbread served with rich curry dipping sauce.',
    prepTime: '30 min + overnight', servings: '4', calories: '380',
    tags: ['Vegetarian', 'Classic Malaysian', 'Street Food'],
    steps: [
      'Combine flour, egg, melted butter, oil, sugar, and salt with water to form a soft, smooth dough.',
      'Divide into balls. Coat in oil. Rest overnight in the refrigerator.',
      'Stretch each ball extremely thin on an oiled surface — almost translucent.',
      'Fold into layers: fold edges in, then fold the layered sheet onto itself repeatedly.',
      'Cook on a hot, oiled griddle 2–3 min per side, flipping several times, until golden and flaky. Serve with lentil curry.',
    ]
  },
]

// ── HELPERS ──────────────────────────────────────────────────────────────────
export const ALL_COUNTRIES = [...new Set(RECIPES.map(r => r.country))].sort()
export const ALL_CONTINENTS = [...new Set(RECIPES.map(r => r.continent))]

export function getRecipeById(id) {
  return RECIPES.find(r => r.id === id)
}

export function getRecipesByCountry(country) {
  return RECIPES.filter(r => r.country === country)
}
