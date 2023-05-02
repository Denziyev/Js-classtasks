let Mycompare = (Firstarr, Secarr) => {
    if (Firstarr.length !== Secarr.length) {
        return false;
    }
    for (let i = 0; i < Firstarr.length; i++) {
        for (let j = 0; j < Firstarr.length; j++) {
            if (Firstarr[i] == Secarr[j]) {
                Secarr.splice(j, 1);
                break;
            }
            else if (j == Secarr.length - 1) {
                return false;
            }
        }

    }
    return true;

}

console.log(Mycompare([1, 2, 3], [2,1, 3]));