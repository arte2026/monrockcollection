const viewer = document.getElementById("viewerContent");
const aboutBtn = document.getElementById("aboutBtn");


// Default artwork view

function loadArtwork(art) {
    currentZoomIndex = 0; // reset zoom
    
  viewer.innerHTML = `
    <div class="card" id="card">
      <div class="front">
        <img src="${art.img}">
      </div>
      <div class="back">
        <h2>${art.title}</h2>
        <h3>${art.size}</h3>
        <h3>${art.medium}</h3>
        <p>${art.info}</p>
      </div>
    </div>
  `;

  setupCardFlip();
}

// About view
aboutBtn.addEventListener("click", () => {
  viewer.innerHTML = `
    <div class="info-screen">
      <h2>Hector Monroy "Monrock"</h2>
      <h3>🎸 Rock & Pop Artist 🎨</h3>
      <p>
        Mexican master of pop art style, born in 1953 in Queretaro, Mexico. Studied advertising as well as artistic drawing in the late 70s, and began working in the audiovisual industry as a graphic designer. With more than 40 years working in the art business, his art portraits of music and movie legends achieve to capture all the detail and personality of those nostalgic wonderful decades.
      </p>
      
<p>📩 hectormonrock@gmail.com</p>
      
<p>📷 instagram.com/hectormonrock</p>
      
<p>💻 tinyurl.com/monrockcollection</p>
    </div>
  `;
});


//Data Structure
const artworks = {
  rock: [
    {
      img: "../images/rock/1.jpg",
      title: "Jimi Hendrix",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "An electrifying tribute to the unmatched sonic innovator. This portrait captures Jimi Hendrix in a moment of pure, transcendent performance. As eyes close and the guitar screams, Hector Monroy uses a high-contrast, psychedelic explosion of oranges and deep purples to translate Hendrix’s revolutionary sound into visceral, visual power. It is a monument to the Voodoo Child’s enduring, firebird spirit."
    },
    {
      img: "../images/rock/16.jpg",
      title: "The Beatles",
      size: "39 x 39 in",
      medium: "Oil on Canvas",
        info: "A striking tribute to the Fab Four and their revolutionary Apple Corps legacy. This piece centers the iconic green apple against the backdrop of the Union Jack, framing the individual spirits of John, Paul, George, and Ringo. It is a vibrant celebration of the band that didn't just top the charts—they redefined the visual and musical language of the 20th century."
    },
      {
      img: "../images/rock/11.jpg",
      title: "Janis Joplin",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A striking tribute to the Queen of Rock and Roll. This portrait captures Janis Joplin's raw, electric smile against a backdrop of psychedelic peace and color. Featuring a nod to the legendary Whisky a Go Go, this piece celebrates the woman who poured her heart into every note. It is a vibrant monument to the hippie revolution and the voice that defined a generation’s blues."
    },
      {
      img: "../images/rock/15.jpg",
      title: "Bob Dylan",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info: "Enigmatic, intense, and forever revolutionary. This piece captures the spirit of a young Bob Dylan during the transformative era when he merged the depth of folk poetry with the electric power of rock. With the bold, crimson DYLAN anchoring the frame, the artwork reflects the restless creative energy of a man who didn't just write songs—he wrote the soundtrack for a social revolution."
    },
      {
      img: "../images/rock/23.jpg",
      title: "Elvis",
      size: "24 x 32 in",
      medium: "Oil on Metal",
        info: "Intense, charismatic, and undeniably iconic. This piece captures Elvis Presley at the height of his power, framing the King of Rock n' Roll within a weathered, industrial aesthetic. With the bold, textured typography and his piercing gaze, the artwork reflects the raw, rebellious energy that broke through 1950s culture and laid the foundation for everything that followed."
    },
      {
      img: "../images/rock/2.jpg",
      title: "John Lennon",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A striking, cinematic tribute to the man who asked us to Imagine. This piece captures John Lennon in a moment of intense, quiet focus, emerging from the darkness into a sharp, electric blue light. With its unique torn paper effect, the artwork symbolizes Lennon’s constant need to break through cultural boundaries and social norms, reminding us of the raw, honest voice that led a global movement for peace."
    },
      
      {
      img: "../images/rock/3.jpg",
      title: "David Bowie",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A bold, electric homage to Bowie’s Aladdin Sane era, this portrait crackles with vivid reds, blues, and molten oranges. The lightning bolt slices across a face rendered with intense, soulful eyes while paint drips create a melting, dreamlike effect that blurs icon and myth. Large white lettering crowns the composition, anchoring the image in pop‑culture bravado as expressive hands and saturated color transform a familiar visage into a living, kinetic legend."
    },
      {
      img: "../images/rock/27.jpeg",
      title: "Bob Marley",
      size: "32 x 24 in",
      medium: "Oil on Canvas",
        info: "A luminous tribute to reggae’s soul, this portrait captures the singer mid‑song—hair like burning embers and a voice made visible in color. Bathed in dramatic light, the figure’s red dreadlocks and vibrant jacket pop against the dark backdrop, while the clenched posture and open mouth convey raw passion and spiritual intensity. The painting transforms a performance into a ritual, honoring the music’s heartbeat with bold hues and kinetic energy."
    },
      {
      img: "../images/rock/22.jpg",
      title: "The King",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "This electrifying painting captures Elvis in a moment of pure stage intensity, his blue rhinestone jumpsuit shimmering under the spotlight. Bowed slightly with microphone in hand, he radiates both power and vulnerability—the essence of a performer lost in his craft. The cool blues and whites surrounding him evoke the pulse of music and memory, immortalizing the King in timeless rhythm and grace."
    },
      {
      img: "../images/rock/24.jpg",
      title: "Freddie Mercury",
      size: "27 x 40 in",
      medium: "Oil on Canvas",
        info: "This electrifying painting captures Freddie Mercury at the height of his power—arm raised triumphantly, microphone stand in hand, framed by swirling clouds of gold, green, and black. His iconic yellow jacket gleams against the stormy backdrop, embodying the spirit of performance and freedom. The composition pulses with energy and emotion, immortalizing Mercury as a symbol of charisma, courage, and unrestrained artistic expression."
    },
  ],

  hollywood: [
    {
      img: "../images/hollywood/4.jpg",
      title: "Marilyn Monroe",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A striking tribute to the ultimate Hollywood icon. This portrait captures Marilyn Monroe’s timeless gaze, focusing on the features that sparkled across the screen. Through a masterful use of high-contrast yellows and electric blue shadows, Hector Monroy isolates the blonde ambition and the classic lipstick smile. It is a monument to a star who continues to burn brightly in our cultural history."
    },
      {
      img: "../images/hollywood/19.jpg",
      title: "John Wayne",
      size: "28 x 39 cm",
      medium: "Oil on Canvas",
        info: "This painting captures the mythic aura of the American West through a larger-than-life portrayal of John Wayne. His face looms in the sky like a legend made manifest—calm, weathered, and resolute—watching over a rugged desert landscape of mesas and open plains. The composition blends realism with symbolism: the riders represent the living spirit of the West, while Wayne’s towering presence suggests memory, legacy, and the enduring influence of Western cinema."
    },
      {
      img: "../images/hollywood/20.jpg",
      title: "Morgan Freeman",
      size: "24 x 32 in",
      medium: "Oil on Metal Sheet",
        info: "A soulful and commanding tribute to one of cinema's most legendary presences. This portrait captures the quiet intensity and profound wisdom of Morgan Freeman. By framing his iconic features within a rustic, distressed texture, Hector Monroy highlights the grit and experience of a storyteller who has become a pillar of modern Hollywood. It is a monument to a voice and a face that represent the very soul of the silver screen."
    },
      {
      img: "../images/hollywood/25.jpeg",
      title: "Anthony Hopkins",
      size: "22.5 x 32 in",
      medium: "Oil on Canvas",
        info: "This striking portrait of Anthony Hopkins explores the tension between outward composure and inner intensity. A close-up of piercing blue eyes at the top—alert, observant, almost unsettling, and a more grounded, contemplative depiction of Hopkins below, rendered with deep of age and experience. The portrait captures the man himself: introspective, dignified, and marked by time."
    },
      {
      img: "../images/hollywood/27.jpeg",
      title: "Keanu Reeves",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info: "This evocative portrait of Keanu Reeves captures a quiet intensity that feels both intimate and cinematic. His gaze is turned slightly over the shoulder, as if caught between reflection and awareness; present, yet distant. The softness of the lighting contrasts with the sharp emotional clarity in his eyes, drawing the viewer into a moment that feels unspoken but deeply felt."
    },
      {
      img: "../images/hollywood/17.jpg",
      title: "Easy Rider",
      size: "40 x 30 in",
      medium: "Oil on Canvas",
        info: "This vibrant painting pays tribute to the spirit of Easy Rider, capturing the raw freedom and rebellion that defined a generation. Two bikers ride side by side along the open stretch of Route 66, their chrome machines gleaming under a vast desert sky. The road stretches endlessly ahead, a symbol of possibility, escape, and the search for meaning beyond convention. The sweeping American flag flowing behind them is more than a backdrop—it’s a powerful, almost paradoxical emblem."
    },
      {
      img: "../images/hollywood/8.jpg",
      title: "James Dean",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A cinematic homage to a restless icon, this piece layers two striking portraits—one in a red jacket, another in white—through torn‑paper reveals that expose a sunlit yellow backdrop. Fragments of film‑poster imagery and a silver sports car evoke Rebel Without a Cause, while the collage effect turns memory into myth. The composition balances youthful defiance and fragile legend, capturing Dean’s electric charisma in a single, timeless frame."
    },
      {
      img: "../images/hollywood/9.jpg",
      title: "Elizabeth Taylor",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info: "A majestic portrait that recasts Elizabeth Taylor as an ancient queen, her dark hair and bold red lips framed by striking, Egyptian‑inspired eye makeup. Torn‑paper layers reveal a tender, cinematic vignette below while the pyramids and Sphinx loom in a warm, golden haze—melding Hollywood glamour with mythic history and turning a familiar face into a timeless, regal icon."
    },
      {
      img: "../images/hollywood/10.jpg",
      title: "Marilyn Monroe",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A layered homage to Hollywood’s eternal star, this artwork tears through poster‑like textures to reveal multiple faces of Marilyn Monroe. Each fragment glows in a different palette, echoing her shifting personas across film and media. Vintage typography from How to Marry a Millionaire anchors the composition, while the collage effect transforms nostalgia into pop‑art vibrancy, celebrating Monroe’s enduring allure and cultural legacy."
    },
      {
      img: "../images/sports/14.jpg",
      title: "Bruce Lee",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info: "This fiery tribute captures Bruce Lee in a moment of raw intensity, his stance poised between attack and defense. Red claw‑like marks slash across his body and face, amplifying the sense of struggle and resilience. Surrounded by a blazing backdrop of orange and yellow, the composition radiates energy and focus, transforming the martial artist into a living symbol of discipline, power, and indomitable spirit."
    },
      {
      img: "../images/hollywood/24.jpeg",
      title: "Sharon Tate",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info: "This surreal composition presents Sharon Tate in dual visions: a close‑up rendered in cool, ethereal blues with pale tones and red lips, contrasted against a smaller, sunlit figure smiling in playful ease. The golden and blue brushstrokes behind her create a dreamlike tension between warmth and chill, intimacy and distance. The juxtaposition of scale and mood transforms her image into a meditation on duality—fragile beauty and radiant joy held together in one haunting frame."
    },
      {
      img: "../images/hollywood/15.jpg",
      title: "Steve McQueen",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info: "A kinetic homage to cinema’s “King of Cool,” this artwork layers torn‑poster textures with bold typography from Bullitt. McQueen stands in stark focus, gun in hand, while below, his green Mustang leaps across an urban hill—immortalizing the film’s legendary chase. The collage effect fuses grit and glamour, turning fragments of vintage poster art into a dynamic celebration of McQueen’s enduring style and cinematic legacy."
    },
      {
      img: "../images/hollywood/14.jpg",
      title: "Heath Ledger",
      size: "24 x 36 in",
      medium: "Oil on Canvas",
        info: "This haunting painting channels the intensity of Ledger’s unforgettable performance, his white-painted face and crimson grin leaning into the night air from a speeding car. Blurred city lights streak behind him, amplifying the sense of motion and chaos. The composition captures both menace and exhilaration, immortalizing Ledger’s Joker as a chilling symbol of unpredictability and dark charisma."
    },
      {
      img: "../images/hollywood/22.jpg",
      title: "Amber Heard",
      size: "24 x 32 in",
      medium: "Oil on Metal",
        info: "This striking painting blends beauty with decay, portraying Heard’s face in luminous realism against textures of rust and peeling paint. Her blonde hair and piercing blue eyes shine through the corroded overlay, creating a powerful contrast between elegance and erosion. The composition becomes a meditation on impermanence and transformation, where fragility and resilience coexist in vivid tension."
    },
  ],

  sports: [
    {
      img: "../images/sports/11.jpg",
      title: "Pele",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"A radiant tribute that bursts with color and celebration, this portrait shows Pelé in Brazil’s iconic yellow and green, caught mid-joy with a triumphant finger pointed skyward. The sunlit yellow background and bold green PELÉ lettering amplify the sense of national pride and timeless greatness, while his broad smile and open gesture convey the warmth and charisma that defined his legend. It’s a joyful, energetic homage to one of football’s most beloved figures."
    },
      {
      img: "../images/sports/17.jpg",
      title: "Lebron James",
      size: "32 x 24 in",
      medium: "Oil on Canvas",
        info:"This powerful artwork captures LeBron James in a moment of pure focus, cradling the basketball with intensity as he prepares to rise for a shot. The fiery explosion of orange, yellow, and smoky gray behind him amplifies the drama, symbolizing both his unstoppable energy and the heat of competition. With his dark jersey accented in red and gold and his gaze locked on the hoop, the painting radiates strength, determination, and the relentless drive that defines his legacy."
    },
      {
      img: "../images/sports/13.jpg",
      title: "Tiger Woods",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"This striking portrait pairs an intimate close-up with a dynamic action pose, capturing both the golfer’s calm confidence and athletic intensity. The soft gray background lets the subject’s expression and motion take center stage, while the artist’s signature anchors the composition with a personal touch. It’s a thoughtful tribute that balances personality and performance, inviting viewers to appreciate the man behind the legend."
    },
      {
      img: "../images/sports/5.jpg",
      title: "Kobe Bryant",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"A visceral portrait that freezes a championship moment—Kobe Bryant in his LAKERS purple-and-gold, clutching his jersey and roaring with raw intensity. Fiery red-orange flames in the background amplify the emotion, turning the canvas into a furnace of competitive spirit. The composition captures both the athlete’s physical power and unyielding will, a tribute to triumph and passion that demands attention."
    },
      {
      img: "../images/sports/1.jpg",
      title: "Johan Cruiff",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"A dynamic homage to Johan Cruyff that fuses motion and memory, his iconic #14 captured mid-kick on a vibrant green pitch while a calm, larger portrait watches from above. The bold orange palette and streaks of red and yellow turn the canvas into a living celebration of flair and intensity, balancing athletic grace with quiet authority. It’s a spirited tribute to a football visionary, honoring both the artistry of a single moment and the enduring legacy behind the legend."
    },
      {
      img: "../images/golf/1.jpg",
      title: "Long Drive",
      size: "24 x 32 in",
      medium: "Oil on Masonite",
        info:"This surreal piece blends realism with abstraction, showing a golfer mid-swing on a lush green course while the scene fractures through a cracked surface. The contrast between the calm, natural landscape and the jagged, dimensional breaks creates a sense of emergence—like the sport itself breaking boundaries. The painting captures both the precision of golf and the imaginative energy of art, making it a striking fusion of athletic focus and creative vision."
    },
      {
      img: "../images/sports/8.jpg",
      title: "Michael Jordan",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"A blazing celebration of basketball’s greatest icon, this painting captures Jordan in his Chicago Bulls #23 uniform, dribbling with unstoppable momentum. Flames of orange, yellow, and white erupt behind him, amplifying the speed, power, and intensity of his game. The composition radiates athletic dominance and fiery determination, immortalizing Jordan as the embodiment of competitive spirit and legendary greatness."
    },
      {
      img: "../images/sports/15.jpg",
      title: "Dan Marino",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"A vibrant salute to Miami’s legendary quarterback, this painting captures Marino poised with the football, ready to unleash one of his trademark throws. His #13 jersey gleams in white, green, and orange against a dynamic swirl of blue and fiery tones, amplifying the energy of the moment. The composition radiates precision and charisma, immortalizing Marino’s iconic presence as the Dolphins’ enduring symbol of skill and leadership."
    },
      {
      img: "../images/golf/7.jpg",
      title: "Flop Shot",
      size: "24 x 32 in",
      medium: "Oil on Masonite",
        info:"A striking fusion of sport and modern art, this painting captures a golfer mid‑swing in bold contrast. His grayscale form and vivid red shirt stand out against muted skies and distant hills, while abstract brushstrokes of red, black, and white surge along the canvas. The composition balances realism with expressive energy, turning a single motion into a dynamic celebration of precision, strength, and artistry."
    },
      {
      img: "../images/sports/16.jpg",
      title: "John Elway",
      size: "32 x 24 in",
      medium: "Oil on Canvas",
        info:"This dynamic painting captures Elway in the heat of play, his red jersey and blue helmet glowing against a storm of abstract color. Poised to throw, football in hand, he radiates focus and determination. The bold contrasts of light and shadow amplify his presence, immortalizing the Denver legend as a symbol of grit, leadership, and quarterback brilliance."
    },
      {
      img: "../images/sports/12.jpg",
      title: "Tom Brady",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"This dramatic painting immortalizes Brady in dual focus—poised in white jersey, football ready to launch, while a larger vision of him looms behind in Buccaneers colors, engulfed in flames. The composition radiates intensity and determination, blending realism with fiery symbolism. It celebrates Brady’s legendary presence as both a precise quarterback and an enduring icon of competitive spirit."
    },
      {
      img: "../images/sports/11.jpg",
      title: "Preparing Swing",
      size: "24 x 32 in",
      medium: "Oil on Masonite",
        info:"A striking fusion of sport and modern art, this painting captures a golfer mid‑swing in bold contrast. Her white attire gleams against surreal skies of yellow and blue, while abstract blocks of color frame the scene with geometric intensity. The composition balances realism with expressive abstraction, turning a single motion into a dynamic celebration of precision, strength, and artistry."
    },
  ],
    custom: [
    {
     img: "custom1.jpg",
      title: "Suzie Robertson",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"A striking portrait of a woman from Dubai, her elegance captured in the deep blue folds of a jeweled turban adorned with gold and tassel. Smooth, luminous skin and expressive brown eyes radiate serenity, while vivid red lips and sapphire earrings add a touch of bold refinement. Set against a soft pastel backdrop, the painting balances tradition and modernity, celebrating timeless grace with a contemporary vibrancy."   
    },
        {
     img: "custom2.jpg",
      title: "Kamerino",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"A vivid celebration of rock spirit, this portrait captures a guitarist in velvet tones and red-tinted shades, cradling a sleek black Stratocaster. The golden hardware gleams against the swirl of fiery colors behind him, evoking the pulse of music itself. Every detail—from the cross pendant to the storm of hues—radiates energy, charisma, and the timeless electricity of performance."   
    },
        {
     img: "custom3.jpg",
      title: "Hector Ortiz",
      size: "40 x 30 in",
      medium: "Oil on Canvas",
        info:"A dazzling tribute to the King, this surreal portrait multiplies Elvis into iconic poses—crooning into the mic, strumming a guitar, and commanding the stage in his jeweled white jumpsuit. Framed by the American and Mexican flags and a glowing city skyline, the composition fuses cultures and eras, celebrating the enduring magnetism of Elvis through the lens of an impersonator who channels his global legacy with vibrant energy."   
    },
        {
     img: "custom4.jpg",
      title: "Suzie Robertson #2",
      size: "30 x 40 in",
      medium: "Oil on Canvas",
        info:"In this surreal desert vision, a woman draped in serpent-patterned attire cradles a golden snake that coils gracefully around her arms. A delicate butterfly rests upon its scales, softening the tension between beauty and danger. Behind her, radiant clouds form a halo against the vast blue sky, while distant camels traverse the dunes—symbols of tradition and endurance. The composition blends mysticism and nature, portraying her as both guardian and muse of the desert’s timeless spirit."   
    },
  ],
   masterpiece: [
    {
     img: "../images/masterpiece/1.jpg",
      title: "Salvatore Mundi",
      size: "24 x 34 in",
      medium: "Oil on Canvas",
        info:"This reinterpretation of Salvator Mundi presents Christ in vivid modern hues, his red robe patterned with intricate detail as he blesses with one hand and cradles the globe in the other. The swirling clouds of orange, pink, and blue behind him heighten the drama, transforming traditional iconography into a luminous vision of guardianship and unity. The composition bridges sacred history with contemporary expression, portraying a timeless figure holding the world in both power and compassion."   
    },
        {
     img: "../images/masterpiece/2.jpg",
      title: "St Peter Denial",
      size: "32 x 24 in",
      medium: "Oil on Canvas",
        info:"This dramatic scene captures the charged moment of Peter’s denial, illuminated by stark chiaroscuro. The central figure, veiled and bathed in light, becomes the focal point of tension as a soldier leans in and a bearded accuser gestures insistently. Shadows press against the glow, heightening the emotional conflict between fear and faith. The composition transforms a biblical episode into a timeless meditation on human frailty and moral courage."   
    },
        {
     img: "../images/masterpiece/3.jpg",
      title: "Capture of Christ",
      size: "32 x 24 in",
      medium: "Oil on Canvas",
        info:"This powerful composition seizes the moment of betrayal and arrest, its figures locked in urgent confrontation. A robed Christ is grasped by armored hands as surrounding figures surge forward, their gestures charged with tension. Illuminated by stark contrasts of light and shadow, the scene radiates Baroque drama—transforming a biblical turning point into a timeless meditation on conflict, loyalty, and sacrifice."   
    },
        {
     img: "../images/masterpiece/4.jpg",
      title: "St Thomas Incredulity",
      size: "39 x 31 in",
      medium: "Oil on Canvas",
        info:"This evocative scene captures the moment of doubt transformed into belief, as Thomas reaches to touch Christ’s wound while companions lean in with intense focus. The chiaroscuro lighting heightens the drama, casting deep shadows against illuminated flesh, emphasizing both the physicality of the gesture and the spiritual weight of revelation. The composition becomes a meditation on faith, skepticism, and the human need for proof."   
    },
       {
     img: "../images/masterpiece/6.jpg",
      title: "The Annunciation",
      size: "39 x 39 in",
      medium: "Oil on Canvas",
        info:"This Renaissance-inspired painting captures the sacred moment of divine communication. The angel, radiant in flowing red robes and golden wings, kneels with a lily—symbol of purity—while Mary, haloed and serene, extends her hand in quiet acceptance. The checkered floor and distant landscape lend depth and harmony, while the interplay of gesture and light transforms the scene into a timeless meditation on grace, humility, and faith."   
    },
  ],  
    wildlife: [
    {
     img: "../images/wildlife/1.jpg",
      title: "Giant of Jungle",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"Emerging from mist and shadow, this painting reveals the elephant in warm tones of brown, orange, and gold. Its wide ears and gleaming tusks dominate the scene, radiating strength and majesty. Contrasting hues of green and blue in the background evoke a mystical atmosphere, while curved foreground shapes add depth and drama. The composition transforms the animal into a timeless symbol of power, resilience, and quiet grandeur."   
    },
        {
     img: "../images/wildlife/2.jpg",
      title: "Family Immigration",
      size: "47 x 24 in",
      medium: "Oil on Canvas",
        info:"This sweeping painting captures the quiet majesty of a herd crossing golden grasslands beneath a vast blue sky. The lead elephant dominates the foreground, its dark form contrasting against the vivid horizon, while the line of companions recedes into the distance, creating depth and rhythm. The composition celebrates strength, unity, and the timeless grace of elephants moving together across the open plains."   
    },
        {
     img: "../images/wildlife/3.jpg",
      title: "Sekekama",
      size: "24 x 34 in",
      medium: "Oil on Canvas",
        info:"This powerful painting captures the lion’s commanding presence, its mane flowing in rich browns and golden highlights. Piercing green‑yellow eyes lock forward, radiating strength and majesty, while the dark background intensifies the vivid detail of its face. The composition transforms the king of beasts into a timeless symbol of courage, dominance, and regal beauty."   
    },
        {
     img: "../images/wildlife/4.jpg",
      title: "Singular",
      size: "24 x 32 in",
      medium: "Oil on Canvas",
        info:"Bathed in golden light, this painting captures the noble profile of a horse, its contours and musculature glowing with warmth. The bridle hints at discipline and partnership, while the dramatic twilight sky of deep blues and purples provides a striking contrast. The composition balances strength and serenity, transforming the animal into a timeless emblem of grace, power, and quiet majesty."   
    },
        {
     img: "../images/wildlife/5.jpg",
      title: "Family",
      size: "47 x 20 in",
      medium: "Oil on Canvas",
        info:"This evocative painting portrays a line of elephants moving with quiet strength across the savanna. Their forms, rendered in earthy detail, cast gentle shadows against golden grass, while a dramatic sky of dark clouds and warm light frames their journey. The composition celebrates unity, resilience, and the timeless majesty of these creatures in motion."   
    },
  ],
};

//Render Thumbnails
const thumbnailsContainer = document.getElementById("thumbnails");

function renderThumbnails(list) {
  thumbnailsContainer.innerHTML = "";

  list.forEach((art, index) => {
    const thumb = document.createElement("img");
    thumb.src = art.img;
    thumb.className = "thumbnail";
    
    thumb.addEventListener("click", () => {

      // 🔹 Remove active from all thumbnails
      document.querySelectorAll(".thumbnail").forEach(t => {
        t.classList.remove("active");
      });

      // 🔹 Add active to clicked one
      thumb.classList.add("active");

      // 🔹 Load artwork
      loadArtwork(art);
    });

    thumbnailsContainer.appendChild(thumb);
  });
}

//Load Category
function loadCategory(category) {
  const list = artworks[category];

  renderThumbnails(list);

  if (list.length > 0) {
    loadArtwork(list[0]);

    // Highlight first thumbnail
    setTimeout(() => {
      const firstThumb = document.querySelector(".thumbnail");
      if (firstThumb) firstThumb.classList.add("active");
    }, 0);
  }
}


const radios = document.querySelectorAll('input[name="category"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    loadCategory(radio.value);
  });
});


//FLIP
function setupCardFlip() {
  const card = document.getElementById("card");

  let startX = 0;

  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (Math.abs(startX - endX) > 50) {
      card.classList.toggle("flip");
    }
  });

  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
}
//WELCOME
const welcomeScreen = document.getElementById("welcomeScreen");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("fade-out");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 900);

});
welcomeScreen.addEventListener("click", () => {
  enterBtn.click();
});

//PUZZLE
const puzzleBtn = document.getElementById("puzzleBtn");

puzzleBtn.addEventListener("click", () => {
  const currentImg = document.querySelector(".front img")?.src;

  if (currentImg) {
    localStorage.setItem("puzzleImage", currentImg);
  }

  window.location.href = "index_2.html";
});

  
  const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Load saved state
let musicOn = localStorage.getItem("musicOn") === "true";

if (musicOn) {
  music.volume = 0.3;
  music.play().catch(() => {});
  musicBtn.textContent = "🔊";
}

// Toggle
musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;

  if (musicOn) {
    music.volume = 0.3;
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }

  localStorage.setItem("musicOn", musicOn);
});
