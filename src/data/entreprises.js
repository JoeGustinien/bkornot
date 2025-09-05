// src/data/entreprises.js
export const entreprises = [
  {
    id: 1,
    nom: "Groupe Bernard Hayot (GBH)",
    secteur: "Grande distribution",
    description: "Propriétaire de Carrefour, Champion et de nombreuses enseignes en Martinique",
    isBeke: true,
    explication: "Le groupe Bernard Hayot est effectivement dirigé par une famille béké historique. Fondé par Bernard Hayot, il contrôle une grande partie de la distribution en Martinique avec Carrefour, Champion, ainsi que des concessionnaires automobiles et des activités immobilières.",
    lienSociete: "https://www.societe.com/societe/groupe-bernard-hayot-972002324.html",
    chiffreAffaires: "500M€",
    employes: "2000+"
  },
  {
    id: 2,
    nom: "Distillerie Clément",
    secteur: "Rhum/Spiritueux",
    description: "Producteur de rhum martiniquais AOC renommé mondialement",
    isBeke: true,
    explication: "La distillerie Clément appartient à la famille Hayot-Clément, une des familles békés les plus influentes de l'île. Créée en 1887, elle produit le rhum Clément et possède l'Habitation Clément, site touristique majeur.",
    lienSociete: "https://www.societe.com/societe/distillerie-clement-572141676.html",
    chiffreAffaires: "45M€",
    employes: "150"
  },
  {
    id: 3,
    nom: "Sodiam",
    secteur: "Grande distribution",
    description: "Chaîne de supermarchés et magasins spécialisés",
    isBeke: true,
    explication: "Sodiam fait partie du groupe des entreprises contrôlées par les familles békés traditionnelles. La société gère plusieurs enseignes de distribution et est historiquement liée aux réseaux économiques békés de l'île.",
    lienSociete: "https://www.societe.com/societe/sodiam-391482342.html",
    chiffreAffaires: "120M€",
    employes: "600"
  },
  {
    id: 4,
    nom: "Air Antilles",
    secteur: "Transport aérien",
    description: "Compagnie aérienne régionale des Antilles françaises",
    isBeke: false,
    explication: "Air Antilles, bien qu'ayant connu des périodes de rachat par différents groupes, n'est pas historiquement contrôlée par des familles békés. La compagnie a été créée par des entrepreneurs locaux et a connu plusieurs changements de propriétaires.",
    lienSociete: "https://www.societe.com/societe/air-antilles-343048871.html",
    chiffreAffaires: "80M€",
    employes: "400"
  },
  {
    id: 5,
    nom: "Groupe Fabre",
    secteur: "BTP/Construction",
    description: "Leader dans le BTP et les travaux publics en Martinique",
    isBeke: true,
    explication: "Le groupe Fabre est dirigé par une famille béké établie depuis plusieurs générations. Il contrôle une part importante du secteur BTP martiniquais et a participé à de nombreux grands projets d'infrastructure de l'île.",
    lienSociete: "https://www.societe.com/societe/groupe-fabre-123456789.html",
    chiffreAffaires: "200M€",
    employes: "800"
  },
  {
    id: 6,
    nom: "Martinique Transport",
    secteur: "Transport public",
    description: "Société de transport en commun urbain de Fort-de-France",
    isBeke: false,
    explication: "Martinique Transport est une société publique/privée locale non liée aux familles békés historiques. Elle est gérée par des capitaux publics et des entrepreneurs locaux indépendants des réseaux békés traditionnels.",
    lienSociete: "https://www.societe.com/societe/martinique-transport-987654321.html",
    chiffreAffaires: "25M€",
    employes: "200"
  },
  {
    id: 7,
    nom: "Rhum J.M",
    secteur: "Rhum/Spiritueux",
    description: "Distillerie de rhum agricole AOC Martinique au Macouba",
    isBeke: true,
    explication: "La distillerie J.M (Jean-Marie Martin) appartient au groupe Campari depuis 2019, mais historiquement elle était contrôlée par la famille Crassous de Médeuil, une famille béké. L'habitation sucrière date de 1790 et reste marquée par cet héritage.",
    lienSociete: "https://www.societe.com/societe/rhum-jm-572000987.html",
    chiffreAffaires: "35M€",
    employes: "80"
  },
  {
    id: 8,
    nom: "SARA (Société Anonyme de Raffinage des Antilles)",
    secteur: "Énergie/Pétrole",
    description: "Raffinerie de pétrole et distribution de carburants",
    isBeke: false,
    explication: "La SARA est une société dont le capital est réparti entre différents actionnaires, notamment des groupes pétroliers internationaux et l'État français. Elle n'est pas contrôlée par des familles békés mais par des intérêts industriels et publics.",
    lienSociete: "https://www.societe.com/societe/sara-572000123.html",
    chiffreAffaires: "1.2Md€",
    employes: "300"
  },
  {
    id: 9,
    nom: "Groupe Mimran",
    secteur: "Industrie sucrière",
    description: "Propriétaire de l'usine du Galion, production de sucre de canne",
    isBeke: false,
    explication: "Le groupe Mimran est dirigé par une famille d'origine maghrébine installée dans les DOM-TOM. Bien qu'influent économiquement, il ne fait pas partie des familles békés historiques descendantes des colons esclavagistes.",
    lienSociete: "https://www.societe.com/societe/galion-572000456.html",
    chiffreAffaires: "60M€",
    employes: "120"
  },
  {
    id: 10,
    nom: "Établissements Aubéry",
    secteur: "Commerce/Distribution",
    description: "Importation et distribution de produits alimentaires et équipements",
    isBeke: true,
    explication: "Les Établissements Aubéry sont contrôlés par une famille béké traditionnelle active dans le commerce depuis plusieurs générations. Ils ont une position forte dans l'importation et la distribution de produits vers les commerces locaux.",
    lienSociete: "https://www.societe.com/societe/aubery-572000789.html",
    chiffreAffaires: "90M€",
    employes: "250"
  }
];

export const secteurs = [
  "Grande distribution",
  "Rhum/Spiritueux",
  "BTP/Construction", 
  "Transport aérien",
  "Transport public",
  "Énergie/Pétrole",
  "Industrie sucrière",
  "Commerce/Distribution"
];

export const getEntreprisesByBekeStatus = (isBeke) => {
  return entreprises.filter(entreprise => entreprise.isBeke === isBeke);
};

export const getEntreprisesBySecteur = (secteur) => {
  return entreprises.filter(entreprise => entreprise.secteur === secteur);
};