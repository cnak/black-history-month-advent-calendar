// eslint-disable-next-line no-unused-vars
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const hatchArray = [
  {
    id: 'hatch-1',
    nr: 1,
    name: 'Daniel Hale Williams',
    img: require('./img/profiles/01_Daniel_Hale_Williams.jpg'),
    text: `'Daniel Hale Williams founded the first black-owned hospital in America, and performed the world's first successful heart surgery. 

At age 20, Williams became an apprentice to a former surgeon general for Wisconsin. Williams studied medicine at Chicago Medical College. Medical textbooks of the time said that operating on a human heart was too dangerous, and there was no precedent for opening the chest, Long-time Tribune science and medical reporter Ronald Kotulak wrote more than a century later the facts and details of that surgery, "With a scalpel, he cut a small hole in Cornish's chest," But the damaged sac had to be closed. With Cornish's heart beating 130 times a minute beneath his nimble fingers, Williams closed the wound with catgut." Cornish lived, and Williams went on to acclaim. 

In 1894, Williams was appointed chief surgeon at the Freedmen's Hospital in Washington D.C., which gave care to formerly enslaved blacks. Cornish lived, and Williams went on to acclaim. In 1894, Williams was appointed chief surgeon at the Freedmen's Hospital in Washington D.C., which gave care to formerly enslaved blacks.`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 1),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-2',
    nr: 2,
    name: 'Earl Cameron',
    img: require('./img/profiles/28_Earl_Cameron.jpg'),
    text: `Earl Cameron, was one of the first black actors to win leading roles in British screen dramas, His work ranged from 1950s British films exploring racial politics to Thunderball, Doctor Who and many other projects on stage and screen.
Cameron began his acting career on the London stage in 1941 but his breakout film debut was in 'Pool of London' in 1951, a film noir about a group of sailors on shore leave.
Mr. Cameron 's role, which he co stared with Susan Shaw, was  at a time when Black leading men and women were virtually nonexistent on British screens, His character developed a romance with a white woman, This in itself was a milestone as it was the first interracial relationship in British cinema. the first time the subject had been sensitively handled in a British film. Earl Cameron died in July 2020, aged 102.`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 2),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-3',
    nr: 3,
    name: 'Arthur Wharton',
    img: require('./img/profiles/06_George_Arthur_Roberts.jpg'),
    text: `"Arthur Wharton is widely considered to be the first black professional footballer in the world.

Wharton was born in Jamestown, Gold Coast (now Accra, Ghana). His father Henry Wharton was Grenadian, while his mother, Annie Florence Egyriba was a member of the Fante Ghanaian royalty. Wharton moved to England in 1882 at age 19, to train as a Methodist missionary, but soon abandoned this in favour of becoming a full-time athlete.

He was an all-round sportsman – in 1886, he equalled the amateur world record of 10 seconds for the 100-yard sprint in the AAA championship. He was also a keen cyclist and cricketer, playing for local teams in Yorkshire and Lancashire. However, Wharton is best remembered for his exploits as a footballer; while he was not the first mixed-heritage footballer in the United Kingdom — leading amateurs Robert Walker and Scotland international Andrew Watson predate him, however Wharton was the first mixed-heritage footballer to turn professional.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 3),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-4',
    nr: 4,
    name: 'Mary Jane Seacole ',
    img: require('./img/profiles/10_Mary-Seacole.png'),
    text: `"Mary Seacole was a nurse and businesswoman who provided sustenance and care for British soldiers at the battlefront during the Crimean War. 

Mary nursed many soldiers during this war and she became known as 'Mother Seacole' because of how great she was at caring for the injured. Many sources compare Seacole and Nightingale's life and work, as if they were at all similar. They only met for about 5 minutes (during the Crimean War) and played very different roles in it.

The NHS Seacole Centre at Headley Court, Surrey, was named in honour of the pioneering nurse Mary Seacole, and provides specialist rehabilitation care for patients who are recovering from COVID-19 in the Surrey region.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 4),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-5',
    nr: 5,
    name: 'George Arthur Roberts',
    img: require('./img/profiles/06_George_Arthur_Roberts.jpg'),
    text: `"

George Arthur Roberts Is thought to have been Britain’s first black firefighter.

He was born in Trinidad and Tobago in 1891 and during the First World War volunteered to travel to the United Kingdom as a young man to join the British Army’s Middlesex Regiment. In 1939 George became the first black leading fireman for the London Fire Brigade, he was promoted to the rank of section leader and in 1944 was awarded the British Empire Medal, in part because of his firefighting duties, but also for his role in co-founding the fire service’s discussion and education groups.

Roberts was honoured, posthumously with a blue plaque and a ceremony to commemorate his work throughout the blitz during the Second World War.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 5),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-6',
    nr: 6,
    name: 'Mary Jackson',
    img: require('./img/profiles/09_Mary_Jackson.jpg'),
    text: `"Mary Jackson was the first African American female engineer to work at the National Aeronautics and Space.

Mary Jackson, American mathematician and aerospace engineer who in 1958 became the first African American female engineer to work at the National Aeronautics and Space Administration (NASA).

Jackson was part of a group of very important women who helped NASA succeed in getting American astronauts into space. Mary never accepted the status quo, she helped break barriers and open opportunities for African Americans and women in the field of 
engineering and technology,

She was honoured with a building in her name, the Mary W. Jackson NASA Headquarters building appropriately sits on ‘Hidden Figures Way,’ a reminder that Mary is one of many incredible and talented professionals in NASA’s history who contributed to this agency’s success. 
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 6),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-7',
    nr: 7,
    name: 'Akala',
    img: require('./img/profiles/30_Akala.jpg'),
    text: `"
Akala, is a British rapper, journalist, author, activist and poet from Kentish Town, London. In 2006, he was voted the Best Hip Hop Act at the MOBO Awards and has been included on the annual Power list of the 100 most influential Black British people in the UK. 
In May 2018, Daley published Natives: Race and Class in the Ruins of Empire. The book is part biography, and part polemic on race and class. The overall ideological framework of the book is a pragmatic, socialist-oriented Pan-Africanism that claims to seek the liberation of all humanity from oppression and exploitation. At the same time, Daley highlights what he believes are shared problems faced by African communities worldwide in what he describes as a global system of imperialism.
Daley has given guest lectures at East 15 Acting School, University of Essex, Manchester Metropolitan University, Sydney University, Sheffield Hallam University,Cardiff University, and the International Slavery Museum, as well as a workshop on songwriting at the School of Oriental and African Studies. He has also spoken at the Oxford Union. 
He has also been involved in campaigns to ""decolonise"" the curriculum including giving a talk at the University of Leicester. When speaking to schoolchildren or prisoners, or writing lyrics, Daley's message is always to work twice as hard. ""My analysis of institutionalised racism is not 'oh, this is an excuse to fail' – quite the opposite. The earlier you're aware of the hurdles, the easier they are to jump over.""
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 7),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-8',
    nr: 8,
    name: 'Harriet Tubman ',
    img: require('./img/profiles/17_Harriet_Tubman.jpg'),
    text: `"Harriet Tubman escaped slavery to become a leading abolitionist. She led hundreds of enslaved people to freedom along the route of the Underground Railroad.
Born into slavery in Maryland, Harriet Tubman escaped to freedom in the North in 1849 to become the most famous ""conductor"" on the Underground Railroad. Tubman risked her life to lead hundreds of family members and other slaves from the plantation system to freedom on this elaborate secret network of safe houses. A leading abolitionist before the American Civil War, Tubman also helped the Union Army during the war, working as a spy among other roles.
After the Civil War ended, Tubman dedicated her life to helping impoverished former slaves and the elderly. In honour of her life and by popular demand, in 2016, the U.S. Treasury Department announced that Tubman will replace Andrew Jackson on the centre of a new $20 bill.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 8),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-9',
    nr: 9,
    img: require('./img/profiles/16_Federick_Jones.jpg'),
    name: 'Federick Jones',
    text: `"Frederick McKinley Jones was the inventor of a practical refrigeration system for trucks and railroad cars. 
Frederick Jones patented more than sixty inventions in all, but it is his invention of the automatic refrigeration system for long-haul trucks in 1935 that he is most famous for.
A naturally gifted mechanic, ones was self-taught, which helped him to invent a portable air-conditioning unit for trucks in 1938. This unit could be used to preserve perishable foods during transport, and the patents Jones were awarded for the product led to the formation of the Thermo King Corporation. His inventions were increasingly vital during WWII, when they were used to transport blood and medicine to battlefields and hospitals.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-10',
    nr: 10,
    img: require('./img/profiles/08_Mae_Jemison.jpg'),
    name: 'Mae Jemison',
    text: `"Mae Carol Jemison is an was the first black woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour. 

Born in Alabama and raised in Chicago, Jemison graduated from Stanford University with degrees in chemical engineering as well as African and African-American studies. She then earned her medical degree from Cornell University. Jemison was a doctor for the Peace Corps in Liberia and Sierra Leone from 1983 until 1985 and worked as a general practitioner. In pursuit of becoming an astronaut, she applied to NASA.

Jemison joined NASA's astronaut corps in 1987 and was selected to serve for the STS-47 mission, during which she orbited the Earth for nearly eight days on September 12–20, 1992.

Jemison left NASA in 1993 and founded a technology research company. She later formed a non-profit educational foundation and through the foundation is the principal of the 100 Year Starship project funded by DARPA. Jemison also wrote several books for children and appeared on television several times, including in a 1993 episode of Star Trek: The Next Generation. She holds several honorary doctorates and has been inducted into the National Women's Hall of Fame and the International Space Hall of Fame.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-11',
    nr: 11,
    img: require('./img/profiles/04_Dr_Harold_Moody.jpg'),
    name: 'Dr Harold Moody',
    text: `Harold Arundel Moody was a Jamaican-born physician who emigrated to the United Kingdom, where he campaigned against racial prejudice and established the League of Coloured Peoples in 1931 with the support of the Quakers. 

Dr Harold Moody was born in Kingston, Jamaica in 1882. In 1904 he came to London to study medicine, and in February 1913 he set up his own successful practice in Peckham. The racial prejudice he faced as a student and then as a qualified doctor motivated his campaign for the rights of Black people. 

In March 1931 he became one of the founders of the League of Coloured Peoples. Its aims were to highlight the problems and successes of Black people, to challenge racial discrimination and fight for equality.
`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-12',
    nr: 12,
    img: require('./img/profiles/14_Una_Marson.jpeg'),
    name: 'Una Maud Victoria Marson',
    text: `"
Una Maud Victoria Marson was the first black woman to be employed by the BBC during World War II.
Una Marson was born on 6 February 1905, in Santa Cruz, Jamaica, in the parish of St Elizabeth. She was the youngest of six children of Rev. Solomon Isaac Marson, a Baptist parson, and his wife Ada Wilhelmina Mullins. As a child before going to school she was an avid reader of available literature, which at the time was mostly English classical literature.
In 1926, Marson was appointed assistant editor of the Jamaican political journal Jamaica Critic. Her years there taught her journalism skills as well as influencing her political and social opinions and inspired her to create her own publication. In 1931, due to financial difficulties, The Cosmopolitan ceased publication, which led her to begin publishing more poetry and plays. She wrote her first play, At What a Price, about a Jamaican girl who moves from the country into the city of Kingston to work as a stenographer and falls in love with her white male boss. The play opened in Jamaica and later London to critical acclaim. In 1932, she decided to go to London to find a broader audience for her work and to experience life outside of Jamaica.
From 1932 to 1945, Marson moved back and forth between London and Jamaica. She continued to contribute to politics, but now instead of focusing on writing for magazines, she wrote for newspapers and her own literary works in order to get her political ideas across. In these years, Marson kept writing to advocate feminism, but one of her new emphases was on the race issue in England.
In 1941, she was hired by the BBC Empire Service to work on the programme Calling the West Indies, in which World War II soldiers would have their messages read on the radio to their families, becoming the producer of the programme by 1942.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-13',
    nr: 13,
    img: require('./img/profiles/05_Garrett_A_Morgan.jpg'),
    name: 'Garret Morgan',
    text: `"
Garrett Morgan was the inventor of an improved sewing machine and traffic signal, a hair-straightening product, and a respiratory device that would later provide the blueprint for WWI gas masks. 
Born in Paris, Kentucky, on March 4, 1877, Garrett Morgan was the seventh of 11 children. His mother, Elizabeth Reed, was of Indian and African descent, and the daughter of a Baptist minister. His father, Sydney, a formerly enslaved person freed in 1863, was the son of John Hunt Morgan, a Confederate colonel. Morgan's mixed-race heritage would play a part in his business dealings as an adult.
When Morgan was in his mid-teens, he moved to Cincinnati, Ohio, to look for work, and found it as a handyman to a wealthy landowner. Although he only completed an elementary school education, Morgan was able to pay for more lessons from a private tutor. But jobs at several sewing-machine factories were to soon capture his imagination and determine his future. Learning the inner workings of the machines and how to fix them, Morgan obtained a patent for an improved sewing machine and opened his own repair business.
He went on to patent several inventions, including an improved sewing machine and traffic signal, a hair-straightening product, and a respiratory device that would later provide the blueprint for WWI gas masks. 
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-14',
    nr: 14,
    img: require('./img/profiles/07_Lilian_Bader.png'),
    name: 'Lilian Bader',
    text: `"Lilian Bader one of the very first black women to join the British Armed Forces.
Bader was born in Liverpool to Marcus Bailey, a merchant seaman from Barbados who served in the First World War, and a British-born mother of Irish parentage.
In 1927, Bader and her two brothers were orphaned when their father died. At the age of 9 she was separated from her brothers and placed in a convent, where she remained until she was 20. Bader has explained that it was difficult to find employment 'because of her father's origins: ""My casting out from the convent walls was delayed. I was half West Indian, and nobody, not even the priests, dare risk ridicule by employing me.""'
In 1939, at the onset of the Second World War, Bader enlisted in the Navy, Army and Air Force Institutes (NAAFI) at Catterick Camp, Yorkshire. She was dismissed after seven weeks when it was discovered that her father was not born in the United Kingdom. On 28 March 1941 she enlisted in the Women's Auxiliary Air Force (WAAF), after she heard that the Royal Air Force (RAF) were taking citizens of West Indian descent. She trained in instrument repair, which was a trade newly opened to women. She then became a Leading Aircraft Woman and was eventually promoted to the rank of corporal."`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-15',
    nr: 15,
    img: require('./img/profiles/02_Desmond_tutu.jpg'),
    name: 'Desmond Tutu',
    text: `The Archbishop Desmond Tutu was the first black person to be appointed the Anglican dean of Johannesburg in 1975.

Desmond Mpilo Tutu OMSG CH GCStJ is a South African Anglican cleric, theologian, and 1984 Nobel Peace Prize laureate, known for his work as an anti-apartheid and human rights activist. He was the Bishop of Johannesburg from 1985 to 1986 and then the Archbishop of Cape Town from 1986 to 1996, in both cases being the first black African to hold the position. Theologically, he sought to fuse ideas from black theology with African theology.

In his position as archbishop he emerged as one of the most prominent and eloquent voices in the South African anti-apartheid movement, especially important considering that many of the movement's prominent leaders were imprisoned or in exile.`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-16',
    nr: 16,
    img: require('./img/profiles/26_tessyojo.jpg'),
    name: 'Tesso Ojo',
    text: `"Tessy Ojo is the Chief Executive of The Diana Award - a charity legacy to Diana, Princess of Wales’ belief in the power that young people have to change the world, with the right support. Ojo became the very first British National to be honoured with The Prestigious Martin Luther King Award in Atlanta.
The charity’s mission is to foster and develop positive change in the lives of young people. With over twenty years in third sector leadership and in-depth knowledge of working with young people and across the world, Tessy played a founding role in the building and sustainability of the charity, bringing strategic clarity and innovative approaches leading to a 360 degree turnaround of the charity’s growth and global industry recognition. Tessy is a passionate humanitarian and campaigner who has gained international reputation for work around social inequality. At the heart of her work is the belief that with the right support and investment, young people are the best instigators for achieving real, sustainable change in their lives, their communities and the wider society.
In 2019, Tessy became the very first British National to be honoured with The Prestigious Martin Luther King Award in Atlanta, in recognition of her innovative approach to leadership and humanitarian work. She was also named by British Airways, alongside other key notable leaders, as one of the top 100 British Leaders. Tessy seats on a number of non-Executive boards including Comic Relief, The BBC’s Appeals Advisory Committee, The Royal Taskforce on Cyberbullying and the UK Council For Child Internet Safety.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-17',
    nr: 17,
    img: require('./img/profiles/15_Bill_Richmond.jpg'),
    name: 'Bill Richmond',
    text: `"Bill Richmond was Britain’s first black sports star.
Born an American slave, Richmond he only began fighting aged 41. He’d been born a slave in 1763 on Staten Island and, when the American Revolution broke out, he’d allegedly assisted in the execution of the spy, Nathan Hale, and then immediately after seems to have fought for the British Army, despite only being 13 years old. He’d then been brought to Yorkshire, and began an apprenticeship to a cabinet-maker in York.  He became a bodyguard to the notorious young rake, Lord Camelford, who introduced him to the thrill of London’s bareknuckle boxing scene. 
Richmond became a professional boxer, soon to acquire that famous nickname thanks to his dynamic footwork.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-18',
    nr: 18,
    img: require('./img/profiles/19_Jane_Bolin.jpg'),
    name: 'Jane Bolin',
    text: `"Jane Matilda Bolin, LL.B. was the first black woman to graduate from Yale Law School, the first to join the New York City Bar Association and the first to join the New York City Law Department. She became the first black woman to serve as a judge in the United States when she was sworn into the bench of the New York City Domestic Relations Court in 1939.

Besides dealing with many domestic cases, she worked to stop probation officers from getting assignments based on the colour of their skin. During her career, she also worked with Eleanor Roosevelt to create a program that would intervene before young boys committed crimes.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-19',
    nr: 19,
    img: require('./img/profiles/03_Dr_Ralph_J_Bunche.jpg'),
    name: 'Dr. Ralph J. Bunche',
    text: `"Dr Ralph J. Bunche was the first African American to be so honoured with the Nobel Peace prize.
Bunche was an American political scientist, academic, and diplomat who received the 1950 Nobel Peace Prize for his late 1940s mediation in Israel. He arranged a cease-fire between Israelis and Arabs during the war which followed the creation of the state of Israel in 1948.  
Famous quote '“The real objective must always be the good life for all the people. International machinery will mean something to the common man throughout the world only when it is translated into terms that he can understand: peace, bread, housing, clothing, education, good health, and, above all, the right to walk with dignity on the world’s greatest boulevards
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-20',
    nr: 20,
    img: require('./img/profiles/24_Charlotte_of_Mecklenburg_Strelitz.jpg'),
    name: 'Queen Charlotte',
    text: `"It is claimed England's second Black Queen Was Charlotte of Mecklenburg-Strelitz the eighth child, and youngest daughter of Duke Charles Louis Frederick and Duchess Elizabeth Albertine. 

At age 17, she travelled from Germany to England to marry George III. She gave birth to 15 children. Though Queen Charlotte was German, De Valdes y Cocom’s research shows the queen was directly descended from a branch of the Portuguese royal family, related to Margarita de Castro e Souza, a 15th-century Portuguese noblewoman nine generations removed, whose ancestry she traces from the 13th-century ruler Alfonso III and his lover Madragana, whom Valdes takes to have been a Moor and thus a black African

She founded Kew Gardens and also claimed to have inspired Mozart in his music, He subsequently dedicated six sonatas for the harpsichord with violin or flute accompaniment to the queen.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-21',
    nr: 21,
    img: require('./img/profiles/29_Jack_London.jpg'),
    name: 'Jack London',
    text: `"Jack London (1905-66) became the first black British athlete to win an Olympic medal  for Great Britain in the 1928 Summer Olympics held in Amsterdam, Netherlands.
After equalling the Olympic 100 metres record of 10.6 seconds in the semi-final, he won the silver medal in the 100 metres final, behind Canadian Percy Williams. 
He then won the bronze medal in the 4×100 metres relay with his teammates Cyril Gill, Edward Smouha and Walter Rangeley, behind the teams of the USA and Germany. He was the first to use starting blocks at the Olympic Games
His athletic career was curtailed by a leg injury in 1930. He joined a 4×100 metre relay for England against Germany in 1931, but was not selected for the 1932 Summer Olympics in Los Angeles.
After he retired from athletics, he became an entertainer, playing piano in the original cast of the Noël Coward's musical Cavalcade at the Theatre Royal, Drury Lane in 1931. He also appeared in Will Hay's Gainsborough Pictures comedy Old Bones of the River in 1938.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-22',
    nr: 22,
    img: require('./img/profiles/25_Queen_Philippa_of_Hainault.jpg'),
    name: 'Philippa of Hainault ',
    text: `"Philippa of Hainault was the first Black queen of England.
She was the daughter of William of Hainault, a lord in part of what is now Belgium. When she was nine the King of England, Edward II, decided that he would marry his son, the future Edward III, to her. 
She was betrothed to him and in 1327, when she was only 14, she arrived in England. The next year, when she was 15, they married and were crowned King and Queen. Their first child was called Edward, like his father, but is better known as the Black Prince. 
Many say that he was called this because of the colour of his armour, but there are records that show that he was called 'black' when he was very small. The French called him 'Le Noir'. Philippa was a remarkable woman. She was very wise and was known and loved by the English for her kindliness and restraint. She would travel with her husband on his campaigns and take her children as well.
When the King was abroad she ruled in his absence. Queen's College in Oxford University was founded under her direction by her chaplain, Robert de Eglesfield in 1341 when she was 28. She brought many artists and scholars from Hainault who contributed to English culture. 
When she died, Edward never really recovered, and she was much mourned by him and the country. King Edward had a beautiful sculpture made for her tomb which you can see today at Westminster Abbey.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-23',
    nr: 23,
    img: require('./img/profiles/11_Dame_Linda_Dobbs_alternative.jpg'),
    name: 'Dame Linda Dobbs',
    text: `"The Honourable Mrs Justice Dobbs is the first black person in the senior judiciary of England and Wales, being appointed a high court judge in 2004.
Dame Linda Penelope Dobbs was born in 1951. Dame Linda came to Britain from Sierra Leone when she was seven years old. Her mother was from Sierra Leone and her father was an English lawyer who went on to serve as a High Court judge in Sierra Leone. Her father had been a High Court judge there. After studying for a BSc from the University of Surrey, she came to LSE to study for an LLM and then went on to write a PhD thesis on “Juvenile justice in the Soviet Union”, under the supervision of Professors Hall Williams and Ivo Lapenna. Dame Linda was called to the Bar in 1981. Her practice at 18 Red Lion Court was predominantly criminal, specialising mainly on serious fraud, customs and excise cases and serious sexual offences. She took silk in 1998. Amongst other appointments was chair of the Professional Standards Committee and the Criminal Bar Association.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-24',
    nr: 24,
    img: require('./img/profiles/13_Spike_Lee.jpg'),
    name: 'Spike Lee',
    text: `"Spike Lee is an American film director, producer, screenwriter, actor, and professor. Spike Lee will be the first black person to lead the Cannes Films festival jury in the French festival's 73-history to serve as jury president, presiding over the body of artists who choose which films will receive an award.
His production company, 40 Acres and a Mule Filmworks, has produced more than 35 films since 1983. Lee's work has continually explored race relations, colorism in the black community, the role of media in contemporary life, urban crime and poverty, and other political issues. He has won numerous accolades for his work, including an Academy Award for Best Adapted Screenplay, a Student Academy Award, a BAFTA Award for Best Adapted Screenplay, two Emmy Awards, two Peabody Awards, and the Cannes Grand Prix. He has also received an Academy Honorary Award, an Honorary BAFTA Award, an Honorary César, and the Dorothy and Lillian Gish Prize. Lee's films Do the Right Thing, Malcolm X, 4 Little Girls and She's Gotta Have It were each selected by the Library of Congress for preservation in the National Film Registry for being ""culturally, historically, or aesthetically significant”.
He made his directorial debut with She's Gotta Have It (1986). He has since written and directed such films as Do the Right Thing (1989), Mo' Better Blues (1990), Jungle Fever (1991), Malcolm X (1992), Crooklyn (1994), Clockers (1995), 25th Hour (2002), Inside Man (2006), Chi-Raq (2015), BlacKkKlansman (2018) and Da 5 Bloods (2020). Lee also acted in ten of his films.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-25',
    nr: 25,
    img: require('./img/profiles/philliswheatley.jpg'),
    name: 'Phillis Wheatley',
    text: `"Phillis Wheatley was the first Black author of a published book of poetry.
Born in West Africa, Wheatley was sold as a slave to the Wheatley family in the US.
It was during her time in slavery that she learned to read and write, penning her first poem aged just 14.
At the age of 20, she moved to England with her son and published her first volume of poetry in 1773, making her the first Black poet to be published, ever."`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-26',
    nr: 26,
    img: require('./img/profiles/22_Otis_Boykin.jpg'),
    name: 'Otis Boykin',
    text: `"Otis Frank Boykin an American inventor and engineer. His inventions include improved electrical resistors used in computing, missile guidance, and pacemakers.
Otis Boykin was born on August 29, 1920, in Dallas, Texas. His father, Walter B. Boykin, was a carpenter, and later became a preacher. His mother Sarah was a maid, who died of heart failure when Otis was a year old. This inspired him to help improve the pacemaker. He attended Fisk University on a scholarship, worked as a laboratory assistant at the university's nearby aerospace laboratory, and left in 1941.
Otis Boykin graduated from Fisk College in 1941 and took a job with the Majestic Radio and TV Corporation. He later worked at P. J. Nilsen Research Laboratories. He began to invent products on his own, with some of his noteworthy inventions including a wire precision resistor used in televisions and radios and a control unit for the pacemaker.
Otis Boykin filed a patent for resuscitators and paved the way for his most notable invention, the pacemaker control unit. Boykin had 26 patents in his name and is famed for the development of IBM computers, burglar-proof cash register, chemical air filters, and an electronic resistor used in controlled missiles and other devices.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-27',
    nr: 27,
    img: require('./img/profiles/20_John_Edmonstone.jpg'),
    name: 'John Edmonstone',
    text: `"John Edmonstone was a ex slave who gave Charles Darwin inspiring accounts of tropical rain forests in South America and may have encouraged him to explore there. The taxidermy Darwin learnt from Edmonstone helped him greatly during the voyage of HMS Beagle.
Born  in Demerara, British Guiana (present day Guyana, South America), who later gained his freedom. He learned taxidermy from Charles Waterton, whose father-in-law Charles Edmonstone had a plantation in Demerara.
After he was freed, Edmonstone came to Glasgow with his former master, Charles Edmonstone. From there he moved to Edinburgh where he taught taxidermy to students at the University of Edinburgh, including Charles Darwin.
Edmonstone is regarded as one of the ""100 Great Black Britons"". However, Darwin does not mention him by name, so the identification of Edmonstone as Darwin's teacher is not completely certain. A poem narrated from the perspective of John Edmonstone appears in the Winter 2019 issue of African American Review.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-28',
    nr: 28,
    img: require('./img/profiles/23_Paul_Stephenson.jpg'),
    name: 'Paul Stephenson',
    text: `"
Paul Stephenson was the first black social worker. 
Paul Stephenson OBE is a community worker, activist and long-time campaigner for civil rights for the British African-Caribbean community in Bristol, England. As a young social worker, in 1963 Stephenson led a boycott of the Bristol Omnibus Company, protesting against its refusal to employ Black or Asian drivers or conductors. After a 60-day boycott supported by thousands of Bristolians, the company revoked its colour bar in August.
 In 1964 Stephenson achieved national fame when he refused to leave a public house until he was served, resulting in a trial on a charge of failing to leave a licensed premises. His campaigns were instrumental in paving the way for the first Race Relations Act, in 1965. Stephenson is a Freeman of the City of Bristol and was awarded an OBE in 2009.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-29',
    nr: 29,
    img: require('./img/profiles/12_Olaudah_Equiano.jpg'),
    name: 'Olaudah Equiano',
    text: `"Olaudah Equiano was an enslaved man who bought his freedom and wrote compellingly about his experiences.
Olaudah Equiano, known for most of his life as Gustavus Vassa was a writer and abolitionist from, according to his memoir, the Eboe region of the Kingdom of Benin (today southern Nigeria). Enslaved as a child, he was taken to the Caribbean and sold as a slave to a Royal Navy officer. He was sold twice more but purchased his freedom in 1766.
As a freedman in London, Equiano supported the British abolitionist movement. He was part of the Sons of Africa, an abolitionist group composed of Africans living in Britain, and he was active among leaders of the anti-slave trade movement in the 1780s. He published his autobiography, The Interesting Narrative of the Life of Olaudah Equiano (1789), which depicted the horrors of slavery. It went through nine editions in his lifetime and helped gain passage of the British Slave Trade Act 1807, which abolished the slave trade.] Equiano married an English woman named Susannah Cullen in 1792 and they had two daughters. He died in 1797 in Westminster.
Since the late 20th century, when his autobiography was published in a new edition, he has been increasingly studied by a range of scholars, including from his homeland.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-30',
    nr: 30,
    img: require('./img/profiles/18_Ira_Frederick_Aldridge.jpg'),
    name: 'Ira Frederick Aldridge',
    text: `"Ira Frederick Aldridge was the first black actor to play Othello on a West End stage. 
Aldridge was an American and later British stage actor and playwright who made his career after 1824 largely on the London stage and in Europe, especially in Shakespearean roles. 
Aldridge is the only actor of African-American descent among the 33 actors of the English stage honoured with bronze plaques at the Shakespeare Memorial Theatre at Stratford-upon-Avon. He was especially popular in Prussia and Russia, where he received top honors from heads of state. At the time of his sudden death, while on tour in Poland, he was arranging a triumphant return to America, with a planned 100-show tour to the United States.
He was married twice, once to an Englishwoman, once to a Swedish woman, and had a family in England. Two of his daughters became professional opera singers.
"`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-31',
    nr: 31,
    img: require('./img/profiles/27_Curtis_Mayfield.jpg'),
    name: 'Curtis Mayfield',
    text: `1983 - The first Black person to headline Glastonbury was Curtis Mayfield, an American singer-songwriter, guitarist, and record producer, and one of the most influential musicians behind soul and politically conscious African-American music. Mayfield’s individualism on the guitar later put him in Rolling Stone Magazine’s 100 Top Guitarists of All Time and admiration from such guitar giants as Jimi Hendrix and Eric Clapton. In the mid-1960s Mayfield wrote three songs that defined his songwriter vision in this era: “Keep on Pushing,” “People Get Ready” and “We’re A Winner.” All managed – along with several other Mayfield songs - to insinuate social commentary into the pop charts and bring awareness to the struggles going on. No wonder Martin Luther King Jr. loved Mayfield’s work. The civil rights icon embraced “Ready” and “Pushing” as unofficial anthems for the Movement. “Keep On Pushing” was the theme music, part of the experience on the Freedom Ride buses that took activists into an unfriendly American South in the fight against segregation. The album “Keep On Pushing” by The Impressions (Curtis Mayfield's group at the time) was released in 1964 and quickly became the group’s biggest album to date. It also secured a longevity outside of its initial success, such as, when then-State Senator Barack Obama gave the Keynote Speech at the 2004 Democratic Convention. The music that brought him onstage was “Keep On Pushing.” `,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E55F13'
  }
];

export const createCalendar = () => shuffle(hatchArray);
