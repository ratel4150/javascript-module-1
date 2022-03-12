const items=[
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  function isString(item) {
    return typeof item ==="string"
  }

  function doTheMagic(array) {

    return items.filter(isString).map(element => element.toUpperCase() +"!")
  }

  console.log(doTheMagic(items));


