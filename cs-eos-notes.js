(() => {
  const root = document.getElementById('csEosNotes');
  if (!root) return;

  const syllabus = 'https://www.cambridgeinternational.org/Images/721397-2027-2029-syllabus.pdf';
  const guide = 'https://www.cambridgeinternational.org/Images/721401-2027-2029-pseudocode-guide.pdf';
  const specimen = 'https://www.cambridgeinternational.org/Images/503424-2021-specimen-paper-1-mark-scheme.pdf';
  const link = (url, title) => `<a href="${url}" target="_blank" rel="noreferrer">${title}</a>`;
  const table = (headers, rows) => `<div class="mini-table-wrap"><table><thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const block = (label, title, body) => `<div class="answer-block"><div class="answer-block__title"><span>${label}</span>${title}</div>${body}</div>`;
  const example = (body) => `<div class="exam-note"><strong>Worked example / exam trap:</strong> ${body}</div>`;
  const section = (id, number, title, inside, kicker = '9618 AS · EOS syllabus coverage') => `<section class="section" id="${id}" aria-labelledby="heading-${id}"><div class="section-heading"><div class="section-number">${number}</div><div><span class="section-kicker">${kicker}</span><h2 id="heading-${id}">${title}</h2></div></div>${inside}</section>`;

  // One compact card per learning outcome; the explanatory wording and examples are original.
  const notes = [
    ['1.1', 'Data Representation', 14, [
      ['Binary versus decimal storage units', 'kibi / kilo · mebi / mega · gibi / giga · tebi / tera', [
        'Decimal prefixes use powers of <strong>1000</strong>: kB, MB, GB, TB are 10³, 10⁶, 10⁹, 10¹² bytes.',
        'Binary prefixes use powers of <strong>1024</strong>: KiB, MiB, GiB, TiB are 2¹⁰, 2²⁰, 2³⁰, 2⁴⁰ bytes.',
        '<strong>1 byte = 8 bits</strong>; divide bits by 8 before converting to a byte-based unit. Name the unit actually requested.'
      ], example('3 MiB = 3 × 1,048,576 = <strong>3,145,728 bytes</strong>; 3 MB = <strong>3,000,000 bytes</strong>.')],
      ['Represent and convert integers', 'binary · denary · hexadecimal · BCD · one’s and two’s complement', [
        '<strong>Binary / denary / hex:</strong> add digit × base<sup>position</sup> (rightmost position 0) to convert to denary. From denary, repeatedly divide by the destination base and read remainders backwards.',
        '<strong>Binary ↔ hex:</strong> group bits in fours from the right (pad on the left if needed); each group is one hex digit, with A–F representing 10–15.',
        '<strong>BCD:</strong> encode each denary digit separately in four bits, from 0000 to 1001. The groups 1010–1111 are invalid for an individual BCD digit.',
        '<strong>One’s complement:</strong> choose the width; represent +x normally and flip every bit for −x. For n bits, range −(2<sup>n−1</sup>−1) to +(2<sup>n−1</sup>−1), with two representations of zero.',
        '<strong>Two’s complement:</strong> for −x, flip the fixed-width +x bits and add 1. To decode, assign the most significant bit weight −2<sup>n−1</sup> and all others positive weights. Range: −2<sup>n−1</sup> to 2<sup>n−1</sup>−1.'
      ], example('173₁₀ = <strong>10101101₂ = AD₁₆</strong>; BCD is <strong>0001 0111 0011</strong>. For −45 in 8 bits, +45 = 00101101, one’s complement = 11010010, two’s complement = <strong>11010011</strong>. At wider signed bit lengths, copy the sign bit on the left.')],
      ['Add and subtract binary numbers; detect overflow', 'fixed width · positive and negative operands', [
        '<strong>Addition:</strong> align bits and propagate carries from the right. 1 + 1 gives result bit 0 and carry 1; 1 + 1 + 1 gives result bit 1 and carry 1.',
        '<strong>Subtraction:</strong> for unsigned values use borrowing if requested. For fixed-width two’s complement, compute A − B as A + (−B) modulo 2<sup>n</sup>; discard any carry past the left edge.',
        '<strong>Unsigned overflow:</strong> a sum needs more bits than are available. <strong>Signed overflow:</strong> the true result lies outside the signed range; adding two same-sign values and getting the opposite sign is a warning. In subtraction, opposite-sign operands can overflow when result sign differs from A. The carry-out alone is not the signed-overflow test.'
      ], example('6-bit two’s complement: 13 − 19 = 001101 + 101101 = <strong>111010</strong> (−6). In 8 bits, 70 + 65 gives 10000111, but signed 135 is out of range: <strong>overflow</strong>.')],
      ['Select a practical use for BCD or hexadecimal', 'decimal digits versus compact binary notation', [
        '<strong>BCD:</strong> suits decimal digit displays, e.g. clocks or meters; each digit can be extracted and displayed directly. A decimal fraction can be stored as exact decimal digits with its scale known.',
        '<strong>Hex:</strong> represents long bit patterns compactly; one hex digit maps directly to four bits. Examples: memory addresses, debugging dumps, RGB colour values and MAC addresses.',
        'BCD does not make binary storage more compact; hex is a human-readable notation, not a different physical storage medium.'
      ]],
      ['Encode characters with a character set', 'ASCII · extended ASCII · Unicode', [
        'A <strong>character set</strong> allocates numeric codes to characters; a character encoding represents those values as bits. Use the supplied mapping in exam questions.',
        'Standard <strong>ASCII</strong> uses 7 bits for 128 possible codes, including printable and control characters. Extended ASCII commonly uses 8 bits, up to 256 codes, and the upper half differs by code page.',
        '<strong>Unicode</strong> supplies code points for far more characters, including many scripts; UTF‑8 is one encoding of those code points. Unicode is not a fixed “16 bits per character” encoding.'
      ], example('If a table gives A = 65₁₀, its 7-bit ASCII representation is <strong>1000001</strong>; stored in an 8-bit byte it can appear as 01000001. No particular character codes need to be memorised for the syllabus.')]
    ]],
    ['1.2', 'Multimedia — Graphics and Sound', 15, [
      ['Explain how a bitmap is encoded', 'pixel · header · image and screen resolution · colour depth', [
        'A bitmap is a <strong>grid of pixels</strong>. Pixel values encode the colour directly or index a palette, depending on the format.',
        'The <strong>file header</strong> stores metadata needed to interpret the image, e.g. dimensions, colour depth or compression format.',
        '<strong>Image resolution</strong> is the image’s pixel dimensions (e.g. 800 × 600); <strong>screen resolution</strong> is the display’s pixel dimensions. Neither is the number of colours.',
        '<strong>Colour depth</strong> is bits per pixel; with n bits there are at most <strong>2<sup>n</sup></strong> representable pixel values.'
      ]],
      ['Estimate bitmap file size', 'show the formula, working and units', [
        '<strong>Pixel data size (bits) = width × height × bits per pixel</strong>. Divide by 8 for bytes, then convert to the requested unit.',
        'The formula estimates <strong>uncompressed pixel data</strong>. Include a header, palette or padding only if the question provides what to add; compression changes the actual stored size.'
      ], example('800 × 600 at 24 bits/pixel = 11,520,000 bits = <strong>1,440,000 bytes = 1.44 MB</strong>, ignoring overhead.')],
      ['Predict effects of changing bitmap settings', 'spatial detail and available colours are different', [
        'At the same displayed size, greater <strong>image resolution</strong> gives more spatial detail if the source contains it, but stores more pixels.',
        'Greater <strong>colour depth</strong> gives more possible colours and finer gradations, reducing banding, but uses more bits per pixel.',
        'Doubling both pixel dimensions <strong>quadruples</strong> the pixel count. Doubling bit depth doubles the pixel payload, but it does not merely double the possible colour values.',
        'Enlarging an existing low-resolution bitmap cannot recreate missing detail; changing screen resolution alone does not change the saved image file.'
      ]],
      ['Explain how a vector graphic is encoded', 'drawing object · property · drawing list', [
        'A vector graphic stores a <strong>drawing list</strong> of objects such as lines, circles, polygons or curves.',
        'Each object has <strong>properties</strong> such as coordinates, dimensions, stroke and fill. The renderer draws the objects, usually in an order that controls overlap.',
        'The file describes objects, not a full grid of pixels; object count and complexity affect file size.'
      ]],
      ['Justify bitmap versus vector for the task', 'state the feature and its consequence', [
        '<strong>Bitmap:</strong> suits photographs because pixel values can represent subtle, irregular changes of colour and detail; enlarging may reveal pixelation.',
        '<strong>Vector:</strong> suits logos, icons or diagrams: shapes are individually editable and can be redrawn at different sizes without bitmap-style pixelation.',
        'Simple shape-based graphics often take less storage as vectors; complex drawings or embedded images can reverse this, so do not claim vector is always smaller.'
      ]],
      ['Describe the digital encoding of sound', 'analogue signal · sampling rate · sampling resolution', [
        'A microphone converts sound into a varying electrical signal. An <strong>ADC</strong> samples its amplitude at regular intervals and quantises each sample to a discrete level encoded in binary.',
        '<strong>Sampling rate</strong>, in Hz, is the number of samples taken per second per channel.',
        '<strong>Sampling resolution / bit depth</strong> is the number of bits per sample; n bits allow 2<sup>n</sup> levels. Analogue amplitude is continuous; the stored samples are discrete.'
      ]],
      ['Explain sampling-rate and resolution trade-offs', 'temporal detail · amplitude precision · file size', [
        'A higher <strong>sampling rate</strong> measures amplitude more often and can represent higher audio frequencies, but increases data per second.',
        'A higher <strong>sampling resolution</strong> gives more amplitude levels and less quantisation error, but increases data per sample.',
        'Uncompressed audio payload (bits) = <strong>sample rate × bits per sample × duration × channels</strong>. Include the channel factor (1 mono, 2 stereo) if specified.'
      ], example('44,100 Hz × 16 bits × 10 s × 2 = 14,112,000 bits = <strong>1,764,000 bytes</strong> before overhead.')]
    ]],
    ['1.3', 'Compression', 15, [
      ['Explain why and where data is compressed', 'storage · transmission · concrete use cases', [
        'A smaller file consumes <strong>less storage</strong> and requires <strong>fewer bits to be sent</strong>; at the same transfer rate it usually takes less time to upload or download.',
        'Examples: photos for websites, streamed audio/video for limited bandwidth, and compressed archives to distribute source code.',
        'Compression and decompression use processing time; some short or already-compressed inputs may not shrink.'
      ]],
      ['Differentiate and justify lossless and lossy compression', 'can the original be recovered exactly?', [
        '<strong>Lossless:</strong> decompression recovers the original bit-for-bit. Choose it for source code, text, or data whose exact values matter.',
        '<strong>Lossy:</strong> discards or approximates some information, so the original cannot be recovered exactly. It can achieve greater size reductions at acceptable visual or audio quality.',
        'Choose based on the task: a web photo can tolerate some loss to reduce transfer time; an archive of exact program files cannot.'
      ]],
      ['Apply compression to text, bitmap, vector and sound', 'RLE and when a method is suitable', [
        '<strong>RLE:</strong> encode a run of equal consecutive values as (count, value); decode by repeating each value count times. Declare the pair order and preserve case and spaces.',
        '<strong>Text:</strong> use lossless coding, e.g. code frequent symbols with shorter codes or store repeated strings by reference. RLE helps only where identical characters occur consecutively.',
        '<strong>Bitmap:</strong> RLE can encode runs of consecutive identical pixels in the given scan order. For a photo, lossy compression can discard detail less noticeable to viewers.',
        '<strong>Vector:</strong> general lossless compression can encode repeated object commands, coordinate strings or properties more compactly; another option when acceptable is simplifying complex paths at the cost of precision.',
        '<strong>Sound:</strong> lossless coding preserves samples; a lossy audio codec can remove information that is hard to hear, including masked components. Reducing sample rate or bit depth also saves space but changes the samples.'
      ], example('<code>AAAABBBCCA</code> → <code>(4,A) (3,B) (2,C) (1,A)</code>. Long runs can save space; frequent runs of length 1 can make RLE larger because every run adds count overhead.')]
    ]],
    ['2.1', 'Networks including the Internet', 16, [
      ['Explain why devices are networked', 'sharing · communication · central administration', [
        'A <strong>network</strong> connects devices so they can exchange data and share resources such as printers, files and an internet connection.',
        'Users can collaborate or access shared services from multiple devices. A managed network can centralise accounts, permissions and backups.',
        'Sharing requires administration and protection; loss of a network service can affect multiple users.'
      ]],
      ['Distinguish LAN and WAN', 'area covered · links and ownership', [
        'A <strong>LAN</strong> covers a limited site such as one school; local infrastructure is typically owned or controlled by the organisation.',
        'A <strong>WAN</strong> connects devices or LANs across larger distances; links often use a telecom provider or leased infrastructure. The internet is a global network of networks.',
        'A network can be wired or wireless at either scale. Justify with distance and infrastructure, not merely device count or speed.'
      ]],
      ['Compare client–server and peer-to-peer', 'roles · benefits · drawbacks · choice', [
        '<strong>Client–server:</strong> a client requests a service; a server provides it. Centralised permissions, updates and backups suit a school, but a server costs money and without redundancy can be a single point of failure or bottleneck.',
        '<strong>Peer-to-peer:</strong> participating peers can both request and supply resources directly (e.g. share files without a dedicated file server). It can be inexpensive for a small group, but resources may disappear when peers disconnect and central security and backup are harder.',
        'Distinguish the <strong>service model</strong> from the physical topology. A star LAN, for example, can run either model.'
      ]],
      ['Compare thin and thick clients', 'where processing and storage take place', [
        'A <strong>thin client</strong> relies on a server for much of the application processing or storage; the client handles input and display. Central updates and lower client requirements suit managed terminals, but poor connectivity or server failure disrupts work.',
        'A <strong>thick client</strong> runs much of the application locally and can often work offline. This reduces server or network dependence but needs more powerful endpoints and local maintenance.',
        'A thick client can still use a server for login, syncing or shared files.'
      ]],
      ['Trace packets and justify a network topology', 'bus · star · mesh · hybrid', [
        '<strong>Bus:</strong> frames travel on one shared backbone; all attached stations can receive the signal, and only the destination accepts the addressed frame. Terminators prevent reflections on a classic coax bus. Cheap cabling, but shared traffic and backbone failure affect everyone.',
        '<strong>Star:</strong> sender → central switch → destination port (for a known unicast address). A single link failure isolates one endpoint; switch failure affects the star. Extra cabling and switch cost buy easier management.',
        '<strong>Mesh:</strong> connected nodes can relay traffic over alternative paths. A full mesh links every pair directly; a partial mesh links selected pairs. Redundancy improves resilience but uses more links and routing/management effort.',
        '<strong>Hybrid:</strong> combines topologies; e.g. local stars connected by a backbone. A frame crosses its local switch, the interconnection and the receiving star as needed. It can suit a campus, but design and troubleshooting are more complex.'
      ], example('A classroom where one damaged cable must affect only one PC: choose a <strong>switched star</strong>; each PC has an independent link to the switch.')],
      ['Compare public and private cloud computing', 'remote computing resources · benefits · risks', [
        '<strong>Cloud computing</strong> delivers storage, processing or software over a network, often with capacity that can scale on demand.',
        '<strong>Public cloud:</strong> a provider offers services to multiple customers on shared infrastructure with logical separation; “public” does not mean customer data are public.',
        '<strong>Private cloud:</strong> infrastructure is dedicated to one organisation, on premises or hosted; offers more direct control but can cost more to operate.',
        'Benefits include remote access, scalable capacity and reduced local infrastructure. Drawbacks include connectivity dependence, recurring charges, provider outages, and data-location/privacy or migration concerns.'
      ]],
      ['Select a wired or wireless transmission medium', 'copper · fibre · Wi‑Fi · microwave · satellite', [
        '<strong>Copper:</strong> electrical signals, affordable and easy to terminate for short LAN links; suffers attenuation and possible electromagnetic interference.',
        '<strong>Fibre optic:</strong> light pulses, high bandwidth, long distances and immunity to electrical interference; installation and termination may cost more.',
        '<strong>Radio / Wi‑Fi:</strong> mobile, no end-device cable; walls, distance, interference and shared airtime can reduce throughput. Use appropriate access controls because signals can extend beyond the site.',
        '<strong>Terrestrial microwave:</strong> directional point-to-point radio, normally requires line of sight; useful where trenching cable is impractical, but alignment and weather matter.',
        '<strong>Satellite:</strong> relay for wide or remote coverage; requires suitable reception and can have significant delay, especially via geostationary satellites.',
        'Wired links are often more consistent; wireless is useful for mobility and flexible installation. The answer depends on distance, interference, capacity, latency and cost.'
      ]],
      ['Identify LAN hardware and its role', 'switch · server · NIC / WNIC · WAP · cable · bridge · repeater', [
        '<strong>NIC / WNIC:</strong> hardware interface to a wired/wireless network; handles link transmission and reception and has a MAC address. A <strong>WAP</strong> connects Wi‑Fi clients to the LAN, commonly bridging them onto wired Ethernet.',
        '<strong>Switch:</strong> learns which source MAC addresses appear on ports; forwards known unicast frames towards the appropriate destination port. <strong>Bridge:</strong> connects LAN segments and filters/forwards frames using MAC addresses.',
        '<strong>Repeater:</strong> regenerates and retransmits a signal to extend distance; does not select destinations. <strong>Cables:</strong> provide physical signal paths between wired devices.',
        '<strong>Server:</strong> supplies network services, e.g. file sharing, printing or authentication, to client devices.'
      ]],
      ['Explain what a router does', 'connect networks · destination IP · next hop', [
        'A <strong>router</strong> connects different IP networks. It reads the destination IP address in a packet and consults its routing table to select the outgoing interface or next hop.',
        'A LAN host sends packets for off-subnet destinations to its <strong>default gateway</strong>. Each router forwards towards the destination; it need not know the whole route.',
        'Do not confuse a LAN switch forwarding by <strong>MAC address</strong> with a router forwarding between networks using <strong>IP addresses</strong>.'
      ]],
      ['Explain Ethernet collision detection and recovery', 'shared half-duplex Ethernet · CSMA/CD', [
        'On shared half-duplex Ethernet, multiple stations share a medium. A sender first <strong>listens</strong> for a carrier; if busy it waits, otherwise it can transmit.',
        'Two stations can start nearly simultaneously. A transmitting station monitors the medium; if it detects a <strong>collision</strong>, it sends a jam signal and aborts that frame.',
        'After a <strong>random backoff</strong>, try again after sensing the medium. Backoff reduces repeated collisions; it does not guarantee none ever occur.',
        'Modern switched <strong>full-duplex</strong> links do not use CSMA/CD. Do not apply the classic shared-medium collision process to all Ethernet links or to Wi‑Fi.'
      ]],
      ['Explain bit streaming and bit-rate requirements', 'real-time · on-demand · bandwidth and buffering', [
        'Streaming starts playback while later data are still arriving. A <strong>buffer</strong> stores arriving data temporarily to absorb rate fluctuations.',
        '<strong>Real-time / live:</strong> data are delivered as the event is produced; excessive buffering increases latency. <strong>On-demand:</strong> previously stored content is supplied when requested and can often be paused or sought.',
        'If sustained effective throughput is below the media bit rate, the buffer eventually empties and playback stalls unless the quality/bit rate is reduced; a larger buffer handles short dips, not a sustained deficit.'
      ], example('A 4 Mbit/s stream over a sustained 3 Mbit/s connection has a 1 Mbit/s deficit; even an initially full buffer eventually runs out.')],
      ['Distinguish the internet from the Web', 'infrastructure versus service', [
        'The <strong>internet</strong> is the interconnected network infrastructure using the Internet Protocol suite.',
        'The <strong>WWW</strong> is a service of linked resources accessed through browsers using HTTP/HTTPS. Email and other services may use the internet without being part of the Web.'
      ]],
      ['Describe equipment and links supporting internet access', 'modem · PSTN · dedicated lines · cell phone network', [
        'A <strong>modem</strong> modulates data onto the signal used by an access link and demodulates signals received. A home unit may combine modem, router and access-point functions, but those are distinct roles.',
        '<strong>PSTN:</strong> the public telephone network; classic dial-up modems send data over a telephone call. DSL can use the copper local loop without being dial-up.',
        '<strong>Dedicated line:</strong> a leased connection offering persistent connectivity and often committed capacity; commonly more costly than contended consumer service.',
        '<strong>Cellular network:</strong> a mobile device communicates by radio to a base station; backhaul and the core network carry traffic onward, and handover supports movement between cells.'
      ]],
      ['Explain IP addressing and subnetting', 'IPv4 / IPv6 · assigning addresses · public / private · static / dynamic', [
        'An IP address identifies an interface on an IP network. Packet source/destination addresses support delivery across routed networks. <strong>IPv4</strong>: 32 bits, four decimal octets (e.g. 192.168.1.24). <strong>IPv6</strong>: 128 bits, eight hexadecimal groups (zeros can be compressed according to the notation).',
        '<strong>Subnetting:</strong> a mask/prefix splits network and host portions. For example, /24 fixes the first 24 IPv4 bits: 192.168.1.24 and 192.168.1.50 are in 192.168.1.0/24. Subnets organise addressing, separate broadcast domains when deployed separately, and let routers forward by prefix.',
        'An interface can be configured manually or automatically, e.g. with <strong>DHCP</strong> on a typical IPv4 LAN. A <strong>static</strong> address is intended to stay fixed; a <strong>dynamic</strong> address is leased and may change. Either can be public or private.',
        '<strong>Public</strong> addresses can be routed globally; standard <strong>private IPv4</strong> addresses can be reused on different LANs and are not publicly routed. A gateway commonly uses NAT for outbound IPv4 access.',
        'Private addressing limits direct public routing, not all security risks. Public exposure and reachability also depend on firewall and service configuration; private is not the same as encrypted.'
      ]],
      ['Trace a URL and DNS lookup', 'protocol · hostname · resource path · address resolution', [
        'A <strong>URL</strong> identifies how and where to request a resource. In <code>https://example.org/notes/page.html</code>, <code>https</code> is the scheme, <code>example.org</code> the hostname and <code>/notes/page.html</code> the path.',
        'The resolver looks up the <strong>hostname</strong>, using a cached answer if available or obtaining DNS records through the DNS hierarchy if necessary. A/AAAA records supply IPv4/IPv6 addresses.',
        'The browser connects to the returned address and requests the resource at the path using the scheme. <strong>DNS is not asked to resolve the full URL path</strong> and does not supply the web page itself.'
      ]]
    ]],
    ['3.1', 'Computers and their Components', 17, [
      ['Explain the need for input, output and storage', 'input · output · primary memory · secondary and removable storage', [
        '<strong>Input</strong> supplies data or commands, e.g. touch or sensor readings. <strong>Output</strong> provides results or actions, e.g. display, sound or a motor signal.',
        '<strong>Primary memory</strong> holds instructions and data needed directly by the processor, e.g. RAM for running programs and non-volatile memory for firmware.',
        '<strong>Secondary storage</strong> keeps files and programs long-term, usually with higher capacity but slower access than working RAM. <strong>Removable</strong> storage aids transfer, offline backup or replacement.'
      ]],
      ['Explain the trade-offs of embedded systems', 'dedicated function · constraints · update and repair', [
        'An <strong>embedded system</strong> is a computer integrated into a larger product and programmed for a dedicated function, e.g. a washing machine controller.',
        'Tailoring hardware/software can reduce size, power and cost; dedicated operation can be predictable or meet timing requirements.',
        'It is less flexible than a general-purpose device. Limited resources and integration may make updates, diagnosis and replacement difficult.'
      ]],
      ['Describe how the named hardware devices work', 'learn the physical input → conversion/operation → output', [], table(['Device', 'Principal operations'], [
        ['Laser printer', 'A charged photosensitive drum is selectively discharged by the laser to form an electrostatic image. Toner adheres to the image areas, is transferred to paper and is fused by heated pressure rollers.'],
        ['3D printer', 'A digital model is sliced into layers. For a filament printer, a heated nozzle deposits softened material along each layer’s path; successive layers solidify into the object. Other methods also build layer by layer.'],
        ['Microphone', 'Sound pressure moves a diaphragm. A transducer converts that motion into a varying electrical signal (e.g. coil and magnet induce a voltage). An ADC is needed to obtain digital samples.'],
        ['Speaker', 'A varying current in a voice coil produces a changing force in a magnetic field. The attached cone vibrates and produces sound-pressure waves. Digital samples must be converted to a suitable analogue drive signal.'],
        ['Magnetic hard disk', 'Spinning platters store bits as magnetic patterns. An actuator positions read/write heads over tracks; the head writes by changing magnetisation and reads by detecting magnetic changes.'],
        ['Solid-state flash', 'Cells retain charge without power; stored charge changes the cell’s threshold voltage. Read circuitry senses the state, and programming/erasing changes it. No moving head; fast random access, with limited program/erase endurance.'],
        ['Optical disc reader/writer', 'A laser reflects off the recording layer as the disc spins. The detector senses changes in reflected light, including transitions between pits/lands on pressed discs. On recordable discs a writing laser changes the recording layer (such as dye or phase-change material).'],
        ['Touchscreen', 'Capacitive: a finger changes local capacitance in a sensor grid. Resistive: pressure brings conductive layers together; voltages identify coordinates. The controller reports the touch position.'],
        ['Virtual reality headset', 'Sensors track head movement/orientation; rendering updates the viewpoint and displays separate views for the eyes through lenses to give stereoscopic depth. Low latency helps the image follow motion.']
      ])],
      ['Explain the role of a buffer', 'temporary storage between producers and consumers', [
        'A <strong>buffer</strong> temporarily holds data during transfer between components operating at different or varying rates.',
        'Example: a computer sends print data into a buffer; the printer consumes the data at its slower rate. The computer can continue other work and the printer can consume queued data.',
        'A full buffer may force the producer to wait; an empty one may make the consumer wait. Buffering smooths short mismatches, not a permanent speed difference with finite capacity.'
      ]],
      ['Distinguish RAM and ROM', 'volatility · modification · typical use', [
        '<strong>RAM:</strong> read/write working memory, normally volatile. Holds instructions and data currently in use; contents are lost when power goes off.',
        '<strong>ROM:</strong> non-volatile; ordinary operation reads rather than writes it. Used for boot instructions or firmware, e.g. a microcontroller’s startup code.',
        'Some ROM-family devices can be programmed or updated by special mechanisms; non-volatile does not mean all ROM variants are permanently immutable.'
      ]],
      ['Compare SRAM and DRAM and choose a use', 'cell circuit · refresh · density · cost · speed', [
        '<strong>SRAM:</strong> stores a bit in a bistable circuit; no periodic refresh while powered. Usually faster but larger per cell and more expensive per bit; used for CPU cache.',
        '<strong>DRAM:</strong> stores charge on capacitors; charge leaks so it must be refreshed. High density and lower cost per bit make it suitable for main memory.',
        'Both are <strong>volatile</strong>. Justification should tie speed to cache latency or density/cost to main-memory capacity.'
      ]],
      ['Distinguish PROM, EPROM and EEPROM', 'how each can be programmed or erased', [
        '<strong>PROM:</strong> programmed once after manufacture; cannot normally be erased.',
        '<strong>EPROM:</strong> erased using ultraviolet light, typically the whole chip via a window, and can then be reprogrammed.',
        '<strong>EEPROM:</strong> erased and reprogrammed electrically, often without removal; suitable for settings or firmware that need occasional updates. All three retain data without power.'
      ]],
      ['Compare monitoring and feedback control', 'temperature / pressure / infra-red / sound sensors · actuators', [
        '<strong>Monitoring:</strong> sense, process and display/log readings; may alert a person but does not automatically change the measured process.',
        '<strong>Control:</strong> read a sensor (via ADC if analogue), compare with a set point or rule and send an output to an <strong>actuator</strong> such as a heater, fan, motor or valve.',
        '<strong>Feedback:</strong> take new readings after the action to observe its effect and adjust further. This closes the loop, compensating for disturbances.',
        'Examples of sensor selection: temperature for heating; pressure for a vessel; infra-red for detecting an object passing; sound for detecting a noise level.'
      ], example('Room below target → temperature sensor reading → controller switches heater on → temperature rises → sensor reads again → controller switches heater off at the required limit.')]
    ]],
    ['3.2', 'Logic Gates and Logic Circuits', 18, logicNotes()]
  ];

  function logicNotes() {
    const and = 'M0 0 H26 A20 20 0 0 1 26 40 H0 Z';
    const or = 'M0 0 Q32 0 52 20 Q32 40 0 40 Q14 20 0 0 Z';
    const symbols = [
      ['NOT', 'M0 0 L43 20 L0 40 Z', 'M-18 20 H0 M53 20 H70', '<circle cx="48" cy="20" r="5"/>'],
      ['AND', and, 'M-18 10 H0 M-18 30 H0 M46 20 H70'],
      ['OR', or, 'M-18 10 H5 M-18 30 H5 M52 20 H70'],
      ['NAND', and, 'M-18 10 H0 M-18 30 H0 M56 20 H70', '<circle cx="51" cy="20" r="5"/>'],
      ['NOR', or, 'M-18 10 H5 M-18 30 H5 M62 20 H70', '<circle cx="57" cy="20" r="5"/>'],
      ['XOR / EOR', or, 'M-23 10 H-3 M-23 30 H-3 M52 20 H70 M-9 0 Q5 20 -9 40']
    ];
    const definitions = ['1 when A = 0', '1 only if both inputs are 1', '1 if at least one input is 1', '0 only if both inputs are 1', '1 only if both inputs are 0', '1 only if the inputs differ'];
    const symbolTable = table(['Gate', 'Symbol', 'Output rule'], symbols.map(([name, outline, wires, bubble], i) => [
      `<strong>${name}</strong>`, `<svg viewBox="0 0 110 52" width="110" height="52" role="img" aria-label="${name} gate symbol" style="vertical-align:middle"><g transform="translate(30 6)" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"><path d="${outline}"/><path d="${wires}"/>${bubble || ''}</g></svg>`, definitions[i]
    ]));
    const gates = [0, 1].flatMap(a => [0, 1].map(b => [a, b, a & b, a | b, 1 - (a & b), 1 - (a | b), a ^ b]));
    const signal = (a, b, c) => (a | b) & (1 - c);
    const rows = [0, 1].flatMap(a => [0, 1].flatMap(b => [0, 1].map(c => [a, b, c, a | b, 1 - c, signal(a, b, c)])));
    const circuit = `<svg viewBox="0 0 360 158" width="360" role="img" aria-label="A and B feed an OR gate; C feeds NOT; both outputs feed AND, producing Y" style="display:block;max-width:100%;height:auto;margin:16px auto"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"><path d="M55 23 ${or.replace('M0 0 ', '').replace('Q32 0 52 20 Q32 40 0 40 Q14 20 0 0 Z', 'Q87 23 107 43 Q87 63 55 63 Q69 43 55 23 Z')}"/><path d="M25 33 H60 M25 53 H60 M107 43 H154 V72 H212 M25 118 H55 M55 98 L98 118 L55 138 Z M108 118 H169 V92 H212 M212 62 H238 A20 20 0 0 1 238 102 H212 Z M258 82 H320"/><circle cx="103" cy="118" r="5"/></g><g fill="currentColor" font-size="13" font-family="inherit"><text x="8" y="37">A</text><text x="8" y="57">B</text><text x="8" y="122">C</text><text x="327" y="86">Y</text><text x="118" y="35">P</text><text x="123" y="110">Q</text><text x="63" y="85">OR</text><text x="60" y="153">NOT</text><text x="217" y="120">AND</text></g></svg>`;
    const truth = table(['A', 'B', 'C', 'P = A OR B', 'Q = NOT C', 'Y = P AND Q'], rows);
    return [
      ['Draw and recognise the six logic gate symbols', 'NOT · AND · OR · NAND · NOR · XOR (EOR)', [
        'Use <strong>one input for NOT</strong> and two for the other gates in this AS section. The small circle on the output means inversion.',
        'XOR has an additional curved line on the input side; it is not the same as OR.'
      ], symbolTable],
      ['Define what each gate outputs', 'distinguish inclusive OR and exclusive OR', [
        '<strong>NOT</strong> reverses its input. <strong>AND</strong> requires both inputs to be 1; <strong>OR</strong> requires at least one, including when both are 1.',
        '<strong>NAND</strong> is inverted AND, and <strong>NOR</strong> is inverted OR. <strong>XOR</strong> is 1 for exactly one 1 input (with two inputs).'
      ], example('For A = 1 and B = 1, OR = 1 but XOR = 0.')],
      ['Construct the truth table for each gate', 'systematic rows; no missing or repeated input combinations', [
        'NOT has two rows (0 and 1); two-input gates have four. List inputs in binary count order: 00, 01, 10, 11.'
      ], table(['A', 'NOT A'], [[0, 1], [1, 0]]) + table(['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR'], gates)],
      ['Draw a circuit from a rule, expression or truth table', 'work from intermediate values to the final output', [
        '<strong>From words:</strong> define each input and what 1 means; translate conditions into AND / OR / NOT (use XOR only when exactly one of two may be true).',
        '<strong>From an expression:</strong> work inside brackets first, draw the corresponding gates and label intermediate outputs. Feed these outputs into the final gate.',
        '<strong>From a truth table:</strong> write one AND term for each output-1 row, using a direct variable for a 1 and its NOT for a 0. OR the terms and draw the gates. If more than two inputs are needed, chain two-input gates.'
      ], example('An indicator turns on when button A or button B is pressed (or both) and the inhibit input C is off. Let 1 mean active. Draw P = A OR B, Q = NOT C, then Y = P AND Q.') + circuit],
      ['Produce a truth table from a rule, circuit or expression', 'one row per input combination, one column per useful sub-result', [
        '<strong>From a problem:</strong> assign 0/1 meanings and apply the rule for every row. <strong>From a circuit:</strong> trace gates from inputs to output. <strong>From an expression:</strong> evaluate bracketed terms first.',
        'For n inputs list <strong>2<sup>n</sup> rows</strong>; with three inputs start at 000 and end at 111. Calculate intermediate columns before Y.'
      ], truth],
      ['Write a logic expression from a rule, circuit or truth table', 'define symbols · use brackets · verify output rows', [
        '<strong>From words:</strong> replace descriptive conditions with named Boolean inputs, preserving grouping. <strong>From a circuit:</strong> label each gate’s output and substitute its expression into the next gate.',
        '<strong>From a truth table:</strong> OR the AND terms for the output-1 rows. For the worked circuit, these rows are 010, 100 and 110.',
        'An expression for those rows is <code>(NOT A AND B AND NOT C) OR (A AND NOT B AND NOT C) OR (A AND B AND NOT C)</code>. The shorter equivalent is <code>(A OR B) AND NOT C</code>. Verify against all eight rows; a correct unsimplified expression is useful unless simplification is requested.'
      ]]
    ];
  }

  const card = (number, index, [title, guidance, points, extra = '']) => {
    const id = `cs-eos-${number.replace('.', '-')}-${index + 1}`;
    return `<article class="syllabus-card" id="${id}"><button class="card-toggle" type="button" aria-expanded="false" aria-controls="answer-${id}"><span class="point-id">${number}.${String.fromCharCode(65 + index)}</span><span><span class="syllabus-wording">${title}</span><span class="guidance"><span>${guidance}</span></span></span><span class="expand-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></span></button><div class="answer" id="answer-${id}"><div class="answer__clip"><div class="answer__inner"><div class="answer-label"><span>Exam-ready notes</span><span class="answer-label__note">Use only the points relevant to the question</span></div>${points.length ? `<ul class="mark-points">${points.map(point => `<li data-mark="1">${point}</li>`).join('')}</ul>` : ''}${extra}</div></div></div></article>`;
  };

  const map = section('section-cs-eos', 'EOS', '14 Dec · EOS Revision Map', `
    <p>按校内《2026/27 A1 Computer Science Semester Outline》推定的复习范围：第 1–3 章与第 9–12 章，共 18 个 syllabus 小节。以学校后续考试通知为准；这是校内 EOS，不是 Cambridge 外考卷的完整范围。</p>
    <div class="exam-note"><strong>不要按单元测验范围删减：</strong>12.3 不在 Test 1，3.2 不在 Test 3；校表明确把两项都留到 EOS 考查。第 4–8 章各节排在明年 1 月及之后，不计入此表。</div>
    <p>用左侧菜单打开对应小节。第 1–3 章是这次新增；第 9–12 章保留原笔记，并补明 10.4 编辑操作、11.1 常量和 12.3 白盒测试的易错细节。</p>
    ${table(['校内教学安排', 'Syllabus 小节', '网站核对结果', '复习时要会做什么'], [
      ['17 Aug', '9.1–9.2', '已有', 'Abstraction / decomposition；identifier table；在 structured English、flowchart 和 pseudocode 之间互换，逐步精化与条件逻辑。'],
      ['24–31 Aug', '11.1–11.3', '已有', '变量与常量、I/O 和运算；IF / CASE、三类循环；procedure、function、参数与返回值。'],
      ['7–14 Sep', '12.1–12.3', '已有；12.3 已补细节，必须复习', 'Waterfall / iterative / RAD；structure chart 与 state-transition diagram；错误类型、测试方法、测试数据、维护与改程序。'],
      ['21 Sep–19 Oct', '10.1–10.4', '已有；10.4 已补编辑', '类型与 records、1D/2D arrays、bubble sort / linear search、文本文件、stack / queue / linked list。'],
      ['26 Oct', '1.1', '新增', '单位、进制、BCD、补码、溢出、字符编码。'],
      ['2 Nov', '1.2–1.3', '新增', 'Bitmap 与 vector、声音采样、文件大小、lossy / lossless 和 RLE。'],
      ['9 Nov', '2.1', '新增', '网络模型、拓扑、介质、设备、cloud、Ethernet、streaming、internet vs WWW、IP / subnetting / DNS。'],
      ['16 Nov', '3.1', '新增', '硬件工作原理、buffers、存储与存储器、传感器及反馈。'],
      ['23 Nov', '3.2', '新增；EOS 专项', '六种门符号与真值表；题意、逻辑式、真值表、电路图之间互换。']
    ])}
    ${block('写代码', '先练这三种完整题', `<ol><li><strong>10.2：</strong>不看答案写一次 bubble sort 和 linear search，注意数组上下界、找不到时的返回值，以及交换关联数据。</li><li><strong>10.3 / 11：</strong>写一个从文本文件逐行读取、筛选再输出的程序，分别说明循环为何用 WHILE、何时检测 EOF、何时关闭文件。</li><li><strong>12.3：</strong>给 1–100 的整数输入设计测试：正常 50，边界 1 / 100，相邻无效 0 / 101，另选错误类型输入。每行写输入、预期结果和理由。</li></ol>`) }
    <div class="source-line"><span>官方资料</span>${link(syllabus, '9618 syllabus · 2027–2029')}${link('https://www.cambridgeinternational.org/Images/747147-2027-2029-syllabus-update.pdf', 'Syllabus update · v2')}${link(guide, '2027–2029 Pseudocode Guide')}${link(specimen, 'Paper 1 specimen mark scheme')}</div>
  `, '2026/27 A1 Computer Science · School exam');

  root.innerHTML = map + notes.map(([number, title, page, cards]) => {
    const source = `<div class="source-line"><span>Scope &amp; further practice</span>${link(`${syllabus}#page=${page}`, `Cambridge 9618 · §${number}`)}${link(specimen, 'Paper 1 specimen mark scheme')}</div>`;
    return section(`section-${number.replace('.', '-')}`, number, title, `<div class="cards">${cards.map((entry, i) => card(number, i, entry)).join('')}</div>${source}`, number === '3.2' ? '9618 AS · Assessed in EOS, not Test 3' : undefined);
  }).join('');
})();
