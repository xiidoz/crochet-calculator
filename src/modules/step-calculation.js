
function calculate(rowCount, increasePerRow) {
    if (rowCount < 13) {
        return;
    }

    var steps = Array.from({ length: rowCount }, () => ({
        index: 0,
        stitches: 0,
        description: "",
        isCompleted: false
    }));

    steps[0].index = 0;
    steps[0].stitches = increasePerRow;
    steps[0].description = `Fadenring mit ${increasePerRow} fM`;
    
    steps[1].index = 1;
    steps[1].stitches = increasePerRow * 2;
    steps[1].description = `${increasePerRow}×2fM`;

    for (let stepIndex = 2; stepIndex < ((rowCount - 1) / 3); stepIndex++) {
        steps[stepIndex].index = stepIndex;
        steps[stepIndex].stitches = (stepIndex + 1) * increasePerRow;

        if (stepIndex % 2) {
            steps[stepIndex].description = `${(stepIndex - 1) / 2}×1fM, 2fM, ${increasePerRow - 1}×(${stepIndex - 1}×1fM, 2fM), ${(stepIndex - 1) / 2}×1fM`;
        }
        else {
            steps[stepIndex].description = `${increasePerRow}×(${stepIndex - 1}×1fM, 2fM)`;
        }
    }

    let stitches = ((rowCount - 1) / 3) * increasePerRow;
    for (let stepIndex = (rowCount - 1) / 3; stepIndex < (((rowCount - 1) / 3 * 2) + 1); stepIndex++) {
        steps[stepIndex].index = stepIndex;
        steps[stepIndex].stitches = stitches;
        steps[stepIndex].description= `${stitches}×1fM`
    }

    for (let stepIndex = ((rowCount - 1) / 3 * 2) + 1; stepIndex < rowCount - 2; stepIndex++) {
        steps[stepIndex].index = stepIndex;
        steps[stepIndex].stitches = (rowCount - (stepIndex + 1)) * increasePerRow;

        if (stepIndex % 2) {
            steps[stepIndex].description = `${(rowCount - stepIndex - 2) / 2}×1fM, 2fM zus., ${increasePerRow - 1}×(${rowCount - (stepIndex + 2)}×1fM, 2fM zus.), ${(rowCount - stepIndex - 2) / 2}×1fM`;
        }
        else {
            steps[stepIndex].description = `${increasePerRow}×(${rowCount - stepIndex - 2}×1fM, 2fM zus.)`;
        }
    }

    steps[rowCount - 2].index = rowCount - 2;
    steps[rowCount - 2].stitches = increasePerRow;
    steps[rowCount - 2].description = `${increasePerRow}×2fM zus.`;

    steps[rowCount - 1].index = rowCount - 1;
    steps[rowCount - 1].stitches = 0;
    steps[rowCount - 1].description = `Faden abschneiden und Maschen vernähen`;

    return steps;
}

export default {
    calculate
}