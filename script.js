var recettes = {
  entree: [
    {
      id: "saladecesar",
      nom: "Salade César",
      ingredients: ["laitue", "parmesan", "croûtons", "sauce César"],
      instructions: "Mélangez tous les ingrédients dans un grand bol.",
    },
    {
      id: "salade_riz",
      nom: "Salade de Riz",
      ingredients: [
        "200g de riz",
        "1 boîte de thon",
        "2 tomates",
        "1 concombre",
        "1 poivron rouge",
        "1 oignon rouge",
        "2 œufs durs",
        "Quelques olives noires",
        "Vinaigrette (huile d'olive, vinaigre, moutarde, sel, poivre)"
      ],
      instructions:
        "Faites cuire le riz selon les instructions sur l'emballage. Laissez-le refroidir. Pendant ce temps, coupez les tomates, le concombre, le poivron et l'oignon en petits morceaux. Égouttez le thon. Mélangez tous les ingrédients dans un grand saladier. Ajoutez les œufs durs coupés en quartiers et les olives noires. Assaisonnez avec la vinaigrette. Mélangez bien et servez frais."
    },    
    // Ajoutez plus de recettes d'entrée ici
  ],
  plat: [
    {
      id: "axoa_veau",
      nom: "Axoa de Veau",
      ingredients: [
        "800g de veau coupé en petits dés",
        "2 poivrons verts",
        "2 poivrons rouges",
        "1 oignon",
        "3 gousses d'ail",
        "1 cuillère à soupe de piment d'Espelette",
        "2 cuillères à soupe d'huile d'olive",
        "Sel"
      ],
      instructions:
        "Faites chauffer l'huile dans une sauteuse, ajoutez l'oignon et l'ail hachés, faites-les revenir. Ajoutez les poivrons coupés en lanières et faites-les cuire pendant 5 minutes. Ajoutez le veau et faites-le dorer de tous les côtés. Saupoudrez de piment d'Espelette et de sel. Couvrez et laissez mijoter pendant 1 heure à feu doux. Servez chaud."
    },    
    {
      id: "cake_thon",
      nom: "Cake au Thon",
      ingredients: [
        "200g de thon en boite",
        "100g de gruyere rapé",
        "100g de farine",
        "1/2 sachet de levure",
        "3 oeufs",
        "8cl de lait",
        "10cl d'huile",
        "1 pincée de poivre",
      ],
      instructions:
        "Mélangez tous les ingrédients dans un saladier, en incorporant le thon et le gruyére en dernier. Versez le mélange dans un moule à cake beurré et fariné. Faites cuire 40 à 45mn au four thermostat 6-7 (180°C-210°C)",
    },
    {
      id: "cassolette_st_jacques",
      nom: "Cassolette de Saint-Jacques",
      ingredients: [
        "400g de noix de saint-jacques",
        "20 crevettes roses fraîches",
        "300g de champignons de Paris frais",
        "3 oignons",
        "1 gousse d'ail",
        "2 cl de whisky",
        "Margarine pour beurrer des cassolettes",
        "Persil frais",
        "Pour la sauce :",
        "2 cuillères à soupe de farine",
        "20 cl de crème fraîche",
        "15 cl de vin blanc"
      ],
      instructions:
        "Couper finement l'oignon ainsi que l'ail. Emincer les champignons. Faire revenir l'ail et les oignons dans une poêle avec un peu de matière grasse. Mettre les champignons à cuire dans une deuxième poêle. Faire dorer les noix de Saint-Jacques à la poêle avec un filet d'huile d'olive (1 minute puis les retourner) ajouter le whisky (ou autre alcool pour les faire flamber). Réserver et garder le jus de cuisson à part. Préparer les cassolettes en beurrant légèrement chaque plat individuel (allant au four). Ajouter dans chacune d'elles : oignons, champignons, les noix de Saint-Jacques ainsi que 5 crevettes et le persil préalablement haché. Réserver. Préparer la sauce. Verser dans casserole sur feu doux le vin blanc, la crème fraîche, le jus de cuisson des noix de Saint-Jacques. Fouetter et ajouter la farine pour épaissir la préparation. Répartir ensuite la sauce dans chaque cassolette individuelle. Enfourner à 200°C (thermostat 6-7) durant 20 min."
    },    
    {
      id: "couscous",
      nom: "Couscous",
      ingredients: [
        "500g de semoule de couscous",
        "300g de viande d'agneau",
        "4 carottes",
        "2 courgettes",
        "1 oignon",
        "2 gousses d'ail",
        "1 boîte de pois chiches",
        "1 cuillère à soupe de ras el hanout",
        "2 cuillères à soupe d'huile d'olive",
        "Sel, poivre"
      ],
      instructions:
        "Dans une grande casserole, faites revenir l'oignon et l'ail hachés dans l'huile d'olive. Ajoutez la viande et faites-la dorer de tous les côtés. Ajoutez les carottes et les courgettes coupées en morceaux, les pois chiches, le ras el hanout, le sel et le poivre. Couvrez d'eau et laissez mijoter pendant 1 heure. Pendant ce temps, préparez la semoule selon les instructions sur l'emballage. Servez le couscous avec les légumes et la viande."
    },    
    {
      id: "gratin_pates",
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
        "Préparez la béchamel : faites fondre le beurre dans une casserole. Ajoutez la farine et mélangez avec une cuillère en bois. Versez le lait en filet, sans cesser de fouetter, puis faites épaissir sur feu doux pendant environ 10 min en remuant régulièrement. Salez et poivrez. Faites cuire les coquillettes al dente dans une casserole d’eau bouillante salée. Égouttez. Préchauffez le four à 210° (th.7). Versez les pâtes dans un plat à gratin, ajoutez le jambon coupé en lanières et la béchamel puis mélangez. Couvrez d’emmental râpé, puis enfournez et laissez gratiner environ 15 min. Servez bien chaud.",
    },
    {
      id: "pate_pizza",
      nom: "Pâte à Pizza",
      ingredients: [
        "300g de farine",
        "1 sachet de levure de boulanger",
        "2 cuillères à soupe d'huile d'olive",
        "1 cuillère à café de sel",
        "15cl d'eau tiède"
      ],
      instructions:
        "Dans un saladier, mélangez la farine, la levure, le sel, l'huile d'olive et l'eau tiède. Pétrissez la pâte jusqu'à ce qu'elle soit homogène et élastique. Couvrez le saladier avec un torchon propre et laissez la pâte lever pendant 1 à 2 heures à température ambiante. Une fois la pâte levée, étalez-la sur une surface farinée pour former votre pizza."
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
        "Muscade",
      ],
      instructions:
        "Râpez le fromage. Faites fondre le beurre, délayez-y la farine et remuez sur le feu avec une cuillère en bois pendant quelques minutes sans laisser colorer. Ajoutez le lait tiède, bien délayez et reportez à feu doux sans cesser de mélanger jusqu'à ce que le mélange épaississe. Mettez le fromage. Salez et poivrez la béchamel (pas trop car le fromage va relever le goût). Éloignez du feu, attendez quelques instants. Incorporez un jaune d'œuf en battant vigoureusement, puis un second et un troisième, toujours en travaillant énergiquement la pâte après chaque adjonction. (A noter que 3 jaunes seulement sont utilisés). Beurrez un moule à soufflé bien jusqu'au bord (attention à ne pas toucher l'intérieur du moule après cette opération). Battez les 4 blancs en neige très ferme. En incorporez 2 cuillères à soupe à la béchamel en remuant bien puis incorporez le reste délicatement, en soulevant bien la pâte avec la spatule. S'il reste des traces de blancs en neige, ce n'est pas grave, cela permettra au soufflé de monter. Versez dans le moule qui ne doit être rempli qu'à moitié. Portez à four doux (thermostat 4 à 5, soit 180°C), puis augmentez un peu la chaleur. Ne pas ouvrir le four pendant le premier 1/4 d'heure. Servez le soufflé immédiatement, car il dégonfle rapidement une fois sorti du four.",
    },
    // Ajoutez plus de recettes de plat ici
  ],
  dessert: [
    {
      id: "crepes_biere",
      nom: "Crêpes",
      ingredients: [
        "300g de farine",
        "3 oeufs",
        "50 cl de lait",
        "25 cl de bière blonde",
        "6 cuillères à soupe d'huile",
        "40g de sucre en poudre",
      ],
      instructions:
        "Dans un saladier, versez la farine et formez un puits, versez le lait en plusieurs fois dans ce puits. Mélangez en faisant tomber la farine petit à petit dans le lait afin de l'incorporer sans créer de grumeaux. Ajoutez ensuite la bière et mélangez de nouveau. Battez les œufs puis incorporez-les à la pâte avec l'huile. Versez enfin le sucre et mélangez bien. Laissez la pâte reposer 1 heure minimum (plus elle reposera mieux ça sera). Après ce temps de repos, mélangez un peu de nouveau et faites cuire vos crêpes dans une poêle à crêpes huilée.",
    },
    {
      id: "gateau_savoie",
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
      id: "roussettes",
      nom: "Roussettes",
      ingredients: [
        "500 g de farine",
        "3 oeufs",
        "125 g de beurre",
        "2 cuillères à soupe de lait",
        "1 cuillère à soupe d'eau de vie",
      ],
      instructions:
        "Mélangez tous les ingrédients. Laissez reposer la pâte 3 heures. Étendez la pâte au rouleau sur 3 mm d'épaisseur, découpez des formes géométriques diverses (losanges, carrés, ronds...), faites frire en friture chaude, 2 à 3 min, égouttez et saupoudrez de sucre sur les 2 faces.",
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
