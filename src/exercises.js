const m = String.raw;

/**
 * Questions à choix de structure : aucune saisie libre n'est évaluée par
 * comparaison de chaînes ou par de simples essais numériques.
 * `answer` est l'indice, à partir de zéro, de l'unique choix correct.
 */
export const exercises = [
  {
    id: 'ex01', title: 'Une valeur ou une pente ?', category: 'Comprendre', errorType: 'sens', review: 'a1',
    statement: m`<p>On pose \(H(x)=x^2\) et \(g(x)=2x\). Au point d'abscisse \(3\), quelle phrase distingue correctement les deux informations ?</p>`,
    hints: [m`\(H(3)\) est une ordonnée ; \(H'(3)\) est une pente.`, m`Calcule séparément \(3^2\) et \(2\times3\).`],
    choices: [m`La valeur de \(H\) est 9 et sa pente est 6.`, m`La valeur de \(H\) est 6 et sa pente est 9.`, m`\(g\) est une primitive de \(H\) parce que sa lettre est minuscule.`], answer: 0,
    feedback: [m`Oui : \(H(3)=9\), tandis que \(H'(3)=g(3)=6\).`, m`Tu as échangé la valeur de la fonction et celle de sa dérivée.`, m`Les lettres ne donnent aucun rôle : c'est l'égalité \(H'=g\) qui indique que H est une primitive de g.`],
    solution: m`<p>\(H\) désigne toute la fonction. \(H(3)=9\) est sa valeur au point 3. La fonction dérivée est \(H'=g\), donc \(H'(3)=g(3)=6\) donne la pente de la tangente à la courbe de H en ce point. H est une primitive de g, quel que soit le choix des lettres.</p>`,
    verification: m`\(H'(x)=(x^2)'=2x=g(x)\) sur \(\mathbb R\).`
  },
  {
    id: 'ex02', title: 'Primitive et fonction réciproque', category: 'Comprendre', errorType: 'sens', review: 'a1',
    statement: m`<p>Soit \(f(x)=2x\) sur \(\mathbb R\). Quel couple donne une primitive de f puis la fonction réciproque de f ?</p>`,
    hints: [m`Pour la primitive, cherche une fonction dont la dérivée vaut \(2x\).`, m`Pour la réciproque, résous \(y=2x\) en x. Ce sont deux questions différentes.`],
    choices: [m`Primitive : \(x/2\) ; réciproque : \(x^2\).`, m`Primitive : \(x^2\) ; réciproque : \(x/2\).`, m`Primitive et réciproque : \(1/(2x)\).`], answer: 1,
    feedback: [m`\((x/2)'=1/2\), pas \(2x\). Tu as inversé les rôles.`, m`Oui : dériver et inverser une fonction ne sont pas la même opération.`, m`\(1/f(x)\) est l'inverse d'un nombre f(x), pas la fonction réciproque de f ; cette formule n'est pas non plus une primitive.`],
    solution: m`<p>La fonction \(x\mapsto x^2\) est une primitive de f. La réciproque \(x\mapsto x/2\) annule l'effet de « multiplier par 2 » : \(f(x/2)=x\). Chercher une primitive consiste à retrouver une évolution possible à partir de sa vitesse de variation ; cela ne revient pas à remonter les valeurs de f par réciprocité.</p>`,
    verification: m`\((x^2)'=2x\) ; en revanche \((x/2)'=1/2\).`
  },
  {
    id: 'ex03', title: 'Un débit constant, trois quantités', category: 'Situations physiques', errorType: 'constante', review: 'a2',
    statement: m`<p>Un réservoir contient initialement 5 L. Un débit net constant de 3 L/min l'alimente. Après 2 min, quel est le volume présent ? Distingue-le du volume ajouté.</p>`,
    hints: [m`Le débit multiplié par la durée donne ici le volume ajouté, parce que le débit est constant.`, m`Il faut encore tenir compte des 5 L déjà présents au départ.`],
    choices: [m`6 L présents et 6 L ajoutés.`, m`10 L présents et 5 L ajoutés.`, m`11 L présents et 6 L ajoutés.`], answer: 2,
    feedback: [m`Les 6 L sont le volume ajouté. Le réservoir ne part pas de zéro.`, m`On ajoute \(3\times2=6\) L, et non 5 L.`, m`Oui : le volume présent est la somme du volume initial et du volume ajouté.`],
    solution: m`<p>En exprimant t en minutes, \(F(t)=5+3t\) donne le volume en litres. À \(t=2\), le volume ajouté est \(3\,\mathrm{L/min}\times2\,\mathrm{min}=6\,\mathrm L\). Le volume présent est \(F(2)=5+6=11\) L. Le débit instantané reste 3 L/min : ce n'est pas un volume.</p>`,
    verification: m`\(F'(t)=3\) L/min et \(F(0)=5\) L. Sur \([0,3]\), \(F(t)\geq5\) L.`
  },
  {
    id: 'ex04', title: 'Pourquoi le débit final ne suffit pas', category: 'Situations physiques', errorType: 'sens', review: 'a2',
    statement: m`<p>Le débit net est maintenant \(f(t)=2t\) L/min pour \(0\leq t\leq3\), et \(F(t)=5+t^2\) L. Quel volume a été ajouté pendant ces 3 minutes ?</p>`,
    hints: [m`Le volume ajouté est la différence entre le volume final et le volume initial.`, m`Le calcul \(f(3)\times3\) ferait comme si le débit avait été 6 L/min pendant toute la durée.`],
    choices: [m`9 L.`, m`18 L.`, m`14 L.`], answer: 0,
    feedback: [m`Oui : \(F(3)-F(0)=14-5=9\) L.`, m`18 L utilise le débit final sur toute la durée, alors que le débit a augmenté de 0 à 6 L/min.`, m`14 L est le volume présent ; il comprend les 5 L initiaux.`],
    solution: m`<p>\(F(3)=14\) L et \(F(0)=5\) L. Il a donc été ajouté 9 L. Le débit final de 6 L/min ne décrit que l'instant final. Pour un débit variable, il faut additionner les petits apports \(f(t)\,\Delta t\), ou utiliser la différence des valeurs d'une primitive adaptée.</p>`,
    verification: m`\((5+t^2)'=2t=f(t)\). Les volumes aux temps 0, 1, 2 et 3 min sont 5, 6, 9 et 14 L.`
  },
  {
    id: 'ex05', title: 'À gauche, sans position négative', category: 'Situations physiques', errorType: 'signe', review: 'a3',
    statement: m`<p>La position d'un mobile est \(X(t)=4+2t-t^2\) m pour \(t\in[0,3]\), avec t en secondes. À \(t=2\), que peut-on dire de sa position et de son mouvement ?</p>`,
    hints: [m`Calcule la position puis la vitesse \(v=X'\).`, m`Le signe de la vitesse donne le sens de mouvement, pas le signe de la position.`],
    choices: [m`Il est en position négative parce que sa vitesse est négative.`, m`Il est à la position 4 m et se déplace vers la gauche à 2 m/s.`, m`Il est immobile parce qu'il retrouve sa position initiale.`], answer: 1,
    feedback: [m`Une position et une vitesse sont deux quantités différentes : ici \(X(2)=4>0\).`, m`Oui : \(v(2)=-2\) m/s et \(X(2)=4\) m.`, m`Revenir à une position déjà occupée ne signifie pas s'arrêter ; il faut regarder v.`],
    solution: m`<p>\(v(t)=2-2t\), donc \(v(2)=-2\) m/s : la position diminue. Pourtant \(X(2)=4\) m reste positive. Entre 0 et 2 s, le déplacement est nul, car \(X(2)-X(0)=0\). La distance parcourue est 2 m : 1 m vers la droite jusqu'à t=1, puis 1 m vers la gauche.</p>`,
    verification: m`\(X'(t)=2-2t\), \(X(0)=4\), \(X(1)=5\), \(X(2)=4\). La distance est \(|5-4|+|4-5|=2\) m.`
  },
  {
    id: 'ex06', title: 'Lire une courbe de dérivée', category: 'Courbes et variations', errorType: 'sens', review: 'a4',
    statement: m`<p>La droite ci-dessous représente \(f(x)=x-1\) sur \([0,2]\). Une fonction F vérifie \(F'=f\). Quelles sont ses variations ?</p><svg viewBox="0 0 320 190" role="img" aria-label="Courbe de f égale x moins 1 : négative de 0 à 1, nulle en 1, positive de 1 à 2" style="max-width:320px;width:100%;height:auto"><path d="M35 20V165M20 95H300" fill="none" stroke="currentColor" stroke-width="1"/><path d="M35 150L275 40" fill="none" stroke="#216b61" stroke-width="3"/><path d="M155 91V99M275 91V99" stroke="currentColor"/><text x="22" y="110" fill="currentColor">0</text><text x="150" y="115" fill="currentColor">1</text><text x="270" y="115" fill="currentColor">2</text><text x="17" y="154" fill="currentColor">−1</text><text x="22" y="44" fill="currentColor">1</text><text x="292" y="87" fill="currentColor">x</text><text x="43" y="22" fill="currentColor">f(x)</text></svg>`,
    hints: [m`Lis le signe de la courbe par rapport à l'axe horizontal.`, m`\(F'=f<0\) implique que F décroît ; \(F'=f>0\) implique qu'elle croît.`],
    choices: [m`F est négative avant 1 et positive après 1.`, m`F croît sur tout l'intervalle parce que la droite f monte.`, m`F décroît sur \([0,1]\), puis croît sur \([1,2]\).`], answer: 2,
    feedback: [m`Le signe de f ne détermine pas le signe de F : une constante peut déplacer la courbe de F.`, m`La croissance de f concerne l'évolution de la pente ; les variations de F se lisent avec le signe de f.`, m`Oui : les pentes de F sont négatives avant 1, puis positives après 1.`],
    solution: m`<p>\(f(x)<0\) pour \(0\leq x<1\), \(f(1)=0\), et \(f(x)>0\) pour \(1<x\leq2\). F décroît donc jusqu'à 1, puis croît : elle admet un minimum en 1. Son signe reste inconnu sans une valeur initiale. Par exemple \(F(x)=x^2/2-x+C\) convient pour toute constante C.</p>`,
    verification: m`\(\left(\frac{x^2}{2}-x+C\right)'=x-1=f(x)\).`
  },
  {
    id: 'ex07', title: 'Une pente nulle est-elle un sommet ?', category: 'Courbes et variations', errorType: 'sens', review: 'a4',
    statement: m`<p>Soit \(F(x)=x^3\). Puisque \(F'(0)=0\), quelle conclusion est justifiée ?</p>`,
    hints: [m`Examine le signe de \(F'(x)=3x^2\) de chaque côté de 0.`, m`Compare aussi \(F(-h)\), \(F(0)\) et \(F(h)\) pour \(h>0\).`],
    choices: [m`La tangente est horizontale, mais 0 n'est pas un extremum.`, m`F a nécessairement un maximum en 0.`, m`F a nécessairement un minimum en 0.`], answer: 0,
    feedback: [m`Oui : F reste croissante de part et d'autre de 0.`, m`Une pente nulle à un point ne suffit pas à prouver un maximum.`, m`Une pente nulle à un point ne suffit pas à prouver un minimum.`],
    solution: m`<p>\(F'(0)=0\) indique une tangente horizontale. Pour \(h>0\), \(F(-h)=-h^3<0=F(0)<h^3=F(h)\). Des valeurs plus petites et plus grandes que F(0) existent aussi près de 0 que l'on veut : il n'y a donc ni maximum ni minimum local en 0.</p>`,
    verification: m`\((x^3)'=3x^2\geq0\) sur \(\mathbb R\). La dérivée ne change pas de signe en 0.`
  },
  {
    id: 'ex08', title: 'Pourquoi une seule constante ?', category: 'Comprendre', errorType: 'constante', review: 'a5',
    statement: m`<p>Sur \(\mathbb R\), F et G vérifient \(F'(x)=G'(x)=2x\). Quelle affirmation décrit toutes les possibilités ?</p>`,
    hints: [m`Pose \(D=F-G\) et calcule D'.`, m`Sur un intervalle, le théorème des accroissements finis montre qu'une fonction de dérivée nulle est constante.`],
    choices: [m`F et G sont toujours égales.`, m`\(F-G\) est constante ; toutes les primitives sont \(x^2+C\).`, m`F et G peuvent différer d'une fonction quelconque de x.`], answer: 1,
    feedback: [m`Leur dérivée ne permet pas de retrouver leur différence initiale : elles peuvent être décalées verticalement.`, m`Oui : le TAF appliqué à F−G sur tout segment donne une différence constante.`, m`Si la différence dépendait de x avec une dérivée non nulle, les deux dérivées ne seraient plus égales.`],
    solution: m`<p>La fonction \(D=F-G\) est dérivable sur \(\mathbb R\) et \(D'=0\). Pour \(a<b\), elle est continue sur \([a,b]\), dérivable sur \(]a,b[\), et le TAF donne \(D(b)-D(a)=D'(c)(b-a)=0\). D est donc constante. Comme \(x^2\) est une primitive, toutes sont \(x^2+C\).</p>`,
    verification: m`\((x^2+C)'=2x+0=2x\). La constante C ne modifie aucune pente.`
  },
  {
    id: 'ex09', title: 'Choisir la courbe qui passe par un point', category: 'Valeur imposée', errorType: 'constante', review: 'b4',
    statement: m`<p>Détermine la primitive de \(f(x)=2x\) sur \(\mathbb R\) telle que \(F(1)=7\).</p>`,
    hints: [m`Écris d'abord toutes les primitives : \(F(x)=x^2+C\).`, m`Remplace x par 1 dans la condition et résous \(1+C=7\).`],
    choices: [m`\(F(x)=x^2+7\).`, m`\(F(x)=7x^2\).`, m`\(F(x)=x^2+6\).`], answer: 2,
    feedback: [m`Alors F(1) vaudrait 8. La constante n'est pas directement la valeur imposée.`, m`Cette fonction vaut bien 7 en 1, mais sa dérivée est \(14x\), pas \(2x\).`, m`Oui : le choix C=6 satisfait la dérivée et la condition.`],
    solution: m`<p>Une primitive de f sur \(\mathbb R\) est \(F_0(x)=x^2\). Toutes sont \(F_0+C\). La condition donne \(F_0(1)+C=7\), donc \(C=7-1=6\). L'unique fonction demandée est \(F(x)=x^2+6\).</p>`,
    verification: m`\(F'(x)=2x\) sur \(\mathbb R\) et \(F(1)=1+6=7\). Les deux contrôles sont nécessaires.`
  },
  {
    id: 'ex10', title: 'Un polynôme terme par terme', category: 'Calcul direct', errorType: 'puissance', review: 'c2',
    statement: m`<p>Quelle fonction est une primitive de \(6x^2-4x+3\) sur \(\mathbb R\) ? Explique chaque coefficient.</p>`,
    hints: [m`Pour une puissance, augmente l'exposant de 1 puis divise par ce nouvel exposant.`, m`Il faut dériver le résultat : le facteur 3 de \((x^3)'\) compense la division par 3.`],
    choices: [m`\(2x^3-2x^2+3x\).`, m`\(6x^3-4x^2+3x\).`, m`\(12x-4\).`], answer: 0,
    feedback: [m`Oui : les divisions par 3 et par 2 compensent les facteurs de dérivation.`, m`Tu as augmenté les puissances sans compenser les nouveaux coefficients.`, m`Tu as dérivé la fonction donnée au lieu d'en chercher une primitive.`],
    solution: m`<p>Par linéarité, on traite séparément les trois termes : \(6x^2\) donne \(6x^3/3=2x^3\) ; \(-4x\) donne \(-4x^2/2=-2x^2\) ; la constante 3 donne \(3x\). Une primitive est donc \(2x^3-2x^2+3x\), et toutes s'obtiennent en ajoutant C.</p>`,
    verification: m`\((2x^3-2x^2+3x)'=6x^2-4x+3\).`
  },
  {
    id: 'ex11', title: 'Une fraction avec une racine', category: 'Racines et puissances', errorType: 'puissance', review: 'c2',
    statement: m`<p>Sur \(]0,+\infty[\), on cherche une primitive de \(\dfrac{x^2+1}{\sqrt{x}}\). Quelle réécriture puis primitive convient ?</p>`,
    hints: [m`Sépare le numérateur puis utilise \(\sqrt x=x^{1/2}\).`, m`L'expression devient \(x^{3/2}+x^{-1/2}\).`],
    choices: [m`\(x^{3/2}+x^{1/2}\).`, m`\(\dfrac25x^{5/2}+2\sqrt{x}\).`, m`\(\dfrac23x^{3/2}-2x^{-1/2}\).`], answer: 1,
    feedback: [m`Ces exposants ne donnent pas les puissances de l'intégrande après dérivation.`, m`Oui : \(3/2+1=5/2\), puis on divise par 5/2 ; \(-1/2+1=1/2\), puis on divise par 1/2.`, m`Cette primitive correspond à d'autres puissances : vérifie d'abord la réécriture de la fraction.`],
    solution: m`<p>Pour \(x>0\), \(\dfrac{x^2+1}{\sqrt x}=x^{3/2}+x^{-1/2}\). Une primitive est \(F(x)=\dfrac{x^{5/2}}{5/2}+\dfrac{x^{1/2}}{1/2}=\dfrac25x^{5/2}+2\sqrt x\). Toutes les formules de dérivation employées ici sont valables sur l'intervalle ouvert \(]0,+\infty[\).</p>`,
    verification: m`\(F'(x)=\frac25\cdot\frac52x^{3/2}+2\cdot\frac1{2\sqrt x}=x^{3/2}+x^{-1/2}=\dfrac{x^2+1}{\sqrt x}\).`
  },
  {
    id: 'ex12', title: 'Puissance négative et intervalle', category: 'Domaines', errorType: 'domaine', review: 'b3',
    statement: m`<p>Quelle affirmation sur \(f(x)=1/x^2\) est correcte ?</p>`,
    hints: [m`La fonction n'est pas définie en 0.`, m`Dérive \(-1/x\) sur chacun des deux intervalles où x ne s'annule pas.`],
    choices: [m`\(-1/x\) est une primitive sur \(\mathbb R\).`, m`\(1/x\) est une primitive sur \(]0,+\infty[\).`, m`\(-1/x\) est une primitive sur chacun des intervalles \(]-\infty,0[\) et \(]0,+\infty[\).`], answer: 2,
    feedback: [m`La formule et la fonction donnée ne sont pas définies en 0 : R ne convient pas.`, m`\((1/x)'=-1/x^2\) : le signe est incorrect.`, m`Oui : il faut annoncer un intervalle ne contenant pas 0.`],
    solution: m`<p>On réécrit \(1/x^2=x^{-2}\). La règle donne \(x^{-1}/(-1)=-1/x\), car \(-2+1=-1\). La fonction est dérivable sur chacun des deux intervalles indiqués. On ne doit pas écrire que la formule définit une primitive sur \(\mathbb R\).</p>`,
    verification: m`\(\left(-x^{-1}\right)'=(-1)(-1)x^{-2}=1/x^2\), pour \(x\ne0\).`
  },
  {
    id: 'ex13', title: 'La borne zéro n’est pas incluse', category: 'Racines et puissances', errorType: 'domaine', review: 'b3',
    statement: m`<p>On propose \(F(x)=2\sqrt{x}\) comme primitive de \(f(x)=1/\sqrt{x}\). Quel énoncé de validité est exact ?</p>`,
    hints: [m`F(0) existe, mais f(0) existe-t-elle ?`, m`La définition demande l'égalité des dérivées en chaque point de l'intervalle annoncé.`],
    choices: [m`F est une primitive de f sur \(]0,+\infty[\) ; cette vérification n'inclut pas 0.`, m`F est une primitive de f sur \([0,+\infty[\), car F(0)=0.`, m`F est une primitive de f sur \(\mathbb R\).`], answer: 0,
    feedback: [m`Oui : la formule de dérivée utilisée exige x>0, et f n'est pas définie en 0.`, m`L'existence de F(0) ne suffit pas : f(0) n'existe pas et le quotient \(2\sqrt h/h\) n'a pas de limite finie en 0.`, m`La racine carrée réelle n'est pas définie pour x<0.`],
    solution: m`<p>Sur \(]0,+\infty[\), F est dérivable et \(F'(x)=1/\sqrt{x}\). Bien que la formule de F ait une valeur en 0, cela ne permet pas d'y inclure 0 comme point de validité de l'égalité des dérivées. Le domaine de départ de f reste essentiel.</p>`,
    verification: m`Pour \(x>0\), \((2\sqrt{x})'=2\times\dfrac1{2\sqrt{x}}=\dfrac1{\sqrt{x}}\).`
  },
  {
    id: 'ex14', title: 'Le facteur 3 du cosinus', category: 'Sinus et cosinus', errorType: 'coefficient', review: 'c3',
    statement: m`<p>Quelle fonction est une primitive de \(\cos(3x)\) sur \(\mathbb R\) ?</p>`,
    hints: [m`\((\sin u)'=u'\cos u\). Ici, \(u(x)=3x\).`, m`La dérivée intérieure vaut 3 ; cherche le coefficient constant qui la compense.`],
    choices: [m`\(3\sin(3x)\).`, m`\(\dfrac13\sin(3x)\).`, m`\(-\dfrac13\sin(3x)\).`], answer: 1,
    feedback: [m`La dérivation multiplierait encore par 3, donnant \(9\cos(3x)\).`, m`Oui : le facteur 1/3 compense exactement la dérivée intérieure 3.`, m`Le coefficient est bien 1/3, mais le signe est incorrect : la dérivée de sin est cos.`],
    solution: m`<p>La fonction intérieure est \(u=3x\), de dérivée \(u'=3\). La fonction extérieure primitive de cos est sin. Ainsi \(\sin(3x)\) se dérive en \(3\cos(3x)\). En multipliant par \(1/3\), on retrouve exactement la fonction demandée.</p>`,
    verification: m`\(\left(\frac13\sin(3x)\right)'=\frac13\cos(3x)\times3=\cos(3x)\).`
  },
  {
    id: 'ex15', title: 'Deux signes à suivre', category: 'Sinus et cosinus', errorType: 'signe', review: 'c3',
    statement: m`<p>Détermine une primitive de \(\sin(2-5x)\) sur \(\mathbb R\).</p>`,
    hints: [m`Une primitive de sin(t) est −cos(t).`, m`Mais la dérivée de \(u(x)=2-5x\) vaut −5 : il faut aussi la compenser.`],
    choices: [m`\(-\dfrac15\cos(2-5x)\).`, m`\(5\cos(2-5x)\).`, m`\(\dfrac15\cos(2-5x)\).`], answer: 2,
    feedback: [m`Le signe négatif provenant du cosinus est déjà compensé par la dérivée intérieure −5.`, m`Ce coefficient donnerait \(25\sin(2-5x)\).`, m`Oui : les deux signes négatifs se compensent dans la dérivation.`],
    solution: m`<p>On identifie \(u=2-5x\), \(u'=-5\). La dérivée de \(\cos(u)\) est \(-\sin(u)u'=5\sin(u)\). Il faut donc multiplier cos(u) par \(1/5\), ce qui donne la primitive annoncée.</p>`,
    verification: m`\(\left(\frac15\cos(2-5x)\right)'=\frac15[-\sin(2-5x)](-5)=\sin(2-5x)\).`
  },
  {
    id: 'ex16', title: 'La dérivée intérieure est déjà présente', category: 'Composées', errorType: 'derivee-interieure', review: 'c3',
    statement: m`<p>Quelle fonction est une primitive de \(6x(3x^2+1)^2\) sur \(\mathbb R\) ?</p>`,
    hints: [m`Choisis \(u(x)=3x^2+1\). Le facteur 6x est exactement u'.`, m`Il reste à chercher une primitive de \(u^2\) par rapport à u.`],
    choices: [m`\(\dfrac13(3x^2+1)^3\).`, m`\((3x^2+1)^3\).`, m`\(\dfrac1{18x}(3x^2+1)^3\).`], answer: 0,
    feedback: [m`Oui : la division par 3 compense le nouvel exposant, et u' est déjà dans l'expression.`, m`La dérivée serait trois fois la fonction demandée.`, m`On ne divise pas par la fonction variable u' : cela ajoute une dérivée de quotient et une restriction artificielle en 0.`],
    solution: m`<p>L'expression est \(u'u^2\), avec \(u=3x^2+1\) et \(u'=6x\). Comme \((u^3/3)'=u^2u'\), une primitive est \(F(x)=(3x^2+1)^3/3\). Le coefficient 1/3 compense la dérivation de la puissance 3 ; aucun autre facteur n'est manquant.</p>`,
    verification: m`\(F'(x)=\frac13\times3(3x^2+1)^2\times6x=6x(3x^2+1)^2\).`
  },
  {
    id: 'ex17', title: 'Une racine composée', category: 'Composées', errorType: 'coefficient', review: 'c3',
    statement: m`<p>Quelle fonction est une primitive de \(\dfrac{3x}{\sqrt{3x^2+2}}\) sur \(\mathbb R\) ?</p>`,
    hints: [m`\(3x^2+2>0\) pour tout réel x. Sa dérivée vaut 6x.`, m`La dérivée d'une racine composée contient déjà le facteur 1/2.`],
    choices: [m`\(2\sqrt{3x^2+2}\).`, m`\(\sqrt{3x^2+2}\).`, m`\(\dfrac12\sqrt{3x^2+2}\).`], answer: 1,
    feedback: [m`Le facteur 2 est superflu : la racine se dérive déjà en l'expression demandée.`, m`Oui : le 6x intérieur divisé par 2 donne exactement 3x.`, m`Le facteur 1/2 donnerait seulement la moitié du résultat attendu.`],
    solution: m`<p>Posons \(u=3x^2+2\), donc \(u'=6x\). La formule \((\sqrt u)'=u'/(2\sqrt u)\) donne directement \(6x/(2\sqrt{3x^2+2})=3x/\sqrt{3x^2+2}\). Le domaine est bien \(\mathbb R\), puisque le radicand est toujours strictement positif.</p>`,
    verification: m`\(\left(\sqrt{3x^2+2}\right)'=\dfrac{6x}{2\sqrt{3x^2+2}}=\dfrac{3x}{\sqrt{3x^2+2}}\).`
  },
  {
    id: 'ex18', title: 'Le signe d’une puissance négative', category: 'Composées', errorType: 'signe', review: 'c3',
    statement: m`<p>Cherche une primitive de \(\dfrac{2x}{(x^2+1)^2}\) sur \(\mathbb R\).</p>`,
    hints: [m`Écris l'expression \(u'u^{-2}\), avec \(u=x^2+1\).`, m`Une primitive de \(u^{-2}\) est \(-u^{-1}\).`],
    choices: [m`\(\dfrac1{x^2+1}\).`, m`\(-\dfrac1{2(x^2+1)^2}\).`, m`\(-\dfrac1{x^2+1}\).`], answer: 2,
    feedback: [m`La dérivée de \((x^2+1)^{-1}\) est négative devant 2x.`, m`L'exposant doit passer de −2 à −1 avant la dérivation de contrôle.`, m`Oui : le signe moins compense celui de la dérivée de la puissance −1.`],
    solution: m`<p>Avec \(u=x^2+1\), l'expression est \(u'u^{-2}\). Une primitive est \(-u^{-1}\), donc \(F(x)=-1/(x^2+1)\). Le dénominateur est toujours positif, ce qui donne un domaine de validité égal à \(\mathbb R\).</p>`,
    verification: m`\(F'(x)=-(-1)(x^2+1)^{-2}\times2x=\dfrac{2x}{(x^2+1)^2}\).`
  },
  {
    id: 'ex19', title: 'Le facteur x fait toute la différence', category: 'Composées', errorType: 'coefficient', review: 'c4',
    statement: m`<p>Une primitive de \(x\sin(x^2)\) sur \(\mathbb R\) est :</p>`,
    hints: [m`La fonction intérieure \(u=x^2\) a pour dérivée \(2x\). L'expression contient seulement x.`, m`Écris \(x\sin(x^2)=\frac12[2x\sin(x^2)]\).`],
    choices: [m`\(-\dfrac12\cos(x^2)\).`, m`\(-\cos(x^2)\).`, m`\(\dfrac12\cos(x^2)\).`], answer: 0,
    feedback: [m`Oui : 1/2 compense le facteur 2 intérieur et le signe moins vient d'une primitive de sin.`, m`Il manque la compensation par 1/2 ; ta dérivée serait \(2x\sin(x^2)\).`, m`Le coefficient convient mais le signe est incorrect.`],
    solution: m`<p>On reconnaît la structure sin(u), avec u=x². Comme la dérivée intérieure vaut 2x, le facteur extérieur x représente la moitié de u'. On prend donc la moitié de \(-\cos(u)\). Cela produit \(-\cos(x^2)/2\).</p>`,
    verification: m`\(\left(-\frac12\cos(x^2)\right)'=-\frac12[-\sin(x^2)]\times2x=x\sin(x^2)\).`
  },
  {
    id: 'ex20', title: 'On ne peut pas inventer un facteur', category: 'Méthode', errorType: 'derivee-interieure', review: 'c4',
    statement: m`<p>Pour calculer une primitive de \((x^2+1)^3\), quelle première étape est valable ?</p>`,
    hints: [m`La dérivée de \(u=x^2+1\) est 2x, et aucun facteur x n'est présent.`, m`Un coefficient constant ne peut pas transformer 1 en 2x pour tous les x.`],
    choices: [m`Prendre directement \((x^2+1)^4/4\).`, m`Développer en \(x^6+3x^4+3x^2+1\), puis traiter chaque terme.`, m`Diviser \((x^2+1)^4/4\) par 2x.`], answer: 1,
    feedback: [m`La dérivée contient un facteur supplémentaire 2x.`, m`Oui : le développement transforme le problème en une somme de puissances usuelles.`, m`Diviser par une fonction variable ne compense pas simplement une dérivée intérieure : le quotient a lui-même une dérivée.`],
    solution: m`<p>On développe \((x^2+1)^3=x^6+3x^4+3x^2+1\). Une primitive sur \(\mathbb R\) est \(F(x)=x^7/7+3x^5/5+x^3+x\). L'absence du facteur x empêche la reconnaissance directe de \(u'u^3\), mais le polynôme reste simple à intégrer terme par terme.</p>`,
    verification: m`\(F'(x)=x^6+3x^4+3x^2+1=(x^2+1)^3\).`
  },
  {
    id: 'ex21', title: 'La fausse division par u′', category: 'Erreurs à corriger', errorType: 'derivee-interieure', review: 'c4',
    statement: m`<p>Un élève écrit : « Une primitive de \(\cos(x^2)\) sur \(]0,+\infty[\) est \(P(x)=\dfrac{\sin(x^2)}{2x}\), car je divise par la dérivée intérieure. » Que donne réellement P' ?</p>`,
    hints: [m`Le facteur \(1/(2x)\) dépend de x : il faut aussi le dériver.`, m`Écris P comme un produit puis applique \((AB)'=A'B+AB'\).`],
    choices: [m`\(P'(x)=\cos(x^2)\).`, m`\(P'(x)=2x\cos(x^2)\).`, m`\(P'(x)=\cos(x^2)-\dfrac{\sin(x^2)}{2x^2}\).`], answer: 2,
    feedback: [m`Un terme a été oublié : la dérivée de \(1/(2x)\) n'est pas nulle.`, m`Tu n'as dérivé que le numérateur et oublié le quotient.`, m`Oui : le terme supplémentaire invalide la règle proposée.`],
    solution: m`<p>Sur \(]0,+\infty[\), \(P=\tfrac12x^{-1}\sin(x^2)\). En dérivant le produit, on obtient deux termes : \(-\sin(x^2)/(2x^2)\) et \(\cos(x^2)\). P n'est donc pas une primitive de cos(x²). La compensation simple ne fonctionne que pour un facteur constant ; ce calcul ne prouve pas l'absence d'une primitive.</p>`,
    verification: m`\(P'=\frac12[-x^{-2}\sin(x^2)+x^{-1}\cos(x^2)\,2x]=\cos(x^2)-\dfrac{\sin(x^2)}{2x^2}\).`
  },
  {
    id: 'ex22', title: 'Une structure connue avec arctan', category: 'Composées', errorType: 'coefficient', review: 'c5',
    statement: m`<p>En utilisant \((\arctan u)'=u'/(1+u^2)\), trouve une primitive de \(\dfrac{x^2}{1+x^6}\) sur \(\mathbb R\).</p>`,
    hints: [m`Pour obtenir \(1+x^6\), choisis \(u=x^3\).`, m`La dérivée intérieure est 3x². Il faut compenser le coefficient 3.`],
    choices: [m`\(\dfrac13\arctan(x^3)\).`, m`\(\arctan(x^3)\).`, m`\(\dfrac13\arctan(x^6)\).`], answer: 0,
    feedback: [m`Oui : \(u^2=x^6\) et le coefficient 1/3 compense u'=3x².`, m`La dérivée serait trois fois l'expression demandée.`, m`Avec u=x⁶, le dénominateur serait 1+x¹² et la dérivée intérieure 6x⁵.`],
    solution: m`<p>L'identité \(x^6=(x^3)^2\) suggère \(u=x^3\). Alors \(u'=3x^2\), et l'expression est \(\tfrac13\,u'/(1+u^2)\). Une primitive est donc \(\tfrac13\arctan(x^3)\). Le dénominateur initial est strictement positif sur \(\mathbb R\).</p>`,
    verification: m`\(\left(\frac13\arctan(x^3)\right)'=\frac13\dfrac{3x^2}{1+(x^3)^2}=\dfrac{x^2}{1+x^6}\).`
  },
  {
    id: 'ex23', title: 'Reconnaître la dérivée d’un produit', category: 'Méthode', errorType: 'sens', review: 'c6',
    statement: m`<p>On cherche une primitive de \(\sin x+x\cos x\). Quelle observation évite deux calculs séparés ?</p>`,
    hints: [m`La somme possède les deux termes de la dérivée d'un produit.`, m`Essaie le produit de x et de sin(x).`],
    choices: [m`Le produit des primitives des deux termes est toujours une primitive de leur somme.`, m`\((x\sin x)'=\sin x+x\cos x\).`, m`\((x\cos x)'=\sin x+x\cos x\).`], answer: 1,
    feedback: [m`Il n'existe pas de règle générale qui multiplie les primitives pour intégrer une somme ou un produit.`, m`Oui : la règle de dérivation d'un produit reproduit exactement les deux termes.`, m`La dérivée de x cos(x) est \(\cos x-x\sin x\), avec d'autres termes et un autre signe.`],
    solution: m`<p>On lit la formule \((AB)'=A'B+AB'\) à l'envers avec \(A(x)=x\), \(B(x)=\sin x\). Alors A'=1 et B'=cos(x). Une primitive est \(F(x)=x\sin x\) sur \(\mathbb R\). Il s'agit d'une reconnaissance de dérivée, pas d'une règle de multiplication de primitives.</p>`,
    verification: m`\((x\sin x)'=1\times\sin x+x\times\cos x=\sin x+x\cos x\).`
  },
  {
    id: 'ex24', title: 'Deux constantes à raccorder', category: 'Raccordement', errorType: 'constante', review: 'b5',
    statement: m`<p>On pose \(F(x)=-x^2/2+A\) pour x&lt;0, \(F(0)=2\), et \(F(x)=x^2/2+B\) pour x&gt;0. Quelle condition est nécessaire pour que F soit une primitive de \(|x|\) sur \(\mathbb R\) ?</p>`,
    hints: [m`Une primitive est dérivable, donc continue, notamment en 0.`, m`Les limites à gauche et à droite valent respectivement A et B.`],
    choices: [m`A et B peuvent être quelconques, puisque leurs dérivées sont nulles.`, m`Il suffit d'avoir A=B, même si leur valeur diffère de F(0).`, m`Il faut A=B=2, puis vérifier la dérivabilité en 0.`], answer: 2,
    feedback: [m`Les constantes libres conviennent sur chaque demi-intervalle, mais pas à travers un saut en 0.`, m`Les deux limites doivent aussi coïncider avec la valeur F(0)=2.`, m`Oui : la continuité impose ces valeurs, et la dérivabilité reste à contrôler.`],
    solution: m`<p>Les dérivées sur les demi-intervalles sont correctes : \(-x=|x|\) à gauche et \(x=|x|\) à droite. La continuité en 0 impose \(A=F(0)=B=2\). Cela donne \(F(x)=x|x|/2+2\). Pour conclure, on calcule en plus le taux d'accroissement en 0, dont la limite vaut 0.</p>`,
    verification: m`Pour \(h\ne0\), \(\dfrac{F(h)-F(0)}h=\dfrac{|h|}2\to0=|0|\). Ainsi F'=|x| aussi en 0.`
  },
  {
    id: 'ex25', title: 'La continuité ne suffit pas', category: 'Raccordement', errorType: 'sens', review: 'b5',
    statement: m`<p>La fonction \(F(x)=x|x|/2+C\) est continue en 0. Quel argument prouve effectivement sa dérivabilité en 0 ?</p>`,
    hints: [m`La continuité seule n'est pas un critère général de dérivabilité : |x| est un contre-exemple.`, m`Utilise la définition de la dérivée : \([F(h)-F(0)]/h\).`],
    choices: [m`Le taux d'accroissement vaut \(|h|/2\) et tend vers 0.`, m`Toute fonction continue en un point y est dérivable.`, m`Les deux formules ont le même terme constant, donc aucune vérification n'est nécessaire.`], answer: 0,
    feedback: [m`Oui : c'est la limite du taux d'accroissement, donc la définition de F'(0).`, m`La fonction |x| est continue en 0 mais n'y est pas dérivable.`, m`Les constantes égales assurent ici la continuité ; elles ne prouvent pas à elles seules l'existence d'une dérivée.`],
    solution: m`<p>\(F(0)=C\). Pour \(h\ne0\), \(F(h)-F(0)=h|h|/2\), donc \([F(h)-F(0)]/h=|h|/2\). Cette expression tend vers 0 à gauche comme à droite. F est donc dérivable en 0 et \(F'(0)=0=|0|\).</p>`,
    verification: m`Sur x&lt;0, \(F'=-x=|x|\) ; sur x&gt;0, \(F'=x=|x|\) ; au point 0, le taux d'accroissement donne \(F'(0)=0\).`
  },
  {
    id: 'ex26', title: 'Un domaine séparé, deux choix', category: 'Domaines', errorType: 'constante', review: 'b3',
    statement: m`<p>On veut une fonction dont la dérivée soit \(1/x^2\) en tout réel non nul. On choisit \(F(x)=-1/x+2\) pour x&lt;0 et \(F(x)=-1/x-3\) pour x&gt;0. Est-ce valable ?</p>`,
    hints: [m`Le domaine \(\mathbb R\setminus\{0\}\) n'est pas un intervalle.`, m`Le théorème « même dérivée, différence constante » s'applique séparément à chaque intervalle.`],
    choices: [m`Non, toutes les constantes doivent être égales sur tout domaine.`, m`Oui : la propriété de primitive vaut séparément sur chacun des deux intervalles.`, m`Non, il faut attribuer une valeur F(0) qui raccorde les deux expressions.`], answer: 1,
    feedback: [m`L'hypothèse « sur un intervalle » est essentielle pour imposer une unique constante globale.`, m`Oui : aucun point du domaine ne relie les deux composantes à travers 0.`, m`0 est exclu du domaine et −1/x n'a pas de limite finie en ce point.`],
    solution: m`<p>Sur \(]-\infty,0[\), on a une primitive \(-1/x+2\). Sur \(]0,+\infty[\), on a une autre primitive \(-1/x-3\). Les constantes peuvent être choisies indépendamment. On doit annoncer ces deux intervalles, au lieu d'appliquer directement un théorème formulé sur un seul intervalle au domaine séparé.</p>`,
    verification: m`Pour x&lt;0 comme pour x&gt;0, \(F'(x)=1/x^2\). Aucune dérivée n'est demandée en 0.`
  },
  {
    id: 'ex27', title: 'Une simplification ne recrée pas un domaine', category: 'Erreurs à corriger', errorType: 'domaine', review: 'b3',
    statement: m`<p>La fonction donnée est \(f(x)=\dfrac{x^2-1}{x-1}\). Quelle rédaction respecte son domaine ?</p>`,
    hints: [m`La simplification par x−1 exige x≠1.`, m`Même si la formule simplifiée x+1 existe en 1, la fonction donnée initialement n'y est pas définie.`],
    choices: [m`f(x)=x+1 donc f est définie sur R et sa primitive est valable sur R.`, m`La fraction n'a aucune primitive parce qu'elle a un point exclu.`, m`Sur chacun des intervalles \(]-\infty,1[\) et \(]1,+\infty[\), \(x^2/2+x\) est une primitive de f.`], answer: 2,
    feedback: [m`Le domaine initial reste privé de 1. Le prolongement par x+1 serait une autre fonction.`, m`Une fonction peut avoir des primitives sur les intervalles de son domaine.`, m`Oui : la simplification et la dérivation sont valables sur chacun de ces intervalles.`],
    solution: m`<p>Pour \(x\ne1\), \(x^2-1=(x-1)(x+1)\), donc f(x)=x+1. Une primitive est \(F_0=x^2/2+x\) sur chacun des deux intervalles indiqués. F₀ a une formule dérivable sur R, mais l'égalité F₀'=f n'a de sens que là où f est définie.</p>`,
    verification: m`\(F_0'(x)=x+1=\dfrac{x^2-1}{x-1}\), pour \(x\ne1\).`
  },
  {
    id: 'ex28', title: 'Sommes approchées et aires', category: 'Accumulation', errorType: 'sens', review: 'a6',
    statement: m`<p>Pour \(f(t)=2t-2\) sur \([0,2]\), une primitive est \(F(t)=t^2-2t\). Quelle affirmation distingue aire algébrique et aire géométrique totale ?</p>`,
    hints: [m`La courbe est sous l'axe sur [0,1] puis au-dessus sur [1,2].`, m`Les deux triangles ont une base 1 et une hauteur 2 ; leurs aires géométriques valent chacune 1.`],
    choices: [m`La variation F(2)−F(0) vaut 0 ; l'aire géométrique totale vaut 2.`, m`La variation et l'aire géométrique valent toutes deux 0.`, m`La variation vaut 2 ; l'aire géométrique totale vaut 0.`], answer: 0,
    feedback: [m`Oui : les contributions signées se compensent, tandis que les aires géométriques s'ajoutent.`, m`Une aire géométrique se compte positivement : les deux triangles ne disparaissent pas.`, m`Tu as échangé la somme signée et la somme des grandeurs positives.`],
    solution: m`<p>\(F(2)-F(0)=0\). La partie sous l'axe apporte −1 à l'accumulation algébrique ; celle au-dessus apporte +1. L'aire géométrique totale est \(1+1=2\). Si f représente un débit net, l'évolution nette du volume est nulle, même si des échanges ont eu lieu.</p>`,
    verification: m`\(F'(t)=2t-2\). \(F(1)-F(0)=-1\) et \(F(2)-F(1)=1\). L'ajout d'une constante à F ne change pas ces différences.`
  },
  {
    id: 'ex29', title: 'Reconnaître une compensation de 5/2', category: 'Composées', errorType: 'coefficient', review: 'c4',
    statement: m`<p>Quelle fonction est une primitive de \(5x(x^2+1)^3\) sur \(\mathbb R\) ?</p>`,
    hints: [m`Pour u=x²+1, on a u'=2x. Ainsi 5x=(5/2)u'.`, m`Une primitive de u³ est u⁴/4 : multiplie encore par 5/2.`],
    choices: [m`\(\dfrac54(x^2+1)^4\).`, m`\(\dfrac58(x^2+1)^4\).`, m`\(\dfrac52(x^2+1)^4\).`], answer: 1,
    feedback: [m`Il manque la division par 2 qui compense la dérivée intérieure 2x.`, m`Oui : \((5/2)\times(1/4)=5/8\).`, m`Tu as compensé la dérivée intérieure, mais oublié la division par le nouvel exposant 4.`],
    solution: m`<p>\(5x(x^2+1)^3=\tfrac52u'u^3\), avec u=x²+1. On prend donc \(\tfrac52\times\tfrac14u^4\), soit \(\tfrac58(x^2+1)^4\). Le coefficient 5/8 provient de deux compensations distinctes : le 2 de u' et le 4 de la puissance.</p>`,
    verification: m`\(\left(\frac58(x^2+1)^4\right)'=\frac58\times4(x^2+1)^3\times2x=5x(x^2+1)^3\).`
  },
  {
    id: 'ex30', title: 'Synthèse : trois familles et une condition', category: 'Synthèse', errorType: 'constante', review: 'c6',
    statement: m`<p>Détermine sur \(\mathbb R\) la fonction F vérifiant \[F'(x)=6x^2+\cos(3x)+\frac{2x}{(x^2+1)^2},\qquad F(0)=2.\] Quelle proposition satisfait les deux exigences ?</p>`,
    hints: [m`Traite la somme terme par terme : puissance, sinus composé, puissance négative composée.`, m`Une primitive sans constante vaut −1 en 0. La constante doit donc corriger cette valeur pour obtenir 2.`],
    choices: [m`\(2x^3+\sin(3x)-\dfrac1{x^2+1}+3\).`, m`\(2x^3+\dfrac13\sin(3x)-\dfrac1{x^2+1}+2\).`, m`\(2x^3+\dfrac13\sin(3x)-\dfrac1{x^2+1}+3\).`], answer: 2,
    feedback: [m`La condition initiale convient, mais la dérivée du sinus est trois fois trop grande.`, m`La dérivée convient, mais la valeur en 0 vaut 1, pas 2.`, m`Oui : les trois dérivées sont correctes et le choix C=3 donne F(0)=2.`],
    solution: m`<p>Le dénominateur x²+1 ne s'annule jamais : l'intervalle \(\mathbb R\) convient. Par linéarité, une primitive est \(F_0(x)=2x^3+\tfrac13\sin(3x)-1/(x^2+1)\). Toutes sont \(F_0+C\). Comme \(F_0(0)=-1\), la condition impose \(-1+C=2\), donc C=3. L'unicité vient du fait que deux primitives sur un intervalle diffèrent d'une constante.</p>`,
    verification: m`\(F'(x)=6x^2+\frac13\cos(3x)\times3+(-1)(-1)(x^2+1)^{-2}\times2x=6x^2+\cos(3x)+\dfrac{2x}{(x^2+1)^2}\), et \(F(0)=0+0-1+3=2\).`
  },
  {
    id: 'ex31', title: 'Existence ne veut pas dire formule simple', category: 'Comprendre', errorType: 'sens', review: 'b2',
    statement: m`<p>Une fonction f est continue sur un intervalle I, mais aucune formule usuelle du tableau ne permet de calculer sa primitive. Que peut-on conclure ?</p>`,
    hints: [m`Distingue l'existence d'un objet et la possibilité de l'écrire avec certaines formules.`, m`Le théorème d'existence suppose la continuité de f sur l'intervalle, pas la connaissance d'une formule de primitive.`],
    choices: [m`f admet des primitives sur I, même si aucune formule élémentaire n'est disponible.`, m`f n'a aucune primitive tant qu'on n'a pas trouvé sa formule.`, m`f doit être dérivable pour avoir une primitive.`], answer: 0,
    feedback: [m`Oui : la continuité est une condition suffisante d'existence.`, m`L'absence d'une méthode de calcul connue ne démontre pas l'inexistence.`, m`On demande à la primitive d'être dérivable ; f elle-même n'a pas à l'être.`],
    solution: m`<p>Toute fonction continue sur un intervalle y admet des primitives. Ce théorème ne garantit pas une écriture avec les fonctions élémentaires du cours. Il ne faut pas non plus affirmer que la continuité est nécessaire pour toute fonction qui est une dérivée. Exemple simple : f(x)=|x| n'est pas dérivable en 0, mais possède bien une primitive sur R.</p>`,
    verification: m`Pour \(P(x)=x|x|/2\), on a \(P'(x)=|x|\), y compris en 0 puisque \([P(h)-P(0)]/h=|h|/2\to0\).`
  },
  {
    id: 'ex32', title: 'Une somme de rectangles n’est pas l’aire exacte', category: 'Accumulation', errorType: 'coefficient', review: 'a6',
    statement: m`<p>Pour f(t)=2t sur [0,3], on utilise 6 rectangles à gauche de largeur 0,5. Quelle somme approchée obtient-on, et comment la comparer à la variation exacte ?</p>`,
    hints: [m`Les abscisses gauches sont 0 ; 0,5 ; 1 ; 1,5 ; 2 ; 2,5.`, m`Additionne les six hauteurs puis multiplie par la largeur 0,5. La variation exacte de t² vaut 9.`],
    choices: [m`La somme vaut exactement 9, quelle que soit la méthode.`, m`La somme vaut 7,5 ; elle est inférieure à la variation exacte 9.`, m`La somme vaut 10,5 ; elle est inférieure à 9.`], answer: 1,
    feedback: [m`Pour un nombre fini de rectangles à gauche, on sous-estime ici l'aire car f est croissante.`, m`Oui : \(0,5(0+1+2+3+4+5)=7,5\), tandis que la variation exacte vaut 9.`, m`10,5 correspond aux rectangles à droite ; de plus 10,5 est supérieur à 9.`],
    solution: m`<p>Chaque rectangle représente un apport approché \(f(t_k)\Delta t\), avec \(\Delta t=0,5\). La somme à gauche vaut 7,5. Pour n subdivisions égales, elle vaut \(9(1-1/n)\), qui tend vers 9 quand n augmente. On écrit une approximation de l'accumulation, pas une égalité exacte avec sa valeur.</p>`,
    verification: m`\((t^2)'=2t\), donc la variation exacte est \(3^2-0^2=9\). Pour n=6, \(9(1-1/6)=7,5\).`
  }
];
