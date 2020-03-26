module.exports = {
  succeed,
  fail,
  repair,
  get,
  isNumber
};

function succeed(item) {
  if (isNumber(item.enhancement)) {
    if (item.enhancement < 20) {
      item.enhancement += 1;
      return { ...item };
    } else {
      throw new Error("Max enhancement level reached!");
    }
  } else {
    throw new Error("Incorrect enhancement value");
  }
}

function fail(item) {
  if (isNumber(item.enhancement) && isNumber(item.durability)) {
    if (item.enhancement < 15) {
      item.durability -= 5;
      return { ...item };
    } else if (item.enhancement >= 15) {
      item.durability -= 10;
      if (item.enhancement > 16) {
        item.enhancement -= 1;
        return { ...item };
      }
      return { ...item };
    }
  } else {
    throw new Error("Incorrect enhancement and/or durability value");
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (isNumber(item.enhancement)) {
    if (item.enhancement == 0) {
      return { ...item };
    } else if (item.enhancement > 0) {
      let name = item.name;
      let num = item.enhancement;
      item.name = `[+${num}] ${name}`;
      return { ...item };
    }
  } else throw new Error("invalid enhancement value");
}

//CHECK IF NUMBER
function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
