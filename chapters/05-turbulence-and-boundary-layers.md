---
title: 5 Turbulence and boundary layers
---

By the 1880s fluid mechanics had a correct set of equations (Navier–Stokes) and a large body of engineering formulas, but the two did not meet. Theory predicted zero drag for bodies in nearly inviscid fluids, and pipe friction proportional to velocity; experiments showed substantial drag and friction growing almost with the square of velocity. The gap was closed in two steps. Osborne Reynolds showed that flow can be in two different states, orderly (laminar) and irregular (turbulent), and that a single dimensionless number decides which. Ludwig Prandtl showed that the effect of viscosity, however small, is concentrated in a thin layer next to solid surfaces, the boundary layer. Between 1880 and 1945, building on these two ideas, Prandtl, Theodore von Kármán, G. I. Taylor, Lewis Fry Richardson, Andrey Kolmogorov and others created modern fluid mechanics.

The same decades also saw a crisis of continuity in physics: shock waves, quanta, relativity and the discovery that simple deterministic equations can produce unpredictable behaviour.

## Chaos and irregularity: Reynolds's experiment

**Osborne Reynolds** (1842–1912), the first professor of engineering at Owens College, Manchester, studied many practical problems: lubrication, the screw propeller, cavitation, the transport of sediment in rivers and estuaries using scale models. In 1883 he published the experiment that made him famous. He let water from a large tank flow into a horizontal glass pipe through a smooth bell-mouthed entrance, and introduced a thin filament of dye at the centreline. At low speed the dye stayed a straight line along the whole tube: the motion was "direct". As the speed increased, there came a point where the dye suddenly mixed across the whole tube, revealing a mass of irregular eddies: the motion was "sinuous".

Reynolds found that the change depends not on velocity alone but on the combination

:::{admonition} The Reynolds number
:class: tip

$$
\mathrm{Re} = \frac{\rho V D}{\mu} = \frac{V D}{\nu},
$$

the ratio of inertial to viscous forces, where $\nu = \mu/\rho$ is the kinematic viscosity. In pipes, flow is laminar below about $\mathrm{Re} \approx 2000$; above it, disturbances can grow into turbulence. With very careful elimination of disturbances, Reynolds kept laminar flow to much higher values. The name "Reynolds number" was given later, by Arnold Sommerfeld in 1908.
:::

The Reynolds number explained the old puzzle of pipe friction. In laminar flow, friction is proportional to velocity, as Hagen and Poiseuille had found in narrow tubes. In turbulent flow, friction grows almost as the square of velocity, as engineers had found in water mains. Both were correct; they described different regimes.

In 1895 Reynolds took the next step. He split the velocity into a mean and a fluctuating part, $u = \bar{u} + u'$, and averaged the Navier–Stokes equations. The averaging produces extra terms, $-\rho \overline{u_i' u_j'}$, now called the **Reynolds stresses**, which represent the transport of momentum by turbulent eddies. Here lies the *closure problem* of turbulence: the averaged equations contain more unknowns than equations, and some extra assumption is needed to relate the Reynolds stresses to the mean flow. Joseph Boussinesq had proposed one such assumption in 1877: an "eddy viscosity", much larger than the molecular viscosity, that varies with the flow. Most engineering turbulence models used today are descendants of these two ideas.

Why does laminar flow become unstable? Hydrodynamic stability theory grew from the work of Helmholtz and Kelvin on the instability of a shear layer between two streams (the Kelvin–Helmholtz instability, which makes wind raise waves and gives some clouds their billowing shapes), and of Lord Rayleigh, who showed in 1880 that an inviscid velocity profile can be unstable only if it has an inflection point. William Orr (1907) and Arnold Sommerfeld (1908) derived the equation for small disturbances in viscous parallel flow. Its solution was hard: Werner Heisenberg's doctoral thesis (1923, under Sommerfeld), before his work on quantum mechanics, tackled it for plane channel flow. Walter Tollmien (1929) and Hermann Schlichting (1933) in Göttingen calculated the unstable waves in a boundary layer; they were doubted for years until Galen Schubauer and Harold Skramstad observed them in a quiet wind tunnel in Washington in the 1940s.

## A century of discontinuities

Turbulence was not the only challenge to the smooth, continuous world of classical physics at the end of the 19th century.

- **Shock waves.** Bernhard Riemann (1860) showed that compression waves in a gas steepen into discontinuities; William Rankine (1870) and Pierre-Henri Hugoniot (1887) derived the conditions that mass, momentum and energy must satisfy across them. In 1887 Ernst Mach and Peter Salcher photographed the shock waves around a supersonic bullet. The ratio of flow speed to the speed of sound was later named the **Mach number**.
- **Chaos.** In 1890 Henri Poincaré, competing for a prize offered by King Oscar II of Sweden on the stability of the solar system, discovered that the motion of three gravitating bodies can be so sensitive to initial conditions that its long-term behaviour cannot be predicted. (He found a serious error in his prize-winning memoir after the award, and paid to have the printed copies destroyed and a corrected version issued.) The idea of deterministic chaos was largely forgotten for seventy years until Lorenz rediscovered it in a model of convection (see [Chapter 6](06-war-flight-and-computing.md)).
- **Quanta and relativity.** In 1900 Max Planck explained the spectrum of thermal radiation by assuming that energy is emitted in discrete quanta. In 1905 Albert Einstein published his papers on light quanta, Brownian motion (the irregular jiggling of small particles suspended in a fluid, which proved the existence of molecules) and special relativity, which dispensed with the ether. With the ether went the last physical role of the vortex atom.

Physics and fluid mechanics separated. Physics turned to the atom, the nucleus and quantum mechanics; fluid mechanics became mainly an engineering science, centred on aeronautics. But the separation was never complete: Heisenberg, Sommerfeld, Born, von Neumann, Landau and Kolmogorov all worked on turbulence.

## Prandtl and the boundary layer

**Ludwig Prandtl** (1875–1953) studied mechanical engineering in Munich and worked briefly in industry, where he redesigned a suction system for wood shavings and noticed that flow in a diverging duct separated from the walls instead of following them. In 1904, a newly appointed professor at Göttingen, he presented an eight-page paper at the International Congress of Mathematicians in Heidelberg: *Über Flüssigkeitsbewegung bei sehr kleiner Reibung* (*On Fluid Motion with Very Small Friction*).

Prandtl's idea was simple and profound. When viscosity is small, the flow away from solid surfaces behaves almost like an ideal fluid. But at the surface the fluid must stick (no-slip), so there is a thin layer, the **boundary layer**, in which the velocity changes rapidly from zero to the outer value and viscous forces are as important as inertia. Within this layer, the Navier–Stokes equations can be simplified (the pressure is impressed from outside, and diffusion along the flow is negligible), making them solvable. If the outer flow decelerates, the slow fluid near the wall can be brought to rest and pushed backwards by the rising pressure. The boundary layer then **separates** from the surface, forming a wake of eddies behind the body.

Separation resolved d'Alembert's paradox (see [Chapter 3](03-enlightenment-analytical-hydrodynamics.md)). Behind a bluff body, the separated wake has low pressure, while the front has high pressure: the difference is the *form drag* that ideal-fluid theory had missed. On a streamlined body, separation is avoided and the drag is mostly skin friction in the thin boundary layer. Prandtl's paper also showed photographs from a small water channel, with flow made visible by particles, and explained how suction through a slot could prevent separation.

The paper attracted little notice at first. Prandtl's student Heinrich Blasius solved the laminar boundary layer on a flat plate in 1908, giving a thickness that grows as $\delta \approx 5x/\sqrt{\mathrm{Re}_x}$. Over the next three decades the boundary layer became the central concept of aerodynamics and hydraulics, and the method behind it, *matched asymptotic expansions* for problems in which a small parameter multiplies the highest derivative, became a general tool of applied mathematics.

Göttingen was an ideal place for Prandtl. The mathematician Felix Klein had made it a centre for bringing mathematics and engineering together, with funding from industry. Prandtl built a model-testing institute for airships and aircraft from 1907, which grew into the Aerodynamische Versuchsanstalt (AVA) around the time of the First World War, and, in 1925, the Kaiser Wilhelm Institute for Flow Research. His students and associates spread across the world: Theodore von Kármán, Jakob Ackeret, Albert Betz, Max Munk, Adolf Busemann, Hermann Schlichting, Johann Nikuradse and Walter Tollmien among them.

## Von Kármán and the vortex street

**Theodore von Kármán** (1881–1963) grew up in Budapest, the son of an educational reformer, and came to Göttingen to work with Prandtl. In 1911 a fellow student, Karl Hiemenz, was trying to measure the pressure around a cylinder in a water channel and complained that the flow behind it kept oscillating. Kármán wondered whether the oscillation was real and, over a weekend, calculated the stability of two rows of vortices shed alternately from the two sides of the cylinder. He found that only one arrangement was stable: a staggered double row with a fixed spacing ratio. This **Kármán vortex street** explained the oscillating wakes behind cylinders, the singing of telephone wires in the wind (studied by Vincenc Strouhal in 1878) and, later, the dangerous oscillations of tall chimneys and bridges. The shedding frequency is described by the Strouhal number, $\mathrm{St} = fD/V \approx 0.2$ for a circular cylinder over a wide range of Reynolds numbers.

Kármán later moved to Aachen (1913) and in 1930 to the California Institute of Technology. His career, and that of his students, is part of the story of [Chapter 6](06-war-flight-and-computing.md).

## Wall turbulence and the law of the wall

Engineers needed to know the friction in turbulent pipes and on ships and aircraft. Building on Boussinesq's eddy viscosity, Prandtl proposed in 1925 that turbulent eddies carry momentum over a **mixing length** $\ell$, analogous to the mean free path of molecules, and that near a wall the mixing length is proportional to the distance from the wall, $\ell = \kappa y$. Kármán, in 1930, arrived at the same result from a similarity hypothesis. Both lead to the **logarithmic law of the wall**:

:::{admonition} The logarithmic law of the wall
:class: tip

$$
\frac{\bar{u}}{u_*} = \frac{1}{\kappa} \ln\!\left( \frac{y u_*}{\nu} \right) + B,
$$

where $u_* = \sqrt{\tau_w/\rho}$ is the friction velocity, $\kappa \approx 0.41$ is the von Kármán constant and $B \approx 5$ for smooth walls. The same law, in a rough-wall form, describes the wind near the ground and the velocity profile in rivers.
:::

Between 1930 and 1933, Johann Nikuradse at Göttingen measured friction in pipes coated on the inside with sand grains of uniform size. His results showed three regimes: hydraulically smooth (friction depends only on Reynolds number), fully rough (friction depends only on relative roughness) and a transition between them. Commercial pipes, with irregular roughness, behaved differently in the transition. Cyril Colebrook in London, building on experiments with Cedric White, proposed in 1939 a formula covering all three regimes, the **Colebrook–White equation**, and in 1944 Lewis Moody of Princeton plotted it as the chart every civil engineering student now uses. Two and a half centuries after Chézy and du Buat, the friction coefficient of hydraulics finally had a physical explanation.

## Taylor, Richardson and the statistics of turbulence

In Britain, the approach to turbulence was more statistical and geophysical.

**Geoffrey Ingram Taylor** (1886–1975), a grandson of the logician George Boole, studied the turbulent mixing of air over the sea on an ice patrol ship after the *Titanic* disaster (1913). He developed the theory of turbulent diffusion (1921), showing how the spread of particles depends on the statistics of velocity fluctuations, and the statistical theory of turbulence (1935), introducing isotropic turbulence and the measurement of velocity correlations. His experiments on flow between rotating cylinders (1923) gave one of the first exact agreements between stability theory and experiment (Taylor–Couette flow). Taylor worked across fluid mechanics, from the plasticity of metals to blast waves and the swimming of microorganisms.

**Lewis Fry Richardson** (1881–1953), a Quaker and pacifist, served as an ambulance driver in France during the First World War, and during rest periods he worked through by hand the first numerical weather forecast (see [Chapter 6](06-war-flight-and-computing.md)). In his book *Weather Prediction by Numerical Process* (1922) he summarised the idea of an energy cascade in a rhyme that begins: "Big whirls have little whirls that feed on their velocity." Energy enters turbulence at large scales, passes through smaller and smaller eddies, and is finally dissipated by viscosity at the smallest scales. Richardson also showed in 1926 that the relative spreading of pairs of particles in the atmosphere accelerates with their separation, the "Richardson 4/3 law", and his dimensionless ratio of buoyancy to shear, the Richardson number, is still used to describe stratified flows.

## Kolmogorov 1941

In 1941, in Moscow, the mathematician **Andrey Kolmogorov** (1903–1987), already famous for the axioms of probability theory, gave the energy cascade a precise form in three short papers. He assumed that at scales much smaller than the energy-containing eddies but much larger than the dissipation scale, turbulence forgets the details of how it was produced and depends only on the rate of energy transfer per unit mass, $\varepsilon$. Dimensional reasoning then gives:

:::{admonition} Kolmogorov's 1941 theory (K41)
:class: tip
The smallest scale of turbulence, the Kolmogorov microscale, is

$$
\eta = \left( \frac{\nu^3}{\varepsilon} \right)^{1/4},
$$

and in the inertial subrange the energy spectrum follows the "five-thirds law"

$$
E(k) = C \, \varepsilon^{2/3} k^{-5/3}.
$$
:::

His student Alexander Obukhov reached the spectral form independently in the same year. Wartime isolation meant that the work became known in the West only later; Lars Onsager, Werner Heisenberg and Carl Friedrich von Weizsäcker reached similar conclusions independently in the 1940s. The $-5/3$ law was confirmed in 1962 by measurements in a tidal channel in British Columbia by Grant, Stewart and Moilliet. In the same year Kolmogorov revised the theory to account for intermittency, after Lev Landau had objected that the dissipation rate fluctuates in space and time. Turbulence remains, as is often said, the most important unsolved problem of classical physics.

## Summary

- Reynolds (1883) identified laminar and turbulent flow and the governing dimensionless number; his averaged equations (1895) introduced the Reynolds stresses and the closure problem.
- Shock waves, chaos, quanta and relativity marked a period of discontinuities in physics; with relativity, the ether and vortex atoms disappeared.
- Prandtl's boundary layer (1904) reconciled ideal-fluid theory with real drag and explained separation.
- Kármán's vortex street (1911), Prandtl's mixing length (1925), the log law (1930), Nikuradse's pipe experiments (1933) and the Colebrook–Moody chart (1939–1944) gave hydraulics its physical foundations.
- Taylor, Richardson and Kolmogorov built a statistical theory of turbulence, with the energy cascade and the $-5/3$ law.

## Further reading

- Darrigol, O. (2005). *Worlds of Flow*, chapters 5–7. Oxford University Press.
- Eckert, M. (2006). *The Dawn of Fluid Dynamics: A Discipline between Science and Technology*. Wiley-VCH.
- Eckert, M. (2019). *Ludwig Prandtl: A Life for Fluid Mechanics and Aeronautical Research*. Springer.
- Anderson, J. D. (2005). Ludwig Prandtl's boundary layer. *Physics Today*, 58(12), 42–48.
- Davidson, P. A., Kaneda, Y., Moffatt, K., & Sreenivasan, K. R. (Eds.) (2011). *A Voyage Through Turbulence*. Cambridge University Press.
- Jackson, D., & Launder, B. (2007). Osborne Reynolds and the publication of his papers on turbulent flow. *Annual Review of Fluid Mechanics*, 39, 19–35.
- Frisch, U. (1995). *Turbulence: The Legacy of A. N. Kolmogorov*. Cambridge University Press.
