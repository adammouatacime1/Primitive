# Comprendre les primitives

Cours interactif en français pour la deuxième année du baccalauréat Sciences Mathématiques A au Maroc. Le parcours part d’une quantité et de sa vitesse de variation pour construire le sens d’une primitive avant d’en calculer une.

## Contenu livré

- **17 chapitres** : construire le sens, définir et justifier, calculer et rédiger.
- **8 ateliers** : réservoir, mouvement sur un axe, tangentes synchronisées, constante C, accumulation par rectangles, reconnaissance de composées, condition initiale, raccordement de `|x|`.
- **32 exercices** avec espace de recherche, deux indices indépendants, correction expliquée et dérivée de contrôle. Les réponses vérifiées utilisent des choix de structures ou de coefficients ; aucune saisie mathématique libre n’est corrigée par comparaison de texte ou par essais numériques.
- Progression, notes et bilan par types d’erreurs enregistrés uniquement dans le navigateur. Aucun compte, serveur métier, traçage ou clé API.
- Formules KaTeX et graphiques SVG calculés, bibliothèques et polices fournies avec le site, sans CDN.
- Navigation mobile et clavier, pause, remise à zéro, arrêt des animations et respect de `prefers-reduced-motion`.
- Mode révision, version imprimable et [cours PDF avec corrections](public/cours-primitives.pdf).

Le logarithme et l’exponentielle sont réservés à une annexe facultative. L’arctangente est un exemple parmi les différentes familles.

**Document de référence** : le PDF `Comprendre_les_primitives.pdf` annoncé dans la demande n’était pas accessible dans les pièces reçues. Le cours développe le cahier des charges détaillé ; il ne revendique pas une reprise ou une vérification des exercices de ce PDF. Son intégration reste possible lorsque ce document est disponible.

## Exécuter localement

Prérequis : Node.js **24** et npm **11** (versions utilisées lors de la réalisation).

```sh
npm ci
npm run dev
```

Vite affiche l’adresse locale du serveur. Le cours s’ouvre sur la vue d’ensemble ; la navigation utilise des fragments (`#a1`, `#ateliers`, `#exercices`), compatibles avec un hébergement statique.

```sh
npm test
npm run build
npm run preview
```

Le résultat statique complet est dans `dist/`. Le chemin de base est relatif (`./`), pour fonctionner dans un sous-répertoire GitHub Pages, sans modifier les sources ni créer de règle de réécriture.

## Vérifications reproductibles

Le serveur `npm run dev` doit tourner pendant les contrôles navigateur. Les scripts utilisent Chromium installé à `/usr/bin/chromium` ; adapter ce chemin dans les scripts si le système utilise un autre emplacement.

```sh
npm test                          # données physiques, rectangles, parcours et exercices
npm run test:browser               # navigation, 1440/390 px, commandes et persistance
npm run test:accessibility         # audit axe WCAG A/AA de sept vues représentatives
python3 scripts/check-mathematics.py  # contrôles symboliques (SymPy requis)
```

`TEST_URL` permet de tester un serveur de production ou le site publié, en conservant le slash final. Les rapports navigateur, audits et captures sont écrits dans `.test-results/`, qui n’est pas publié.

L’audit automatique d’accessibilité complète les essais au clavier ; il ne constitue pas une certification de l’ensemble des lecteurs d’écran. Le navigateur testé est Chromium ; Safari et Firefox n’ont pas été testés.

## Impression et PDF

Le lien **Imprimer** affiche tous les chapitres, les schémas et les exercices corrigés. Les indices et corrections restent masqués dans le mode interactif, et sont ouverts dans la version imprimable.

Le PDF fourni est généré à partir de ce même contenu, avec les formules et les polices locales. Pour le régénérer après une modification pédagogique ou graphique, lancer le serveur de développement puis :

```sh
npm run pdf
npm run build
```

`public/cours-primitives.pdf` est un fichier livré et versionné ; sa génération nécessite Chromium, pas son téléchargement par l’élève. Le PDF contient des balises d’accessibilité ; les animations sont remplacées par des schémas fixes légendés.

## GitHub Pages

Le dépôt désigné pour ce projet est **adammouatacime1/Primitive**. Le workflow `.github/workflows/pages.yml` :

1. se déclenche sur un envoi vers `main` ou manuellement ;
2. installe les dépendances verrouillées avec `npm ci` ;
3. exécute les tests Node et construit le site ;
4. transmet `dist/` à GitHub Pages et effectue le déploiement.

La source Pages doit être **GitHub Actions** (`build_type: workflow`). La première activation nécessite un accès GitHub approprié ; le jeton standard d’un workflow ne permet pas de créer la configuration Pages d’un dépôt vierge. Après activation, les permissions `pages: write` et `id-token: write` du workflow suffisent au déploiement normal.

Au moment de la livraison locale, le proxy de l’environnement refuse `api.github.com` et `adammouatacime1.github.io` avant authentification. Cela empêche la configuration Pages par API et la validation de l’adresse publique. L’accès Git est distinct et a été vérifié. Le premier workflow a été déclenché et son statut a pu être suivi sur la page publique github.com : il a échoué à l’étape de configuration, car le site Pages est introuvable. Voir [l’exécution #1](https://github.com/adammouatacime1/Primitive/actions/runs/43114340144). Aucun succès de publication n’est affirmé. Voir [VERIFICATIONS.md](VERIFICATIONS.md) pour les résultats réels.

## Organisation des sources

| Fichier | Responsabilité |
| --- | --- |
| `src/course.js` | Texte pédagogique, preuves, exemples et applications des 17 chapitres |
| `src/exercises.js` | Énoncés, choix, indices, corrections, contrôles et retours par erreur |
| `src/labs.js` | Huit ateliers, calculs exacts de référence et tracés SVG |
| `src/visuals.js` | Schémas explicatifs et variantes imprimables |
| `src/main.js` | Navigation, rendu, progression locale et interactions des exercices |
| `src/style.css` | Présentation adaptative, focus et styles d’impression |
| `scripts/` et `tests/` | Contrôles reproductibles et génération du PDF |

KaTeX est distribué sous licence MIT ; sa notice figure dans `public/licenses/KaTeX.txt`. Les dépendances de développement sont déclarées et verrouillées dans les fichiers npm.
