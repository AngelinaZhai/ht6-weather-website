const tops_map = new Map([
    ["tshirt", 0],
    ["plaid", 0],
    ["sweater", 0],
    ["dress shirt", 0],
    ["tank top", 0],
    ["turtleneck", 0]
  ])

  const bottoms_map = new Map([
    ["jeans", 0],
    ["leggings", 0],
    ["dress pants", 0],
    ["shorts", 0],
    ["skirts", 0]
  ])

  const overalls_map = new Map([
    ["short dress", 0],
    ["short overall", 0],
    ["medium dress", 0],
    ["long dress", 0],
    ["jumpsuit", 0]
  ])

  const jackets_map = new Map([
    ["blazer", 0],
    ["cardigan", 0],
    ["hoodie", 0],
    ["rain jacket", 0],
    ["trenchcoat", 0],
    ["wind breaker", 0],
    ["winter jacket",0]
  ])

  const shoes_map = new Map([
    ["rain boots", 0],
    ["sneakers", 0],
    ["snow boots", 0]
  ])

  const accessories_map = new Map([
    ["umbrella", 0],
    ["sunglasses", 0],
    ["cap", 0],
    ["beanie", 0],
    ["bucket hat", 0]
  ])

  function updateList(categoryName,subcategoryName){
    let check = false;
    if (document.getElementById(subcategoryName).checked){
      check = true;
    }

    function updateCategoryList(checked,tempSubcategoryName,categoryMap){
      if (checked){
        categoryMap.set(tempSubcategoryName,1);
      }
      else{
        categoryMap.set(tempSubcategoryName,0);
      }
    }

    switch(categoryName){
      case 'Tops':
        updateCategoryList(check,subcategoryName, tops_map);
        break;
      case 'Bottoms':
        updateCategoryList(check,subcategoryName, bottoms_map);
        break;
      case 'Overalls':
        updateCategoryList(check,subcategoryName, overalls_map);
        break;
      case 'Jackets':
        updateCategoryList(check,subcategoryName, jackets_map);
        break;
      case 'Shoes':
        updateCategoryList(check,subcategoryName, shoes_map);
        break;
      case 'Accessories':
        updateCategoryList(check,subcategoryName, accessories_map);
        break;
      default:
        break;
    }
  }

  function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
  }