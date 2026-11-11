#!/usr/bin/env python3
"""Contrôles symboliques facultatifs du contenu mathématique du cours.

Exécution depuis le dépôt : python3 scripts/check-mathematics.py
Dépendance facultative, uniquement pour ce contrôle : Python 3 et SymPy.
Installation si nécessaire : python3 -m pip install sympy
Le site statique n'utilise pas Python ni SymPy pour fonctionner.

Ces contrôles prouvent les identités saisies ici par calcul symbolique ; ils ne
comparent pas quelques valeurs numériques et n'évaluent pas les réponses libres
des élèves. Ils complètent la relecture du contenu et les tests du navigateur.
Les formules avec sqrt(x) ou des puissances rationnelles emploient un symbole
strictement positif afin de respecter leur domaine de validité.
"""

from __future__ import annotations

import sys

try:
    import sympy as s
except ImportError:
    sys.exit(
        "Contrôle non exécuté : SymPy manque. "
        "Installer la dépendance facultative avec python3 -m pip install sympy."
    )


checks: list[str] = []


def identity(label: str, actual: s.Expr, expected: s.Expr = s.S.Zero) -> None:
    """Une assertion réussit seulement si la différence se simplifie à zéro."""
    remainder = s.simplify(actual - expected)
    if remainder != 0:
        raise AssertionError(f"{label} : différence symbolique non nulle : {remainder}")
    checks.append(label)


def proven(label: str, proposition: bool) -> None:
    """Enregistre uniquement une proposition symboliquement établie."""
    if proposition is not True:
        raise AssertionError(f"{label} : proposition non démontrée")
    checks.append(label)


x = s.symbols("x", real=True)
p = s.symbols("p", positive=True)
t = s.symbols("t", real=True)
h = s.symbols("h", real=True)
c = s.symbols("C", real=True)

# Les quinze exemples du chapitre C5. Le symbole p marque x > 0 dans
# l'exemple 2 ; tous les autres exemples sont définis sur R.
examples = [
    ("C5.01 polynôme", x, 2*x**3 - 2*x**2 + 3*x, 6*x**2 - 4*x + 3),
    ("C5.02 racine, x > 0", p,
     s.Rational(2, 5)*p**s.Rational(5, 2) + 2*s.sqrt(p),
     (p**2 + 1)/s.sqrt(p)),
    ("C5.03 cosinus composé", x, s.sin(3*x)/3, s.cos(3*x)),
    ("C5.04 sinus composé", x, s.cos(2-5*x)/5, s.sin(2-5*x)),
    ("C5.05 puissance composée", x, (3*x**2+1)**3/3,
     6*x*(3*x**2+1)**2),
    ("C5.06 racine composée", x, s.sqrt(3*x**2+2),
     3*x/s.sqrt(3*x**2+2)),
    ("C5.07 inverse composé", x, -1/(x**2+1), 2*x/(x**2+1)**2),
    ("C5.08 cosinus et dérivée intérieure", x, s.sin(x**2),
     2*x*s.cos(x**2)),
    ("C5.09 demi-facteur et sinus", x, -s.cos(x**2)/2,
     x*s.sin(x**2)),
    ("C5.10 somme", x, s.atan(x)+x**4/4, 1/(1+x**2)+x**3),
    ("C5.11 arctangente composée", x, s.atan(x**3), 3*x**2/(1+x**6)),
    ("C5.12 compensation un tiers", x, s.atan(x**3)/3, x**2/(1+x**6)),
    ("C5.13 arctangente intérieure", x, s.atan(x)**2/2,
     s.atan(x)/(1+x**2)),
    ("C5.14 produit trigonométrique", x, x*s.sin(x),
     s.sin(x)+x*s.cos(x)),
    ("C5.15 produit avec arctangente", x, x**3*s.atan(x),
     3*x**2*s.atan(x)+x**3/(1+x**2)),
]

for label, variable, primitive, function in examples:
    identity(label, s.diff(primitive, variable), function)

# Vérifications des valeurs imposées et de deux rédactions de synthèse.
identity("B4 F(1)=7", (x**2+6).subs(x, 1), 7)
identity("A5 G(2)=7", (x**2+3).subs(x, 2), 7)
identity("A5 application G(1)=-2", (x**3-3).subs(x, 1), -2)
identity("B4 application F(2)=1", (x**3-2*x-3).subs(x, 2), 1)

course_synthesis = s.sin(x**2)+x**3+s.atan(x)+2
identity("C6 condition F(0)=2", course_synthesis.subs(x, 0), 2)
identity("C6 dérivée des trois familles", s.diff(course_synthesis, x),
         2*x*s.cos(x**2)+3*x**2+1/(1+x**2))

exercise_synthesis = 2*x**3+s.sin(3*x)/3-1/(x**2+1)+3
identity("Exercice 30 condition F(0)=2", exercise_synthesis.subs(x, 0), 2)
identity("Exercice 30 dérivée", s.diff(exercise_synthesis, x),
         6*x**2+s.cos(3*x)+2*x/(x**2+1)**2)

# Une compensation par une fonction variable produit un terme supplémentaire.
# Le symbole p > 0 respecte les dénominateurs des deux contre-exemples.
false_trig = s.sin(p**2)/(2*p)
identity("Contre-exemple division par u' : dérivée complète",
         s.diff(false_trig, p), s.cos(p**2)-s.sin(p**2)/(2*p**2))
false_power = (p**2+1)**4/(8*p)
identity("Contre-exemple puissance : dérivée complète",
         s.diff(false_power, p), (p**2+1)**3-(p**2+1)**4/(8*p**2))

# Raccordement pour f(x)=|x| : valeurs limites, puis taux d'accroissement.
left = -x**2/2+c
right = x**2/2+c
identity("Raccordement dérivée à gauche", s.diff(left, x), -x)
identity("Raccordement dérivée à droite", s.diff(right, x), x)
identity("Raccordement continuité à gauche", s.limit(left, x, 0, dir="-"), c)
identity("Raccordement continuité à droite", s.limit(right, x, 0, dir="+"), c)
quotient = ((h*s.Abs(h)/2+c)-c)/h
identity("Raccordement quotient exact pour h non nul", quotient, s.Abs(h)/2)
identity("Raccordement dérivée en 0 par la gauche",
         s.limit(s.Abs(h)/2, h, 0, dir="-"), 0)
identity("Raccordement dérivée en 0 par la droite",
         s.limit(s.Abs(h)/2, h, 0, dir="+"), 0)

# Les deux réservoirs et le mouvement correspondent aux laboratoires.
volume_variable = 5+t**2
volume_constant = 5+3*t
position = 4+2*t-t**2
identity("Réservoir variable : dérivée débit", s.diff(volume_variable, t), 2*t)
identity("Réservoir variable : volume initial", volume_variable.subs(t, 0), 5)
identity("Réservoir variable : ajout en trois minutes",
         volume_variable.subs(t, 3)-volume_variable.subs(t, 0), 9)
identity("Réservoir constant : dérivée débit", s.diff(volume_constant, t), 3)
identity("Réservoir constant : volume initial", volume_constant.subs(t, 0), 5)
identity("Mobile : dérivée vitesse", s.diff(position, t), 2-2*t)
identity("Mobile : position initiale", position.subs(t, 0), 4)
identity("Mobile : déplacement de 0 à 3",
         position.subs(t, 3)-position.subs(t, 0), -3)
identity("Mobile : distance par découpage au changement de sens",
         s.Abs(position.subs(t, 1)-position.subs(t, 0))
         + s.Abs(position.subs(t, 3)-position.subs(t, 1)), 5)

# Vérifications symboliques des restrictions et des sommes de rectangles.
proven("Domaine : x²+1 > 0 sur R", s.ask(s.Q.positive(x**2+1)))
proven("Domaine : 3x²+2 > 0 sur R", s.ask(s.Q.positive(3*x**2+2)))
proven("Domaine : 1+x⁶ > 0 sur R", s.ask(s.Q.positive(1+x**6)))
proven("Domaine des racines simples : p > 0", p.is_positive)

n = s.symbols("n", integer=True, positive=True)
k = s.symbols("k", integer=True)
width = s.Rational(3, 1)/n
left_sum = s.summation((2*k*width)*width, (k, 0, n-1))
right_sum = s.summation((2*(k+1)*width)*width, (k, 0, n-1))
middle_sum = s.summation((2*(k+s.Rational(1, 2))*width)*width, (k, 0, n-1))
identity("Rectangles à gauche : formule exacte", left_sum, 9-9/n)
identity("Rectangles à droite : formule exacte", right_sum, 9+9/n)
identity("Rectangles au milieu : exacts pour f affine", middle_sum, 9)
identity("Convergence des rectangles à gauche", s.limit(left_sum, n, s.oo), 9)
identity("Convergence des rectangles à droite", s.limit(right_sum, n, s.oo), 9)

print(f"{len(checks)} assertions symboliques réussies.")
print("Dont 15 dérivées C5 ; conditions initiales et synthèses ; "
      "contre-exemples ; raccordement ; modèles physiques ; domaines et rectangles.")
print("Les racines de x et puissances rationnelles sont contrôlées pour x > 0.")
