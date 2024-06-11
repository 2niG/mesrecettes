var recettes = {
  entree: [
    {
      id: "salade",
      nom: "Salade César",
      ingredients: ["laitue", "parmesan", "croûtons", "sauce César"],
      instructions: "Mélangez tous les ingrédients dans un grand bol.",
    },
    // Ajoutez plus de recettes d'entrée ici
  ],
  plat: [
    {
      id: "gratin",
      nom: "Gratin de pâtes au jambon façon Cyril Lignac",
      ingredients: [
        "200g de Coquillettes",
        "20g de Beurre",
        "15g de Farine",
        "20cl de Lait",
        "100g de Talon de jambon blanc",
        "50g d'Emmental",
        "Sel",
        "Poivre",
      ],
      instructions:
        "Préparez la béchamel : faites fondre le beurre dans une casserole. Ajoutez la farine et mélangez avec une cuillère en bois. Versez le lait en filet, sans cesser de fouetter, puis faites épaissir sur feu doux pendant environ 10 min en remuant régulièrement. Salez et poivrez. Faites cuire les coquillettes al dente dans une casserole d’eau bouillante salée. Égouttez. Préchauffez le four à 210° (th.7). Versez les pâtes dans un plat à gratin, ajoutez le jambon coupé en lanières et la béchamel puis mélangez. Couvrez d’emmental râpé, puis enfournez et laissez gratiner environ 15 min. Servez bien chaud[^1^][1].",
    },
    {
      id: "souffle_fromage",
      nom: "Soufflé au Fromage",
      ingredients: [
        "1/4 litre de lait",
        "4 oeufs",
        "30 g de beurre",
        "2 cuillères à soupe de farine",
        "100 g de gruyère râpé",
        "Sel",
        "Poivre",
        "Muscade"
      ],
      instructions: "Râpez le fromage. Faites fondre le beurre, délayez-y la farine et remuez sur le feu avec une cuillère en bois pendant quelques minutes sans laisser colorer. Ajoutez le lait tiède, bien délayez et reportez à feu doux sans cesser de mélanger jusqu'à ce que le mélange épaississe. Mettez le fromage. Salez et poivrez la béchamel (pas trop car le fromage va relever le goût). Éloignez du feu, attendez quelques instants. Incorporez un jaune d'œuf en battant vigoureusement, puis un second et un troisième, toujours en travaillant énergiquement la pâte après chaque adjonction. (A noter que 3 jaunes seulement sont utilisés). Beurrez un moule à soufflé bien jusqu'au bord (attention à ne pas toucher l'intérieur du moule après cette opération). Battez les 4 blancs en neige très ferme. En incorporez 2 cuillères à soupe à la béchamel en remuant bien puis incorporez le reste délicatement, en soulevant bien la pâte avec la spatule. S'il reste des traces de blancs en neige, ce n'est pas grave, cela permettra au soufflé de monter. Versez dans le moule qui ne doit être rempli qu'à moitié. Portez à four doux (thermostat 4 à 5, soit 180°C), puis augmentez un peu la chaleur. Ne pas ouvrir le four pendant le premier 1/4 d'heure. Servez le soufflé immédiatement, car il dégonfle rapidement une fois sorti du four."
    },
    // Ajoutez plus de recettes de plat ici
  ],
  dessert: [
    {
      id: "crepes",
      nom: "Crêpes",
      ingredients: [
        "300g de farine",
        "3 oeufs",
        "50 cl de lait",
        "25 cl de bière blonde",
        "6 cuillères à soupe d'huile",
        "40g de sucre en poudre"
      ],
      instructions: "Dans un saladier, versez la farine et formez un puits, versez le lait en plusieurs fois dans ce puits. Mélangez en faisant tomber la farine petit à petit dans le lait afin de l'incorporer sans créer de grumeaux. Ajoutez ensuite la bière et mélangez de nouveau. Battez les œufs puis incorporez-les à la pâte avec l'huile. Versez enfin le sucre et mélangez bien. Laissez la pâte reposer 1 heure minimum (plus elle reposera mieux ça sera). Après ce temps de repos, mélangez un peu de nouveau et faites cuire vos crêpes dans une poêle à crêpes huilée."
    },
    {
      id: "gateau",
      nom: "Gâteau de Savoie",
      ingredients: [
        "125g de farine",
        "125g de fécule de pomme de terre",
        "6 oeufs",
        "250g de sucre",
        "1 citron non traité",
        "1 pincée de sel",
      ],
      instructions:
        "Préchauffez votre four à 170°C (thermostat 5-6). Séparez les blancs des jaunes d'oeufs. Dans un saladier, battez les jaunes avec le sucre jusqu'à ce que le mélange blanchisse. Ajoutez le zeste du citron râpé et mélangez. Incorporez la farine et la fécule tamisées ensemble. Montez les blancs en neige avec une pincée de sel et incorporez-les délicatement à la préparation. Versez la pâte dans un moule à manqué beurré et fariné. Enfournez pour 45 minutes. Vérifiez la cuisson avec la pointe d'un couteau, elle doit ressortir sèche. Laissez refroidir avant de démouler.",
    },
    {
      id: "gaufres",
      nom: "Gaufres moelleuses et croustillantes",
      ingredients: [
          "160g de Farine",
          "4 Oeufs",
          "200ml de Lait demi-écrémé",
          "1 sachet de Levure chimique",
          "1 cuillère à café d'Extrait de vanille liquide ou en poudre",
          "4 cuillères à café d'Huile de tournesol, pépin de raisin, coco ou beurre fondu",
          "1 pincée de Sel"
      ],
      instructions: "Dans un saladier, mélangez la farine et la levure. Ajoutez les œufs un à un en mélangeant bien après chaque ajout. Ajoutez le lait petit à petit tout en mélangeant pour obtenir une pâte lisse. Ajoutez l'extrait de vanille et l'huile (ou le beurre fondu) et mélangez bien. Laissez reposer la pâte pendant 1 heure. Préchauffez votre gaufrier et huilez-le légèrement. Versez une louche de pâte dans chaque empreinte de gaufre et faites cuire jusqu'à ce que les gaufres soient dorées et croustillantes. Servez chaud avec du sucre glace, de la confiture, du Nutella ou de la chantilly."
  }
    {
      id: "roussettes",
      nom: "Roussettes",
      ingredients: [
        "500 g de farine",
        "3 oeufs",
        "125 g de beurre",
        "2 cuillères à soupe de lait",
        "1 cuillère à soupe d'eau de vie"
      ],
      instructions: "Mélangez tous les ingrédients. Laissez reposer la pâte 3 heures. Étendez la pâte au rouleau sur 3 mm d'épaisseur, découpez des formes géométriques diverses (losanges, carrés, ronds...), faites frire en friture chaude, 2 à 3 min, égouttez et saupoudrez de sucre sur les 2 faces."
    },    
    // Ajoutez plus de recettes de dessert ici
  ],
};

function afficherListe(type) {
  var liste = document.getElementById("recettes");
  liste.innerHTML = "";
  for (var i = 0; i < recettes[type].length; i++) {
    var lien = document.createElement("a");
    lien.href = "#";
    lien.onclick = function () {
      afficherRecette(this.textContent, type);
    };
    lien.textContent = recettes[type][i].nom;
    liste.appendChild(lien);
    liste.appendChild(document.createElement("br"));
  }
}

function afficherRecette(nom, type) {
  var recette = recettes[type].find(function (recette) {
    return recette.nom === nom;
  });
  if (recette) {
    var liste = document.getElementById("recettes");
    liste.innerHTML = ""; // Ajoutez cette ligne pour vider la liste des recettes
    var recetteDiv = document.getElementById("recette-container");
    if (!recetteDiv) {
      recetteDiv = document.createElement("div");
      recetteDiv.id = "recette-container";
      document.getElementById("recettes").appendChild(recetteDiv);
    }
    recetteDiv.innerHTML =
      "<h2>" +
      recette.nom +
      "</h2>" +
      "<h3>Ingrédients :</h3><ul>" +
      recette.ingredients
        .map(function (ingredient) {
          return "<li>" + ingredient + "</li>";
        })
        .join("") +
      "</ul><h3>Instructions :</h3><ol>" +
      recette.instructions
        .split(". ")
        .map(function (instruction) {
          return "<li>" + instruction + "</li>";
        })
        .join("") +
      "</ol>";
  }
}

// Appeler la fonction genererOptions au chargement de la page
window.onload = genererOptions;
