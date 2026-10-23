window.PHYSICS_NOTES = [
  {
    id: "section-physics-1-1",
    nav: "1.1",
    title: "Physical quantities",
    kicker: "Chapter 1 · Physical quantities and units",
    entries: [
      {
        id: "physics-1-1-1",
        code: "1.1.1",
        wording: "understand that all physical quantities consist of a numerical magnitude and a unit",
        details: [
          { label: "Definition", title: "What makes a physical quantity", bullets: [
            "A physical quantity is written as a <strong>numerical magnitude × unit</strong>.",
            "The <strong>magnitude</strong> states how large the quantity is; the <strong>unit</strong> states the agreed standard used for comparison.",
            "Example: <strong>5.0 m</strong> contains the magnitude <strong>5.0</strong> and the unit <strong>metre (m)</strong>. A number without its required unit is incomplete."
          ]}
        ],
        note: "Exam habit: include the unit at every working stage and in the final answer unless the question explicitly asks for a dimensionless quantity."
      },
      {
        id: "physics-1-1-2",
        code: "1.1.2",
        wording: "make reasonable estimates of physical quantities included within the syllabus",
        details: [
          { label: "Method", title: "Producing a defensible estimate", bullets: [
            "Choose a familiar <strong>reference value</strong>, compare the unknown quantity with it and state the result to a sensible <strong>order of magnitude</strong>.",
            "Convert to a suitable <strong>SI unit</strong> before comparing or calculating.",
            "Check that the result lies between plausible <strong>upper and lower bounds</strong>; unnecessary significant figures do not make an estimate more reliable."
          ]},
          { label: "Benchmarks", title: "Useful scale checks", bullets: [
            "Adult height ≈ <strong>1.7 m</strong>; walking speed ≈ <strong>1–2 m s<sup>−1</sup></strong>; adult mass ≈ <strong>70 kg</strong>.",
            "Acceleration of free fall near Earth ≈ <strong>9.8 m s<sup>−2</sup></strong> (often estimated as 10 m s<sup>−2</sup>).",
            "A sheet of paper is about <strong>10<sup>−4</sup> m</strong> thick; a classroom is a few <strong>metres</strong> across."
          ]}
        ],
        note: "An estimate is judged by its reasoning and scale, not by matching an exact measured value."
      }
    ]
  },
  {
    id: "section-physics-1-2",
    nav: "1.2",
    title: "SI units",
    kicker: "Chapter 1 · Physical quantities and units",
    entries: [
      {
        id: "physics-1-2-1",
        code: "1.2.1",
        wording: "recall the following SI base quantities and their units: mass (kg), length (m), time (s), current (A), temperature (K)",
        table: {
          headers: ["SI base quantity", "SI base unit", "Symbol"],
          rows: [
            ["Mass", "kilogram", "<strong>kg</strong>"],
            ["Length", "metre", "<strong>m</strong>"],
            ["Time", "second", "<strong>s</strong>"],
            ["Electric current", "ampere", "<strong>A</strong>"],
            ["Thermodynamic temperature", "kelvin", "<strong>K</strong>"]
          ]
        },
        details: [
          { label: "Recall", title: "Base quantities are independent", bullets: [
            "A <strong>base quantity</strong> is not defined as a combination of other physical quantities.",
            "Unit symbols are case-sensitive: <strong>kg, m, s</strong> are lower-case, while <strong>A</strong> and <strong>K</strong> are upper-case."
          ]}
        ],
        note: "Do not write °K: the SI unit is kelvin, symbol K."
      },
      {
        id: "physics-1-2-2",
        code: "1.2.2",
        wording: "express derived units as products or quotients of the SI base units and use the derived units for quantities listed in this syllabus as appropriate",
        table: {
          headers: ["Quantity", "Usual unit", "In SI base units"],
          rows: [
            ["Velocity", "m s<sup>−1</sup>", "<strong>m s<sup>−1</sup></strong>"],
            ["Acceleration", "m s<sup>−2</sup>", "<strong>m s<sup>−2</sup></strong>"],
            ["Force", "N", "<strong>kg m s<sup>−2</sup></strong>"],
            ["Momentum", "kg m s<sup>−1</sup>", "<strong>kg m s<sup>−1</sup></strong>"],
            ["Energy / work", "J", "<strong>kg m<sup>2</sup> s<sup>−2</sup></strong>"],
            ["Power", "W", "<strong>kg m<sup>2</sup> s<sup>−3</sup></strong>"],
            ["Pressure", "Pa", "<strong>kg m<sup>−1</sup> s<sup>−2</sup></strong>"],
            ["Density", "kg m<sup>−3</sup>", "<strong>kg m<sup>−3</sup></strong>"]
          ]
        },
        details: [
          { label: "Method", title: "Derive rather than memorise", bullets: [
            "Start with the defining equation and replace every quantity by its unit; for example, <strong>F = ma</strong> gives kg × m s<sup>−2</sup> = <strong>kg m s<sup>−2</sup></strong>.",
            "For pressure, <strong>p = F/A</strong>, so N m<sup>−2</sup> = kg m s<sup>−2</sup> ÷ m<sup>2</sup> = <strong>kg m<sup>−1</sup> s<sup>−2</sup></strong>."
          ]}
        ],
        note: "A named derived unit and its base-unit form describe the same unit: 1 N = 1 kg m s⁻²."
      },
      {
        id: "physics-1-2-3",
        code: "1.2.3",
        wording: "use SI base units to check the homogeneity of physical equations",
        details: [
          { label: "Principle", title: "Condition for a homogeneous equation", bullets: [
            "Every term that is added or subtracted must have the <strong>same base units</strong>.",
            "The complete left-hand side and right-hand side must therefore have the <strong>same dimensions</strong>."
          ]},
          { label: "Example", title: "Check s = ut + ½at²", bullets: [
            "<strong>s</strong> has unit m.",
            "<strong>ut</strong> has unit (m s<sup>−1</sup>)(s) = m.",
            "<strong>at²</strong> has unit (m s<sup>−2</sup>)(s<sup>2</sup>) = m; the numerical factor ½ has no unit, so the equation is <strong>homogeneous</strong>."
          ]}
        ],
        note: "Matching units is necessary but does not prove an equation is physically correct; a dimensionless numerical factor or a wrong sign can remain undetected."
      },
      {
        id: "physics-1-2-4",
        code: "1.2.4",
        wording: "recall and use the following prefixes and their symbols to indicate decimal submultiples or multiples of both base and derived units: pico (p), nano (n), micro (μ), milli (m), centi (c), deci (d), kilo (k), mega (M), giga (G), tera (T)",
        table: {
          headers: ["Prefix", "Symbol", "Multiplier", "Prefix", "Symbol", "Multiplier"],
          rows: [
            ["pico", "<strong>p</strong>", "10<sup>−12</sup>", "deci", "<strong>d</strong>", "10<sup>−1</sup>"],
            ["nano", "<strong>n</strong>", "10<sup>−9</sup>", "kilo", "<strong>k</strong>", "10<sup>3</sup>"],
            ["micro", "<strong>μ</strong>", "10<sup>−6</sup>", "mega", "<strong>M</strong>", "10<sup>6</sup>"],
            ["milli", "<strong>m</strong>", "10<sup>−3</sup>", "giga", "<strong>G</strong>", "10<sup>9</sup>"],
            ["centi", "<strong>c</strong>", "10<sup>−2</sup>", "tera", "<strong>T</strong>", "10<sup>12</sup>"]
          ]
        },
        details: [
          { label: "Use", title: "Convert the prefix before calculating", bullets: [
            "Replace the prefix with its power of ten: <strong>4.7 μs = 4.7 × 10<sup>−6</sup> s</strong> and <strong>2.5 MW = 2.5 × 10<sup>6</sup> W</strong>.",
            "When a prefixed unit is raised to a power, the multiplier is also raised: <strong>1 cm² = (10<sup>−2</sup> m)² = 10<sup>−4</sup> m²</strong>.",
            "Symbols are case-sensitive: <strong>m</strong> is milli, while <strong>M</strong> is mega."
          ]}
        ]
      }
    ]
  },
  {
    id: "section-physics-1-3",
    nav: "1.3",
    title: "Errors and uncertainties",
    kicker: "Chapter 1 · Physical quantities and units",
    entries: [
      {
        id: "physics-1-3-1",
        code: "1.3.1",
        wording: "understand and explain the effects of systematic errors (including zero errors) and random errors in measurements",
        table: {
          headers: ["Error", "Effect on readings", "How to identify / reduce"],
          rows: [
            ["Systematic error", "Readings are shifted in the <strong>same direction</strong>; repeating does not remove it.", "Calibrate against a standard, check method and apply a correction where justified."],
            ["Zero error", "Instrument reads a <strong>non-zero value when the true input is zero</strong>.", "Record the zero reading and subtract/add the correct zero correction."],
            ["Random error", "Readings show <strong>unpredictable scatter</strong> on either side of a mean.", "Repeat, calculate a mean, improve resolution and control changing conditions."]
          ]
        },
        details: [
          { label: "Effect", title: "What each error changes", bullets: [
            "A <strong>systematic error</strong> can make a result consistently too high or too low, reducing <strong>accuracy</strong>.",
            "A <strong>random error</strong> increases spread and therefore uncertainty, reducing <strong>precision</strong>.",
            "Taking more readings and averaging reduces the effect of <strong>random</strong> variation but does not correct a systematic bias."
          ]}
        ],
        note: "State a source and its effect. ‘Human error’ alone is too vague for a credited explanation."
      },
      {
        id: "physics-1-3-2",
        code: "1.3.2",
        wording: "understand the distinction between precision and accuracy",
        table: {
          headers: ["Term", "Creditworthy definition", "Main limitation"],
          rows: [
            ["Accuracy", "How close a measured value is to the <strong>true or accepted value</strong>.", "Usually limited by systematic error as well as random uncertainty."],
            ["Precision", "How close <strong>repeated readings are to one another</strong>, or how small their spread is.", "Mainly limited by random error and instrument resolution."]
          ]
        },
        details: [
          { label: "Distinction", title: "Precise does not necessarily mean accurate", bullets: [
            "A group of tightly clustered readings can be <strong>precise but inaccurate</strong> if they all share the same calibration error.",
            "A set centred on the accepted value but widely scattered may be accurate in its <strong>mean</strong> yet individually imprecise."
          ]}
        ]
      },
      {
        id: "physics-1-3-3",
        code: "1.3.3",
        wording: "assess the uncertainty in a derived quantity by simple addition of absolute or percentage uncertainties",
        table: {
          headers: ["Operation", "Uncertainty rule"],
          rows: [
            ["Q = A ± B", "Add <strong>absolute uncertainties</strong>: ΔQ = ΔA + ΔB."],
            ["Q = AB or A/B", "Add <strong>fractional or percentage uncertainties</strong>."],
            ["Q = A<sup>n</sup>", "Multiply the percentage uncertainty in A by <strong>|n|</strong>."],
            ["Convert to absolute", "ΔQ = Q × fractional uncertainty; quote as <strong>Q ± ΔQ</strong>."]
          ]
        },
        details: [
          { label: "Example", title: "Area from two measured lengths", bullets: [
            "For <strong>A = lw</strong>, if l has 2% uncertainty and w has 3% uncertainty, A has <strong>2% + 3% = 5%</strong> uncertainty.",
            "If the calculated area is 0.80 m², the absolute uncertainty is 0.05 × 0.80 = <strong>0.04 m²</strong>, so A = <strong>(0.80 ± 0.04) m²</strong>."
          ]}
        ],
        note: "Keep extra figures during working; round the uncertainty sensibly first, then round the measured value to the same decimal place."
      }
    ]
  },
  {
    id: "section-physics-1-4",
    nav: "1.4",
    title: "Scalars and vectors",
    kicker: "Chapter 1 · Physical quantities and units",
    entries: [
      {
        id: "physics-1-4-1",
        code: "1.4.1",
        wording: "understand the difference between scalar and vector quantities and give examples of scalar and vector quantities included in the syllabus",
        table: {
          headers: ["Type", "Definition", "Examples"],
          rows: [
            ["Scalar", "Has <strong>magnitude only</strong>.", "distance, speed, mass, time, temperature, energy, power, density, pressure"],
            ["Vector", "Has both <strong>magnitude and direction</strong>.", "displacement, velocity, acceleration, force, weight, momentum, electric field strength"]
          ]
        },
        details: [
          { label: "Exam test", title: "Direction is part of a vector value", bullets: [
            "Two vectors with equal magnitudes but opposite directions are <strong>not equal</strong>.",
            "A vector may be represented by an arrow: its length shows magnitude and its arrowhead shows direction."
          ]}
        ],
        note: "Use the precise pair speed/velocity and distance/displacement to show the scalar–vector distinction."
      },
      {
        id: "physics-1-4-2",
        code: "1.4.2",
        wording: "add and subtract coplanar vectors",
        details: [
          { label: "Addition", title: "Head-to-tail or parallelogram method", bullets: [
            "Draw vectors to scale with the second vector’s tail at the first vector’s head; the <strong>resultant</strong> runs from the first tail to the final head.",
            "For two vectors drawn from the same point, complete a <strong>parallelogram</strong>; the diagonal from the common point is the resultant."
          ]},
          { label: "Subtraction", title: "Add the negative vector", bullets: [
            "To calculate <strong>A − B</strong>, reverse B to form <strong>−B</strong>, then add A + (−B).",
            "Resolve into perpendicular components when numerical angles or magnitudes are required."
          ]}
        ],
        visual: "vector-addition"
      },
      {
        id: "physics-1-4-3",
        code: "1.4.3",
        wording: "represent a vector as two perpendicular components",
        details: [
          { label: "Resolution", title: "Components at right angles", bullets: [
            "If vector F makes angle θ measured from the positive horizontal axis, <strong>F<sub>x</sub> = F cos θ</strong> and <strong>F<sub>y</sub> = F sin θ</strong>.",
            "Attach a sign to each component from its direction; for example, left and down may be negative.",
            "Recover the vector using <strong>F = √(F<sub>x</sub>² + F<sub>y</sub>²)</strong> and <strong>tan θ = F<sub>y</sub>/F<sub>x</sub></strong>, with the quadrant checked."
          ]}
        ],
        visual: "vector-components",
        note: "The sine/cosine choice depends on where θ is measured; identify the adjacent and opposite sides instead of memorising a diagram."
      }
    ]
  },
  {
    id: "section-physics-2-1",
    nav: "2.1",
    title: "Equations of motion",
    kicker: "Chapter 2 · Kinematics",
    entries: [
      {
        id: "physics-2-1-1",
        code: "2.1.1",
        wording: "define and use distance, displacement, speed, velocity and acceleration",
        table: {
          headers: ["Quantity", "Creditworthy definition", "Type / equation"],
          rows: [
            ["Distance", "Total <strong>path length</strong> travelled.", "scalar"],
            ["Displacement", "Change in position in a stated <strong>direction</strong>.", "vector"],
            ["Speed", "Rate of change of <strong>distance</strong>.", "speed = distance/time"],
            ["Velocity", "Rate of change of <strong>displacement</strong>.", "v = Δs/Δt; vector"],
            ["Acceleration", "Rate of change of <strong>velocity</strong>.", "a = Δv/Δt; vector"]
          ]
        },
        details: [
          { label: "Use", title: "Average and instantaneous values", bullets: [
            "An <strong>average</strong> value uses a finite interval; an <strong>instantaneous</strong> value applies at one moment and is obtained from a tangent gradient on a graph.",
            "Negative velocity means motion in the chosen negative direction; negative acceleration does not automatically mean slowing down."
          ]}
        ]
      },
      {
        id: "physics-2-1-2",
        code: "2.1.2",
        wording: "use graphical methods to represent distance, displacement, speed, velocity and acceleration",
        details: [
          { label: "Axes", title: "Choose quantities and units explicitly", bullets: [
            "Put <strong>time on the horizontal axis</strong> and the motion quantity, with unit, on the vertical axis.",
            "A displacement–time graph may rise or fall; a distance–time graph cannot decrease because total path length cannot be undone.",
            "A velocity–time graph may cross the time axis; the sign shows direction. A speed–time graph is never negative."
          ]},
          { label: "Interpretation", title: "Match shape to motion", bullets: [
            "A straight displacement–time line has <strong>constant velocity</strong>; increasing steepness means increasing speed.",
            "A horizontal velocity–time line has <strong>constant velocity</strong>; a straight sloping line has constant acceleration."
          ]}
        ],
        visual: "motion-graphs"
      },
      {
        id: "physics-2-1-3",
        code: "2.1.3",
        wording: "determine displacement from the area under a velocity–time graph",
        details: [
          { label: "Rule", title: "Signed area gives displacement", bullets: [
            "Because v = Δs/Δt, a strip has displacement vΔt; summing strips gives the <strong>area between the velocity curve and time axis</strong>.",
            "Area above the axis is positive and area below is negative, according to the chosen direction.",
            "Total <strong>distance</strong> is found by adding the magnitudes of all areas instead of cancelling negative areas."
          ]},
          { label: "Calculation", title: "Use geometrical areas where possible", bullets: [
            "Split a piecewise-linear graph into rectangles, triangles or trapezia and retain the correct <strong>sign</strong> for each region."
          ]}
        ]
      },
      {
        id: "physics-2-1-4",
        code: "2.1.4",
        wording: "determine velocity using the gradient of a displacement–time graph",
        details: [
          { label: "Rule", title: "v = gradient of an s–t graph", bullets: [
            "Average velocity over an interval is <strong>Δs/Δt</strong>, the gradient of the chord joining the two points.",
            "Instantaneous velocity is the gradient of a <strong>tangent</strong> to the curve at that time.",
            "Use a large tangent triangle and include units: displacement/time = <strong>m s<sup>−1</sup></strong>."
          ]}
        ],
        note: "A horizontal displacement–time line has zero velocity; a negative gradient represents velocity in the negative direction."
      },
      {
        id: "physics-2-1-5",
        code: "2.1.5",
        wording: "determine acceleration using the gradient of a velocity–time graph",
        details: [
          { label: "Rule", title: "a = gradient of a v–t graph", bullets: [
            "Average acceleration over an interval is <strong>Δv/Δt</strong>.",
            "Instantaneous acceleration is the gradient of the <strong>tangent</strong> at the required time.",
            "The gradient unit is (m s<sup>−1</sup>)/s = <strong>m s<sup>−2</sup></strong>."
          ]}
        ],
        note: "A zero gradient means constant velocity, not necessarily zero velocity."
      },
      {
        id: "physics-2-1-6",
        code: "2.1.6",
        wording: "derive, from the definitions of velocity and acceleration, equations that represent uniformly accelerated motion in a straight line",
        table: {
          headers: ["Equation", "Derivation idea"],
          rows: [
            ["<strong>v = u + at</strong>", "From a = (v − u)/t."],
            ["<strong>s = ½(u + v)t</strong>", "Area under the straight-line velocity–time graph = mean velocity × time."],
            ["<strong>s = ut + ½at²</strong>", "Substitute v = u + at into s = ½(u + v)t."],
            ["<strong>s = vt − ½at²</strong>", "Substitute u = v − at into s = ½(u + v)t."],
            ["<strong>v² = u² + 2as</strong>", "Eliminate t using v − u = at and s = ½(u + v)t."]
          ]
        },
        details: [
          { label: "Conditions", title: "When these equations are valid", bullets: [
            "Acceleration must be <strong>constant</strong> and motion must be along a <strong>straight line</strong>.",
            "Use one sign convention throughout: u, v, a and s are signed components along the selected axis."
          ]}
        ],
        visual: "suvat-graph"
      },
      {
        id: "physics-2-1-7",
        code: "2.1.7",
        wording: "solve problems using equations that represent uniformly accelerated motion in a straight line, including the motion of bodies falling in a uniform gravitational field without air resistance",
        details: [
          { label: "Method", title: "SUVAT problem routine", bullets: [
            "Choose and state a <strong>positive direction</strong>, then list the known values of s, u, v, a and t with signs.",
            "Select an equation containing the known quantities and the one unknown; substitute only after the equation is chosen.",
            "Check that acceleration is <strong>uniform</strong> and that the calculated sign and unit match the physical motion."
          ]},
          { label: "Free fall", title: "Uniform gravitational field without air resistance", bullets: [
            "Use a constant acceleration of magnitude <strong>g = 9.81 m s<sup>−2</sup></strong> directed vertically downward.",
            "If upward is positive, <strong>a = −g</strong>; at the highest point v = 0 for an instant but acceleration remains −g.",
            "All masses have the same free-fall acceleration when air resistance is neglected."
          ]}
        ]
      },
      {
        id: "physics-2-1-8",
        code: "2.1.8",
        wording: "describe an experiment to determine the acceleration of free fall using a falling object",
        details: [
          { label: "Apparatus", title: "Falling-ball timing method", bullets: [
            "Hold a small dense ball with an <strong>electromagnet</strong> at a measured vertical height h above a trapdoor or detector.",
            "Switching off the electromagnet releases the ball and starts an <strong>electronic timer</strong>; impact or interruption of a lower light gate stops it.",
            "Measure h from the ball’s release position to the detection position and record fall time t."
          ]},
          { label: "Processing", title: "Obtain g from a graph", bullets: [
            "Release from rest, so <strong>h = ½gt²</strong> when air resistance is negligible.",
            "Repeat at several heights and plot <strong>h against t²</strong>; gradient = g/2, so <strong>g = 2 × gradient</strong>.",
            "Repeat readings and average, use a large range of h, and use a small dense ball plus electronic timing to reduce random timing and drag effects."
          ]}
        ],
        visual: "freefall-experiment",
        note: "A single h/t measurement is weaker than a multi-point graph: a graph reveals anomalies and reduces the influence of random uncertainty."
      },
      {
        id: "physics-2-1-9",
        code: "2.1.9",
        wording: "describe and explain motion due to a uniform velocity in one direction and a uniform acceleration in a perpendicular direction",
        details: [
          { label: "Horizontal", title: "Uniform velocity component", bullets: [
            "With air resistance neglected, there is <strong>no horizontal resultant force</strong>, so horizontal acceleration is zero and horizontal velocity stays constant.",
            "Horizontal displacement is <strong>x = u<sub>x</sub>t</strong>."
          ]},
          { label: "Vertical", title: "Uniformly accelerated component", bullets: [
            "Gravity provides constant vertical acceleration <strong>g downward</strong>, so the vertical velocity changes uniformly.",
            "The horizontal and vertical motions share the same <strong>time</strong> but can be analysed independently; their combination gives a <strong>parabolic path</strong>."
          ]}
        ],
        visual: "projectile-motion",
        note: "At the top of a projectile’s path its vertical velocity is zero, but its horizontal velocity remains and its acceleration is still g downward."
      }
    ]
  },
  {
    id: "section-physics-3-1",
    nav: "3.1",
    title: "Momentum and Newton’s laws of motion",
    kicker: "Chapter 3 · Dynamics",
    intro: "An understanding of forces from Cambridge IGCSE/O Level Physics or equivalent is assumed.",
    entries: [
      {
        id: "physics-3-1-1",
        code: "3.1.1",
        wording: "understand that mass is the property of an object that resists change in motion",
        details: [
          { label: "Definition", title: "Mass as inertia", bullets: [
            "<strong>Inertia</strong> is the tendency of an object to resist a change in its velocity.",
            "Mass is a measure of inertia: for the same resultant force, a larger mass has a <strong>smaller acceleration</strong> because a = F/m.",
            "Mass is a scalar measured in <strong>kilograms (kg)</strong> and does not change when the object moves to a different gravitational field."
          ]}
        ],
        note: "Do not define mass as ‘the amount of matter’ when the question is testing dynamics; link it to resistance to acceleration."
      },
      {
        id: "physics-3-1-2",
        code: "3.1.2",
        wording: "recall F = ma and solve problems using it, understanding that acceleration and resultant force are always in the same direction",
        details: [
          { label: "Equation", title: "Apply the resultant force", bullets: [
            "For constant mass, <strong>ΣF = ma</strong>, where ΣF is the vector sum of all forces acting on the object.",
            "The acceleration is in the <strong>same direction as the resultant force</strong>, not necessarily the direction of motion.",
            "Resolve forces along chosen perpendicular axes, find the resultant on each axis, then apply ΣF<sub>x</sub> = ma<sub>x</sub> and ΣF<sub>y</sub> = ma<sub>y</sub>."
          ]},
          { label: "Special case", title: "Zero resultant force", bullets: [
            "If ΣF = 0, then a = 0: the object is either at rest or moving with <strong>constant velocity</strong>."
          ]}
        ],
        visual: "newton-resultant"
      },
      {
        id: "physics-3-1-3",
        code: "3.1.3",
        wording: "define and use linear momentum as the product of mass and velocity",
        details: [
          { label: "Definition", title: "Linear momentum", bullets: [
            "Linear momentum is the product of mass and velocity: <strong>p = mv</strong>.",
            "Momentum is a <strong>vector</strong> in the same direction as velocity, with SI unit <strong>kg m s<sup>−1</sup></strong> (equivalently N s).",
            "Choose a positive direction and attach signs to velocities when calculating total momentum."
          ]}
        ],
        note: "Objects moving in opposite directions have momenta with opposite signs."
      },
      {
        id: "physics-3-1-4",
        code: "3.1.4",
        wording: "define and use force as rate of change of momentum",
        details: [
          { label: "Definition", title: "Newton’s second law in momentum form", bullets: [
            "Resultant force is the <strong>rate of change of momentum</strong>: <strong>F = Δp/Δt</strong> (or dp/dt).",
            "Force acts in the direction of the <strong>change in momentum</strong>.",
            "For constant mass, Δp = mΔv, so F = mΔv/Δt = <strong>ma</strong>."
          ]},
          { label: "Impulse", title: "Force acting over a time", bullets: [
            "Rearranging gives <strong>FΔt = Δp</strong> for a constant or mean force; the impulse equals the change in momentum.",
            "For the same Δp, increasing the collision time reduces the <strong>average force</strong>."
          ]}
        ]
      },
      {
        id: "physics-3-1-5",
        code: "3.1.5",
        wording: "state and apply each of Newton’s laws of motion",
        table: {
          headers: ["Law", "Creditworthy statement", "Application clue"],
          rows: [
            ["First", "An object remains at rest or continues with <strong>constant velocity in a straight line</strong> unless acted on by a resultant external force.", "ΣF = 0 ⇒ a = 0."],
            ["Second", "The resultant force is proportional to the <strong>rate of change of momentum</strong> and acts in the same direction.", "F = Δp/Δt; for constant mass, F = ma."],
            ["Third", "When object A exerts a force on B, B simultaneously exerts an <strong>equal-magnitude, opposite-direction force</strong> on A.", "The pair acts on different objects and is the same interaction type."]
          ]
        },
        details: [
          { label: "Third law", title: "How to identify a genuine force pair", bullets: [
            "Name both bodies: ‘force of A on B’ and ‘force of B on A’. The forces are equal and opposite, simultaneous, and act on <strong>different objects</strong>.",
            "Weight and normal contact force on one stationary object are not a third-law pair; both act on the <strong>same object</strong>."
          ]}
        ]
      },
      {
        id: "physics-3-1-6",
        code: "3.1.6",
        wording: "describe and use the concept of weight as the effect of a gravitational field on a mass and recall that the weight of an object is equal to the product of its mass and the acceleration of free fall",
        details: [
          { label: "Definition", title: "Weight is a force", bullets: [
            "Weight is the <strong>gravitational force</strong> acting on a mass.",
            "<strong>W = mg</strong>, where W is in newtons, m is in kilograms and g is the local acceleration of free fall / gravitational field strength in N kg<sup>−1</sup>.",
            "Weight acts towards the centre of the attracting body; <strong>mass remains constant</strong> but weight changes if g changes."
          ]}
        ],
        note: "A balance calibrated in kilograms infers mass from weight; newton is the unit of weight."
      }
    ]
  },
  {
    id: "section-physics-3-2",
    nav: "3.2",
    title: "Non-uniform motion",
    kicker: "Chapter 3 · Dynamics",
    entries: [
      {
        id: "physics-3-2-1",
        code: "3.2.1",
        wording: "show a qualitative understanding of frictional forces and viscous/drag forces including air resistance (no treatment of the coefficients of friction and viscosity is required, and a simple model of drag force increasing as speed increases is sufficient)",
        table: {
          headers: ["Force", "Where it acts", "Direction / behaviour"],
          rows: [
            ["Friction", "Between surfaces in contact.", "Opposes relative motion or the tendency to slide."],
            ["Viscous / drag force", "On an object moving through a fluid such as air or water.", "Opposes motion relative to the fluid and generally <strong>increases as speed increases</strong>."],
            ["Energy effect", "For either resistive force.", "Mechanical energy is transferred to <strong>thermal/internal energy</strong> and sometimes sound."]
          ]
        },
        details: [
          { label: "Qualitative model", title: "Link changing speed to changing resultant force", bullets: [
            "At low speed, drag is small; as speed rises, drag rises, so the resultant forward or downward force becomes smaller.",
            "A resistive force acts opposite to the object’s velocity <strong>relative to the surrounding fluid or surface</strong>."
          ]}
        ],
        note: "This syllabus point requires a qualitative speed–drag link; coefficients of friction and viscosity are not required."
      },
      {
        id: "physics-3-2-2",
        code: "3.2.2",
        wording: "describe and explain qualitatively the motion of objects in a uniform gravitational field with air resistance",
        details: [
          { label: "Release", title: "Weight initially dominates", bullets: [
            "At release from rest, air resistance is zero or negligible, so the resultant force is approximately <strong>weight downward</strong> and acceleration is approximately g."
          ]},
          { label: "Falling faster", title: "Acceleration decreases", bullets: [
            "As speed increases, <strong>air resistance increases</strong> while weight remains constant.",
            "The downward resultant force decreases, so downward acceleration decreases even though speed is still increasing."
          ]},
          { label: "Terminal", title: "Forces balance", bullets: [
            "Eventually air resistance equals weight, so resultant force and acceleration are zero; the object continues at <strong>constant terminal velocity</strong>."
          ]}
        ],
        visual: "terminal-velocity"
      },
      {
        id: "physics-3-2-3",
        code: "3.2.3",
        wording: "understand that objects moving against a resistive force may reach a terminal (constant) velocity",
        details: [
          { label: "Condition", title: "Terminal velocity", bullets: [
            "Terminal velocity is reached when the driving force, such as weight, equals the total <strong>resistive force</strong>.",
            "The resultant force is zero, so <strong>a = 0</strong> and velocity is constant by Newton’s first/second law.",
            "Terminal velocity is not necessarily the same for different objects: it depends on factors affecting weight and drag, such as mass, shape, area and the fluid."
          ]}
        ],
        note: "At terminal velocity the forces are balanced; neither force has disappeared."
      }
    ]
  },
  {
    id: "section-physics-3-3",
    nav: "3.3",
    title: "Linear momentum and its conservation",
    kicker: "Chapter 3 · Dynamics",
    entries: [
      {
        id: "physics-3-3-1",
        code: "3.3.1",
        wording: "state the principle of conservation of momentum",
        details: [
          { label: "Principle", title: "Full exam statement", bullets: [
            "The total momentum of a system remains <strong>constant</strong> provided that no <strong>resultant external force</strong> acts on the system.",
            "Equivalently, total momentum before an interaction equals total momentum after it for an <strong>isolated system</strong>."
          ]}
        ],
        note: "Include the condition about external resultant force; momentum of an individual object need not be conserved."
      },
      {
        id: "physics-3-3-2",
        code: "3.3.2",
        wording: "apply the principle of conservation of momentum to solve simple problems, including elastic and inelastic interactions between objects in both one and two dimensions (knowledge of the concept of coefficient of restitution is not required)",
        details: [
          { label: "One dimension", title: "Signed momentum equation", bullets: [
            "Choose one positive direction and use <strong>Σmv before = Σmv after</strong>, giving velocities in the opposite direction negative signs.",
            "For a perfectly inelastic collision in which objects stick, use their common final velocity: m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>)v."
          ]},
          { label: "Two dimensions", title: "Conserve each component independently", bullets: [
            "Resolve every momentum into perpendicular components and apply <strong>Σp<sub>x</sub> before = Σp<sub>x</sub> after</strong> and <strong>Σp<sub>y</sub> before = Σp<sub>y</sub> after</strong>.",
            "Use the calculated components to find an unknown magnitude and direction with Pythagoras and trigonometry."
          ]}
        ],
        visual: "momentum-components",
        note: "Momentum is conserved in both elastic and inelastic interactions if the system is isolated; kinetic-energy behaviour distinguishes them."
      },
      {
        id: "physics-3-3-3",
        code: "3.3.3",
        wording: "recall that, for an elastic collision, total kinetic energy is conserved and the relative speed of approach is equal to the relative speed of separation",
        details: [
          { label: "Elastic collision", title: "Two simultaneous conditions", bullets: [
            "Total momentum is conserved for the isolated system and total <strong>kinetic energy is conserved</strong>: Σ½mu² = Σ½mv².",
            "Along the line of collision, <strong>relative speed of approach = relative speed of separation</strong>.",
            "For one-dimensional velocities with a consistent sign convention: <strong>u<sub>1</sub> − u<sub>2</sub> = v<sub>2</sub> − v<sub>1</sub></strong>."
          ]}
        ],
        note: "Speed is a positive magnitude in the relative-speed rule; the signed velocity form shown follows the stated one-dimensional direction convention."
      },
      {
        id: "physics-3-3-4",
        code: "3.3.4",
        wording: "understand that, while momentum of a system is always conserved in interactions between objects, some change in kinetic energy may take place",
        table: {
          headers: ["Interaction", "Momentum of isolated system", "Total kinetic energy"],
          rows: [
            ["Elastic", "<strong>Conserved</strong>", "<strong>Conserved</strong>"],
            ["Inelastic", "<strong>Conserved</strong>", "Not conserved; some is transferred to deformation, thermal/internal energy or sound."],
            ["Explosion / separation", "<strong>Conserved</strong>", "May increase as chemical, elastic or other stored energy becomes kinetic energy."]
          ]
        },
        details: [
          { label: "Key distinction", title: "Momentum is not converted into energy", bullets: [
            "Momentum and energy are different conserved quantities with different units; do not say ‘momentum is lost as heat’.",
            "For an isolated system, momentum remains constant even when kinetic energy changes form."
          ]}
        ]
      }
    ]
  },
  {
    id: "section-physics-4-1",
    nav: "4.1",
    title: "Turning effects of forces",
    kicker: "Chapter 4 · Forces, density and pressure",
    entries: [
      {
        id: "physics-4-1-1",
        code: "4.1.1",
        wording: "understand that the weight of an object may be taken as acting at a single point known as its centre of gravity",
        details: [
          { label: "Definition", title: "Centre of gravity", bullets: [
            "The centre of gravity is the single point through which the object’s resultant <strong>weight may be considered to act</strong>.",
            "In a uniform gravitational field it coincides with the centre of mass; for a uniform symmetrical object it is at the <strong>geometrical centre</strong>.",
            "An irregular lamina can be suspended from different points; the intersection of the vertical plumb lines locates its centre of gravity."
          ]}
        ],
        visual: "centre-gravity"
      },
      {
        id: "physics-4-1-2",
        code: "4.1.2",
        wording: "define and apply the moment of a force",
        details: [
          { label: "Definition", title: "Moment about a point", bullets: [
            "The moment of a force about a point is <strong>force × perpendicular distance</strong> from the point to the force’s line of action.",
            "<strong>moment = Fd<sub>⊥</sub></strong>; SI unit <strong>N m</strong>.",
            "State whether the moment is clockwise or anticlockwise, or use a consistent sign convention."
          ]},
          { label: "Geometry", title: "Use the shortest distance", bullets: [
            "The distance must be perpendicular to the <strong>line of action</strong>, not simply the distance from the pivot to where the force is applied."
          ]}
        ],
        visual: "moment-force"
      },
      {
        id: "physics-4-1-3",
        code: "4.1.3",
        wording: "understand that a couple is a pair of forces that acts to produce rotation only",
        details: [
          { label: "Definition", title: "A couple", bullets: [
            "A couple consists of two <strong>equal, opposite, parallel</strong> forces whose lines of action are separated.",
            "The resultant force is zero, so it produces <strong>rotation only</strong> and no translational acceleration.",
            "The two moments act in the same rotational sense and therefore add."
          ]}
        ],
        visual: "couple"
      },
      {
        id: "physics-4-1-4",
        code: "4.1.4",
        wording: "define and apply the torque of a couple",
        details: [
          { label: "Definition", title: "Torque of a couple", bullets: [
            "Torque of a couple = <strong>one of the forces × perpendicular separation</strong> between the two lines of action.",
            "<strong>τ = Fd</strong>, with unit N m; d is the full perpendicular distance between the forces, not half the distance.",
            "The torque of a couple is independent of the point about which moments are taken."
          ]}
        ],
        note: "Do not multiply by 2 again when d is already the separation between the force lines."
      }
    ]
  },
  {
    id: "section-physics-4-2",
    nav: "4.2",
    title: "Equilibrium of forces",
    kicker: "Chapter 4 · Forces, density and pressure",
    entries: [
      {
        id: "physics-4-2-1",
        code: "4.2.1",
        wording: "state and apply the principle of moments",
        details: [
          { label: "Principle", title: "Full equilibrium statement", bullets: [
            "For an object in equilibrium, the sum of the <strong>clockwise moments</strong> about any point equals the sum of the <strong>anticlockwise moments</strong> about that point.",
            "Equivalently, the algebraic sum of moments is zero: <strong>Στ = 0</strong>."
          ]},
          { label: "Application", title: "Choose the pivot strategically", bullets: [
            "Take moments about a point through which unknown forces act so that their perpendicular distance, and hence their moment, is zero.",
            "Use perpendicular distances and include the object’s weight acting through its centre of gravity."
          ]}
        ]
      },
      {
        id: "physics-4-2-2",
        code: "4.2.2",
        wording: "understand that, when there is no resultant force and no resultant torque, a system is in equilibrium",
        details: [
          { label: "Conditions", title: "Both conditions are required", bullets: [
            "No resultant force: <strong>ΣF = 0</strong>, so there is no translational acceleration.",
            "No resultant torque: <strong>Στ = 0</strong>, so there is no angular acceleration.",
            "In two dimensions this normally means ΣF<sub>x</sub> = 0, ΣF<sub>y</sub> = 0 and Στ = 0."
          ]}
        ],
        note: "Balanced forces alone do not guarantee equilibrium: a couple has zero resultant force but a non-zero torque."
      },
      {
        id: "physics-4-2-3",
        code: "4.2.3",
        wording: "use a vector triangle to represent coplanar forces in equilibrium",
        details: [
          { label: "Construction", title: "Closed triangle of forces", bullets: [
            "Draw the three force vectors to scale, one <strong>head-to-tail</strong> after another, preserving each direction.",
            "For equilibrium the final arrow returns to the starting point, forming a <strong>closed triangle</strong>; therefore the vector sum is zero.",
            "Measure the unknown length or angle from an accurate scale drawing, or apply trigonometry to the triangle."
          ]}
        ],
        visual: "force-triangle",
        note: "A triangle of forces represents three concurrent coplanar forces; it is not the physical shape of the object."
      }
    ]
  },
  {
    id: "section-physics-4-3",
    nav: "4.3",
    title: "Density and pressure",
    kicker: "Chapter 4 · Forces, density and pressure",
    entries: [
      {
        id: "physics-4-3-1",
        code: "4.3.1",
        wording: "define and use density",
        details: [
          { label: "Definition", title: "Mass per unit volume", bullets: [
            "Density is <strong>mass per unit volume</strong>: <strong>ρ = m/V</strong>.",
            "The SI unit is <strong>kg m<sup>−3</sup></strong>.",
            "Use the volume occupied by the material and convert all dimensions to metres before calculating in SI units."
          ]}
        ],
        note: "1 g cm⁻³ = 1000 kg m⁻³."
      },
      {
        id: "physics-4-3-2",
        code: "4.3.2",
        wording: "define and use pressure",
        details: [
          { label: "Definition", title: "Normal force per unit area", bullets: [
            "Pressure is the <strong>normal force per unit area</strong>: <strong>p = F/A</strong>.",
            "The SI unit is the pascal: <strong>1 Pa = 1 N m<sup>−2</sup></strong>.",
            "For the same normal force, decreasing the contact area increases the pressure."
          ]}
        ]
      },
      {
        id: "physics-4-3-3",
        code: "4.3.3",
        wording: "derive, from the definitions of pressure and density, the equation for hydrostatic pressure ∆p = ρg∆h",
        details: [
          { label: "Derivation", title: "Consider a vertical fluid column", bullets: [
            "Take a column of fluid with cross-sectional area A and height difference Δh; its volume is <strong>AΔh</strong>.",
            "From ρ = m/V, its mass is <strong>m = ρAΔh</strong>, so its weight is ρAΔhg.",
            "The pressure difference supports this weight: Δp = F/A = ρAΔhg/A, hence <strong>Δp = ρgΔh</strong>."
          ]},
          { label: "Assumptions", title: "Conditions behind the equation", bullets: [
            "The fluid is at rest, density ρ and gravitational field strength g are uniform, and Δh is the <strong>vertical</strong> depth difference."
          ]}
        ],
        visual: "hydrostatic-column"
      },
      {
        id: "physics-4-3-4",
        code: "4.3.4",
        wording: "use the equation ∆p = ρg∆h",
        details: [
          { label: "Use", title: "Pressure difference between two levels", bullets: [
            "Use <strong>Δp = ρgΔh</strong>, where ρ is the fluid density and Δh is the vertical separation of the levels.",
            "Pressure increases with <strong>depth</strong>; at depth h below a surface, <strong>p = p<sub>surface</sub> + ρgh</strong>.",
            "Distinguish gauge pressure ρgh from absolute pressure, which includes the pressure acting at the surface."
          ]}
        ],
        note: "Container shape does not enter the equation: at the same depth in the same connected stationary fluid, pressure is the same."
      },
      {
        id: "physics-4-3-5",
        code: "4.3.5",
        wording: "understand that the upthrust acting on an object in a fluid is due to a difference in hydrostatic pressure",
        details: [
          { label: "Explanation", title: "Why the resultant force is upward", bullets: [
            "Fluid pressure acts <strong>normal to every surface</strong> of the object.",
            "The lower surface is at greater depth, so pressure and upward force there are greater than the pressure and downward force on the upper surface.",
            "Horizontal pressure forces cancel for a symmetrical element; the net pressure force is the <strong>upthrust</strong>."
          ]}
        ],
        visual: "upthrust-pressure"
      },
      {
        id: "physics-4-3-6",
        code: "4.3.6",
        wording: "calculate the upthrust acting on an object in a fluid using the equation F = ρgV (Archimedes’ principle)",
        details: [
          { label: "Principle", title: "Archimedes’ principle", bullets: [
            "The upthrust on an immersed object equals the <strong>weight of fluid displaced</strong>.",
            "<strong>F = ρ<sub>fluid</sub>gV<sub>displaced</sub></strong>, where V is the immersed/displaced volume, not necessarily the object’s total volume.",
            "For a floating object in equilibrium, upthrust equals its weight; therefore the weight of displaced fluid equals the object’s weight."
          ]},
          { label: "Check", title: "Use the fluid density", bullets: [
            "Substitute the density of the <strong>surrounding fluid</strong>. The object’s density is relevant only when finding its mass, volume or floating fraction."
          ]}
        ],
        note: "A fully submerged object displaces its full external volume; a partially immersed floating object displaces only the immersed volume."
      }
    ]
  },
  {
    id: "section-physics-5-1",
    nav: "5.1",
    title: "Energy conservation",
    kicker: "Chapter 5 · Work, energy and power",
    entries: [
      {
        id: "physics-5-1-1",
        code: "5.1.1",
        wording: "understand the concept of work, and recall and use work done = force × displacement in the direction of the force",
        table: {
          headers: ["Force relative to displacement", "Work done by the force"],
          rows: [
            ["Same direction (θ = 0°)", "<strong>W = Fs</strong> — positive"],
            ["At angle θ", "<strong>W = Fs cos θ</strong>"],
            ["Perpendicular (θ = 90°)", "<strong>W = 0</strong>"],
            ["Opposite direction (θ = 180°)", "<strong>W = −Fs</strong> — negative"]
          ]
        },
        details: [
          { label: "Meaning", title: "Work is an energy transfer", bullets: [
            "Work is done when a force causes a <strong>displacement</strong>; the work done is the energy transferred by that force.",
            "Use the displacement component parallel to the force: <strong>W = Fs<sub>∥</sub> = Fs cos θ</strong>, where θ is the angle between force and displacement.",
            "The SI unit is the <strong>joule (J)</strong>; <strong>1 J = 1 N m</strong>."
          ]},
          { label: "Example", title: "Resolve before multiplying", bullets: [
            "A 40 N force acts at 60° to a 5.0 m displacement: W = 40 × 5.0 × cos 60° = <strong>100 J</strong>."
          ]}
        ],
        visual: "work-component",
        note: "A force can act without doing work: if there is no displacement, or the force is perpendicular to the displacement, W = 0."
      },
      {
        id: "physics-5-1-2",
        code: "5.1.2",
        wording: "recall and apply the principle of conservation of energy",
        details: [
          { label: "Principle", title: "Full exam statement", bullets: [
            "Energy cannot be <strong>created or destroyed</strong>; it can only be transferred between stores or transformed from one form to another.",
            "Therefore, the <strong>total energy of a closed system remains constant</strong>."
          ]},
          { label: "Application", title: "Write a complete energy balance", bullets: [
            "Use <strong>total energy before + energy supplied = total energy after</strong>, including energy dissipated to the surroundings.",
            "For a falling object with negligible air resistance: <strong>decrease in GPE = increase in KE</strong>.",
            "With air resistance: <strong>decrease in GPE = increase in KE + thermal/internal energy transferred</strong>."
          ]}
        ],
        visual: "energy-transfer",
        note: "Do not write that energy is ‘lost’. State where it is transferred, usually to thermal/internal energy of the object and surroundings."
      },
      {
        id: "physics-5-1-3",
        code: "5.1.3",
        wording: "recall and understand that the efficiency of a system is the ratio of useful energy output from the system to the total energy input",
        details: [
          { label: "Definition", title: "Efficiency as an energy ratio", bullets: [
            "<strong>efficiency η = useful energy output / total energy input</strong>.",
            "Efficiency has <strong>no unit</strong>. Give it either as a decimal between 0 and 1 or multiply by 100% for a percentage.",
            "‘Useful’ means the energy transferred in the form intended for that system; the remainder is dissipated."
          ]}
        ],
        visual: "energy-transfer",
        note: "Do not divide by only the energy that remains: the denominator is the total input energy."
      },
      {
        id: "physics-5-1-4",
        code: "5.1.4",
        wording: "use the concept of efficiency to solve problems",
        table: {
          headers: ["Required quantity", "Rearrangement"],
          rows: [
            ["Useful output", "<strong>E<sub>useful</sub> = ηE<sub>input</sub></strong>"],
            ["Total input", "<strong>E<sub>input</sub> = E<sub>useful</sub>/η</strong>"],
            ["Wasted / dissipated", "<strong>E<sub>wasted</sub> = E<sub>input</sub> − E<sub>useful</sub></strong>"],
            ["Using power", "<strong>η = P<sub>useful</sub>/P<sub>input</sub></strong>"]
          ]
        },
        details: [
          { label: "Method", title: "Convert percentages first", bullets: [
            "Convert a percentage to a decimal before substitution: <strong>75% = 0.75</strong>.",
            "If 4.0 kJ enters a motor and 3.0 kJ is useful, η = 3.0/4.0 = <strong>0.75 = 75%</strong>.",
            "For several stages in series, the overall efficiency is <strong>η<sub>overall</sub> = η<sub>1</sub>η<sub>2</sub>…</strong>."
          ]},
          { label: "Why power works", title: "Same time interval", bullets: [
            "Because P = E/t, the time cancels when useful and input powers refer to the <strong>same time interval</strong>."
          ]}
        ],
        note: "A real machine’s calculated useful output should not exceed its input; if it does, the ratio has probably been inverted."
      },
      {
        id: "physics-5-1-5",
        code: "5.1.5",
        wording: "define power as work done per unit time",
        details: [
          { label: "Definition", title: "Rate of doing work", bullets: [
            "Power is the <strong>work done per unit time</strong>, equivalently the rate of energy transfer.",
            "The SI unit is the <strong>watt (W)</strong>; <strong>1 W = 1 J s<sup>−1</sup></strong>.",
            "Greater power means the same work is done in less time, or more energy is transferred in the same time."
          ]}
        ]
      },
      {
        id: "physics-5-1-6",
        code: "5.1.6",
        wording: "solve problems using P = W / t",
        details: [
          { label: "Equation", title: "Average power", bullets: [
            "Use <strong>P = W/t = ΔE/t</strong>, with W or ΔE in joules and t in seconds.",
            "Rearrange to <strong>W = Pt</strong> or <strong>t = W/P</strong> as required.",
            "A machine doing 6000 J of work in 3.0 s has power P = 6000/3.0 = <strong>2000 W = 2.0 kW</strong>."
          ]},
          { label: "Units", title: "Convert before calculating", bullets: [
            "<strong>1 kW = 10<sup>3</sup> W</strong> and <strong>1 MW = 10<sup>6</sup> W</strong>; convert minutes or hours to seconds when using SI units."
          ]}
        ],
        note: "P = W/t gives average power over the stated interval unless the quantities are instantaneous."
      },
      {
        id: "physics-5-1-7",
        code: "5.1.7",
        wording: "derive P = Fv and use it to solve problems",
        details: [
          { label: "Derivation", title: "Start from work and power", bullets: [
            "For a force F parallel to displacement s, <strong>W = Fs</strong>.",
            "Since <strong>P = W/t</strong> and <strong>v = s/t</strong>, P = Fs/t = F(s/t), giving <strong>P = Fv</strong>.",
            "If force and velocity make an angle θ, use the parallel component: <strong>P = Fv cos θ</strong>."
          ]},
          { label: "Application", title: "Use the force doing the work", bullets: [
            "At constant speed on level ground, a vehicle’s driving force equals the resistance, so the useful mechanical power is <strong>P = F<sub>drive</sub>v = F<sub>resist</sub>v</strong>.",
            "Rearrange to <strong>F = P/v</strong> or <strong>v = P/F</strong>; use the instantaneous speed for instantaneous power."
          ]}
        ],
        visual: "power-force-speed",
        note: "At constant speed the resultant force is zero, but engine power is not zero: the driving force does work at the same rate that resistive forces dissipate energy."
      }
    ]
  },
  {
    id: "section-physics-5-2",
    nav: "5.2",
    title: "Gravitational potential energy and kinetic energy",
    kicker: "Chapter 5 · Work, energy and power",
    entries: [
      {
        id: "physics-5-2-1",
        code: "5.2.1",
        wording: "derive, using W = Fs, the formula ∆EP = mg∆h for gravitational potential energy changes in a uniform gravitational field",
        details: [
          { label: "Derivation", title: "Lift a mass through a vertical height", bullets: [
            "Raise a mass m slowly or at constant speed through vertical height Δh in a <strong>uniform gravitational field</strong>.",
            "The lifting force equals the weight: <strong>F = mg</strong>, and the displacement in the force direction is <strong>s = Δh</strong>.",
            "Using W = Fs: W = mgΔh. This work is transferred to gravitational potential energy, hence <strong>ΔE<sub>P</sub> = mgΔh</strong>."
          ]},
          { label: "Signs", title: "Height change carries the sign", bullets: [
            "For upward motion Δh &gt; 0, so GPE increases; for downward motion Δh &lt; 0, so GPE decreases."
          ]}
        ],
        visual: "gpe-ke-derivation"
      },
      {
        id: "physics-5-2-2",
        code: "5.2.2",
        wording: "recall and use the formula ∆EP = mg∆h for gravitational potential energy changes in a uniform gravitational field",
        details: [
          { label: "Use", title: "Only the vertical height change matters", bullets: [
            "Use <strong>ΔE<sub>P</sub> = mgΔh</strong>, where m is mass, g is gravitational field strength and Δh is final height minus initial height.",
            "The change depends on <strong>vertical height</strong>, not the length or shape of the path; the zero/reference level for E<sub>P</sub> may be chosen freely.",
            "For m = 2.0 kg raised by 3.0 m with g = 9.81 N kg<sup>−1</sup>, ΔE<sub>P</sub> = <strong>58.9 J</strong>."
          ]},
          { label: "Energy link", title: "Apply conservation carefully", bullets: [
            "With no dissipative forces, a loss of GPE gives an equal gain in KE: <strong>−ΔE<sub>P</sub> = ΔE<sub>K</sub></strong>.",
            "If resistance acts, include the energy transferred to thermal/internal energy in the balance."
          ]}
        ],
        note: "The formula assumes g is effectively constant over the height change; use Δh, not the distance travelled along a slope."
      },
      {
        id: "physics-5-2-3",
        code: "5.2.3",
        wording: "derive, using the equations of motion, the formula for kinetic energy EK = 1/2 mv²",
        details: [
          { label: "Derivation", title: "Work done changes kinetic energy", bullets: [
            "Let a constant resultant force F accelerate mass m from speed u to speed v through displacement s.",
            "Using <strong>F = ma</strong> and W = Fs: <strong>W = mas</strong>.",
            "From the equation of motion <strong>v² = u² + 2as</strong>, as = (v² − u²)/2.",
            "Therefore W = ½m(v² − u²) = <strong>ΔE<sub>K</sub></strong>. If u = 0, <strong>E<sub>K</sub> = ½mv²</strong>."
          ]},
          { label: "Meaning", title: "Work–energy result", bullets: [
            "The <strong>resultant work</strong> done on an object equals its change in kinetic energy."
          ]}
        ],
        visual: "gpe-ke-derivation",
        note: "The derivation uses the resultant force and an equation of motion for constant acceleration."
      },
      {
        id: "physics-5-2-4",
        code: "5.2.4",
        wording: "recall and use EK = 1/2 mv²",
        table: {
          headers: ["Change", "Effect on E<sub>K</sub>"],
          rows: [
            ["Mass doubled at fixed speed", "E<sub>K</sub> <strong>doubles</strong>"],
            ["Speed doubled at fixed mass", "E<sub>K</sub> becomes <strong>four times</strong> as large"],
            ["Direction reversed at same speed", "E<sub>K</sub> is <strong>unchanged</strong>"]
          ]
        },
        details: [
          { label: "Use", title: "Kinetic energy depends on speed squared", bullets: [
            "Use <strong>E<sub>K</sub> = ½mv²</strong>, with m in kg and speed v in m s<sup>−1</sup>; the answer is in joules.",
            "For a change of speed, use <strong>ΔE<sub>K</sub> = ½m(v² − u²)</strong>.",
            "A 0.50 kg object moving at 8.0 m s<sup>−1</sup> has E<sub>K</sub> = ½ × 0.50 × 8.0² = <strong>16 J</strong>."
          ]},
          { label: "Nature", title: "Kinetic energy is a scalar", bullets: [
            "Use the magnitude of velocity—the <strong>speed</strong>. Kinetic energy is never negative, although its change can be negative."
          ]}
        ],
        note: "Square the speed after converting it to m s⁻¹; do not preserve the sign of velocity inside v²."
      }
    ]
  }
];

window.PHYSICS_VISUALS = {
  "vector-addition": {
    caption: "Head-to-tail addition: the resultant runs from the first tail to the final head.",
    svg: `<svg class="physics-diagram" viewBox="0 0 640 270" role="img" aria-label="Head-to-tail vector addition diagram">
      <defs><marker id="pa-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="pa-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="main" x1="90" y1="205" x2="275" y2="92" marker-end="url(#pa-blue)"/><line class="main" x1="275" y1="92" x2="520" y2="145" marker-end="url(#pa-blue)"/><line class="accent" x1="90" y1="205" x2="520" y2="145" marker-end="url(#pa-red)"/>
      <text x="165" y="128">A</text><text x="395" y="100">B</text><text x="294" y="198">R = A + B</text><circle cx="90" cy="205" r="4" fill="#10233c"/>
    </svg>`
  },
  "vector-components": {
    caption: "Resolving F when θ is measured from the horizontal: Fₓ = F cos θ and Fᵧ = F sin θ.",
    svg: `<svg class="physics-diagram" viewBox="0 0 640 290" role="img" aria-label="Vector resolved into perpendicular horizontal and vertical components">
      <defs><marker id="pc-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="pc-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="axis" x1="90" y1="230" x2="555" y2="230"/><line class="axis" x1="115" y1="260" x2="115" y2="42"/>
      <line class="accent" x1="115" y1="230" x2="472" y2="68" marker-end="url(#pc-red)"/><line class="main" x1="115" y1="230" x2="472" y2="230" marker-end="url(#pc-blue)"/><line class="main" x1="472" y1="230" x2="472" y2="68" marker-end="url(#pc-blue)"/>
      <path class="guide" d="M190 230 A75 75 0 0 0 183 199"/><path class="guide" d="M472 212 h-18 v18"/>
      <text x="286" y="255">Fₓ = F cos θ</text><text x="485" y="154">Fᵧ = F sin θ</text><text x="295" y="126">F</text><text x="178" y="211">θ</text>
    </svg>`
  },
  "motion-graphs": {
    caption: "Graph cues: s–t gradient is velocity; v–t gradient is acceleration; v–t area is displacement.",
    svg: `<svg class="physics-diagram" viewBox="0 0 760 280" role="img" aria-label="Displacement time, velocity time and acceleration time graphs">
      <g transform="translate(28 28)"><line class="axis" x1="35" y1="185" x2="220" y2="185"/><line class="axis" x1="35" y1="185" x2="35" y2="5"/><path class="main" d="M35 175 C75 170 95 145 120 112 S170 35 220 20"/><line class="guide" x1="84" y1="156" x2="169" y2="64"/><text x="5" y="20">s</text><text x="210" y="210">t</text><text x="70" y="232">gradient = v</text></g>
      <g transform="translate(270 28)"><line class="axis" x1="35" y1="185" x2="220" y2="185"/><line class="axis" x1="35" y1="185" x2="35" y2="5"/><path d="M35 185 L35 162 L212 36 L212 185 Z" fill="#eaf4fd"/><line class="main" x1="35" y1="162" x2="212" y2="36"/><text x="5" y="20">v</text><text x="210" y="210">t</text><text x="68" y="232">gradient = a</text><text x="82" y="145">area = s</text></g>
      <g transform="translate(512 28)"><line class="axis" x1="35" y1="185" x2="220" y2="185"/><line class="axis" x1="35" y1="185" x2="35" y2="5"/><line class="accent" x1="35" y1="75" x2="212" y2="75"/><text x="5" y="20">a</text><text x="210" y="210">t</text><text x="72" y="60">constant a</text></g>
    </svg>`
  },
  "suvat-graph": {
    caption: "For constant acceleration, displacement is the trapezium area under the velocity–time graph.",
    svg: `<svg class="physics-diagram" viewBox="0 0 640 300" role="img" aria-label="Velocity time graph used to derive uniformly accelerated motion equations">
      <line class="axis" x1="90" y1="245" x2="555" y2="245"/><line class="axis" x1="90" y1="245" x2="90" y2="32"/>
      <path d="M90 200 L500 65 L500 245 L90 245 Z" fill="#eaf4fd"/><line class="main" x1="90" y1="200" x2="500" y2="65"/><line class="guide" x1="500" y1="65" x2="500" y2="245"/>
      <text x="58" y="205">u</text><text x="58" y="70">v</text><text x="497" y="270">t</text><text x="272" y="185">area = s</text><text x="18" y="45">velocity</text><text x="536" y="270">time</text>
    </svg>`
  },
  "freefall-experiment": {
    caption: "Electronic release and impact timing remove human reaction time; plot h against t² so gradient = g/2.",
    svg: `<svg class="physics-diagram" viewBox="0 0 680 390" role="img" aria-label="Free-fall experiment using an electromagnet, ball and trapdoor timer">
      <rect class="object" x="82" y="42" width="190" height="54" rx="9"/><text x="108" y="75">electromagnet</text><circle cx="177" cy="121" r="17" fill="#e34b55"/><line class="guide" x1="177" y1="140" x2="177" y2="300"/><line class="axis" x1="115" y1="300" x2="240" y2="300"/><text x="246" y="307">trapdoor / detector</text>
      <line class="main" x1="305" y1="122" x2="305" y2="298"/><line class="axis" x1="292" y1="122" x2="318" y2="122"/><line class="axis" x1="292" y1="298" x2="318" y2="298"/><text x="321" y="216">measured h</text>
      <rect class="object" x="445" y="126" width="145" height="84" rx="10"/><text x="481" y="160">electronic</text><text x="492" y="183">timer</text><line class="guide" x1="272" y1="68" x2="445" y2="145"/><line class="guide" x1="240" y1="300" x2="445" y2="195"/>
      <text x="90" y="354">h = ½gt²  →  plot h against t²</text>
    </svg>`
  },
  "projectile-motion": {
    caption: "The independent components share time: horizontal velocity is constant while vertical acceleration is g downward.",
    svg: `<svg class="physics-diagram" viewBox="0 0 700 350" role="img" aria-label="Projectile motion with constant horizontal velocity and downward acceleration">
      <defs><marker id="pp-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="pp-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="axis" x1="62" y1="294" x2="650" y2="294"/><line class="axis" x1="62" y1="294" x2="62" y2="35"/><path class="main" d="M75 265 Q315 25 620 278"/>
      <line class="main" x1="76" y1="264" x2="185" y2="264" marker-end="url(#pp-blue)"/><line class="accent" x1="330" y1="73" x2="330" y2="155" marker-end="url(#pp-red)"/><line class="main" x1="310" y1="73" x2="420" y2="73" marker-end="url(#pp-blue)"/>
      <text x="90" y="250">uₓ</text><text x="355" y="58">constant vₓ</text><text x="344" y="139">g</text><text x="577" y="310">x</text><text x="42" y="53">y</text>
    </svg>`
  },
  "newton-resultant": {
    caption: "Acceleration follows the resultant force, which is the vector sum—not whichever individual force is largest in the drawing.",
    svg: `<svg class="physics-diagram" viewBox="0 0 680 270" role="img" aria-label="Block with opposing forces and acceleration in the direction of the resultant force">
      <defs><marker id="nr-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="nr-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <rect class="object" x="250" y="95" width="170" height="95" rx="10"/><text x="323" y="150">m</text>
      <line class="main" x1="420" y1="128" x2="575" y2="128" marker-end="url(#nr-blue)"/><line class="main" x1="250" y1="160" x2="145" y2="160" marker-end="url(#nr-blue)"/><text x="468" y="112">F₁</text><text x="177" y="145">F₂</text>
      <line class="accent" x1="290" y1="225" x2="500" y2="225" marker-end="url(#nr-red)"/><text x="325" y="252">ΣF and a, same direction</text>
    </svg>`
  },
  "terminal-velocity": {
    caption: "As drag grows, acceleration falls; when drag equals weight, the velocity becomes constant.",
    svg: `<svg class="physics-diagram" viewBox="0 0 700 330" role="img" aria-label="Velocity time curve approaching terminal velocity with force balance">
      <line class="axis" x1="70" y1="270" x2="430" y2="270"/><line class="axis" x1="70" y1="270" x2="70" y2="35"/><path class="main" d="M70 270 C128 150 225 85 405 79"/><line class="guide" x1="70" y1="79" x2="430" y2="79"/><text x="12" y="45">velocity</text><text x="392" y="300">time</text><text x="165" y="64">terminal velocity</text>
      <defs><marker id="tv-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="tv-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <circle cx="560" cy="160" r="28" class="object"/><line class="accent" x1="560" y1="130" x2="560" y2="54" marker-end="url(#tv-red)"/><line class="main" x1="560" y1="190" x2="560" y2="266" marker-end="url(#tv-blue)"/><text x="580" y="73">drag</text><text x="580" y="255">weight</text><text x="482" y="305">drag = weight</text>
    </svg>`
  },
  "momentum-components": {
    caption: "In two dimensions, conserve total momentum separately along the x- and y-axes.",
    svg: `<svg class="physics-diagram" viewBox="0 0 690 330" role="img" aria-label="Two-dimensional momentum interaction resolved into horizontal and vertical components">
      <defs><marker id="mc-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="mc-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="axis" x1="55" y1="172" x2="635" y2="172"/><line class="axis" x1="330" y1="290" x2="330" y2="32"/><line class="main" x1="75" y1="172" x2="320" y2="172" marker-end="url(#mc-blue)"/><circle cx="330" cy="172" r="16" fill="#10233c"/>
      <line class="accent" x1="330" y1="172" x2="555" y2="72" marker-end="url(#mc-red)"/><line class="accent" x1="330" y1="172" x2="555" y2="272" marker-end="url(#mc-red)"/>
      <line class="guide" x1="555" y1="72" x2="555" y2="172"/><line class="guide" x1="555" y1="272" x2="555" y2="172"/><text x="130" y="153">initial p</text><text x="465" y="62">p₁</text><text x="477" y="294">p₂</text><text x="593" y="164">x</text><text x="340" y="48">y</text>
    </svg>`
  },
  "centre-gravity": {
    caption: "Suspending an irregular lamina from two points gives two vertical lines whose intersection is its centre of gravity.",
    svg: `<svg class="physics-diagram" viewBox="0 0 680 350" role="img" aria-label="Irregular lamina with centre of gravity found from crossing plumb lines">
      <path class="object" d="M220 55 C285 20 418 50 470 113 C515 168 461 282 368 298 C281 314 183 266 171 182 C162 123 181 76 220 55 Z"/>
      <circle cx="234" cy="70" r="7" fill="#e34b55"/><circle cx="438" cy="99" r="7" fill="#e34b55"/><line class="guide" x1="234" y1="70" x2="423" y2="327"/><line class="guide" x1="438" y1="99" x2="230" y2="327"/>
      <circle cx="337" cy="210" r="8" fill="#10233c"/><text x="353" y="214">centre of gravity</text><text x="91" y="116">plumb line 1</text><text x="463" y="145">plumb line 2</text>
    </svg>`
  },
  "moment-force": {
    caption: "The moment uses the perpendicular distance from the pivot to the force’s line of action.",
    svg: `<svg class="physics-diagram" viewBox="0 0 690 300" role="img" aria-label="Moment of a force about a pivot with perpendicular distance">
      <defs><marker id="mf-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="main" x1="110" y1="190" x2="590" y2="112"/><path d="M210 190 l32 48 h-64 Z" fill="#8aa0b4"/><circle cx="210" cy="174" r="7" fill="#10233c"/>
      <line class="accent" x1="510" y1="125" x2="510" y2="260" marker-end="url(#mf-red)"/><line class="guide" x1="210" y1="174" x2="510" y2="174"/><path class="guide" d="M493 174 v-17 h17"/>
      <text x="173" y="262">pivot</text><text x="526" y="242">F</text><text x="334" y="164">d⊥</text><text x="266" y="71">moment = Fd⊥</text>
    </svg>`
  },
  "couple": {
    caption: "A couple has zero resultant force but a non-zero torque τ = Fd.",
    svg: `<svg class="physics-diagram" viewBox="0 0 680 300" role="img" aria-label="Couple formed by equal opposite parallel forces separated by distance d">
      <defs><marker id="cp-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <rect class="object" x="175" y="100" width="330" height="110" rx="12"/><line class="main" x1="215" y1="190" x2="215" y2="52" marker-end="url(#cp-blue)"/><line class="main" x1="465" y1="120" x2="465" y2="258" marker-end="url(#cp-blue)"/>
      <line class="guide" x1="215" y1="77" x2="465" y2="77"/><line class="axis" x1="215" y1="68" x2="215" y2="86"/><line class="axis" x1="465" y1="68" x2="465" y2="86"/><text x="205" y="43">F</text><text x="480" y="245">F</text><text x="331" y="68">d</text><text x="269" y="241">τ = Fd</text>
    </svg>`
  },
  "force-triangle": {
    caption: "For three coplanar forces in equilibrium, the scaled vectors form a closed head-to-tail triangle.",
    svg: `<svg class="physics-diagram" viewBox="0 0 650 330" role="img" aria-label="Closed vector triangle for three forces in equilibrium">
      <defs><marker id="ft-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="ft-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="main" x1="125" y1="255" x2="500" y2="255" marker-end="url(#ft-blue)"/><line class="main" x1="500" y1="255" x2="355" y2="58" marker-end="url(#ft-blue)"/><line class="accent" x1="355" y1="58" x2="125" y2="255" marker-end="url(#ft-red)"/>
      <text x="300" y="282">F₁</text><text x="447" y="145">F₂</text><text x="204" y="132">F₃</text><text x="220" y="313">F₁ + F₂ + F₃ = 0</text>
    </svg>`
  },
  "hydrostatic-column": {
    caption: "The pressure difference across a fluid column supports the column’s weight: ΔpA = ρAΔhg.",
    svg: `<svg class="physics-diagram" viewBox="0 0 690 370" role="img" aria-label="Fluid column used to derive hydrostatic pressure difference">
      <rect class="fluid" x="205" y="55" width="260" height="255"/><line class="accent" x1="175" y1="55" x2="495" y2="55"/><line class="main" x1="175" y1="310" x2="495" y2="310"/>
      <line class="guide" x1="520" y1="55" x2="520" y2="310"/><line class="axis" x1="510" y1="55" x2="530" y2="55"/><line class="axis" x1="510" y1="310" x2="530" y2="310"/>
      <text x="540" y="188">Δh</text><text x="272" y="184">volume = AΔh</text><text x="75" y="61">upper pressure p</text><text x="52" y="315">lower pressure p + Δp</text><text x="260" y="345">cross-sectional area A</text>
    </svg>`
  },
  "upthrust-pressure": {
    caption: "Greater pressure at the lower surface produces a larger upward force than the downward force at the upper surface.",
    svg: `<svg class="physics-diagram" viewBox="0 0 680 380" role="img" aria-label="Immersed object showing higher hydrostatic pressure at the bottom and resultant upthrust">
      <defs><marker id="up-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="up-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <path class="fluid" d="M70 78 Q150 60 230 78 T390 78 T550 78 L610 78 L610 335 L70 335 Z"/><rect class="object" x="245" y="145" width="190" height="120" rx="8"/>
      <line class="accent" x1="340" y1="104" x2="340" y2="145" marker-end="url(#up-red)"/><line class="main" x1="340" y1="330" x2="340" y2="265" marker-end="url(#up-blue)"/>
      <line class="guide" x1="218" y1="165" x2="462" y2="165"/><line class="guide" x1="218" y1="246" x2="462" y2="246"/>
      <text x="370" y="118">smaller downward force</text><text x="361" y="298">larger upward force</text><text x="92" y="168">lower pressure</text><text x="92" y="250">higher pressure</text><text x="265" y="360">resultant = upthrust</text>
    </svg>`
  },
  "work-component": {
    caption: "Only the component of displacement parallel to the force contributes: W = F(s cos θ).",
    svg: `<svg class="physics-diagram" viewBox="0 0 700 330" role="img" aria-label="Force at an angle to horizontal displacement showing the parallel displacement component used for work">
      <defs><marker id="wc-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="wc-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <rect class="object" x="115" y="178" width="120" height="72" rx="10"/><line class="axis" x1="58" y1="250" x2="650" y2="250"/>
      <line class="accent" x1="175" y1="178" x2="355" y2="74" marker-end="url(#wc-red)"/><line class="main" x1="175" y1="282" x2="560" y2="282" marker-end="url(#wc-blue)"/>
      <line class="guide" x1="175" y1="178" x2="355" y2="178"/><path class="guide" d="M246 178 A71 71 0 0 0 236 143"/>
      <text x="278" y="102">force F</text><text x="367" y="310">displacement s</text><text x="245" y="158">θ</text><text x="365" y="168">parallel component: s cos θ</text><text x="241" y="42">W = Fs cos θ</text>
    </svg>`
  },
  "energy-transfer": {
    caption: "Conservation fixes the whole balance; efficiency compares the useful branch with the total input.",
    svg: `<svg class="physics-diagram" viewBox="0 0 760 330" role="img" aria-label="Energy transfer diagram showing total input divided into useful output and dissipated energy">
      <rect class="object" x="54" y="118" width="168" height="88" rx="12"/><text x="91" y="152">total energy</text><text x="114" y="179">input</text>
      <rect class="object" x="320" y="118" width="150" height="88" rx="12"/><text x="354" y="152">system</text><text x="341" y="179">η &lt; 1</text>
      <rect class="object" x="574" y="48" width="150" height="74" rx="12"/><text x="603" y="79">useful</text><text x="602" y="103">output</text>
      <rect class="object" x="574" y="230" width="150" height="74" rx="12"/><text x="593" y="261">dissipated</text><text x="610" y="285">output</text>
      <line class="main" x1="222" y1="162" x2="320" y2="162"/><polygon points="320,162 305,153 305,171" fill="#10233c"/>
      <path class="accent" d="M470 150 C515 150 520 85 574 85"/><polygon points="574,85 559,76 559,94" fill="#e34b55"/>
      <path class="main" d="M470 174 C515 174 520 267 574 267"/><polygon points="574,267 559,258 559,276" fill="#10233c"/>
      <text x="260" y="146">Eᵢₙ</text><text x="485" y="82">E useful</text><text x="477" y="290">E wasted</text><text x="208" y="252">Eᵢₙ = E useful + E wasted</text>
    </svg>`
  },
  "power-force-speed": {
    caption: "In time t the vehicle moves vt, so W = Fvt and P = W/t = Fv for a parallel force.",
    svg: `<svg class="physics-diagram" viewBox="0 0 720 330" role="img" aria-label="Vehicle moving at velocity v under a driving force F used to derive power equals force times velocity">
      <defs><marker id="pf-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-main" d="M0,0 L8,4 L0,8 Z"/></marker><marker id="pf-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path class="arrow-accent" d="M0,0 L8,4 L0,8 Z"/></marker></defs>
      <line class="axis" x1="50" y1="242" x2="670" y2="242"/><path class="object" d="M188 202 h205 l45 40 H150 Z"/><circle cx="208" cy="247" r="24" fill="#8aa0b4"/><circle cx="390" cy="247" r="24" fill="#8aa0b4"/>
      <line class="accent" x1="438" y1="187" x2="596" y2="187" marker-end="url(#pf-red)"/><text x="498" y="171">driving force F</text>
      <line class="main" x1="274" y1="92" x2="496" y2="92" marker-end="url(#pf-blue)"/><text x="356" y="76">velocity v</text>
      <line class="guide" x1="150" y1="295" x2="596" y2="295"/><line class="axis" x1="150" y1="284" x2="150" y2="306"/><line class="axis" x1="596" y1="284" x2="596" y2="306"/><text x="329" y="322">s = vt</text><text x="54" y="42">P = W/t = F(vt)/t = Fv</text>
    </svg>`
  },
  "gpe-ke-derivation": {
    caption: "Two required derivations: lifting gives ΔEₚ = mgΔh; resultant work with v² = u² + 2as gives ΔEₖ = ½m(v² − u²).",
    svg: `<svg class="physics-diagram" viewBox="0 0 800 390" role="img" aria-label="Side-by-side derivations of gravitational potential energy and kinetic energy">
      <line class="guide" x1="400" y1="36" x2="400" y2="354"/>
      <text x="116" y="44">GPE derivation</text><line class="axis" x1="62" y1="318" x2="350" y2="318"/>
      <rect class="object" x="174" y="94" width="74" height="62" rx="8"/><text x="202" y="132">m</text>
      <line class="accent" x1="211" y1="92" x2="211" y2="47"/><polygon points="211,47 202,63 220,63" fill="#e34b55"/><text x="230" y="68">F = mg</text>
      <line class="main" x1="211" y1="157" x2="211" y2="213"/><polygon points="211,213 202,197 220,197" fill="#10233c"/><text x="230" y="201">weight mg</text>
      <line class="guide" x1="104" y1="318" x2="104" y2="125"/><line class="axis" x1="94" y1="318" x2="114" y2="318"/><line class="axis" x1="94" y1="125" x2="114" y2="125"/><text x="60" y="228">Δh</text><text x="70" y="356">W = Fs = mgΔh</text>
      <text x="510" y="44">KE derivation</text><rect class="object" x="492" y="145" width="112" height="76" rx="8"/><text x="537" y="188">m</text>
      <line class="accent" x1="604" y1="165" x2="715" y2="165"/><polygon points="715,165 699,156 699,174" fill="#e34b55"/><text x="644" y="145">F = ma</text>
      <line class="main" x1="492" y1="260" x2="695" y2="260"/><polygon points="695,260 679,251 679,269" fill="#10233c"/><text x="570" y="287">displacement s</text>
      <text x="448" y="326">W = mas</text><text x="586" y="326">as = (v² − u²)/2</text><text x="500" y="362">W = ½m(v² − u²) = ΔEₖ</text>
    </svg>`
  }
};
