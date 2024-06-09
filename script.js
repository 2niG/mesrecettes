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
    // Ajoutez plus de recettes de plat ici
  ],
  dessert: [
    {
      id: "crepes",
      nom: "Crêpes",
      ingredients: [
        "250g de farine",
        "4 oeufs",
        "un demi-litre de lait",
        "une pincée de sel",
        "50g de beurre fondu",
        "1 sachet de sucre vanillé",
      ],
      instructions:
        "Mettez la farine dans un saladier avec le sucre, le sucre vanillé et le sel. Faites un puits et cassez-y les oeufs. Mélangez délicatement avec un fouet en ajoutant au fur et à mesure le lait. La pâte ainsi obtenue doit avoir une consistance d’un liquide légèrement épais. Ajoutez le beurre fondu à la préparation tout en continuant de mélanger. Laissez reposer la pâte à crêpes pendant 1 heure. Faites chauffer une poêle antiadhésive et versez-y une louche de pâte à crêpes. Laissez cuire la crêpe sur feu moyen pendant environ 2 minutes, jusqu’à ce que des bulles se forment à la surface. Retournez la crêpe et faites-la cuire environ 1 minute de l’autre côté.",
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
