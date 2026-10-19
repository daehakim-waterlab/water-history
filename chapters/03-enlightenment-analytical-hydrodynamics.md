---
title: 3 The Enlightenment and analytical hydrodynamics
---

In the 18th century, a small group of mathematicians, working with the calculus of Leibniz, turned the motion of fluids into a branch of mathematical analysis. Daniel Bernoulli connected pressure and velocity; Leonhard Euler wrote the general equations of motion for an ideal fluid; Jean le Rond d'Alembert and Joseph-Louis Lagrange gave them their elegant analytical form. Yet the theory had a fatal flaw: it predicted that a body moving steadily through a fluid feels no resistance at all. Meanwhile, the engineers who aimed cannons, built water wheels and managed rivers measured resistance every day. By the end of the century, "hydrodynamics" and "hydraulics" had become two separate worlds.

This was also the age of the salons and academies, of the *Encyclopédie*, of the steam engine and of political revolutions in America and France. The people in this chapter moved through all of these.

## Salons, academies and the vis viva debate

Science in the 18th century was organized around royal academies (Paris, Berlin, St. Petersburg) that set prize questions, paid salaries to a few members and published their memoirs. Around them, in Paris especially, the salons hosted by wealthy and educated women brought together philosophers, scientists and writers.

Émilie du Châtelet (1706–1749) was one of the most capable natural philosophers of the period. In her *Institutions de physique* (1740) she combined Newton's mechanics with Leibniz's metaphysics and argued, using the experiments of Willem 's Gravesande, who dropped brass balls into soft clay and found that the depth of the dent grew with the square of the speed, that *vis viva* ($mv^2$) was the true measure of a body's force. Her French translation of Newton's *Principia*, with a commentary, published in 1759 after her death, remained the standard French edition for two centuries. She and Voltaire helped make Newtonian physics fashionable in France, displacing Descartes's vortices from the salons as well as the academies.

In 1743 d'Alembert, in his *Traité de dynamique*, argued that the vis viva controversy was largely a dispute about words: momentum measures the effect of a force over time, and *vis viva* its effect over distance. Both are useful. In fluid mechanics, the principle that the gain of *vis viva* equals the work done (in modern language, the work–energy principle) was the key to Bernoulli's equation.

## The Bernoullis: a family of rivals

The Bernoulli family of Basel produced eight notable mathematicians in three generations, and some of the most famous quarrels in the history of science.

Daniel Bernoulli (1700–1782) worked at the new St. Petersburg Academy from 1725 to 1733, alongside his friend Leonhard Euler. There he wrote *Hydrodynamica*, published in 1738, which gave the field its name. Bernoulli applied the conservation of *vis viva* to water flowing through a vessel and its pipes, assuming that the water moved in parallel slices. He showed that where the velocity is high, the pressure on the wall is low, and he measured this by attaching a small glass tube to a pipe and observing the height of the water in it. *Hydrodynamica* also contains a kinetic theory of gases, explaining pressure as the impacts of moving particles, a century before the theory was taken up again.

His father, Johann Bernoulli (1667–1748), was a brilliant mathematician and an extraordinarily jealous man. In 1734 father and son shared the Paris Academy's prize; Johann was reportedly so angry at being equalled by his son that he banned Daniel from his house. A few years later Johann wrote his own *Hydraulica*, which used Newton's force and acceleration instead of *vis viva*, and dated it 1732, so that it would appear to come before his son's work. It was published in 1742. Johann's book had genuine merit: by considering the internal pressure needed to accelerate each slice of fluid, it came closer to a general dynamical treatment than Daniel's. Euler, who knew both men well, built on both.

:::{admonition} Bernoulli's equation (modern form)
:class: tip
For steady flow of an inviscid, incompressible fluid along a streamline,

$$
\frac{p}{\rho} + \frac{V^2}{2} + g z = \text{constant},
$$

where $p$ is pressure, $\rho$ density, $V$ velocity and $z$ elevation. Dividing by $g$ gives the familiar *energy line* of hydraulics: pressure head + velocity head + elevation head. Neither Daniel nor Johann wrote it in exactly this form; it was given its general form by Euler in the 1750s.
:::

## Euler's equations

Leonhard Euler (1707–1783), born in Basel and a student of Johann Bernoulli, was the most productive mathematician of the century. He worked in St. Petersburg (1727–1741), then for Frederick the Great in Berlin (1741–1766), then in St. Petersburg again until his death, continuing to publish at an astonishing rate even after he became almost completely blind.

In a series of memoirs written in 1752–1755 and published in 1757, including *Principes généraux du mouvement des fluides* (*General Principles of the Motion of Fluids*), Euler did what Newton and the Bernoullis had not: he wrote the general equations of motion of a fluid as partial differential equations for the velocity and pressure fields. He considered a small element of fluid, applied Newton's second law to it, and added the condition of conservation of mass:

:::{admonition} The Euler equations (1755)
:class: tip

$$
\begin{aligned}
&\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0, \\
&\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} = -\frac{1}{\rho}\nabla p + \mathbf{g}.
\end{aligned}
$$

Here $\mathbf{u}$ is the velocity vector and $\mathbf{g}$ is gravity. The first is the continuity equation; the second expresses Newton's second law for a fluid particle. Euler wrote them in components and with different notation.
:::

Euler's idea of describing a fluid by fields of velocity and pressure at fixed points in space (now called the *Eulerian* description) is used in almost all of modern fluid mechanics. Euler was confident that the principles were now complete. If we still could not fully understand the motion of fluids, he wrote, the fault lay not with mechanics but with the mathematics needed to solve the equations. He was right: the difficulty was in solving the equations, not in finding them.

Euler also worked on very practical problems: ship design, water turbines (his analysis of Segner's reaction wheel in the 1750s anticipated the modern theory of turbomachines, with the "Euler turbine equation" relating torque to the change in angular momentum of the fluid), and, as we shall see, ballistics.

## D'Alembert's paradox

Jean le Rond d'Alembert (1717–1783) was abandoned as a baby on the steps of a Paris church and grew up to become one of the leading figures of the Enlightenment. With Denis Diderot he edited the *Encyclopédie* (from 1751), the great collective work of the age, writing its *Preliminary Discourse* and many articles on mathematics and science. He was a regular in the salons, especially that of Julie de Lespinasse.

In 1749 the Berlin Academy offered a prize on the theory of fluid resistance. D'Alembert submitted an essay; the prize was not awarded, and he published an extended version in 1752 as *Essai d'une nouvelle théorie de la résistance des fluides*. In it, he introduced partial differential equations for fluid motion and the condition for what we now call irrotational flow. And he arrived at a disturbing result: for an ideal (inviscid, incompressible) fluid flowing steadily around a symmetric body, the pressures on the front and back exactly balance, so the body experiences **no resistance at all**. He returned to the problem in his *Opuscules mathématiques* (1768) and admitted that he could not see how theory could explain the resistance of fluids: treated rigorously, it gave zero resistance, a "singular paradox" that he left for future mathematicians to resolve.

:::{admonition} D'Alembert's paradox
:class: warning
In steady potential flow of an inviscid, incompressible fluid around a body, the net drag force is zero. Real bodies in real fluids always experience drag. The paradox was resolved only in 1904, when Ludwig Prandtl showed how a thin viscous boundary layer causes the flow to separate from the body (see [Chapter 5](05-turbulence-and-boundary-layers.md)).
:::

## Lagrange: mechanics without pictures

Joseph-Louis Lagrange (1736–1813), born in Turin, succeeded Euler in Berlin in 1766 and moved to Paris in 1787. His *Mécanique analytique* (1788) reformulated all of mechanics, including fluids, using variational principles and generalized coordinates. Proudly, its preface states that the book contains no figures: only algebraic operations. In fluid mechanics, Lagrange introduced the velocity potential (1781), a scalar function whose gradient is the velocity in irrotational flow, and showed that if a flow of an ideal fluid starts irrotational it stays irrotational. He also developed the *Lagrangian* description, which follows individual fluid particles instead of fixed points.

By the end of the century, the theory of ideal fluids was mathematically beautiful and almost complete. It explained hydrostatics, waves on deep water and the propagation of sound. But it could not explain why water in a pipe needs a slope or a pump to keep flowing, or why a ship needs sails or oars, or how much force it takes to pull a barge. For those questions, engineers relied on experiments.

## Cannons, gunpowder and the resistance of air

Fluid resistance mattered most urgently on the battlefield. In 1742 the English mathematician Benjamin Robins (1707–1751) published *New Principles of Gunnery*. Using his invention, the **ballistic pendulum**, a heavy wooden block hung as a pendulum into which a musket ball was fired, he measured muzzle velocities for the first time, from the swing of the block and the conservation of momentum. He found that air resistance on a fast ball was far larger than anyone had assumed, many times its weight, so that the parabolic trajectories of Galileo's theory were useless for real artillery. He also noticed that resistance increased sharply as the speed approached the speed of sound, the first observation of what would be called the transonic drag rise two centuries later.

Frederick the Great asked Euler for a good German book on artillery. Euler translated Robins's book in 1745, adding commentaries several times longer than the original, which included a theory of the trajectory of a projectile with quadratic drag. The translation was in turn translated into English and French and used in military schools for decades.

Gunpowder was also a matter of state. In France, the chemist Antoine Lavoisier was put in charge of the Royal Gunpowder Administration in 1775 and greatly improved the quality and supply of saltpeter and powder, which helped supply the American revolutionaries. Lavoisier was guillotined in 1794 during the Terror, as a former tax farmer.

## The engineers' experiments

While analysts wrote equations, engineers measured.

- **Henri Pitot** (1695–1771), working on the Seine in 1732, invented the bent tube now called the **Pitot tube**: a tube with its opening facing the current, in which the water rises by a height proportional to the square of the velocity. He used it to show that, contrary to common belief, the velocity of a river increases from the bed toward the surface.
- **John Smeaton** (1724–1792), the first to call himself a "civil engineer," built model water wheels and in 1759 showed experimentally that overshot wheels (driven by the weight of water) were about twice as efficient as undershot wheels (driven by the impact of the current). The work earned him the Royal Society's Copley Medal and changed mill design.
- **Jean-Charles de Borda** (1733–1799) analyzed the energy loss when flow suddenly expands, the loss of "living force" in a shock, which is still called the Borda–Carnot loss, and studied flow through orifices and the efficiency of water wheels.
- **Charles Bossut** (1730–1814), with d'Alembert and Condorcet, towed model boats in a large basin in Paris in 1775 to study the resistance of ships for the Navy, one of the first organized programs of model testing.
- **Antoine de Chézy** (1718–1798), studying a canal to supply Paris with water from the river Yvette in the 1760s and 1770s, proposed that the mean velocity in a channel is proportional to the square root of the product of the hydraulic radius and the slope. Chézy's formula, $V = C\sqrt{R S}$, is still used in open-channel hydraulics; it was forgotten for decades and rediscovered in the 19th century.
- **Pierre du Buat** (1734–1809), in *Principes d'hydraulique* (1779, expanded 1786), compiled experiments on pipes and channels into empirical formulas and stated that the resistance to flow depends on the velocity and the wetted surface, not on the pressure.

These works laid the foundation of practical hydraulics: empirical coefficients for orifices, weirs, pipes and channels, used with continuity and a simplified energy equation. The gap between this hydraulics and the analytical hydrodynamics of Euler and Lagrange was the great open problem of the next century.

## 1776: engines, markets and revolution

The year 1776 is a convenient marker for the transformations that would shape the next chapter. In Scotland, Adam Smith published *The Wealth of Nations*. In America, the Declaration of Independence was signed. And in England, the first steam engines built by the new partnership of Matthew Boulton and James Watt started work, one pumping water from a coal mine and another blowing air into an ironworks furnace.

James Watt (1736–1819), an instrument maker at the University of Glasgow, had realized in 1765 while repairing a model of a Newcomen engine that most of its fuel was wasted in reheating the cylinder after each stroke. His separate condenser, patented in 1769, cut fuel use by about three quarters. Boulton, a Birmingham manufacturer, provided capital and production skills. Their engines, and later their rotative engines driving machinery, powered the Industrial Revolution.

Boulton and Watt were members of the **Lunar Society** of Birmingham, an informal club that met monthly on the night of the full moon (so that members could ride home safely). It included the physician and poet Erasmus Darwin (grandfather of Charles), the potter Josiah Wedgwood, the chemist Joseph Priestley and others. They discussed chemistry, electricity, canals, education and politics; several supported the American and French revolutions. In 1791 a "Church and King" mob burned Priestley's house and laboratory in Birmingham, and he later emigrated to the United States.

The steam engine posed new questions: how much work can be obtained from heat, and what limits the efficiency of a machine? Watt himself introduced the *horsepower* and, with his assistant John Southern, the indicator diagram, a plot of pressure against volume in the cylinder. The answers led to thermodynamics, which, as [Chapter 4](04-industrial-age-engineering-hydraulics.md) shows, grew up in close contact with hydraulics.

## Summary

- The vis viva debate, carried into the salons by du Châtelet, led to the work–energy principle used by Daniel Bernoulli in *Hydrodynamica* (1738).
- Euler wrote the general equations of ideal fluid motion (1755); d'Alembert and Lagrange gave hydrodynamics its analytical form.
- D'Alembert's paradox (1752) showed that ideal-fluid theory predicts zero drag.
- Artillery (Robins, Euler) and engineering experiments (Pitot, Smeaton, Borda, Bossut, Chézy, du Buat) built an empirical hydraulics separate from theory.
- The steam engine and the Lunar Society linked fluid mechanics to the Industrial Revolution and to the coming science of heat.

## Further reading

- Darrigol, O. (2005). *Worlds of Flow*, chapter 1. Oxford University Press.
- Calero, J. S. (2008). *The Genesis of Fluid Mechanics, 1640–1780*. Springer.
- Truesdell, C. (1954). Rational fluid mechanics, 1687–1765. In *Leonhardi Euleri Opera Omnia*, ser. II, vol. 12. Orell Füssli.
- Steele, B. D. (1994). Muskets and pendulums: Benjamin Robins, Leonhard Euler, and the ballistics revolution. *Technology and Culture*, 35(2), 348–382.
- Uglow, J. (2002). *The Lunar Men: The Friends Who Made the Future*. Faber and Faber.
- Zinsser, J. P. (2006). *La Dame d'Esprit: A Biography of the Marquise du Châtelet*. Viking.
