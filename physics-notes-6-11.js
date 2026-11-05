(() => {
  const detail = (label, title, ...bullets) => ({ label, title, bullets });
  const point = (code, wording, details, extra = {}) => ({
    id: `physics-${code.replaceAll('.', '-')}`,
    code,
    wording,
    details,
    ...extra
  });
  const section = (nav, title, chapter, entries, intro = '') => ({
    id: `section-physics-${nav.replaceAll('.', '-')}`,
    nav,
    title,
    kicker: `Chapter ${chapter.number} · ${chapter.title}`,
    entries,
    ...(intro ? { intro } : {})
  });

  const chapters = {
    6: { number: 6, title: 'Deformation of solids' },
    7: { number: 7, title: 'Waves' },
    8: { number: 8, title: 'Superposition' },
    9: { number: 9, title: 'Electricity' },
    10: { number: 10, title: 'D.C. circuits' },
    11: { number: 11, title: 'Particle physics' }
  };

  window.PHYSICS_NOTES.push(
    section('6.1', 'Stress and strain', chapters[6], [
      point('6.1.1', 'understand that deformation is caused by tensile or compressive forces (forces and deformations will be assumed to be in one dimension only)', [
        detail('Meaning', 'How a force deforms a solid',
          'A <strong>deformation</strong> is a change in the length or shape of an object caused by forces.',
          '<strong>Tensile forces</strong> act away from one another and produce an <strong>extension</strong>; <strong>compressive forces</strong> act towards one another and produce a <strong>compression</strong>.',
          'For this syllabus, treat the force and deformation as acting along a <strong>single line</strong>.')
      ]),
      point('6.1.2', 'understand and use the terms load, extension, compression and limit of proportionality', [
        detail('Definitions', 'Use each term precisely',
          '<strong>Load</strong>: the applied force that deforms an object.',
          '<strong>Extension</strong>: increase in length, <strong>x = final length − original length</strong>.',
          '<strong>Compression</strong>: decrease in length caused by compressive forces.',
          '<strong>Limit of proportionality</strong>: the greatest load for which force remains directly proportional to extension.')
      ], {
        note: 'The limit of proportionality is about the straight-line F–x relationship; it is not automatically the same point as the elastic limit.'
      }),
      point('6.1.3', 'recall and use Hooke’s law', [
        detail('Law', 'Exact creditworthy statement',
          'The <strong>extension is directly proportional to the applied force</strong>, provided the <strong>limit of proportionality is not exceeded</strong>.',
          'Hence <strong>F ∝ x</strong> and an F–x graph is a straight line through the origin in this region.')
      ], { visual: 'force-extension-curve' }),
      point('6.1.4', 'recall and use the formula for the spring constant k = F/x', [
        detail('Formula', 'Stiffness of a spring or wire',
          'Use <strong>k = F/x</strong> or <strong>F = kx</strong> only within the proportional region.',
          '<strong>k</strong> is the spring constant in <strong>N m<sup>−1</sup></strong>; a larger k means a stiffer object.',
          'On a graph of <strong>F against x</strong>, the gradient is k. On a graph of x against F, the gradient is 1/k.')
      ]),
      point('6.1.5', 'define and use the terms stress, strain and the Young modulus', [
        detail('Definitions', 'Material quantities independent of specimen size',
          '<strong>Tensile stress</strong> = force per unit cross-sectional area: <strong>σ = F/A</strong>, unit Pa.',
          '<strong>Tensile strain</strong> = extension divided by original length: <strong>ε = x/L</strong>; it has no unit.',
          '<strong>Young modulus</strong> = tensile stress / tensile strain: <strong>E = σ/ε = FL/(Ax)</strong>, unit Pa.',
          'Within the proportional region, E is the <strong>gradient of a stress–strain graph</strong>.')
      ], {
        table: {
          headers: ['Quantity', 'Equation', 'Unit'],
          rows: [
            ['Stress σ', '<strong>F/A</strong>', 'Pa = N m<sup>−2</sup>'],
            ['Strain ε', '<strong>x/L</strong>', 'no unit'],
            ['Young modulus E', '<strong>σ/ε = FL/Ax</strong>', 'Pa']
          ]
        }
      }),
      point('6.1.6', 'describe an experiment to determine the Young modulus of a metal in the form of a wire', [
        detail('Method', 'Measurements and calculation',
          'Measure the wire’s original length <strong>L</strong> between fixed reference points using a metre rule.',
          'Measure its diameter in several positions and directions with a <strong>micrometer</strong>; calculate the mean diameter and <strong>A = πd²/4</strong>.',
          'Add known loads in small steps, allow oscillations to stop, and measure the extension <strong>x</strong> for each force <strong>F = mg</strong>.',
          'Keep within the proportional/elastic region; plot <strong>F against x</strong>. Since gradient = F/x, calculate <strong>E = (gradient)L/A</strong>.') ,
        detail('Quality', 'How to obtain reliable values',
          'Use a long, thin wire and a pointer/fiducial marker so the extension is large enough to measure accurately.',
          'Take repeat readings while loading and unloading; secure the wire and protect the floor/eyes from a falling load or snapped wire.')
      ], { visual: 'young-modulus-wire' })
    ]),

    section('6.2', 'Elastic and plastic behaviour', chapters[6], [
      point('6.2.1', 'understand and use the terms elastic deformation, plastic deformation and elastic limit', [
        detail('Definitions', 'What happens after the load is removed',
          '<strong>Elastic deformation</strong>: the object returns to its original dimensions when the load is removed.',
          '<strong>Plastic deformation</strong>: a permanent deformation remains after the load is removed.',
          '<strong>Elastic limit</strong>: the greatest load/stress for which the object still returns fully to its original shape.')
      ], {
        note: 'A material may pass the limit of proportionality yet still be elastic over a small further range.'
      }),
      point('6.2.2', 'understand that the area under the force–extension graph represents the work done', [
        detail('Reason', 'Add many small amounts of work',
          'For a small extension dx, the work done is approximately <strong>dW = F dx</strong>.',
          'Adding these strips gives <strong>W = ∫F dx</strong>, so the area under an <strong>F–x graph</strong> equals the work done in deforming the material.',
          'The area has unit <strong>N m = J</strong>.')
      ], { visual: 'force-extension-curve' }),
      point('6.2.3', 'determine the elastic potential energy of a material deformed within its limit of proportionality from the area under the force–extension graph', [
        detail('Graph method', 'Elastic energy stored',
          'Within the proportional region, the F–x graph is a straight line from the origin, so the area is a triangle.',
          '<strong>E<sub>P</sub> = area = ½ × extension × final force = ½Fx</strong>.',
          'This energy is recoverable when the material unloads elastically; if deformation is plastic, not all input work is recovered.')
      ], { visual: 'force-extension-curve' }),
      point('6.2.4', 'recall and use EP = 1/2 Fx = 1/2 kx² for a material deformed within its limit of proportionality', [
        detail('Use', 'Choose the form matching the data',
          'Use <strong>E<sub>P</sub> = ½Fx</strong>; with F = kx this becomes <strong>E<sub>P</sub> = ½kx²</strong>.',
          'F is the <strong>final</strong> elastic force at extension x, not the average force; the factor ½ already accounts for the force rising from zero.',
          'The formula applies only while <strong>F ∝ x</strong>.')
      ])
    ]),

    section('7.1', 'Progressive waves', chapters[7], [
      point('7.1.1', 'describe what is meant by wave motion as illustrated by vibration in ropes, springs and ripple tanks', [
        detail('Core idea', 'Energy travels; matter oscillates locally',
          'A wave is a travelling disturbance that transfers <strong>energy</strong> from one place to another without net transfer of matter.',
          'Particles/elements of the medium <strong>oscillate about equilibrium positions</strong>; they do not travel with the wave.',
          'A rope shows transverse oscillations, a slinky can show longitudinal compressions, and a ripple tank shows moving wavefronts on water.')
      ]),
      point('7.1.2', 'understand and use the terms displacement, amplitude, phase difference, period, frequency, wavelength and speed', [
        detail('Definitions', 'Wave vocabulary',
          '<strong>Displacement</strong>: directed distance of a particle from equilibrium.',
          '<strong>Amplitude A</strong>: maximum magnitude of displacement.',
          '<strong>Period T</strong>: time for one complete oscillation; <strong>frequency f</strong>: oscillations per second, so f = 1/T.',
          '<strong>Wavelength λ</strong>: shortest distance between points in the same phase; <strong>wave speed v</strong>: speed at which a fixed phase/wavefront travels.',
          '<strong>Phase difference</strong> states the fraction of a cycle separating two oscillations: <strong>Δφ = 2πΔx/λ = 2πΔt/T</strong>.')
      ], {
        table: {
          headers: ['Term', 'Symbol', 'Unit / range'],
          rows: [
            ['Amplitude', 'A', 'm'], ['Period', 'T', 's'], ['Frequency', 'f', 'Hz'],
            ['Wavelength', 'λ', 'm'], ['Wave speed', 'v', 'm s<sup>−1</sup>'], ['Phase difference', 'Δφ', 'rad or °']
          ]
        }
      }),
      point('7.1.3', 'understand the use of the time-base and y-gain of a cathode-ray oscilloscope (CRO) to determine frequency and amplitude', [
        detail('Method', 'Read the oscilloscope trace',
          'Amplitude = vertical divisions from the centre line to a crest × <strong>y-gain (V division<sup>−1</sup>)</strong>. Do not use the full peak-to-peak height without dividing by 2.',
          'Period T = horizontal divisions for one complete cycle × <strong>time-base (s division<sup>−1</sup>)</strong>.',
          'Calculate <strong>f = 1/T</strong>; using several cycles and dividing by their number reduces percentage uncertainty.')
      ], { visual: 'cro-trace' }),
      point('7.1.4', 'derive, using the definitions of speed, frequency and wavelength, the wave equation v = fλ', [
        detail('Derivation', 'One wavelength advances in one period',
          'In one period T, a wavefront travels one wavelength λ.',
          'Using speed = distance/time: <strong>v = λ/T</strong>. Since <strong>f = 1/T</strong>, <strong>v = fλ</strong>.')
      ]),
      point('7.1.5', 'recall and use v = fλ', [
        detail('Use', 'Convert units before substitution',
          'Use <strong>v = fλ</strong> with f in Hz and λ in m to obtain v in m s<sup>−1</sup>.',
          'When a wave crosses a boundary, its <strong>frequency remains fixed by the source</strong>; a change in speed therefore changes wavelength.',
          'For electromagnetic waves in free space use <strong>c = fλ</strong>, where c ≈ 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.')
      ]),
      point('7.1.6', 'understand that energy is transferred by a progressive wave', [
        detail('Meaning', 'Progressive waves carry energy',
          'A progressive wave transfers energy in the direction of propagation through coupled oscillations of neighbouring particles or changing fields.',
          'The medium’s particles have <strong>no net displacement</strong> after complete cycles, so energy transfer does not require bulk transfer of matter.')
      ]),
      point('7.1.7', 'recall and use intensity = power/area and intensity ∝ (amplitude)² for a progressive wave', [
        detail('Equations', 'Intensity and amplitude',
          'Intensity is power incident per unit area normal to the direction of travel: <strong>I = P/A</strong>, unit W m<sup>−2</sup>.',
          'For the same type of wave in the same medium, <strong>I ∝ amplitude²</strong>, so <strong>I₂/I₁ = (A₂/A₁)²</strong>.',
          'Doubling amplitude makes intensity four times as large; halving amplitude makes intensity one quarter.')
      ])
    ]),

    section('7.2', 'Transverse and longitudinal waves', chapters[7], [
      point('7.2.1', 'compare transverse and longitudinal waves', [
        detail('Comparison', 'Direction of oscillation relative to travel',
          'In a <strong>transverse wave</strong>, oscillations are perpendicular to the direction of energy transfer; examples include electromagnetic waves and waves on a stretched string.',
          'In a <strong>longitudinal wave</strong>, oscillations are parallel to the direction of energy transfer, producing compressions and rarefactions; sound in air is an example.',
          'Only transverse waves can be <strong>polarised</strong>.')
      ], {
        table: {
          headers: ['Feature', 'Transverse', 'Longitudinal'],
          rows: [
            ['Oscillation', 'Perpendicular to travel', 'Parallel to travel'],
            ['Pattern', 'Crests and troughs', 'Compressions and rarefactions'],
            ['Polarisation', 'Possible', 'Not possible']
          ]
        },
        visual: 'wave-types'
      }),
      point('7.2.2', 'analyse and interpret graphical representations of transverse and longitudinal waves', [
        detail('Reading graphs', 'Identify what each axis represents',
          'A displacement–distance graph is a <strong>snapshot</strong>: horizontal separation of equal-phase points gives λ; vertical maximum gives amplitude.',
          'A displacement–time graph describes one position: horizontal separation of equal-phase points gives T, not λ.',
          'For a longitudinal wave, a compression is a region of high pressure/density; on a particle-displacement graph, maximum compression occurs where the <strong>displacement gradient is most negative</strong>, not necessarily at a displacement maximum.')
      ], { visual: 'wave-types' })
    ]),

    section('7.3', 'Doppler effect for sound waves', chapters[7], [
      point('7.3.1', 'understand that when a source of sound waves moves relative to a stationary observer, the observed frequency is different from the source frequency (understanding of the Doppler effect for a stationary source and a moving observer is not required)', [
        detail('Explanation', 'Moving source changes wavefront spacing',
          'An approaching source moves towards the wavefronts it emits, so the wavelength in front is <strong>smaller</strong> and the stationary observer receives a <strong>higher frequency</strong>.',
          'A receding source leaves wavefronts farther apart, so wavelength is larger and observed frequency is lower.',
          'The wave speed relative to the medium remains <strong>v</strong>; the source motion changes wavelength, not the sound speed.')
      ], { visual: 'doppler-source' }),
      point('7.3.2', 'use the expression fo = fs v/(v ± vs) for the observed frequency when a source of sound waves moves relative to a stationary observer', [
        detail('Formula', 'Choose the sign from the physical result',
          'Use <strong>f<sub>o</sub> = f<sub>s</sub>v/(v ± v<sub>s</sub>)</strong>, where v is sound speed and v<sub>s</sub> is source speed.',
          'For an <strong>approaching</strong> source use denominator <strong>v − v<sub>s</sub></strong>, giving f<sub>o</sub> &gt; f<sub>s</sub>.',
          'For a <strong>receding</strong> source use denominator <strong>v + v<sub>s</sub></strong>, giving f<sub>o</sub> &lt; f<sub>s</sub>.')
      ], { note: 'This syllabus formula is specifically for a moving source and stationary observer; do not substitute an observer speed.' })
    ]),

    section('7.4', 'Electromagnetic spectrum', chapters[7], [
      point('7.4.1', 'state that all electromagnetic waves are transverse waves that travel with the same speed c in free space', [
        detail('Recall', 'Shared properties of all EM waves',
          'All electromagnetic waves are <strong>transverse</strong> oscillations of electric and magnetic fields.',
          'Every region travels at the same speed in free space: <strong>c ≈ 3.00 × 10<sup>8</sup> m s<sup>−1</sup></strong>.',
          'They differ in frequency and wavelength, linked by <strong>c = fλ</strong>.')
      ]),
      point('7.4.2', 'recall the approximate range of wavelengths in free space of the principal regions of the electromagnetic spectrum from radio waves to γ-rays', [
        detail('Order', 'Long wavelength to short wavelength',
          '<strong>Radio → microwave → infrared → visible → ultraviolet → X-ray → γ-ray</strong>.',
          'Moving along this order, wavelength decreases while frequency increases.')
      ], {
        table: {
          headers: ['Region', 'Approximate wavelength in free space'],
          rows: [
            ['Radio', '&gt; 10<sup>−1</sup> m'],
            ['Microwave', '10<sup>−1</sup> to 10<sup>−3</sup> m'],
            ['Infrared', '10<sup>−3</sup> to 7 × 10<sup>−7</sup> m'],
            ['Visible', '7 × 10<sup>−7</sup> to 4 × 10<sup>−7</sup> m'],
            ['Ultraviolet', '4 × 10<sup>−7</sup> to 10<sup>−8</sup> m'],
            ['X-ray', '10<sup>−8</sup> to 10<sup>−13</sup> m'],
            ['γ-ray', '&lt; 10<sup>−13</sup> m']
          ]
        }
      }),
      point('7.4.3', 'recall that wavelengths in the range 400–700 nm in free space are visible to the human eye', [
        detail('Recall', 'Visible-light limits',
          'Visible light spans approximately <strong>400 nm (violet)</strong> to <strong>700 nm (red)</strong>.',
          'Convert with 1 nm = 10<sup>−9</sup> m: the range is <strong>4.0 × 10<sup>−7</sup> to 7.0 × 10<sup>−7</sup> m</strong>.')
      ])
    ]),

    section('7.5', 'Polarisation', chapters[7], [
      point('7.5.1', 'understand that polarisation is a phenomenon associated with transverse waves', [
        detail('Meaning', 'Restrict the direction of oscillation',
          'An unpolarised transverse wave has oscillations in many directions perpendicular to propagation.',
          'A polariser transmits the component along its transmission axis, producing a <strong>plane-polarised</strong> wave.',
          'Longitudinal waves cannot be polarised because their oscillations are fixed parallel to the direction of travel; polarisation therefore demonstrates that EM waves are transverse.')
      ], { visual: 'malus-law' }),
      point('7.5.2', 'recall and use Malus’s law (I = I0 cos²θ) to calculate the intensity of a plane-polarised electromagnetic wave after transmission through a polarising filter or a series of polarising filters (calculation of the effect of a polarising filter on the intensity of an unpolarised wave is not required)', [
        detail('Formula', 'Intensity after an analyser',
          'For incident plane-polarised intensity I<sub>0</sub>, <strong>I = I<sub>0</sub>cos²θ</strong>, where θ is the angle between the incident polarisation direction and the filter axis.',
          'Parallel axes (θ = 0°) give I = I<sub>0</sub>; crossed axes (θ = 90°) give I = 0.',
          'For several filters, apply Malus’s law <strong>successively</strong>, using the angle between each new filter and the polarisation direction emerging from the previous filter.')
      ], { visual: 'malus-law', note: 'The syllabus does not require calculating the first-filter effect on unpolarised light; do not automatically insert a factor of 1/2 unless the question supplies or requires it.' })
    ]),

    section('8.1', 'Stationary waves', chapters[8], [
      point('8.1.1', 'explain and use the principle of superposition', [
        detail('Principle', 'Add displacements at the same place and time',
          'When two or more waves overlap, the resultant displacement at a point is the <strong>vector/algebraic sum</strong> of the individual displacements.',
          'Same-direction displacements give constructive superposition; opposite displacements give partial or complete cancellation.')
      ]),
      point('8.1.2', 'show an understanding of experiments that demonstrate stationary waves using microwaves, stretched strings and air columns (it will be assumed that end corrections are negligible; knowledge of the concept of end corrections is not required)', [
        detail('Microwaves', 'Incident and reflected waves',
          'Aim microwaves at a metal reflector and move a detector between source and reflector; alternating maxima and minima show antinodes and nodes.',
          'Adjacent detector maxima/minima of the same type are separated by <strong>λ/2</strong>.') ,
        detail('Strings and air columns', 'Create resonance',
          'Drive a stretched string at a resonant frequency so incident and reflected waves form a stable pattern; nodes occur at fixed ends and antinodes between them.',
          'Vary the frequency, tension or vibrating length until a clear mode appears. For an air column, resonance is identified by maximum loudness/amplitude; treat stated open/closed ends as nodes or antinodes as appropriate.',
          'End corrections are neglected in this syllabus, so use the stated physical length directly.')
      ], { visual: 'stationary-wave' }),
      point('8.1.3', 'explain the formation of a stationary wave using a graphical method, and identify nodes and antinodes', [
        detail('Formation', 'Two equal waves travelling oppositely',
          'A stationary wave forms by superposition of two waves with the <strong>same frequency, wavelength and amplitude</strong> travelling in opposite directions.',
          '<strong>Nodes</strong> always have zero displacement because the waves cancel there; <strong>antinodes</strong> oscillate with maximum amplitude because the waves reinforce.',
          'All particles between adjacent nodes oscillate in phase; neighbouring loops are in antiphase. The pattern transfers <strong>no net energy</strong> along the medium.')
      ], { visual: 'stationary-wave' }),
      point('8.1.4', 'understand how wavelength may be determined from the positions of nodes or antinodes of a stationary wave', [
        detail('Measurement', 'Use several intervals',
          'Distance between adjacent nodes = distance between adjacent antinodes = <strong>λ/2</strong>.',
          'Distance from a node to the nearest antinode = <strong>λ/4</strong>.',
          'For better precision, measure distance L across N equal node-to-node intervals and use <strong>λ = 2L/N</strong>.')
      ], { visual: 'stationary-wave' })
    ]),

    section('8.2', 'Diffraction', chapters[8], [
      point('8.2.1', 'explain the meaning of the term diffraction', [
        detail('Definition', 'Spreading of a wave',
          '<strong>Diffraction</strong> is the spreading of waves as they pass through a gap or around an obstacle/edge.')
      ], { visual: 'diffraction-gap' }),
      point('8.2.2', 'show an understanding of experiments that demonstrate diffraction including the qualitative effect of the gap width relative to the wavelength of the wave; for example diffraction of water waves in a ripple tank', [
        detail('Observation', 'Compare gap width with wavelength',
          'Use plane water waves incident on a barrier with an adjustable gap and observe the wavefronts beyond it.',
          'Diffraction is greatest when the gap width is <strong>comparable to or smaller than λ</strong>; wavefronts become strongly curved or nearly semicircular.',
          'When the gap is much wider than λ, most wavefronts continue almost straight with spreading mainly at the edges.',
          'Diffraction changes the wavefront shape, not the frequency or speed in the same medium.')
      ], { visual: 'diffraction-gap' })
    ]),

    section('8.3', 'Interference', chapters[8], [
      point('8.3.1', 'understand the terms interference and coherence', [
        detail('Definitions', 'Stable superposition pattern',
          '<strong>Interference</strong> is the variation of resultant amplitude/intensity produced when waves superpose.',
          '<strong>Coherent sources</strong> have the same frequency and a constant phase difference.',
          'For sources in phase: constructive interference occurs at path difference <strong>nλ</strong>; destructive interference occurs at <strong>(n + ½)λ</strong>.')
      ]),
      point('8.3.2', 'show an understanding of experiments that demonstrate two-source interference using water waves in a ripple tank, sound, light and microwaves', [
        detail('Experiments', 'How maxima and minima are detected',
          'Ripple tank: two dippers driven by one oscillator produce nodal and antinodal lines on the water surface.',
          'Sound: two coherent loudspeakers driven by one signal generator produce alternating loud and quiet positions as a microphone/listener moves.',
          'Light: one laser illuminates two narrow slits, producing bright and dark fringes on a screen.',
          'Microwaves: split one source into two coherent paths or use two apertures; a moving detector records alternating signal maxima and minima.')
      ], { visual: 'double-slit' }),
      point('8.3.3', 'understand the conditions required if two-source interference fringes are to be observed', [
        detail('Conditions', 'What makes fringes stable and visible',
          'The sources must be <strong>coherent</strong>: same frequency with a constant phase difference.',
          'The waves must overlap and should have <strong>similar amplitudes</strong> so minima have strong contrast.',
          'For transverse electromagnetic waves, the waves must have the <strong>same polarisation</strong>.',
          'For light, derive both slits from the same source; two independent lamps do not maintain a fixed phase difference.')
      ]),
      point('8.3.4', 'recall and use λ = ax/D for double-slit interference using light', [
        detail('Formula', 'Young double-slit geometry',
          'Use <strong>λ = ax/D</strong>, where a is slit separation, x is spacing of adjacent fringes, and D is slit-to-screen distance.',
          'Measure across several fringe spacings and divide to reduce percentage uncertainty.',
          'The relation assumes <strong>D ≫ a</strong> and small angles; use consistent SI units.')
      ], { visual: 'double-slit' })
    ]),

    section('8.4', 'The diffraction grating', chapters[8], [
      point('8.4.1', 'recall and use d sin θ = nλ', [
        detail('Formula', 'Principal maxima from many slits',
          'Use <strong>d sin θ = nλ</strong>, where d is grating spacing, θ is angle from the central normal, and n = 0, 1, 2, … is order.',
          'If the grating has N lines per metre, <strong>d = 1/N</strong>. Convert lines per mm by multiplying N by 10³.',
          'The largest possible order obeys <strong>nλ ≤ d</strong> because sin θ cannot exceed 1.')
      ]),
      point('8.4.2', 'describe the use of a diffraction grating to determine the wavelength of light (the structure and use of the spectrometer are not included)', [
        detail('Method', 'Measure a diffraction angle',
          'Direct monochromatic light normally onto a grating of known line density and observe the central maximum and orders on both sides.',
          'Measure the angle θ to the same order on the left and right; average the magnitudes to reduce alignment error.',
          'Calculate d = 1/N and then <strong>λ = d sin θ/n</strong>; repeat for several orders where visible.',
          'Never look directly into a laser beam; use a screen and keep the beam below eye level.')
      ], { visual: 'diffraction-grating' })
    ])
  );

  window.PHYSICS_NOTES.push(
    section('9.1', 'Electric current', chapters[9], [
      point('9.1.1', 'understand that an electric current is a flow of charge carriers', [
        detail('Definition', 'Rate of flow of charge',
          'Electric current is the <strong>rate of flow of charge</strong>: <strong>I = ΔQ/Δt</strong>.',
          'In metals the mobile charge carriers are electrons; in electrolytes they are positive and negative ions.',
          '<strong>Conventional current</strong> is defined in the direction positive charge would move, opposite to electron drift in a metal.')
      ]),
      point('9.1.2', 'understand that the charge on charge carriers is quantised', [
        detail('Quantisation', 'Charge occurs in discrete packets',
          'The charge of an isolated object is an integer multiple of the elementary charge: <strong>Q = Ne</strong>.',
          '<strong>e = 1.60 × 10<sup>−19</sup> C</strong>; an electron has charge −e and a proton has charge +e.',
          'N must be a whole number, so an answer for the number of carriers must not be fractional.')
      ]),
      point('9.1.3', 'recall and use Q = It', [
        detail('Use', 'Charge passing a point',
          'For constant current, <strong>Q = It</strong>, with Q in coulombs, I in amperes and t in seconds.',
          '<strong>1 A = 1 C s<sup>−1</sup></strong>. Convert minutes or hours to seconds before calculating.',
          'For changing current, charge equals the <strong>area under an I–t graph</strong>.')
      ]),
      point('9.1.4', 'use, for a current-carrying conductor, the expression I = Anvq, where n is the number density of charge carriers', [
        detail('Derivation', 'Carriers crossing a cross-section',
          'In time t, carriers with mean drift speed v move distance vt, so the volume crossing area A is <strong>Avt</strong>.',
          'Number of carriers = nAvt and charge transported = <strong>nAvtq</strong>. Dividing by t gives <strong>I = Anvq</strong>.',
          'Use the magnitude of carrier charge q; n has unit m<sup>−3</sup>, A is in m² and v is in m s<sup>−1</sup>.')
      ], { visual: 'drift-current' })
    ]),

    section('9.2', 'Potential difference and power', chapters[9], [
      point('9.2.1', 'define the potential difference across a component as the energy transferred per unit charge', [
        detail('Definition', 'Energy change per coulomb',
          'Potential difference across a component is the <strong>energy transferred from electrical energy to other forms per unit charge</strong> passing through it.',
          '<strong>V = W/Q</strong>; one volt is one joule per coulomb: <strong>1 V = 1 J C<sup>−1</sup></strong>.')
      ]),
      point('9.2.2', 'recall and use V = W/Q', [
        detail('Use', 'Relate energy, charge and p.d.',
          'Use <strong>V = W/Q</strong> or <strong>W = VQ</strong>. W is energy transferred in joules, not force × distance unless that is separately relevant.',
          'If N carriers each have charge magnitude q, then Q = Nq and the total energy transferred is <strong>W = NVq</strong>.')
      ]),
      point('9.2.3', 'recall and use P = VI, P = I²R and P = V²/R', [
        detail('Derivation', 'Electrical power equations',
          'Power P = W/t and W = VQ, so <strong>P = VQ/t = VI</strong>.',
          'Using V = IR gives <strong>P = I²R</strong>; using I = V/R gives <strong>P = V²/R</strong>.',
          'Choose the equation containing the known quantities. Energy transferred in time t is <strong>W = Pt</strong>.')
      ], { note: 'P = I²R and P = V²/R describe the power transferred in a resistance; use the actual current through and p.d. across that component.' })
    ]),

    section('9.3', 'Resistance and resistivity', chapters[9], [
      point('9.3.1', 'define resistance', [
        detail('Definition', 'Opposition quantified by a ratio',
          'Resistance of a component is the ratio of the potential difference across it to the current through it: <strong>R = V/I</strong>.',
          'The unit is the ohm: <strong>1 Ω = 1 V A<sup>−1</sup></strong>.')
      ]),
      point('9.3.2', 'recall and use V = IR', [
        detail('Use', 'Component equation',
          'Use <strong>V = IR</strong> with V across and I through the same component.',
          'This equation defines resistance at an operating point; it can be used for non-ohmic components even when R is not constant.')
      ]),
      point('9.3.3', 'sketch the I–V characteristics of a metallic conductor at constant temperature, a semiconductor diode and a filament lamp', [
        detail('Shapes', 'Three required characteristics',
          'Metallic conductor at constant temperature: a <strong>straight line through the origin</strong>; constant gradient I/V means constant resistance.',
          'Filament lamp: symmetric curve through the origin whose gradient decreases as |V| increases because the filament heats and resistance rises.',
          'Semiconductor diode: almost no current in reverse bias and below the forward threshold; then forward current rises very steeply.')
      ], { visual: 'iv-characteristics' }),
      point('9.3.4', 'explain that the resistance of a filament lamp increases as current increases because its temperature increases', [
        detail('Explanation', 'Heating increases scattering',
          'A larger current transfers energy to the filament at a greater rate, so its <strong>temperature rises</strong>.',
          'The metal lattice ions vibrate with greater amplitude, causing more frequent collisions with conduction electrons.',
          'Electron flow is impeded, so resistivity and therefore <strong>resistance increase</strong>.')
      ]),
      point('9.3.5', 'state Ohm’s law', [
        detail('Law', 'Exact condition matters',
          'The current in a conductor is <strong>directly proportional to the potential difference</strong> across it, provided its <strong>temperature and other physical conditions remain constant</strong>.',
          'An ohmic conductor therefore has constant resistance and a straight I–V line through the origin.')
      ]),
      point('9.3.6', 'recall and use R = ρL/A', [
        detail('Formula', 'Geometry and material property',
          'For a uniform conductor, <strong>R = ρL/A</strong>, where ρ is resistivity, L is length and A is cross-sectional area.',
          'Resistivity is a property of the material at a stated temperature; its unit is <strong>Ω m</strong>.',
          'At fixed ρ, R ∝ L and R ∝ 1/A. For a circular wire use <strong>A = πd²/4</strong>.')
      ]),
      point('9.3.7', 'understand that the resistance of a light-dependent resistor (LDR) decreases as the light intensity increases', [
        detail('Response', 'Light controls resistance',
          'As light intensity increases, an LDR’s <strong>resistance decreases</strong>.',
          'More incident light releases/creates more mobile charge carriers in the semiconductor, increasing conductivity.',
          'In potential-divider questions, decide whether the output is taken across the LDR or the fixed resistor before stating how V<sub>out</sub> changes.')
      ]),
      point('9.3.8', 'understand that the resistance of a thermistor decreases as the temperature increases (it will be assumed that thermistors have a negative temperature coefficient)', [
        detail('Response', 'NTC thermistor',
          'For the required negative-temperature-coefficient thermistor, increasing temperature causes <strong>resistance to decrease</strong>.',
          'Thermal energy produces more mobile charge carriers, so conductivity increases.',
          'Cooling gives the opposite change: resistance increases.')
      ])
    ]),

    section('10.1', 'Practical circuits', chapters[10], [
      point('10.1.1', 'recall and use the circuit symbols shown in section 6 of this syllabus', [
        detail('Recall', 'Recognise and reproduce standard symbols',
          'Use the official symbol shape rather than a pictorial drawing, and join conductors with straight lines.',
          'A filled dot marks a junction; crossing wires without a junction dot are not electrically connected.',
          'Polarity matters for cells, batteries, diodes, LEDs, ammeters, voltmeters and galvanometers.')
      ], {
        table: {
          headers: ['Required symbols', 'Required symbols', 'Required symbols'],
          rows: [
            ['cell; battery of cells', 'power supply; a.c. supply', 'junction; switch; earth'],
            ['lamp; fixed resistor', 'variable resistor; potentiometer', 'thermistor; LDR; heater'],
            ['diode; LED; capacitor', 'electric bell; buzzer; microphone', 'loudspeaker; motor; generator'],
            ['ammeter; voltmeter', 'galvanometer', 'oscilloscope']
          ]
        },
        visual: 'circuit-symbols'
      }),
      point('10.1.2', 'draw and interpret circuit diagrams containing the circuit symbols shown in section 6 of this syllabus', [
        detail('Method', 'Read topology before calculating',
          'Identify <strong>junctions, branches and complete loops</strong>; components sharing both end nodes are in parallel.',
          'Place an ammeter <strong>in series</strong> with the branch whose current is measured and a voltmeter <strong>in parallel</strong> across the component.',
          'Trace conventional current from the positive terminal of the source through the external circuit to the negative terminal, and respect diode direction.')
      ]),
      point('10.1.3', 'define and use the electromotive force (e.m.f.) of a source as energy transferred per unit charge in driving charge around a complete circuit', [
        detail('Definition', 'Energy supplied by the source',
          'Electromotive force is the <strong>energy transferred from non-electrical forms to electrical energy per unit charge</strong> in driving charge around a complete circuit.',
          '<strong>ε = W/Q</strong>, unit volt = J C<sup>−1</sup>.',
          'For charge Q, the source supplies energy <strong>W = εQ</strong>.')
      ]),
      point('10.1.4', 'distinguish between e.m.f. and potential difference (p.d.) in terms of energy considerations', [
        detail('Distinction', 'Supply versus transfer out',
          '<strong>e.m.f.</strong> is electrical energy supplied by a source per unit charge to the complete circuit.',
          '<strong>p.d.</strong> is electrical energy transferred from charge to other forms per unit charge across a component.',
          'Both are measured in volts, but they describe opposite sides of the energy account: energy <strong>gained</strong> at sources and energy <strong>lost/transferred</strong> in components.')
      ]),
      point('10.1.5', 'understand the effects of the internal resistance of a source of e.m.f. on the terminal potential difference', [
        detail('Model', 'Lost volts inside the source',
          'Model a source as e.m.f. ε in series with internal resistance r. When current I flows, energy per charge <strong>Ir</strong> is transferred inside the source.',
          'The terminal p.d. is <strong>V = ε − Ir</strong> while the source supplies current; also ε = I(R + r).',
          'As current increases, lost volts Ir increase and terminal p.d. decreases. With no current, <strong>V = ε</strong>.')
      ], { visual: 'internal-resistance' })
    ]),

    section('10.2', 'Kirchhoff’s laws', chapters[10], [
      point('10.2.1', 'recall Kirchhoff’s first law and understand that it is a consequence of conservation of charge', [
        detail('Law', 'Junction rule',
          'At any junction, <strong>total current entering = total current leaving</strong>, or ΣI = 0 with signed currents.',
          'This follows from <strong>conservation of charge</strong>: charge cannot accumulate continuously at an ideal junction.')
      ]),
      point('10.2.2', 'recall Kirchhoff’s second law and understand that it is a consequence of conservation of energy', [
        detail('Law', 'Loop rule',
          'Around any closed loop, the algebraic sum of e.m.f.s equals the algebraic sum of potential drops: <strong>Σε = ΣIR</strong>.',
          'This follows from <strong>conservation of energy</strong>: charge returns to its starting point with no net energy change.',
          'Choose a loop direction and use a consistent sign convention for rises and drops.')
      ]),
      point('10.2.3', 'derive, using Kirchhoff’s laws, a formula for the combined resistance of two or more resistors in series', [
        detail('Derivation', 'Same current; p.d.s add',
          'Series resistors carry the same current I. Kirchhoff’s second law gives <strong>V = V₁ + V₂ + …</strong>.',
          'Using V = IR: IR = IR₁ + IR₂ + …, so <strong>R = R₁ + R₂ + …</strong>.')
      ]),
      point('10.2.4', 'use the formula for the combined resistance of two or more resistors in series', [
        detail('Use', 'Series resistance',
          'For series resistors, <strong>R<sub>total</sub> = R₁ + R₂ + …</strong>.',
          'The combined resistance is greater than every individual resistance because each resistor adds opposition.',
          'Include internal resistance in the series total when calculating current from a real source.')
      ]),
      point('10.2.5', 'derive, using Kirchhoff’s laws, a formula for the combined resistance of two or more resistors in parallel', [
        detail('Derivation', 'Same p.d.; currents add',
          'Parallel resistors have the same p.d. V. Kirchhoff’s first law gives <strong>I = I₁ + I₂ + …</strong>.',
          'Using I = V/R: V/R = V/R₁ + V/R₂ + …; divide by V to obtain <strong>1/R = 1/R₁ + 1/R₂ + …</strong>.')
      ]),
      point('10.2.6', 'use the formula for the combined resistance of two or more resistors in parallel', [
        detail('Use', 'Parallel resistance',
          'Use <strong>1/R = 1/R₁ + 1/R₂ + …</strong>; for two resistors, <strong>R = R₁R₂/(R₁ + R₂)</strong>.',
          'The combined resistance must be <strong>smaller than the smallest branch resistance</strong>.',
          'For N identical resistors each R₀ in parallel, R = R₀/N.')
      ]),
      point('10.2.7', 'use Kirchhoff’s laws to solve simple circuit problems', [
        detail('Method', 'Build simultaneous equations',
          'Mark assumed current directions and apply the first law at independent junctions.',
          'Write second-law equations for independent loops, including internal resistance and the polarity of each source.',
          'Use V = IR for each resistor and solve the simultaneous equations. A negative current means the true direction is opposite to the assumed arrow.',
          'Check that currents balance at junctions and that energy supplied equals energy transferred around each loop.')
      ])
    ]),

    section('10.3', 'Potential dividers', chapters[10], [
      point('10.3.1', 'understand the principle of a potential divider circuit', [
        detail('Principle', 'Share an input p.d. between series resistors',
          'Two or more resistors in series carry the same current, so the input p.d. divides in proportion to resistance.',
          'For output across R₂ in a two-resistor divider, <strong>V<sub>out</sub> = V<sub>in</sub>R₂/(R₁ + R₂)</strong>.',
          'This expression assumes the output is unloaded or the load resistance is large; a connected load in parallel changes the effective R₂.')
      ], { visual: 'potential-divider' }),
      point('10.3.2', 'recall and use the principle of the potentiometer as a means of comparing potential differences', [
        detail('Principle', 'Balance against a uniform potential gradient',
          'A steady current in a uniform wire produces a constant potential gradient, so potential difference along the wire is proportional to length.',
          'Move the contact until the galvanometer reads zero. At balance, the unknown p.d./e.m.f. equals the p.d. along the balance length.',
          'For two sources measured with the same wire current, <strong>V₁/V₂ = l₁/l₂</strong>.')
      ], { visual: 'potentiometer-null' }),
      point('10.3.3', 'understand the use of a galvanometer in null methods', [
        detail('Null detection', 'Zero current gives the balance point',
          'A galvanometer is a sensitive detector of small current and its direction.',
          'At the null point it reads <strong>zero</strong>, showing that the two compared points are at equal potential.',
          'Because no current is drawn from the test source at balance, the measurement avoids loading it and can compare e.m.f.s accurately.')
      ], { visual: 'potentiometer-null' }),
      point('10.3.4', 'explain the use of thermistors and light-dependent resistors in potential dividers to provide a potential difference that is dependent on temperature and light intensity', [
        detail('Sensor divider', 'Position determines the direction of change',
          'Replace one resistor in a divider with an NTC thermistor or LDR so its resistance changes with the environment.',
          'As temperature or light intensity increases, the sensor resistance <strong>decreases</strong>. If V<sub>out</sub> is across the sensor, V<sub>out</sub> decreases; if it is across the fixed resistor, V<sub>out</sub> increases.',
          'Choose the arrangement so the output change activates the required monitoring/control circuit at the desired condition.')
      ], { visual: 'potential-divider' })
    ]),

    section('11.1', 'Atoms, nuclei and radiation', chapters[11], [
      point('11.1.1', 'infer from the results of the α-particle scattering experiment the existence and small size of the nucleus', [
        detail('Observation → inference', 'Rutherford scattering evidence',
          'Most α-particles passed straight through the foil: the atom is <strong>mostly empty space</strong>.',
          'Some were deflected through small angles: the atom contains a concentrated <strong>positive charge</strong> that repels α-particles.',
          'A very small fraction were deflected through large angles or backwards: nearly all positive charge and mass are concentrated in a <strong>very small, dense nucleus</strong>.')
      ], { visual: 'rutherford-scattering' }),
      point('11.1.2', 'describe a simple model for the nuclear atom to include protons, neutrons and orbital electrons', [
        detail('Model', 'Nucleus and electron cloud',
          'A tiny central nucleus contains <strong>protons and neutrons</strong> and therefore almost all the atom’s mass.',
          '<strong>Electrons</strong> occupy the region around/orbit the nucleus.',
          'A neutral atom has equal numbers of protons and electrons; most of its volume is empty space.')
      ]),
      point('11.1.3', 'distinguish between nucleon number and proton number', [
        detail('Definitions', 'A and Z',
          '<strong>Nucleon number A</strong> is the total number of protons plus neutrons in the nucleus.',
          '<strong>Proton number Z</strong> is the number of protons and identifies the element.',
          'Number of neutrons = <strong>A − Z</strong>.')
      ]),
      point('11.1.4', 'understand that isotopes are forms of the same element with different numbers of neutrons in their nuclei', [
        detail('Definition', 'Same Z, different A',
          'Isotopes have the <strong>same proton number</strong> but <strong>different neutron numbers</strong>, so they have different nucleon numbers.',
          'They are the same element and have essentially the same chemical behaviour because neutral atoms have the same electron arrangement.')
      ]),
      point('11.1.5', 'understand and use the notation ᴬZX for the representation of nuclides', [
        detail('Notation', 'Read a nuclide symbol',
          'Write a nuclide as <strong><sup>A</sup><sub>Z</sub>X</strong>, with nucleon number A at upper left and proton number Z at lower left.',
          'The nucleus contains Z protons and <strong>A − Z neutrons</strong>.',
          'Example: <strong><sup>23</sup><sub>11</sub>Na</strong> has 11 protons and 12 neutrons.')
      ]),
      point('11.1.6', 'understand that nucleon number and charge are conserved in nuclear processes', [
        detail('Conservation', 'Balance every nuclear equation',
          'The total <strong>nucleon number A</strong> on the left equals the total A on the right.',
          'The total <strong>charge/proton-number equivalent Z</strong> on the left equals the total Z on the right.',
          'Use both conditions to identify a missing particle or daughter nuclide.')
      ]),
      point('11.1.7', 'describe the composition, mass and charge of α-, β- and γ-radiations (both β− (electrons) and β+ (positrons) are included)', [
        detail('Recall', 'Particle content and relative properties',
          '<strong>α</strong>: helium nucleus containing 2 protons + 2 neutrons; mass ≈ 4 u; charge +2e.',
          '<strong>β−</strong>: electron; mass ≈ 1/1840 u (usually treated as negligible); charge −e.',
          '<strong>β+</strong>: positron; same mass as electron; charge +e.',
          '<strong>γ</strong>: electromagnetic photon; zero rest mass and zero charge.')
      ], {
        table: {
          headers: ['Radiation', 'Composition', 'Approx. mass', 'Charge'],
          rows: [
            ['α', '2p + 2n', '4 u', '+2e'],
            ['β−', 'electron', '1/1840 u', '−e'],
            ['β+', 'positron', '1/1840 u', '+e'],
            ['γ', 'photon', '0', '0']
          ]
        }
      }),
      point('11.1.8', 'understand that an antiparticle has the same mass but opposite charge to the corresponding particle, and that a positron is the antiparticle of an electron', [
        detail('Antiparticles', 'Same mass, opposite charge',
          'A particle and its antiparticle have the <strong>same mass</strong> and opposite electric charge.',
          'The positron e<sup>+</sup> is the electron’s antiparticle: both have the same mass, while their charges are +e and −e.',
          'A particle and antiparticle may annihilate, transferring their energy to photons, although calculations of annihilation are not required here.')
      ]),
      point('11.1.9', 'state that (electron) antineutrinos are produced during β− decay and (electron) neutrinos are produced during β+ decay', [
        detail('Recall', 'Match the neutral lepton to the decay',
          '<strong>β− decay emits an electron and an electron antineutrino</strong>: n → p + e<sup>−</sup> + ν̅<sub>e</sub>.',
          '<strong>β+ decay emits a positron and an electron neutrino</strong>: p → n + e<sup>+</sup> + ν<sub>e</sub>.')
      ]),
      point('11.1.10', 'understand that α-particles have discrete energies but that β-particles have a continuous range of energies because (anti)neutrinos are emitted in β-decay', [
        detail('Energy spectra', 'Two-body versus shared energy',
          'For a given α-decay, energy and momentum conservation give α-particles one of a set of <strong>discrete energies</strong>.',
          'In β-decay, the available energy is shared in varying proportions between the β-particle, the (anti)neutrino and nuclear recoil.',
          'The β-particle therefore has a <strong>continuous range of energies</strong> up to a maximum.')
      ]),
      point('11.1.11', 'represent α- and β-decay by a radioactive decay equation of the form ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂α', [
        detail('Equations', 'Apply A and Z conservation',
          'α-decay: <strong><sup>A</sup><sub>Z</sub>X → <sup>A−4</sup><sub>Z−2</sub>Y + <sup>4</sup><sub>2</sub>α</strong>.',
          'β− decay: <strong><sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z+1</sub>Y + <sup>0</sup><sub>−1</sub>e + ν̅<sub>e</sub></strong>.',
          'β+ decay: <strong><sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z−1</sub>Y + <sup>0</sup><sub>+1</sub>e + ν<sub>e</sub></strong>.',
          'Check that both total A and total charge are equal on both sides.')
      ]),
      point('11.1.12', 'use the unified atomic mass unit (u) as a unit of mass', [
        detail('Definition', 'Nuclear-scale mass unit',
          'One unified atomic mass unit is <strong>1/12 of the mass of a neutral carbon-12 atom</strong>.',
          '<strong>1 u ≈ 1.66 × 10<sup>−27</sup> kg</strong>.',
          'Convert using m(kg) = m(u) × 1.66 × 10<sup>−27</sup>; use the data sheet value if one is supplied.')
      ])
    ]),

    section('11.2', 'Fundamental particles', chapters[11], [
      point('11.2.1', 'understand that a quark is a fundamental particle and that there are six flavours (types) of quark: up, down, strange, charm, top and bottom', [
        detail('Recall', 'Six quark flavours',
          'A <strong>quark</strong> is treated as a fundamental particle with no known internal structure.',
          'The six flavours are <strong>up (u), down (d), strange (s), charm (c), top (t), bottom (b)</strong>.')
      ]),
      point('11.2.2', 'recall and use the charge of each flavour of quark and understand that its respective antiquark has the opposite charge (no knowledge of any other properties of quarks is required)', [
        detail('Charges', 'Two charge families',
          '<strong>u, c and t</strong> each have charge <strong>+2/3 e</strong>.',
          '<strong>d, s and b</strong> each have charge <strong>−1/3 e</strong>.',
          'Each antiquark has the opposite charge: for example ū has −2/3 e and d̄ has +1/3 e.')
      ], {
        table: {
          headers: ['Flavours', 'Quark charge', 'Antiquark charge'],
          rows: [
            ['u, c, t', '+2/3 e', '−2/3 e'],
            ['d, s, b', '−1/3 e', '+1/3 e']
          ]
        }
      }),
      point('11.2.3', 'recall that protons and neutrons are not fundamental particles and describe protons and neutrons in terms of their quark composition', [
        detail('Composition', 'Add fractional charges',
          'A proton is <strong>uud</strong>: +2/3 + 2/3 − 1/3 = +1 e.',
          'A neutron is <strong>udd</strong>: +2/3 − 1/3 − 1/3 = 0.',
          'Because they are made of three quarks, protons and neutrons are composite <strong>baryons</strong>, not fundamental particles.')
      ]),
      point('11.2.4', 'understand that a hadron may be either a baryon (consisting of three quarks) or a meson (consisting of one quark and one antiquark)', [
        detail('Classification', 'Particles made of quarks',
          'A <strong>hadron</strong> is a particle made from quarks and subject to the strong interaction.',
          'A <strong>baryon</strong> consists of three quarks; an antibaryon consists of three antiquarks.',
          'A <strong>meson</strong> consists of one quark and one antiquark.')
      ], { visual: 'particle-families' }),
      point('11.2.5', 'describe the changes to quark composition that take place during β− and β+ decay', [
        detail('β−', 'A down quark changes to an up quark',
          'In β− decay: <strong>d → u + e<sup>−</sup> + ν̅<sub>e</sub></strong>.',
          'A neutron <strong>udd</strong> becomes a proton <strong>uud</strong>.') ,
        detail('β+', 'An up quark changes to a down quark',
          'In β+ decay: <strong>u → d + e<sup>+</sup> + ν<sub>e</sub></strong>.',
          'A proton <strong>uud</strong> becomes a neutron <strong>udd</strong>.')
      ]),
      point('11.2.6', 'recall that electrons and neutrinos are fundamental particles called leptons', [
        detail('Classification', 'Fundamental leptons',
          'Electrons and neutrinos are <strong>fundamental particles</strong> called leptons; they are not made of quarks.',
          'The positron and antineutrino are their corresponding antiparticles.',
          'Hadrons are made of quarks; leptons are a separate fundamental particle family.')
      ], { visual: 'particle-families' })
    ])
  );

  Object.assign(window.PHYSICS_VISUALS, {
    'force-extension-curve': {
      caption: 'Within the proportional region the graph is linear; the triangular area is elastic energy ½Fx.',
      svg: `<svg class="physics-diagram" viewBox="0 0 700 360" role="img" aria-label="Force extension graph showing linear region, limit of proportionality and elastic energy area">
        <line class="axis" x1="90" y1="300" x2="640" y2="300"/><line class="axis" x1="90" y1="300" x2="90" y2="35"/>
        <path d="M90 300 L365 135 C430 90 515 92 590 118" fill="none" class="main"/>
        <path d="M90 300 L365 135 L365 300 Z" class="fluid"/><line class="guide" x1="365" y1="135" x2="365" y2="300"/>
        <circle cx="365" cy="135" r="7" fill="#e34b55"/><text x="382" y="130">limit of proportionality</text>
        <text x="525" y="333">extension x</text><text x="25" y="56">force F</text><text x="180" y="270">area = ½Fx</text>
      </svg>`
    },
    'young-modulus-wire': {
      caption: 'Measure L, mean diameter d and extension x for known loads; E = FL/(Ax).',
      svg: `<svg class="physics-diagram" viewBox="0 0 760 420" role="img" aria-label="Young modulus experiment with long wire, fixed support, load and extension scale">
        <rect class="object" x="90" y="35" width="520" height="28" rx="4"/><line class="main" x1="330" y1="63" x2="330" y2="325"/><circle cx="330" cy="92" r="5" fill="#e34b55"/>
        <rect class="object" x="280" y="325" width="100" height="55" rx="7"/><text x="304" y="358">load</text>
        <line class="guide" x1="450" y1="92" x2="450" y2="325"/><line class="axis" x1="438" y1="92" x2="462" y2="92"/><line class="axis" x1="438" y1="325" x2="462" y2="325"/><text x="468" y="214">L</text>
        <line class="accent" x1="330" y1="205" x2="520" y2="205"/><line class="axis" x1="520" y1="105" x2="520" y2="305"/><text x="534" y="177">pointer and</text><text x="534" y="200">scale measure x</text>
        <text x="72" y="404">Measure d with a micrometer at several positions; A = πd²/4.</text>
      </svg>`
    },
    'cro-trace': {
      caption: 'Read amplitude from the centre line and period across one full cycle, then multiply by the control setting per division.',
      svg: `<svg class="physics-diagram" viewBox="0 0 720 350" role="img" aria-label="Oscilloscope sine trace with amplitude and period divisions">
        <g class="guide">${Array.from({length:13},(_,i)=>`<line x1="${70+i*45}" y1="45" x2="${70+i*45}" y2="315"/>`).join('')}${Array.from({length:7},(_,i)=>`<line x1="70" y1="${45+i*45}" x2="610" y2="${45+i*45}"/>`).join('')}</g>
        <path class="main" d="M70 180 C115 55 160 55 205 180 S295 305 340 180 S430 55 475 180 S565 305 610 180"/>
        <line class="accent" x1="160" y1="180" x2="160" y2="55"/><text x="172" y="115">amplitude</text>
        <line class="accent" x1="160" y1="330" x2="430" y2="330"/><text x="265" y="348">one period T</text>
      </svg>`
    },
    'wave-types': {
      caption: 'Transverse motion is perpendicular to travel; longitudinal motion is parallel and forms compressions and rarefactions.',
      svg: `<svg class="physics-diagram" viewBox="0 0 780 390" role="img" aria-label="Comparison of transverse wave and longitudinal compression wave">
        <text x="45" y="42">transverse</text><path class="main" d="M45 120 C105 35 165 35 225 120 S345 205 405 120 S525 35 585 120 S705 205 755 120"/>
        <line class="accent" x1="105" y1="120" x2="105" y2="55"/><polygon points="105,55 97,70 113,70" fill="#e34b55"/><text x="122" y="82">oscillation</text><text x="620" y="96">travel →</text>
        <text x="45" y="248">longitudinal</text><line class="axis" x1="45" y1="315" x2="750" y2="315"/>
        ${[70,82,94,106,118,210,250,290,380,392,404,416,428,520,560,600,690,702,714,726,738].map(x=>`<line class="main" x1="${x}" y1="282" x2="${x}" y2="348"/>`).join('')}
        <text x="74" y="372">compression</text><text x="235" y="372">rarefaction</text><text x="565" y="280">particle oscillation ↔</text>
      </svg>`
    },
    'doppler-source': {
      caption: 'Wavefronts bunch in front of an approaching source and spread behind it.',
      svg: `<svg class="physics-diagram" viewBox="0 0 780 350" role="img" aria-label="Moving sound source with compressed wavefronts in front and expanded wavefronts behind">
        <circle class="object" cx="410" cy="175" r="28"/><text x="402" y="182">S</text><line class="accent" x1="440" y1="175" x2="535" y2="175"/><polygon points="535,175 519,166 519,184" fill="#e34b55"/><text x="463" y="153">vₛ</text>
        <g fill="none" class="main"><circle cx="365" cy="175" r="65"/><circle cx="320" cy="175" r="120"/><circle cx="275" cy="175" r="175"/></g>
        <g fill="none" class="accent"><circle cx="430" cy="175" r="48"/><circle cx="450" cy="175" r="88"/><circle cx="470" cy="175" r="128"/></g>
        <text x="50" y="325">receding side: larger λ, lower f</text><text x="510" y="325">approaching side: smaller λ, higher f</text>
      </svg>`
    },
    'malus-law': {
      caption: 'Only the component parallel to the analyser axis is transmitted, giving I = I₀ cos²θ.',
      svg: `<svg class="physics-diagram" viewBox="0 0 740 340" role="img" aria-label="Plane polarised wave incident on analyser at angle theta">
        <line class="main" x1="65" y1="170" x2="280" y2="170"/><path class="main" d="M75 170 C110 85 145 85 180 170 S250 255 280 170"/><text x="75" y="72">plane-polarised I₀</text>
        <rect class="object" x="310" y="50" width="65" height="240" rx="8"/><line class="accent" x1="342" y1="245" x2="342" y2="85"/><text x="304" y="315">analyser</text>
        <line class="guide" x1="342" y1="170" x2="430" y2="110"/><path class="guide" d="M342 125 A45 45 0 0 1 378 143"/><text x="380" y="128">θ</text>
        <line class="main" x1="375" y1="170" x2="650" y2="170"/><path class="main" d="M385 170 C430 115 475 115 520 170 S610 225 650 170"/><text x="488" y="80">I = I₀ cos²θ</text>
      </svg>`
    },
    'stationary-wave': {
      caption: 'Adjacent nodes are λ/2 apart; the antinode lies λ/4 from either neighbouring node.',
      svg: `<svg class="physics-diagram" viewBox="0 0 760 330" role="img" aria-label="Stationary wave with nodes, antinodes and wavelength distances">
        <line class="axis" x1="60" y1="165" x2="700" y2="165"/><path class="main" d="M70 165 C130 55 190 55 250 165 C310 275 370 275 430 165 C490 55 550 55 610 165 C650 235 680 235 700 165"/>
        <path class="guide" d="M70 165 C130 275 190 275 250 165 C310 55 370 55 430 165 C490 275 550 275 610 165 C650 95 680 95 700 165"/>
        ${[70,250,430,610,700].map(x=>`<circle cx="${x}" cy="165" r="6" fill="#e34b55"/>`).join('')}
        <text x="53" y="146">node</text><text x="130" y="50">antinode</text><line class="accent" x1="70" y1="300" x2="250" y2="300"/><text x="145" y="323">λ/2</text>
      </svg>`
    },
    'diffraction-gap': {
      caption: 'A gap comparable with the wavelength produces strong spreading; a much wider gap produces little spreading.',
      svg: `<svg class="physics-diagram" viewBox="0 0 760 360" role="img" aria-label="Plane wavefronts diffracting through a narrow gap">
        ${[70,115,160,205].map(x=>`<line class="main" x1="${x}" y1="45" x2="${x}" y2="315"/>`).join('')}
        <line class="axis" x1="280" y1="30" x2="280" y2="135"/><line class="axis" x1="280" y1="225" x2="280" y2="330"/><text x="252" y="188">gap</text>
        <g fill="none" class="accent"><path d="M280 135 A90 90 0 0 1 280 225"/><path d="M280 90 A135 135 0 0 1 280 270"/><path d="M280 45 A180 180 0 0 1 280 315"/></g>
        <text x="55" y="342">plane wavefronts</text><text x="505" y="342">curved diffracted wavefronts</text>
      </svg>`
    },
    'double-slit': {
      caption: 'Young double-slit geometry: fringe spacing x increases with λ and D, and decreases with slit separation a.',
      svg: `<svg class="physics-diagram" viewBox="0 0 800 390" role="img" aria-label="Double slit experiment with slit separation a screen distance D and fringe spacing x">
        <line class="axis" x1="170" y1="45" x2="170" y2="345"/><line class="accent" x1="170" y1="150" x2="170" y2="165"/><line class="accent" x1="170" y1="225" x2="170" y2="240"/>
        <line class="axis" x1="680" y1="45" x2="680" y2="345"/><line class="main" x1="170" y1="157" x2="680" y2="188"/><line class="main" x1="170" y1="232" x2="680" y2="188"/>
        <line class="guide" x1="135" y1="157" x2="135" y2="232"/><text x="110" y="199">a</text><line class="guide" x1="170" y1="345" x2="680" y2="345"/><text x="415" y="372">D</text>
        <line class="accent" x1="680" y1="188" x2="680" y2="230"/><text x="696" y="213">x</text><text x="54" y="36">coherent light</text><text x="642" y="36">screen</text>
      </svg>`
    },
    'diffraction-grating': {
      caption: 'For order n at angle θ, adjacent-slit path difference is d sin θ = nλ.',
      svg: `<svg class="physics-diagram" viewBox="0 0 760 360" role="img" aria-label="Diffraction grating rays at angle theta with slit spacing d">
        <line class="axis" x1="160" y1="40" x2="160" y2="320"/>${[80,125,170,215,260].map(y=>`<line class="accent" x1="145" y1="${y}" x2="175" y2="${y}"/>`).join('')}
        <line class="guide" x1="160" y1="170" x2="690" y2="170"/><line class="main" x1="160" y1="170" x2="635" y2="72"/><line class="main" x1="160" y1="215" x2="635" y2="117"/>
        <path class="guide" d="M260 170 A100 100 0 0 0 258 150"/><text x="270" y="151">θ</text><line class="guide" x1="115" y1="170" x2="115" y2="215"/><text x="92" y="197">d</text>
        <text x="425" y="42">d sin θ = nλ</text>
      </svg>`
    },
    'drift-current': {
      caption: 'In time t, carriers in the cylinder of volume Avt cross the section, so I = Anvq.',
      svg: `<svg class="physics-diagram" viewBox="0 0 780 350" role="img" aria-label="Conductor showing charge carriers drifting through cross sectional area A">
        <path class="object" d="M120 100 H620 C670 100 670 250 620 250 H120 C70 250 70 100 120 100 Z"/><ellipse class="fluid" cx="120" cy="175" rx="48" ry="75"/><ellipse class="guide" cx="620" cy="175" rx="48" ry="75"/>
        ${[[165,135],[220,205],[280,150],[340,220],[405,125],[470,190],[535,155],[585,225]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#e34b55"/>`).join('')}
        <line class="main" x1="220" y1="285" x2="535" y2="285"/><polygon points="535,285 519,276 519,294" fill="#10233c"/><text x="340" y="315">drift distance = vt</text>
        <text x="53" y="65">cross-section A</text><text x="602" y="68">n carriers per m³</text><text x="280" y="45">charge crossing = n(Avt)q</text>
      </svg>`
    },
    'iv-characteristics': {
      caption: 'Required I–V shapes: ohmic conductor, heating filament lamp and semiconductor diode.',
      svg: `<svg class="physics-diagram" viewBox="0 0 900 340" role="img" aria-label="Current voltage characteristics for resistor filament lamp and diode">
        <g transform="translate(20,20)"><text x="90" y="20">metal conductor</text><line class="axis" x1="140" y1="45" x2="140" y2="285"/><line class="axis" x1="25" y1="165" x2="255" y2="165"/><line class="main" x1="55" y1="250" x2="225" y2="80"/><text x="236" y="183">V</text><text x="150" y="57">I</text></g>
        <g transform="translate(305,20)"><text x="102" y="20">filament lamp</text><line class="axis" x1="140" y1="45" x2="140" y2="285"/><line class="axis" x1="25" y1="165" x2="255" y2="165"/><path class="main" d="M45 265 C85 210 115 177 140 165 C165 153 195 120 235 65"/><text x="236" y="183">V</text><text x="150" y="57">I</text></g>
        <g transform="translate(590,20)"><text x="105" y="20">diode</text><line class="axis" x1="140" y1="45" x2="140" y2="285"/><line class="axis" x1="25" y1="165" x2="255" y2="165"/><path class="main" d="M35 171 C85 170 115 168 175 165 C205 162 218 135 224 68"/><text x="236" y="183">V</text><text x="150" y="57">I</text></g>
      </svg>`
    },
    'circuit-symbols': {
      caption: 'A compact recall sheet of the most frequently examined Cambridge circuit symbols; the full named set is listed above.',
      svg: `<svg class="physics-diagram" viewBox="0 0 900 500" role="img" aria-label="Common circuit symbols including cell resistor variable resistor thermistor LDR lamp diode LED meters and capacitor">
        <g transform="translate(45,55)"><line class="main" x1="0" y1="25" x2="55" y2="25"/><line class="axis" x1="55" y1="0" x2="55" y2="50"/><line class="axis" x1="75" y1="12" x2="75" y2="38"/><line class="main" x1="75" y1="25" x2="130" y2="25"/><text x="40" y="78">cell</text></g>
        <g transform="translate(250,55)"><line class="main" x1="0" y1="25" x2="38" y2="25"/><rect class="object" x="38" y="10" width="72" height="30"/><line class="main" x1="110" y1="25" x2="150" y2="25"/><text x="28" y="78">fixed resistor</text></g>
        <g transform="translate(500,55)"><line class="main" x1="0" y1="25" x2="38" y2="25"/><rect class="object" x="38" y="10" width="72" height="30"/><line class="accent" x1="115" y1="-8" x2="68" y2="52"/><polygon points="68,52 72,35 85,46" fill="#e34b55"/><line class="main" x1="110" y1="25" x2="150" y2="25"/><text x="19" y="78">variable resistor</text></g>
        <g transform="translate(735,55)"><line class="main" x1="0" y1="25" x2="38" y2="25"/><circle class="object" cx="75" cy="25" r="28"/><line class="axis" x1="55" y1="5" x2="95" y2="45"/><line class="axis" x1="95" y1="5" x2="55" y2="45"/><line class="main" x1="103" y1="25" x2="145" y2="25"/><text x="55" y="78">lamp</text></g>
        <g transform="translate(45,175)"><line class="main" x1="0" y1="25" x2="38" y2="25"/><rect class="object" x="38" y="10" width="72" height="30"/><line class="accent" x1="112" y1="2" x2="70" y2="50"/><line class="accent" x1="112" y1="2" x2="126" y2="2"/><line class="main" x1="110" y1="25" x2="150" y2="25"/><text x="38" y="78">thermistor</text></g>
        <g transform="translate(250,175)"><line class="main" x1="0" y1="25" x2="38" y2="25"/><rect class="object" x="38" y="10" width="72" height="30"/><line class="accent" x1="55" y1="-18" x2="67" y2="3"/><polygon points="67,3 54,-7 69,-11" fill="#e34b55"/><line class="accent" x1="83" y1="-18" x2="95" y2="3"/><polygon points="95,3 82,-7 97,-11" fill="#e34b55"/><line class="main" x1="110" y1="25" x2="150" y2="25"/><text x="56" y="78">LDR</text></g>
        <g transform="translate(500,175)"><line class="main" x1="0" y1="25" x2="50" y2="25"/><polygon points="50,3 50,47 93,25" fill="none" stroke="#10233c" stroke-width="4"/><line class="axis" x1="96" y1="2" x2="96" y2="48"/><line class="main" x1="96" y1="25" x2="145" y2="25"/><text x="53" y="78">diode</text></g>
        <g transform="translate(735,175)"><line class="main" x1="0" y1="25" x2="50" y2="25"/><polygon points="50,3 50,47 93,25" fill="none" stroke="#10233c" stroke-width="4"/><line class="axis" x1="96" y1="2" x2="96" y2="48"/><line class="main" x1="96" y1="25" x2="145" y2="25"/><line class="accent" x1="103" y1="3" x2="127" y2="-16"/><polygon points="127,-16 112,-12 122,0" fill="#e34b55"/><line class="accent" x1="113" y1="15" x2="137" y2="-4"/><polygon points="137,-4 122,0 132,12" fill="#e34b55"/><text x="60" y="78">LED</text></g>
        ${[['A',45],['V',250],['G',500]].map(([letter,x])=>`<g transform="translate(${x},315)"><line class="main" x1="0" y1="25" x2="45" y2="25"/><circle class="object" cx="75" cy="25" r="30"/><text x="65" y="34">${letter}</text><line class="main" x1="105" y1="25" x2="150" y2="25"/><text x="28" y="85">${letter==='A'?'ammeter':letter==='V'?'voltmeter':'galvanometer'}</text></g>`).join('')}
        <g transform="translate(735,315)"><line class="main" x1="0" y1="25" x2="55" y2="25"/><line class="axis" x1="55" y1="0" x2="55" y2="50"/><line class="axis" x1="78" y1="0" x2="78" y2="50"/><line class="main" x1="78" y1="25" x2="145" y2="25"/><text x="40" y="85">capacitor</text></g>
      </svg>`
    },
    'internal-resistance': {
      caption: 'A real source is an ideal e.m.f. ε in series with r: terminal p.d. V = ε − Ir.',
      svg: `<svg class="physics-diagram" viewBox="0 0 780 330" role="img" aria-label="Circuit containing emf internal resistance and external load">
        <line class="main" x1="90" y1="75" x2="690" y2="75"/><line class="main" x1="90" y1="75" x2="90" y2="255"/><line class="main" x1="690" y1="75" x2="690" y2="255"/><line class="main" x1="90" y1="255" x2="250" y2="255"/><line class="axis" x1="250" y1="220" x2="250" y2="290"/><line class="axis" x1="275" y1="235" x2="275" y2="275"/><line class="main" x1="275" y1="255" x2="365" y2="255"/><rect class="object" x="365" y="235" width="100" height="40"/><line class="main" x1="465" y1="255" x2="690" y2="255"/>
        <rect class="object" x="340" y="55" width="105" height="40"/><text x="380" y="82">R</text><text x="244" y="315">ε</text><text x="402" y="315">r</text>
        <text x="468" y="188">ε = IR + Ir</text><text x="468" y="215">V = ε − Ir</text>
      </svg>`
    },
    'potential-divider': {
      caption: 'For output across R₂, Vout = Vin R₂/(R₁ + R₂); swapping the sensor changes whether output rises or falls.',
      svg: `<svg class="physics-diagram" viewBox="0 0 760 350" role="img" aria-label="Two resistor potential divider with output across lower resistor">
        <line class="main" x1="130" y1="45" x2="560" y2="45"/><line class="main" x1="130" y1="305" x2="560" y2="305"/><line class="main" x1="350" y1="45" x2="350" y2="85"/><rect class="object" x="320" y="85" width="60" height="75"/><line class="main" x1="350" y1="160" x2="350" y2="190"/><rect class="object" x="320" y="190" width="60" height="75"/><line class="main" x1="350" y1="265" x2="350" y2="305"/>
        <circle cx="350" cy="175" r="6" fill="#e34b55"/><line class="accent" x1="350" y1="175" x2="590" y2="175"/><line class="accent" x1="350" y1="305" x2="590" y2="305"/>
        <text x="398" y="127">R₁</text><text x="398" y="232">R₂</text><text x="600" y="245">Vout</text><text x="80" y="180">Vin</text><text x="438" y="330">Vout = Vin R₂/(R₁ + R₂)</text>
      </svg>`
    },
    'potentiometer-null': {
      caption: 'At the balance length l, the galvanometer reads zero and the test source supplies no current.',
      svg: `<svg class="physics-diagram" viewBox="0 0 800 380" role="img" aria-label="Potentiometer wire with sliding contact galvanometer and test cell at null balance">
        <line class="main" x1="90" y1="105" x2="690" y2="105"/><circle cx="90" cy="105" r="6" fill="#10233c"/><circle cx="690" cy="105" r="6" fill="#10233c"/><text x="290" y="82">uniform potentiometer wire</text>
        <line class="accent" x1="90" y1="135" x2="430" y2="135"/><text x="245" y="160">balance length l</text><line class="main" x1="430" y1="105" x2="430" y2="220"/><circle class="object" cx="430" cy="255" r="34"/><text x="420" y="265">G</text>
        <line class="main" x1="430" y1="289" x2="430" y2="330"/><line class="axis" x1="395" y1="330" x2="465" y2="330"/><line class="axis" x1="410" y1="350" x2="450" y2="350"/><line class="main" x1="395" y1="330" x2="90" y2="330"/><line class="main" x1="90" y1="330" x2="90" y2="105"/><text x="485" y="263">G = 0 at balance</text><text x="470" y="346">test source</text>
      </svg>`
    },
    'rutherford-scattering': {
      caption: 'Most α-particles pass through; rare large deflections reveal a tiny dense positive nucleus.',
      svg: `<svg class="physics-diagram" viewBox="0 0 820 380" role="img" aria-label="Alpha particle scattering through thin foil with straight small angle and backscattered paths">
        <rect class="object" x="420" y="40" width="20" height="300"/><text x="397" y="365">thin foil</text><circle cx="430" cy="190" r="11" fill="#e34b55"/><text x="449" y="194">small positive nucleus</text>
        ${[110,145,225,265].map(y=>`<line class="main" x1="65" y1="${y}" x2="750" y2="${y}"/>`).join('')}
        <path class="accent" d="M65 185 C290 185 375 185 425 165 C490 130 585 75 730 55"/><path class="accent" d="M65 200 C290 200 385 205 417 195 C375 230 255 300 95 320"/>
        <text x="70" y="78">α beam</text><text x="585" y="115">small deflection</text><text x="120" y="345">rare large-angle/back scattering</text>
      </svg>`
    },
    'particle-families': {
      caption: 'Hadrons are composite quark particles; leptons such as electrons and neutrinos are fundamental.',
      svg: `<svg class="physics-diagram" viewBox="0 0 820 390" role="img" aria-label="Particle classification into hadrons baryons mesons and leptons">
        <rect class="object" x="315" y="25" width="190" height="60" rx="10"/><text x="360" y="62">particles</text>
        <line class="main" x1="410" y1="85" x2="220" y2="145"/><line class="main" x1="410" y1="85" x2="610" y2="145"/>
        <rect class="object" x="110" y="145" width="220" height="65" rx="10"/><text x="175" y="183">hadrons</text><rect class="object" x="510" y="145" width="200" height="65" rx="10"/><text x="565" y="183">leptons</text>
        <line class="main" x1="220" y1="210" x2="130" y2="270"/><line class="main" x1="220" y1="210" x2="310" y2="270"/>
        <rect class="object" x="45" y="270" width="170" height="80" rx="10"/><text x="86" y="302">baryon</text><text x="75" y="330">3 quarks</text><rect class="object" x="235" y="270" width="170" height="80" rx="10"/><text x="280" y="302">meson</text><text x="253" y="330">q + antiquark</text>
        <text x="535" y="270">electron e⁻</text><text x="535" y="310">neutrino ν</text><text x="535" y="345">fundamental</text>
      </svg>`
    }
  });
})();
