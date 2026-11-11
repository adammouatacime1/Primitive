# Vérifications de livraison

Vérifications réellement effectuées le 11 novembre 2026, dans l’environnement de développement fourni.

## Résultats

| Contrôle | Résultat observé |
| --- | --- |
| Installation npm et lockfile | Dépendances installées, versions déclarées cohérentes avec le lockfile |
| Construction Vite | Réussite ; ressources statiques et polices KaTeX locales |
| Tests Node | 4 tests réussis : références physiques, distance/déplacement, rectangles, intégrité du parcours et des exercices |
| Calcul symbolique SymPy | 50 assertions réussies, dont les 15 dérivées du chapitre C5, conditions initiales, domaines positifs, raccordement et convergence des rectangles |
| Rendu des formules du cours | 894 fragments KaTeX contrôlés sans erreur lors de la rédaction, puis rendu intégré vérifié au navigateur |
| Navigation et adaptation | 31 vues visitées à 1440 et 390 px ; aucun débordement horizontal du document |
| Contrôles navigateur reproductibles | 71 contrôles réussis sur la construction statique servie dans le sous-chemin `/Primitive/` ; aucune erreur JavaScript |
| Indices et correction | Ouvrir l’indice 1 ne dévoile ni l’indice 2 ni la correction ; choix corrigé avec explication et bilan |
| Persistance locale | Notes, réponses et chapitres étudiés conservés après rechargement |
| Huit ateliers intégrés | 16 visites (8 × 2 largeurs), sans erreur console, KaTeX ni coordonnée SVG invalide |
| Commandes des ateliers | 8 cycles lecture/pause/remise à zéro et 14 curseurs testés au clavier puis à leurs bornes |
| Reconnaissance | Quatre scénarios, réponses justes et fausses vérifiées aux deux largeurs |
| Réduction des mouvements | Arrêt de l’animation en cours, lecture désactivée et exploration au clavier conservée ; préférence système `reduce` respectée au démarrage |
| Raccordement | Saut visible pour constantes différentes ; continuité puis dérivabilité en 0 expliquées lorsque les constantes coïncident |
| Accessibilité automatique | Audit axe WCAG A/AA sans violation détectée sur 7 vues mobiles représentatives, après correction des contrastes et du focus des zones défilantes |
| PDF | Génération réussie, 58 pages A4, texte et polices intégrés, balises d’accessibilité ; pages de texte et de correction contrôlées visuellement |
| Ressource PDF en hébergement statique | Réponse HTTP 200, fichier livré avec le site |

Les contrôles symboliques valident les identités déclarées dans le script et complètent la relecture humaine ; ils ne constituent pas un analyseur symbolique de toute la prose. La correction automatique proposée à l’élève vérifie des choix prédéfinis, jamais une expression libre par des essais numériques.

## Commandes et artefacts

Les commandes sont documentées dans le README. Les scripts reproductibles sont dans `scripts/` et `tests/`. Les captures et rapports bruts du navigateur sont conservés localement dans `.test-results/` (non publiés).

Le serveur statique de vérification sert `dist/` sous `/Primitive/`, pour contrôler les chemins relatifs nécessaires à GitHub Pages. Il ne constitue pas une vérification du domaine public GitHub Pages.

## Publication : blocage constaté

Le dépôt public `adammouatacime1/Primitive` et sa branche `main` ont été vérifiés par Git et par la page publique GitHub. Les sources, le PDF et le workflow ont été envoyés sur `main` dans le commit `216bafcf02d2bee63b02765e0166c4e78e396161`, et le SHA distant a été vérifié. Le [workflow de déploiement #1](https://github.com/adammouatacime1/Primitive/actions/runs/43114340144) a été déclenché et suivi depuis sa page publique. Il a **échoué après 19 secondes à l’étape configure-pages**, avec l’annotation `Get Pages site failed — Not Found` demandant que Pages soit activé avec la source GitHub Actions. L’étape de déploiement n’a pas été exécutée. Ce résultat est distinct de la réussite de la construction et des tests locaux.

Les connexions vers **api.github.com** et **adammouatacime1.github.io** sont refusées par le proxy de l’environnement (HTTP 403 sur CONNECT), avant une authentification GitHub. Il est donc impossible dans cet état de vérifier les droits API, activer la source Pages ou contrôler le site public. Le suivi du statut public du workflow reste possible par github.com, et a été effectué. Ce refus ne prouve pas qu’un jeton GitHub manque ou est invalide.

La lecture du brouillon de configuration réseau par l’outil de l’environnement a également échoué (`INVALID_ARGUMENT`, brouillon non vérifiable), et aucun outil de modification directe du réseau actif n’est disponible. La liste inconnue du brouillon n’a pas été remplacée. L’intervention minimale est l’autorisation des deux destinations ci-dessus dans le réseau de cet environnement. Il faudra ensuite reprendre la configuration et le contrôle de Pages avec les accès existants ; un droit supplémentaire ne sera demandé que si l’API l’exige effectivement.

## Limites

- Le document source `Comprendre_les_primitives.pdf` n’était pas accessible dans les fichiers reçus. Les exercices fournis suivent les exigences détaillées, sans comparaison avec ce document.
- Safari, Firefox, iOS et les différents lecteurs d’écran n’ont pas fait l’objet d’essais sur appareils réels. L’audit automatique n’est pas une certification complète d’accessibilité.
- Le PDF remplace les ateliers animés par des schémas fixes et des explications. La progression est locale à un navigateur et ne se synchronise pas entre appareils.
- Aucune URL publique n’est présentée comme vérifiée tant que le déploiement et son contrôle distant n’ont pas pu aboutir.
