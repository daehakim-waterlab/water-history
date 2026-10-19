---
title: 4 The industrial age and engineering hydraulics
---

The century from the French Revolution to the 1880s transformed both society and the science of flow. In France, a new kind of engineering school trained mathematicians to serve the state, and they added viscosity to Euler's equations. In Britain, steam engines, railways, iron ships and telegraph cables raised practical problems that no theory could yet answer, and the attempt to understand the steam engine led to thermodynamics and the concept of energy. Engineers in France, Germany, Britain, Ireland and America built the empirical formulas still used in hydraulics today: Darcy, Weisbach, Manning, Francis, Froude. And at the end of the period, vortices returned to physics, this time as a theory of atoms.

## The French Revolution and the École Polytechnique

France had trained engineers since the 18th century in the École des Ponts et Chaussées (bridges and roads, founded 1747) and in military schools. The Revolution swept away the old institutions, and in 1794, in the middle of war and the Terror, the mathematician Gaspard Monge and the military engineer and politician Lazare Carnot founded the **École Polytechnique** in Paris. Students were selected by competitive examination regardless of birth, paid a salary, and given two years of intense training in mathematics, physics and chemistry before going on to specialised schools for state engineering corps: bridges and roads, mines, artillery, fortification.

Under Napoleon the school was militarised, and its students fought in the defence of Paris in 1814. But its real legacy was a new type of engineer, the *ingénieur savant*, who approached practical problems through advanced mathematics. Among its teachers and graduates were Lagrange, Fourier, Laplace, Poisson, Cauchy, Navier, Coriolis, Sadi Carnot, Saint-Venant and many others who appear in this chapter. Its model influenced engineering education across Europe and America, including West Point.

## Viscosity enters the equations: Navier to Stokes

Claude-Louis Navier (1785–1836) was a graduate of the Polytechnique and the École des Ponts et Chaussées, an engineer who designed bridges and a professor of mechanics. In 1822 he presented to the Academy a memoir on the laws of fluid motion. Imagining a fluid as a set of molecules with forces between them that depend on their relative velocities, he added a new term to Euler's equations. The result was the equation of motion for a viscous fluid, the **Navier–Stokes equations**, although Navier's molecular reasoning was questionable and he did not identify his constant with a physical viscosity.

Navier was also a practical builder. His elegant suspension bridge over the Seine at the Invalides was dismantled in 1826 before completion, after a burst water main caused damage to an anchorage. The episode was used by critics to argue that mathematical engineers lacked common sense, a complaint heard throughout this period.

Over the next two decades, the equations were derived again in several ways. Augustin-Louis Cauchy developed the general theory of stress in continuous media (1822–1828); Siméon Denis Poisson (1829) derived equations for elastic solids and fluids; Adhémar Barré de Saint-Venant (1843) gave a derivation based on the idea that the stress is proportional to the rate of deformation, without molecules. In Cambridge, George Gabriel Stokes (1819–1903) gave the derivation that is now standard (1845), based on continuum assumptions, and was the first to apply it systematically to real problems: flow in pipes, the damping of pendulums by air, and, in 1851, the drag on a small sphere moving slowly through a viscous fluid, $F = 6\pi\mu a U$, still used for settling sediment and droplets.

:::{admonition} The Navier–Stokes equations (incompressible form)
:class: tip

$$
\begin{aligned}
&\rho \frac{D\mathbf{u}}{Dt} = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g}, \\
&\nabla \cdot \mathbf{u} = 0,
\end{aligned}
$$

where $D\mathbf{u}/Dt = \partial \mathbf{u}/\partial t + (\mathbf{u} \cdot \nabla)\mathbf{u}$ is the acceleration of a fluid particle. Compared with Euler's equations, the new term $\mu \nabla^2 \mathbf{u}$ represents viscous diffusion of momentum. Together with the *no-slip condition* (the fluid sticks to solid walls), which Stokes defended against other boundary conditions, these equations describe almost every flow met in hydraulics. Whether smooth solutions always exist in three dimensions is still an open mathematical problem, one of the seven Millennium Prize Problems announced in 2000.
:::

For several decades, the Navier–Stokes equations had little practical use. They could be solved only for very slow flows or simple geometries, and for most engineering flows they seemed to give the wrong answers. The reason, turbulence, is the subject of [Chapter 5](05-turbulence-and-boundary-layers.md).

## Napoleon, Britain and the steam engine

While French engineers wrote equations, Britain built machines. The long wars against revolutionary and Napoleonic France (1793–1815) were won in part by industrial and financial strength: British ironworks produced cannon and steam engines; British textile mills, driven by water wheels and increasingly by steam, paid for coalitions on the Continent. After 1815, French engineers who visited Britain were struck by how far ahead it was in practical industry.

Among them was the son of Lazare Carnot. **Sadi Carnot** (1796–1832), a Polytechnique graduate and army engineer, asked a simple question: is there a limit to the work that can be obtained from heat? His only book, *Réflexions sur la puissance motrice du feu* (*Reflections on the Motive Power of Fire*, 1824), answered with an analogy from hydraulics. Just as a water wheel produces work as water falls from a higher to a lower level, a heat engine produces work as heat (then thought of as a fluid called *caloric*) "falls" from a hot body to a cold one. The maximum work depends only on the temperatures of the two bodies, not on the working substance, and it is achieved by a reversible cycle, the *Carnot cycle*. In modern form, the maximum efficiency is

$$
\eta_{\max} = 1 - \frac{T_C}{T_H},
$$

with temperatures in kelvin. Carnot's reasoning also drew on his father's earlier principle that machines lose efficiency through shocks and sudden changes of velocity. The book was almost ignored until Émile Clapeyron restated it with Watt's pressure–volume diagrams in 1834.

Gaspard-Gustave **Coriolis** (1792–1843), also a Polytechnique graduate, gave the word *work* (*travail*) its precise meaning as force times distance (1829) and defined kinetic energy as $\tfrac{1}{2}mv^2$, settling the old vis viva debate in engineering terms. In 1835 he analysed motion in rotating frames, such as water wheels and turbines, and identified the extra inertial force now named after him. The Coriolis force was later found to be essential for ocean currents and the winds of the atmosphere.

## Energy: conversion, not destruction

Between 1840 and 1850, several people in different countries arrived at the principle of the conservation of energy. In Germany, the physician Julius Robert Mayer (1842) argued from the colour of sailors' blood in the tropics that heat and work were equivalent forms of a single "force". Hermann von Helmholtz (1821–1894), then a young army surgeon, gave the principle a general mathematical form in *Über die Erhaltung der Kraft* (*On the Conservation of Force*, 1847). Their work grew partly from the German tradition of *Naturphilosophie*, the Romantic idea that all the forces of nature are manifestations of one underlying unity, although Helmholtz himself insisted on strict mechanical reasoning.

In Manchester, the brewer James Prescott Joule (1818–1889) measured the mechanical equivalent of heat in a series of experiments in the 1840s. In the best known, a falling weight turned a paddle wheel in a vessel of water, and the tiny rise in temperature, caused by fluid friction, showed that work was converted into heat at a fixed rate. Viscous dissipation in a fluid was, in this sense, the experiment that proved that energy is not destroyed but converted.

William Thomson (1824–1907), later **Lord Kelvin**, at first defended Carnot's caloric theory, then reconciled it with Joule's results. Kelvin and Rudolf Clausius (1822–1888) formulated the two laws of thermodynamics around 1850–1851: energy is conserved; and heat does not flow spontaneously from a colder to a hotter body, so that some energy is always degraded in any real process. Kelvin proposed an absolute temperature scale (1848). Clausius named the measure of degradation **entropy** (1865) and summarised: the energy of the world is constant; the entropy of the world tends to a maximum. In the 1870s Ludwig Boltzmann gave entropy a statistical interpretation in terms of the motion of molecules, and James Clerk Maxwell imagined a "demon" that could sort fast and slow molecules and appear to violate the second law. Irreversibility, the arrow of time, had entered physics, and in fluids it is expressed by viscosity and turbulence, which turn ordered motion into heat.

## Engines that calculate

The industrial age also produced the idea of mechanical computation. In 1822 Charles Babbage (1791–1871) proposed a *Difference Engine* to compute mathematical tables, which were full of errors when calculated by hand, by the method of finite differences. Later he designed the far more ambitious *Analytical Engine*, a general-purpose machine with a "mill" (processor) and a "store" (memory), programmed with punched cards borrowed from the Jacquard loom. Ada Lovelace's notes on the Analytical Engine (1843) described how it could carry out a sequence of operations, including a program to calculate Bernoulli numbers. Neither engine was completed in Babbage's lifetime. The vocabulary of these machines, engines, mills and governors, came from the factory and the steam engine, and the ambition of solving the equations of fluid flow by machine would be realised only a century later (see [Chapter 6](06-war-flight-and-computing.md)).

## Telegraph cables and the diffusion of signals

The electric telegraph spread along railway lines from the 1840s. When a cable was laid under the English Channel (1851) and then attempted across the Atlantic, signals were found to be smeared out and slowed. In 1855 William Thomson showed that a long submarine cable behaves like a medium in which charge diffuses, governed by the same equation as heat conduction, so that the delay grows with the square of the length. His theory guided the design of cables and of sensitive receiving instruments such as the mirror galvanometer. The first Atlantic cable (1858) failed within weeks after an overenthusiastic engineer applied excessive voltage; a successful cable was laid in 1866 by Brunel's giant ship, the *Great Eastern*, and Thomson was knighted.

The cable connected fluid mechanics, heat and electricity through a common mathematics of diffusion and potential, and it made Thomson rich and famous, a model of the scientist-engineer of the Victorian empire.

## Pipes, channels and groundwater: empirical hydraulics matures

Water supply and sewerage for rapidly growing cities, irrigation and navigation canals required reliable formulas. Most of those still found in hydraulics textbooks were established in this period.

- **Laminar flow in tubes.** The German engineer Gotthilf Hagen (1839) and the French physician Jean Léonard Marie Poiseuille (1840, 1846), who was interested in blood flow, independently found by experiment that in a narrow tube the discharge is proportional to the pressure drop and to the fourth power of the radius. The **Hagen–Poiseuille law**, $Q = \pi R^4 \Delta p / (8 \mu L)$, was later shown to follow exactly from the Navier–Stokes equations, one of their first successes. Hagen also noticed that in wider tubes the flow changed character, an early glimpse of transition to turbulence.
- **Pipe friction.** Julius Weisbach (1806–1871), professor at the Freiberg Mining Academy, proposed in 1845 the form now known as the **Darcy–Weisbach equation**, $h_f = f \, (L/D) \, V^2/(2g)$, with a friction factor $f$ found by experiment.
- **Henry Darcy** (1803–1858), chief engineer of the city of Dijon, built a new water supply for the city in the 1830s and 1840s, with a 12.7 km covered aqueduct from the Rosoir spring and a pressurised distribution network that brought clean water to every street. In the course of this work he made careful experiments on pipe flow (1857), showing that the friction factor depends on pipe roughness. In an appendix to his 1856 report *Les fontaines publiques de la ville de Dijon*, he described experiments on the flow of water through columns of sand for the design of filters, and found that the discharge is proportional to the area and to the head loss per unit length. **Darcy's law** became the foundation of groundwater hydraulics (see [Chapter 7](07-history-of-hydrology.md)).
- **Open channels.** Darcy's assistant Henri Bazin continued his channel experiments; in Ireland, Robert Manning (1816–1897) examined existing data and in 1889 proposed the formula that bears his name, $V = \tfrac{1}{n} R^{2/3} S^{1/2}$ (in SI units), which became the standard for channel design. Saint-Venant (1871) derived the one-dimensional equations of unsteady flow in open channels, the **Saint-Venant equations**, used today for flood routing.
- **Weirs and turbines.** At Lowell, Massachusetts, a planned textile city powered by the Merrimack River, the engineer James B. Francis (1815–1892) made precise experiments on weirs (1855) to measure and sell water power, and improved the inward-flow reaction turbine that now carries his name (1849). The first efficient water turbine had been built in France by Benoît Fourneyron (1827). Lester Pelton's impulse wheel (patented 1880), developed for the high heads of the California gold fields, completed the family of turbines still used in hydropower.

The authors of these formulas were mostly engineers in public service or industry, and their work was motivated by the problems of their cities and industries. Their formulas worked, but they were not derived from the Navier–Stokes equations, and their coefficients changed from one pipe or channel to another in ways nobody could explain.

## Small ships and big ships: Froude and the law of similarity

The age of iron and steam brought ships of unprecedented size. Isambard Kingdom Brunel's *Great Eastern* (launched 1858), almost 700 feet long, was so large that no one could reliably predict the power it would need. Shipbuilders argued about whether large ships were more or less efficient than small ones and whether experiments with small models could tell anything about full-size ships.

**William Froude** (1810–1879), who had worked with Brunel on railways, answered the question. He reasoned that the resistance of a ship has two main parts: skin friction along the hull, and the resistance due to the waves the ship makes. Wave-making depends on gravity, and similar wave patterns are produced by a model and a ship when the ratio $V/\sqrt{gL}$, now called the **Froude number**, is the same. Persuading the Admiralty to fund the world's first ship model test tank, built at Torquay and completed in 1872, Froude towed wax models and compared the results with full-scale towing trials of the sloop HMS *Greyhound*. Froude's method, scaling wave resistance by the Froude number and calculating friction separately from experiments on planks, is still the basis of ship model testing. It also showed that a bigger ship, at the same speed, can be more efficient, because its Froude number is lower.

Froude's idea of *dynamic similarity* was generalised by Lord Rayleigh and others into dimensional analysis, and in 1914 Edgar Buckingham stated the "Pi theorem" that organises it. Similarity became the bridge between laboratory models and real structures in hydraulics and aeronautics, and between theory and practice.

## Vortices return: Helmholtz, Kelvin and the ether

In 1858 Helmholtz published a paper on vortex motion in an ideal fluid. He showed that vortex lines move with the fluid, that the strength of a vortex tube is constant along its length, and that in an inviscid fluid vortices can be neither created nor destroyed. They are, in a sense, *indestructible*. In 1869 Kelvin restated these results as the circulation theorem: in an ideal fluid, the circulation $\Gamma = \oint \mathbf{u} \cdot d\mathbf{l}$ around a closed loop moving with the fluid stays constant.

Kelvin was fascinated. In 1867 his friend Peter Guthrie Tait showed him smoke rings produced from a box with a circular hole: the rings travelled across the room, bounced off each other and vibrated, but never broke. Kelvin proposed that **atoms might be vortex rings** in a perfect fluid filling all space, the *ether*. Indestructible, able to vibrate at characteristic frequencies (spectral lines) and knotted in different ways (different elements), vortex atoms seemed an attractive alternative to hard, indivisible particles. Tait began to classify knots to produce a "periodic table" of vortex atoms, founding the mathematical theory of knots. Two centuries after Newton had refuted Descartes's vortices, a vortex theory of matter was taken seriously at the highest level of British physics.

The ether was also needed for light and electromagnetism. Light was understood as a wave since the work of Thomas Young and Augustin Fresnel early in the century, so it needed a medium. In 1861–1862 Maxwell, in *On Physical Lines of Force*, imagined the electromagnetic ether as a mechanism of rotating molecular vortices separated by small "idle wheel" particles, and from this model he derived that electromagnetic waves travel at the speed of light. He later dropped the mechanical model and kept the equations, published in his *Treatise on Electricity and Magnetism* (1873). In 1887–1888 Heinrich Hertz produced and detected electromagnetic waves in the laboratory. That same year, however, Albert Michelson and Edward Morley found no sign of the Earth's motion through the ether, a result that would eventually, through Einstein's relativity (1905), make the ether unnecessary (see [Chapter 5](05-turbulence-and-boundary-layers.md)).

## Revolution and evolution: how old is the Earth?

Kelvin also used the physics of heat to challenge Charles Darwin. *On the Origin of Species* (1859) required hundreds of millions of years for natural selection to work. In 1862 Kelvin calculated the age of the Earth from the rate at which heat flows out through its crust, assuming it had cooled by conduction from a molten state, and found between 20 and 400 million years, later narrowing his estimate further. He also argued that the Sun could not have shone for longer. The physicist's authority weighed heavily, and Darwin was troubled by it.

Kelvin's error was in his assumptions, not his mathematics. He did not know of radioactivity, discovered in 1896, which supplies heat inside the Earth. His student John Perry pointed out in 1895 that if the interior conducts or convects heat more efficiently than Kelvin assumed, the Earth could be far older. The episode shows the power and the limits of physical models: the answer depended entirely on how heat was assumed to flow.

## Summary

- The École Polytechnique (1794) created the mathematically trained engineer; its graduates added viscosity to Euler's equations (Navier 1822, Stokes 1845).
- Carnot's analysis of the steam engine (1824), built on a hydraulic analogy, led to thermodynamics; Joule's paddle-wheel experiments showed that fluid friction converts work into heat.
- Engineers established the empirical laws of pipes, channels, weirs, turbines and groundwater: Hagen–Poiseuille, Darcy–Weisbach, Darcy's law, Manning, Saint-Venant, Francis, Pelton.
- Froude introduced model testing and dynamic similarity (1872).
- Helmholtz's vortex theorems (1858) inspired Kelvin's vortex atoms and Maxwell's vortex ether, which faded as the ether itself was abandoned.

## Further reading

- Darrigol, O. (2005). *Worlds of Flow*, chapters 2–4. Oxford University Press.
- Levi, E. (1995). *The Science of Water: The Foundation of Modern Hydraulics*. ASCE Press.
- Simmons, C. T. (2008). Henry Darcy (1803–1858): Immortalised by his scientific legacy. *Hydrogeology Journal*, 16, 1023–1038.
- Smith, C., & Wise, M. N. (1989). *Energy and Empire: A Biographical Study of Lord Kelvin*. Cambridge University Press.
- Cardwell, D. S. L. (1971). *From Watt to Clausius: The Rise of Thermodynamics in the Early Industrial Age*. Heinemann.
- Brown, D. K. (2006). *The Way of a Ship in the Midst of the Sea: The Life and Work of William Froude*. Periscope Publishing.
