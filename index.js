function findMatching(arrayofDrivers, str) {
  return arrayofDrivers.filter(
    (name) => name.toUpperCase() === str.toUpperCase()
  );
}

function fuzzyMatch(arrayofDrivers, str) {
  return arrayofDrivers.filter((name) => {
    return name.toLowerCase().indexOf(str.toLowerCase()) == 0;
  });
}

function altFuzzyMatch(driverNames, substring) {
  return driverNames.filter((name) => {
    for (let i = 0; i < substring.length; i++) {
      if (substring[i] != name[i]) {
        return false;
      }
    }
    return true;
  });
}

function matchName(arrayofDrivers, str) {
  return arrayofDrivers.filter((obj) => obj.name === str);
}
