const COMPATIBILITY_TABLE = {
    1: {1: true, 2: true, 3: false, 4: false, 5: true, 6: false, 7: false, 8: true, 9: false},
    2: {1: true, 2: true, 3: false, 4: true, 5: false, 6: false, 7: false, 8: true, 9: false},
    3: {1: false, 2: false, 3: true, 4: false, 5: false, 6: true, 7: false, 8: false, 9: true},
    4: {1: false, 2: true, 3: false, 4: true, 5: false, 6: false, 7: true, 8: true, 9: false},
    5: {1: true, 2: false, 3: false, 4: false, 5: true, 6: true, 7: true, 8: false, 9: false},
    6: {1: false, 2: false, 3: true, 4: false, 5: true, 6: true, 7: false, 8: false, 9: true},
    7: {1: false, 2: false, 3: false, 4: true, 5: true, 6: false, 7: true, 8: true, 9: false},
    8: {1: true, 2: true, 3: false, 4: true, 5: false, 6: false, 7: true, 8: true, 9: false},
    9: {1: false, 2: false, 3: true, 4: false, 5: false, 6: true, 7: false, 8: false, 9: true}
};

function isCompatible(lifePathNumber, otherLifePathNumber) {
    return COMPATIBILITY_TABLE[lifePathNumber][otherLifePathNumber];
}

module.exports = { isCompatible };
