// ---------- EN | ไทย language switch ----------
// English lives in the HTML. Any element with data-i18n="key" gets the Thai text
// from TH[key] when Thai is on; the English is cached on the element so it can
// switch back. The choice is remembered across pages (localStorage, optional).
// Keys without a Thai entry yet simply stay in English.

const TH = {
  // shared: header, footer
  'nav.portfolio': 'Portfolio',
  'nav.work': 'ผลงาน',
  'nav.about': 'เกี่ยวกับผม',
  'nav.contact': 'ติดต่อ',
  'nav.back': '← ผลงานทั้งหมด',
  'footer': 'กรุงเทพฯ · © 2569 ชนน บุญศักดิ์',

  // home
  'home.title': 'ชนน บุญศักดิ์ (Bluewhale) — Portfolio',
  'home.where': 'กรุงเทพฯ',
  'home.resume': 'ดาวน์โหลด Resume',
  'home.contactBtn': 'ติดต่อผม',
  'home.work': 'ผลงาน',
  'home.c1.meta': '01 · Founder &amp; Project Manager · ส.ค. 2568 – มิ.ย. 2569',
  'home.c1.result': 'จัดโชว์ฟูลโปรดักชัน 4 งาน ศิลปิน 10 วง',
  'home.c2.meta': '02 · Project Coordinator Intern · ม.ค. – พ.ค. 2569',
  'home.c2.title': 'ฝึกงานที่ Prart Music Global',
  'home.c2.result': 'แคมเปญ Dream Theater ครบรอบ 40 ปี และ Overdrive Guitar Contest',
  'home.c3.meta': '03 · Project Manager &amp; Creative · มี.ค. 2567',
  'home.c3.result': 'เทศกาลแฟชั่น × ดนตรี',
  'home.c4.meta': '04 · Band Assistant &amp; Photographer · ธ.ค. 2567 – 2568',
  'home.c4.title': 'B35 ที่ Wonderfruit',
  'home.c4.result': 'วงไทย-แจ๊ส ถ่ายด้วยกล้องฟิล์ม',
  'home.c5.meta': '05 · มือเบส, PR และฝ่ายสวัสดิการ · 2566 – 2567',
  'home.c5.title': 'ชุมนุม TU Folksong',
  'home.c5.result': 'แคมเปญ PR ลานโฟล์ค 2 และ Folk Camp',
  'home.about': 'เกี่ยวกับผม',
  'home.edu': 'การศึกษา',
  'home.su': 'มหาวิทยาลัยศิลปากร คณะดุริยางคศาสตร์',
  'home.su.degree': 'ศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาธุรกิจดนตรีและบันเทิง',
  'home.su.years': '2565 – 2569 · GPAX 3.56',
  'home.skw': 'โรงเรียนสวนกุหลาบวิทยาลัย',
  'home.skw.level': 'มัธยมศึกษา',
  'home.certs': 'ใบประกาศนียบัตร · Coursera',
  'home.cert1.meta': 'Berklee · เม.ย. 2566',
  'home.cert2.meta': 'Google · ส.ค. 2566',
  'home.cert3.meta': 'Google · ก.ค. 2567',
  'home.verify': 'ตรวจสอบ ↗',
  'home.talk': 'ติดต่อผม',
  'home.tel': 'โทร 085-556-5000',
};

// Text that has no data-i18n key is matched by its English text instead
// (whitespace collapsed). Key = the English as it reads on the page, value = Thai HTML.
const TEXT = {
  // ---- shared case-study words ----
  'Role': 'ตำแหน่ง',
  'When': 'เมื่อไหร่',
  'Where': 'ที่ไหน',
  'The brief': 'โจทย์',
  'What I did': 'สิ่งที่ผมทำ',
  'The result': 'ผลลัพธ์',
  'Result': 'ผลลัพธ์',
  'Key takeaway': 'สิ่งที่ได้เรียนรู้',
  'Tap to zoom': 'แตะเพื่อซูม',
  'Part 1': 'พาร์ท 1',
  'Part 2': 'พาร์ท 2',
  'Part 2 · Event': 'พาร์ท 2 · อีเวนต์',
  'Next project · 02': 'โปรเจกต์ถัดไป · 02',
  'Next project · 03': 'โปรเจกต์ถัดไป · 03',
  'Next project · 04': 'โปรเจกต์ถัดไป · 04',
  'Next project · 05': 'โปรเจกต์ถัดไป · 05',
  'Back to the start · 01': 'กลับไปเริ่มต้น · 01',
  'Internship at Prart Music Global': 'ฝึกงานที่ Prart Music Global',
  'TU Folksong Club': 'ชุมนุม TU Folksong',

  // ---- last project → About ----
  'Next · Education & certificates': 'ถัดไป · การศึกษาและใบประกาศนียบัตร',
  'About me': 'เกี่ยวกับผม',

  // ---- lagoon ----
  'lagoon.livemusic — Chanon Boonsak (Bluewhale)': 'lagoon.livemusic — ชนน บุญศักดิ์ (Bluewhale)',
  'Aug 2025 – Jun 2026': 'ส.ค. 2568 – มิ.ย. 2569',
  'Instagram followers ↗': 'ผู้ติดตาม Instagram ↗',
  'shows in 1 year': 'โชว์ใน 1 ปี',
  'acts on the lineup': 'ศิลปินใน lineup',
  'capacity show, sold out': 'ที่นั่ง sold out',
  '4 shows · Aug 2025 – Jun 2026': '4 โชว์ · ส.ค. 2568 – มิ.ย. 2569',
  'The lineup': 'Lineup',
  '1 Aug2025': '1 ส.ค.<br>2568',
  '19 Sep2025': '19 ก.ย.<br>2568',
  '3 Apr2026': '3 เม.ย.<br>2569',
  '26 Jun2026': '26 มิ.ย.<br>2569',
  'I founded and ran Lagoon during my internship at Decommune Bangkok. The challenge: build a promoter brand that speaks to Gen Z indie music fans.': 'ผมเริ่มทำแบรนด์ Lagoon ตั้งแต่ตอนฝึกงานที่ Decommune Bangkok โจทย์คือสร้างแบรนด์ผู้จัดที่โดนใจแฟนเพลงอินดี้กลุ่ม Gen Z',
  'I named it Lagoon because I wanted every show to feel like a sanctuary: a warm welcome from the staff, the decoration, even the scent of the room.': 'ผมตั้งชื่อว่า Lagoon เพราะอยากให้ทุกโชว์รู้สึกเหมือนเป็น "ที่พักใจ" ตั้งแต่การต้อนรับของสตาฟ การตกแต่ง ไปจนถึงกลิ่นในห้อง',
  'Pitched the concept to a venue owner together with the CEO of Decommune Bangkok, secured them as investor, and built the founding team': '<mark>Pitch คอนเซปต์</mark>กับเจ้าของสถานที่ร่วมกับ CEO ของ Decommune Bangkok จน<mark>ได้เขามาเป็นผู้ลงทุน</mark> แล้วรวบรวมทีมผู้ก่อตั้ง',
  "Produced 4 live shows at ARTSPACE @Bantadthong with 10 acts: Yew, Television Off, Landokmai, Tofu, AYLA'S, The White Haircut, SOK, Yented, Cornboi and The Juu's": "จัด<mark>โชว์ 4 งาน</mark>ที่ ARTSPACE @Bantadthong รวม<mark>ศิลปิน 10 วง</mark>: Yew, Television Off, Landokmai, Tofu, AYLA'S, The White Haircut, SOK, Yented, Cornboi และ The Juu's",
  'Owned the budget, P&L tracking, production timeline and artist liaison': 'ดูแล<mark>งบประมาณ, P&amp;L, ไทม์ไลน์โปรดักชัน</mark> และ<mark>การประสานงานศิลปิน</mark>',
  "Reclaimed-plastic set design became the brand's visual signature": '<mark>เซ็ตดีไซน์จากพลาสติกรีไซเคิล</mark> กลายเป็นเอกลักษณ์ของแบรนด์',
  'capacity show sold out: Yew & Television Off (1 Aug 2025), ~200K THB in ticket revenue': 'ที่นั่ง sold out: Yew &amp; Television Off (1 ส.ค. 2568) รายได้ค่าบัตร ~200K บาท',
  "organic views on a partner creator's reel for the Yented & Cornboi show (26 Jun 2026)": 'วิวออร์แกนิกบนรีลของครีเอเตอร์พาร์ทเนอร์ สำหรับโชว์ Yented &amp; Cornboi (26 มิ.ย. 2569)',
  'Lagoon taught me to work to a professional standard, not a university one: coordinating A&R, stakeholders, and visual and lighting artists on one timeline, and keeping things professional even with close friends on the team, all while keeping up with my university classes.': 'Lagoon สอนให้ผมทำงานด้วยมาตรฐานมืออาชีพ ไม่ใช่มาตรฐานงานมหาลัย ต้องประสานทั้ง A&amp;R, stakeholder, ทีมงาน Visual และ Lighting ให้อยู่บนไทม์ไลน์เดียวกัน และต้องรักษาความเป็นมืออาชีพแม้จะทำงานกับเพื่อนสนิท ทั้งหมดนี้ไปพร้อมกับการเรียนที่มหาลัย',
  'Tap a photo to zoom': 'แตะรูปเพื่อดูใหญ่',
  'Gallery': 'แกลเลอรี',
  'View all photos': 'ดูรูปทั้งหมด',

  // ---- pmg ----
  'Internship at Prart Music Global — Chanon Boonsak': 'ฝึกงานที่ Prart Music Global — ชนน บุญศักดิ์',
  'Internship': 'ฝึกงาน',
  'Jan – May 2026': 'ม.ค. – พ.ค. 2569',
  'Part 1 · Promoter': 'พาร์ท 1 · Promoter',
  '40th Anniversary Tour, promoted by OD Rock. 18 Feb 2026, Idea Live (Bravo BKK).': 'ทัวร์ครบรอบ 40 ปี จัดโดย OD Rock · 18 ก.พ. 2569 ที่ Idea Live (Bravo BKK)',
  'Audience analysis': 'วิเคราะห์กลุ่มเป้าหมาย',
  'Organic content (6 posts)': 'คอนเทนต์ออร์แกนิก (6 โพสต์)',
  'On-ground operations': 'ดูแลหน้างาน',
  'The brief came straight from the CEO:': 'CEO ให้โจทย์มาว่า',
  "Find out who Dream Theater's audience really is": 'หาให้เจอว่าใครคือคนดู Dream Theater ตัวจริง',
  'Use that to drive ticket sales for the 40th Anniversary show': 'แล้วใช้สิ่งนั้นดันยอดขายบัตรโชว์ครบรอบ 40 ปี',
  'Step 1The audience': 'Step 1<br>กลุ่มคนดู',
  'Who buys the ticket': 'ใครคือคนซื้อบัตร',
  'Core High-income working adults who grew up with 80s–90s rock and metal': '<b>Core</b> วัยทำงานรายได้สูง ที่โตมากับร็อกและเมทัลยุค 80–90',
  'Niche Engineers, IT and software people, musicians and audio engineers, drawn to complexity and technical detail': '<b>Niche</b> วิศวกร คนสาย IT และซอฟต์แวร์ นักดนตรีและ audio engineer ที่ชอบความซับซ้อนและรายละเอียดเชิงเทคนิค',
  "Secondary Bangkok's expat community, with budget for VIP and premium tickets": '<b>Secondary</b> ชาวต่างชาติในกรุงเทพฯ ที่มีงบสำหรับบัตร VIP และพรีเมียม',
  'What they value': 'สิ่งที่เขาให้คุณค่า',
  'Technical mastery': 'ฝีมือเชิงเทคนิค',
  'They come for the craft: virtuoso playing and crystal-clear sound, not just a night out.': 'เขามาเพื่อดูฝีมือ: การเล่นระดับ virtuoso และเสียงที่คมชัด ไม่ใช่แค่มาเที่ยว',
  'Lore & collectibles': 'ตำนาน และของสะสมวง',
  'A very loyal crowd that collects niche items: vinyl, box sets, graphic novels, band-specific gear.': 'แฟนตัวยงชอบติดตามตำนาน และของสะสมต่างๆ: แผ่นเสียง box set กราฟิกโนเวล และของเฉพาะของวง',
  'Many generations Fans from the early days, plus young musicians who study progressive rock.': '<b>หลายเจเนอเรชัน</b> มีทั้งแฟนตั้งแต่ยุคแรก และนักดนตรีรุ่นใหม่ที่เรียน progressive rock',
  'How they buy': 'เขาตัดสินใจซื้อยังไง',
  'Front-zone and VIP tickets sell easily when the message leads with sound quality and an exclusive experience.': 'บัตรโซนหน้าและ VIP ขายง่าย ถ้าข้อความนำด้วย<mark>คุณภาพเสียง</mark>และ<mark>ประสบการณ์ที่ exclusive</mark>',
  'The decision rests on the setlist, the musicianship and the return of classic-era drummer Mike Portnoy.': 'การตัดสินใจขึ้นอยู่กับ setlist ฝีมือของวง และ<mark>การกลับมาของ Mike Portnoy มือกลองยุคคลาสสิก</mark>',
  'Step 2The strategy': 'Step 2<br>กลยุทธ์',
  'Niche music communities instead of mass channels: progressive rock groups, musician and instrument forums, and audiophile communities.': 'คอมมูนิตี้ดนตรีเฉพาะกลุ่มแทนช่องทาง mass: กลุ่ม progressive rock ฟอรัมนักดนตรีและเครื่องดนตรี และคอมมูนิตี้ audiophile',
  'What we said': 'เราสื่อสารอะไร',
  'Craft over hype: rehearsal behind-the-scenes and gear & rig breakdowns of what the band plays on stage.': 'เน้นฝีมือมากกว่ากระแส: เบื้องหลังการซ้อม และ<mark>เจาะลึก gear &amp; rig</mark> ที่วงใช้บนเวที',
  'InsightFans buy for the craft': '<span class="label">Insight</span>แฟนซื้อบัตรเพราะฝีมือ',
  'AngleCraft-first content in niche communities': '<span class="label">Angle</span>คอนเทนต์สายฝีมือ ในคอมมูนิตี้เฉพาะกลุ่ม',
  'Result~130K views on the top post with no paid spend': '<span class="label">ผลลัพธ์</span>~130K วิวในโพสต์ท็อป ไม่ใช้งบโฆษณา',
  'Step 3The content': 'Step 3<br>คอนเทนต์',
  'Posts6': '<span class="label">โพสต์</span>6',
  'PlatformFacebook': '<span class="label">แพลตฟอร์ม</span>Facebook',
  'SpendOrganic only': '<span class="label">งบ</span>ออร์แกนิกล้วน',
  'My partTopic research, artwork (Canva), captions': '<span class="label">ส่วนที่ผมทำ</span>รีเสิร์ชหัวข้อ, อาร์ตเวิร์ก (Canva), แคปชั่น',
  'Top post': 'โพสต์ท็อป',
  'Craft · Practice': 'ฝีมือ · การซ้อม',
  "John Myung's 6-hour practice routine": 'การซ้อม 6 ชั่วโมงของ John Myung',
  "A look inside the bassist's 6-hour practice routine, made for musicians who study the craft.": 'เจาะการซ้อม 6 ชั่วโมงของมือเบส ทำมาเพื่อนักดนตรีที่ชอบศึกษาเรื่องฝีมือ',
  'Read the caption ↗': 'อ่านแคปชั่น <span aria-hidden="true">↗</span>',
  'views, no paid spend': 'วิว ไม่ใช้งบโฆษณา',
  'interactions': 'การมีส่วนร่วม',
  'shares': 'แชร์',
  'link clicks': 'คลิกลิงก์',
  'Speaks to Technical mastery': '<span class="label">ตอบโจทย์</span> ฝีมือเชิงเทคนิค',
  'Facebook views by post · organic': 'ยอดวิว Facebook แต่ละโพสต์ · ออร์แกนิก',
  'The three craft posts took the top three spots.': 'โพสต์สายฝีมือ 3 โพสต์ ยึดอันดับ 1–3',
  'Craft & technique': '<i class="views__key views__key--craft"></i>ฝีมือและเทคนิค',
  'Other angles': '<i class="views__key"></i>มุมอื่นๆ',
  'John Myung · 6-hour practice': 'John Myung · ซ้อม 6 ชั่วโมง',
  'John Petrucci · metronome': 'John Petrucci · เมโทรนอม',
  'How many fingers? · bass': 'กี่นิ้วถึงพอ? · เบส',
  'The whole band · after death': 'ทั้งวง · ตายแล้วไปไหน',
  'Mike Portnoy · the return': 'Mike Portnoy · การกลับมา',
  'The rest of the series': 'โพสต์อื่นในซีรีส์',
  'Practice · Gear': 'การซ้อม · Gear',
  "A playful hook on the metronome: use it till it sticks and you'll play like a pro.": 'มุกเล่นๆ เรื่องเมโทรนอม: ใช้จนติด แล้วจะเล่นได้แบบโปร',
  '~120K views · 194 shares': '<b>~120K</b> วิว · <b>194</b> แชร์',
  'Craft · Technique': 'ฝีมือ · เทคนิค',
  'How many fingers?': 'กี่นิ้วถึงพอ?',
  'How many fingers do you really need to play bass? A technique question for players.': 'เล่นเบสต้องใช้กี่นิ้วกันแน่? คำถามเชิงเทคนิคสำหรับคนเล่นดนตรี',
  '32.6K views · 57 shares': '<b>32.6K</b> วิว · <b>57</b> แชร์',
  'Lore · Philosophy': 'ตำนาน · ปรัชญา',
  'The whole band': 'ทั้งวง',
  '"Where do you go after death?" Religion, philosophy and Dream Theater, set in a Thai temple scene.': '"ตายแล้วไปไหน?" ศาสนา ปรัชญา กับ Dream Theater ในฉากวัดไทย',
  '~16K views · 44 shares': '<b>~16K</b> วิว · <b>44</b> แชร์',
  'Speaks to Lore & collectibles': '<span class="label">ตอบโจทย์</span> ตำนาน และของสะสมวง',
  'The return': 'การกลับมา',
  '"13 years of waiting." Portnoy\'s return, one of the main reasons fans buy a ticket.': '"13 ปีแห่งการรอคอย" การกลับมาของ Portnoy หนึ่งในเหตุผลหลักที่แฟนๆ ซื้อบัตร',
  '15.8K views · 20 shares': '<b>15.8K</b> วิว · <b>20</b> แชร์',
  'Speaks to Buying decision': '<span class="label">ตอบโจทย์</span> การตัดสินใจซื้อ',
  'Tech · AI': 'เทค · AI',
  'Jordan clones himself with AI, so fans can jam with him. Built for the engineer and IT crowd.': 'Jordan โคลนตัวเองด้วย AI ให้แฟนๆ แจมด้วยได้ ทำมาเพื่อกลุ่มวิศวกรและสาย IT',
  '~10K views · 10 shares': '<b>~10K</b> วิว · <b>10</b> แชร์',
  'Speaks to Niche: tech people': '<span class="label">ตอบโจทย์</span> Niche: สายเทค',
  '~87% of engagement came from the intended 25–54 age bracket': '<strong>~87%</strong> ของ engagement มาจากกลุ่มอายุ 25–54 ตามเป้า',
  'views on the top post, with no paid spend': 'วิวในโพสต์ท็อป โดยไม่ใช้งบโฆษณา',
  'interactions on that post': 'การมีส่วนร่วมในโพสต์นั้น',
  "What the audience actually engaged with wasn't always what I first assumed. So I let the data lead: each new post was adjusted based on how the last one performed.": 'สิ่งที่คนดูสนใจจริงๆ ไม่ได้เป็นอย่างที่ผมคิดไว้ตอนแรกเสมอไป ผมเลยให้ data เป็นตัวนำ: ทุกโพสต์ใหม่ปรับจากผลของโพสต์ก่อนหน้า',
  'Listening to fans · Going bilingual': 'ฟังเสียงแฟนๆ · ทำคอนเทนต์สองภาษา',
  'Feedback': 'ฟีดแบ็ก',
  'A fan commented on Facebook that if the promotion was only in Thai, they would keep their money.': 'มีแฟนคอมเมนต์ใน Facebook ว่า ถ้าโปรโมทแค่ภาษาไทย เขาจะเก็บเงินไว้ไม่ซื้อบัตร',
  'I started translating each post into English and adding it in the comments, so international fans could keep up with what we were saying.': 'ผมเริ่มแปลคอนเทนต์เป็นภาษาอังกฤษ แล้วโพสต์ไว้ในคอมเมนต์ ให้แฟนต่างชาติตามทันว่าเรากำลังเล่าเรื่องอะไร',
  'From then on': 'หลังจากนั้น',
  'Every new post went out in both Thai and English.': 'ทุกโพสต์ใหม่ทำทั้ง<mark>ภาษาไทยและภาษาอังกฤษ</mark>',
  'Show dayOn the ground': 'วันโชว์<br>หน้างาน',
  'On show day I worked alongside the project manager, fixing problems as they came up.': 'วันโชว์ผมทำงานคู่กับ project manager คอยแก้ปัญหาที่เกิดขึ้นหน้างาน',
  'Problem solving · The beer line': 'แก้ปัญหา · คิวเบียร์',
  'Problem': 'ปัญหา',
  'At the break, everyone queued at once for beer tickets, the tickets fans swap for a beer at the bar. There was only one line, and it jammed.': 'ช่วงพักโชว์ ทุกคนมาต่อคิวซื้อคูปองเบียร์พร้อมกัน (คูปองเอาไปแลกเบียร์ที่บาร์) แต่มีแค่แถวเดียว คิวเลยติดยาว',
  'The ask': 'โจทย์จากพี่',
  'My senior asked me to join the front-of-house ticket desk, which was short on staff.': 'พี่ให้ผมไปช่วยที่โต๊ะขายคูปองหน้างาน เพราะคนไม่พอ',
  "More people at one desk wouldn't fix a single line, so I suggested something else. A friend and I took tickets into the middle of the line and ran a second, mobile ticket point there.": 'เพิ่มคนที่โต๊ะเดียวก็แก้คิวที่มีแถวเดียวไม่ได้ ผมเลยเสนออีกวิธี ผมกับเพื่อนเอาคูปองเดินเข้าไปกลางแถว แล้วเปิด<mark>จุดขายคูปองเคลื่อนที่อีกจุด</mark>ตรงนั้นเลย',
  'Two points instead of one. The long line cleared and fans spent much less time waiting.': 'จากจุดเดียวเป็นสองจุด คิวยาวหายไป และคนดู<mark>รอคิวน้อยลงเยอะ</mark>',
  '18 Feb 2026 · From an empty hall to a full house': '18 ก.พ. 2569 · จากฮอลล์ว่างๆ สู่คนเต็มฮอลล์',
  '12:38 · The hall before doors': '12:38 · ฮอลล์ก่อนเปิดประตู',
  '12:43 · Laser check': '12:43 · เช็กเลเซอร์',
  '16:49 · Front desk, queue building': '16:49 · หน้างาน คิวเริ่มยาว',
  '20:38 · Showtime': '20:38 · โชว์เริ่ม',
  "Thailand's national guitar-playing contest, first held in 2000. The 14th edition had Junior and Open categories, a semi-final on 18 Jan and the final on 31 Jan 2026 at Parc Paragon, Siam Paragon.": 'งานประกวดการเล่นกีตาร์แห่งประเทศไทย จัดครั้งแรกปี 2543 ครั้งที่ 14 มีรุ่น Junior และ Open รอบรองชนะเลิศ 18 ม.ค. และรอบชิงชนะเลิศ 31 ม.ค. 2569 ที่ Parc Paragon สยามพารากอน',
  'On-ground coordination': 'ประสานงานหน้างาน',
  'From auditionto final': 'จากรอบออดิชัน<br>ถึงรอบชิง',
  'I worked to a direct brief from the project manager: tracking the timeline and handling whatever the day needed.': 'ผมทำงานตามบรีฟจาก project manager โดยตรง: คุมไทม์ไลน์ และจัดการทุกอย่างที่หน้างานต้องการ',
  '14 Jan 2026 · Audition round': '14 ม.ค. 2569 · รอบออดิชัน',
  'Stage check': 'เช็กเวที',
  'Walk-through with the team': 'เดินดูพื้นที่กับทีม',
  'Measuring the floor plan': 'วัดผังพื้นที่',
  'Lighting test': 'เทสไฟ',
  '31 Jan 2026 · The final, Parc Paragon': '31 ม.ค. 2569 · รอบชิง, Parc Paragon',
  'Backstage tent': 'เต็นท์หลังเวที',
  'On stage at the final': 'บนเวทีรอบชิง',
  'Hands-on experience running a contest on the ground, from the audition round to final night.': 'ได้ประสบการณ์ทำงานหน้างานในงานประกวดจริงๆ ตั้งแต่รอบออดิชันจนถึงคืนรอบชิง',
  'All on-ground photos by Chanon Boonsak': 'รูปหน้างานทั้งหมดถ่ายโดย ชนน บุญศักดิ์',
  'Top post · Caption': 'โพสต์ท็อป · แคปชั่น',
  'ไทย (original)': 'ไทย (ต้นฉบับ)',

  // ---- magazound ----
  'Magazound — Chanon Boonsak': 'Magazound — ชนน บุญศักดิ์',
  'University project · Fashion × music': 'โปรเจกต์มหาลัย · แฟชั่น × ดนตรี',
  '8 Mar 2024, 15:00–20:00': '8 มี.ค. 2567, 15:00–20:00',
  'Silpakorn University, Wang Tha Phra': 'ม.ศิลปากร วังท่าพระ',
  'Course': 'วิชา',
  'attendees, free entry': 'คนเข้างาน เข้าฟรี',
  'people on the team': 'คนในทีม',
  'financial sponsors': 'สปอนเซอร์ที่ให้เงินสนับสนุน',
  'media partners': 'media partner',
  'Magazound was the final project for our Sponsorship Management course: an 11-person team had to plan, fund and run a real event. My classmates voted me Project Manager, and I co-led the project with a co-PM.': 'Magazound เป็นโปรเจกต์ของวิชา Sponsorship Management ทีม 11 คนต้องวางแผน หาทุน และจัดงานจริง เพื่อนๆ โหวตให้ผมเป็น Project Manager และผมคุมโปรเจกต์ร่วมกับ co-PM อีกคน',
  'We built a free fashion × music festival around one line: "Take it slow, don\'t go fast (fashion) and (music)."': 'เราจัดเทศกาลแฟชั่น × ดนตรีแบบเข้าฟรี ภายใต้คอนเซปต์: <mark>"Take it slow, don\'t go fast (fashion) and (music)."</mark>',
  'The day': 'ในวันงาน',
  'Talk': 'ทอล์ก',
  'A guest speaker on the cost of fast fashion.': 'วิทยากรมาพูดเรื่องผลกระทบของ fast fashion',
  'Runway': 'รันเวย์',
  'Upcycled fashion show': 'แฟชั่นโชว์ชุด upcycle',
  'Students modelled outfits made entirely from used fabric.': 'นักศึกษาเดินแบบด้วยชุดที่ทำจากผ้าใช้แล้วทั้งหมด',
  'Sunset': 'ช่วงพระอาทิตย์ตก',
  'Live music': 'ดนตรีสด',
  'TU Folksong, then Tofu, Playing Saliva and Rungaroon.': 'TU Folksong ต่อด้วย Tofu, Playing Saliva และ Rungaroon',
  'All day': 'ตลอดงาน',
  'Food, drinks & art': 'อาหาร เครื่องดื่ม และงานศิลปะ',
  'Booths from an open call.': 'บูธจากการเปิดรับสมัคร',
  'Split the 11-person team into 7 departments on day one and gave each one its tasks': 'แบ่งทีม 11 คนเป็น <mark>7 ฝ่าย</mark>ตั้งแต่วันแรก และแจกงานให้แต่ละฝ่าย',
  "Planned the work schedule and meetings, then, with my co-PM, tracked every department's progress for 65 days, up to show day": 'วางตารางงานและการประชุม แล้ว<mark>ติดตามความคืบหน้าทุกฝ่าย</mark>ร่วมกับ co-PM ตลอด 65 วัน จนถึงวันงาน',
  'Kept spending in line with the budget, together with my co-PM': 'คุมการใช้เงิน<mark>ให้อยู่ในงบ</mark> ร่วมกับ co-PM',
  'Helped build the 30-post PR plan across Facebook, Instagram and TikTok, as a team': 'ช่วยทีมทำ<mark>แผน PR 30 โพสต์</mark> บน Facebook, Instagram และ TikTok',
  'Liaised with artists and sponsors and made the final calls': 'ประสานงานกับ<mark>ศิลปินและสปอนเซอร์</mark> และเป็นคนตัดสินใจขั้นสุดท้าย',
  'Made part of the artwork, and ran the post-event review with my co-PM to find what to fix next time': 'ทำ<mark>อาร์ตเวิร์ก</mark>บางส่วน และ<mark>สรุปงานหลังจบอีเวนต์</mark>กับ co-PM เพื่อหาจุดที่ต้องปรับครั้งหน้า',
  'The plan · Gantt chart, 3 Jan – 9 Mar 2024': 'แผนงาน · Gantt chart, 3 ม.ค. – 9 มี.ค. 2567',
  '65 days from kick-off to show day, 8 workstreams on one timeline.': '65 วันจาก kick-off ถึงวันงาน 8 ฝ่ายบนไทม์ไลน์เดียว',
  'attendees at a free event': 'คนเข้างาน (เข้าฟรี)',
  'financial sponsors, plus media partners Fungjai, Spacebar Vibe, Mehey and Fuzz Bros': 'สปอนเซอร์ที่ให้เงินสนับสนุน และ media partner: Fungjai, Spacebar Vibe, Mehey และ Fuzz Bros',
  'No loss': 'ไม่ขาดทุน',
  'the project closed without a loss, and the post-event survey came back positive': 'ปิดโปรเจกต์โดยไม่ขาดทุน และผลแบบสำรวจหลังงานออกมาดี',
  'Magazound taught me to work with more responsibility: as Project Manager, the whole project was mine to answer for, not just my own part.': 'งานนี้เป็นประสบการณ์ที่ทำให้ผมได้เรียนรู้การทำงานที่ต้องมีความรับผิดชอบมากขึ้น ในฐานะ Project Manager ทั้งโปรเจกต์คือสิ่งที่ผมต้องรับผิดชอบ ไม่ใช่แค่ส่วนของตัวเอง',
  'On the day': 'บรรยากาศวันงาน',
  'The crowd after dark': 'คนดูช่วงค่ำ',
  'Booths': 'บูธ',
  'Art & vintage booths': 'บูธศิลปะและวินเทจ',
  'On the runway': 'บนรันเวย์',
  'The entrance': 'ทางเข้างาน',
  'The team': 'ทีมงาน',

  // ---- b35 ----
  'B35 at Wonderfruit — Chanon Boonsak': 'B35 ที่ Wonderfruit — ชนน บุญศักดิ์',
  'Band assistant & photographer · Wonderfruit': 'ผู้ช่วยวงและช่างภาพ · Wonderfruit',
  "Thai instruments × jazz, shot on my father's film camera.": 'เครื่องดนตรีไทย × แจ๊ส ถ่ายด้วยกล้องฟิล์มของพ่อ',
  'Listen on Spotify ↗': 'ฟังบน Spotify ↗',
  'Wonderfruit, Chonburi': 'Wonderfruit, ชลบุรี',
  'Dec 2024 & Dec 2025': 'ธ.ค. 2567 และ ธ.ค. 2568',
  'Camera': 'กล้อง',
  'The band': 'วง B35',
  "B35 (Borom35) blends traditional Thai instruments with jazz. It's a new taste, and it gets me every time I watch them live.": '<a class="inline-link" href="https://www.instagram.com/borom35.th/" target="_blank" rel="noopener">B35 (Borom35)</a> ผสม<mark>เครื่องดนตรีไทยเข้ากับแจ๊ส</mark> เป็นรสชาติใหม่ และทุกครั้งที่ได้ดูเขาเล่นสด ผมก็ยังทึ่งทุกครั้ง',
  'Like pairing gaeng tai pla with wine.': 'เหมือนกินแกงไตปลาคู่กับไวน์',
  "They invited me to Wonderfruit two years running, in 2024 and 2025, as their photographer and all-round assistant. I'm going with them again in 2026.": 'วงชวนผมไป Wonderfruit สองปีติด ปี 2567 และ 2568 ในฐานะช่างภาพและผู้ช่วยทุกอย่าง และปี 2569 นี้ผมก็จะไปกับเขาอีก',
  'Listen while you scroll': 'ฟังไปด้วยระหว่างเลื่อนดู',
  "Moved the band's instruments and members around the festival site": 'เคลื่อนย้าย<mark>เครื่องดนตรีและสมาชิกวง</mark>ภายในพื้นที่เฟสติวัล',
  'Helped the gig run smoothly, from arrival to the evening set': 'ช่วยให้งาน<mark>ราบรื่น</mark> ตั้งแต่มาถึงจนถึงโชว์ช่วงเย็น',
  "Shot the band on film, with my father's Yashica FX-3 Super 2000": 'ถ่ายรูปวง<mark>ด้วยฟิล์ม</mark> กับกล้อง Yashica FX-3 Super 2000 ของพ่อ',
  'Roll 1 · Daylight': 'ม้วนที่ 1 · กลางวัน',
  'Swipe the strip · tap to zoom': 'ปัดฟิล์มดู · แตะเพื่อซูม',
  'Swipe →': 'ปัด <i>→</i>',
  'B35 played as the sun went down': 'B35 เล่นตอนพระอาทิตย์กำลังตก',
  'The festival stage · evening set': 'เวทีเฟสติวัล · โชว์ช่วงเย็น',
  'Roll 2 · After dark': 'ม้วนที่ 2 · หลังค่ำ',
  'Wonderfruit at night': 'Wonderfruit ยามค่ำคืน',
  "Other acts on the main stages, after B35's set.": 'ศิลปินอื่นบนเวทีหลัก หลังโชว์ของ B35',
  'All photos shot on film by Chanon Boonsak · Yashica FX-3 Super 2000': 'รูปทั้งหมดถ่ายด้วยฟิล์มโดย ชนน บุญศักดิ์ · Yashica FX-3 Super 2000',

  // ---- tu folksong ----
  'TU Folksong Club — Chanon Boonsak': 'ชุมนุม TU Folksong — ชนน บุญศักดิ์',
  'University club · Thammasat': 'ชุมนุมมหาลัย · ธรรมศาสตร์',
  '2023 – 2024': '2566 – 2567',
  'Thammasat University, Rangsit': 'ม.ธรรมศาสตร์ รังสิต',
  'The club': 'เกี่ยวกับชุมนุม',
  'TU Folksong goes back to the 1980s. Since 2004, members join by audition and are placed in "houses" named after musical symbols. The club\'s stage is Larn Folk, a concert series run entirely by its members.': 'TU Folksong มีประวัติย้อนไปถึงช่วงปี 2520 ตั้งแต่ปี 2547 สมาชิกต้องเข้าผ่าน<mark>การออดิชัน</mark> และถูกแบ่งเป็น "บ้าน" ที่ตั้งชื่อตามสัญลักษณ์ทางดนตรี เวทีของชุมนุมคือ ลานโฟล์ค คอนเสิร์ตที่สมาชิกจัดเองทั้งหมด',
  'The audition is open to students from any university. I auditioned in my second year, got in on bass, and later joined the PR team.': 'ออดิชันเปิดให้นักศึกษาจาก<mark>ทุกมหาวิทยาลัย</mark> ผมไปออดิชันตอนปี 2 และได้เข้ามาเป็น<mark>พาร์ทเบส</mark> และ<mark>ทีมประชาสัมพันธ์</mark>ในเวลาต่อมา',
  'Part 1 · PR team': 'พาร์ท 1 · ทีม PR',
  'Larn Folk 2: The Atlantis': 'ลานโฟล์ค 2: The Atlantis',
  '23 Nov 2023, 17:00 · SCI, Thammasat University, Rangsit': '23 พ.ย. 2566, 17:00 · SCI ม.ธรรมศาสตร์ รังสิต',
  'Theme pitch': 'เสนอธีม',
  'Promotion plan': 'แผนโปรโมท',
  'Captions': 'แคปชั่น',
  'Artwork': 'อาร์ตเวิร์ก',
  "The club's PR team plans the posts, comes up with the ideas, designs every poster and runs its social media.": 'ทีม PR ของชุมนุมวางแผนโพสต์ คิดไอเดีย ออกแบบโปสเตอร์ทุกชิ้น และดูแลโซเชียลมีเดีย',
  'Pitched "The Atlantis" in the planning meeting. It was voted #1 by the members and became the theme of Larn Folk 2': 'เสนอธีม <mark>"The Atlantis"</mark> ในที่ประชุม ได้<mark>โหวตเป็นอันดับ 1</mark> จากคนในรุ่น และถูกเลือกเป็นธีมของลานโฟล์ค 2',
  'Planned the promotion schedule and wrote the captions': 'วาง<mark>แผนการโปรโมท</mark>และเขียน<mark>แคปชั่น</mark>',
  'Made part of the artwork': 'ทำ<mark>อาร์ตเวิร์ก</mark>บางส่วน',
  'Worked with a team from different universities, faculties and years': 'ทำงานกับทีมจาก<mark>ต่างมหาวิทยาลัย ต่างคณะ ต่างรุ่น</mark>',
  'The campaign& the show': 'แคมเปญ<br>และโชว์',
  'Captions I wrote': 'แคปชั่นที่ผมเขียน',
  'Larn Folk 2 · 23 Nov 2023': 'ลานโฟล์ค 2 · 23 พ.ย. 2566',
  'Folk Camp 2024': 'Folk Camp 2567',
  "One of the club's yearly events, organised by its members.": 'หนึ่งในอีเวนต์ประจำปีของชุมนุม จัดโดยสมาชิก',
  'Welfare team': 'ฝ่ายสวัสดิการ',
  'Organisingthe camp': 'จัด<br>แคมป์',
  'Folk Camp gave me my first experience of organising a camp. I was on the welfare team, looking after the people at camp.': 'Folk Camp เป็นครั้งแรกที่ผมได้จัดแคมป์ ผมอยู่<mark>ฝ่ายสวัสดิการ</mark> คอยดูแลคนในแคมป์',
  'Welfare station': 'จุดสวัสดิการ',
  'Drinks for the campers': 'เครื่องดื่มสำหรับคนในแคมป์',
  'Camp staff': 'สตาฟแคมป์',
  'Late night at camp': 'ดึกๆ ที่แคมป์',
  'Staff on duty': 'สตาฟประจำการ',
  'The club is open to every university by audition. It taught me to work with people from different universities, majors and backgrounds.': 'ชุมนุมนี้เปิดให้ทุกมหาวิทยาลัยมาออดิชัน ทำให้ผมได้เรียนรู้การทำงานกับคนจากต่างมหาวิทยาลัย ต่างสาขา และต่างพื้นหลัง',
};

(function () {
  const root = document.documentElement;
  const FADE_MS = 250;

  function getSaved() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode: just don't remember */ }
  }

  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  // elements whose own text (not just their children's) we can match
  const SKIP = '[data-i18n], [data-i18n] *, body [lang="th"], body [lang="th"] *, .reader__text, .reader__text *, .name-swap, .name-swap *, script, style';
  function ownText(el) {
    for (const n of el.childNodes) if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    return false;
  }

  function apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const th = TH[el.dataset.i18n];
      el.innerHTML = lang === 'th' && th !== undefined ? th : el.dataset.en;
    });
    if (lang === 'th') {
      document.querySelectorAll('title, body *').forEach((el) => {
        if (!el.isConnected || el.matches(SKIP) || !ownText(el)) return;
        const th = TEXT[norm(el.textContent)];
        if (th === undefined) return;
        el.dataset.enText = el.innerHTML;
        el.innerHTML = th;
      });
    } else {
      document.querySelectorAll('[data-en-text]').forEach((el) => {
        el.innerHTML = el.dataset.enText;
        delete el.dataset.enText;
      });
    }
    root.lang = lang;
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.setAttribute('aria-label', lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
    });
  }

  function switchTo(lang) {
    root.classList.add('is-switching');
    setTimeout(() => {
      apply(lang);
      save(lang);
      root.classList.remove('is-switching');
    }, FADE_MS);
  }

  apply(getSaved() === 'th' ? 'th' : 'en');
  root.classList.remove('i18n-pending');

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => switchTo(root.lang === 'th' ? 'en' : 'th'));
  });
})();
