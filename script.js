function showSection(sectionId) {
    document.querySelectorAll(".calculator-section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function calculateBasic() {
    const a = parseFloat(document.getElementById("basic-a").value);
    const b = parseFloat(document.getElementById("basic-b").value);
    const operation = document.getElementById("basic-operation").value;
    let result;

    if (isNaN(a) || isNaN(b)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = b !== 0 ? a / b : "Cannot divide by zero!";
                break;
            default:
                result = "Invalid operation.";
        }
    }
    document.getElementById("basic-result").textContent = `Result: ${result}`;
}

function solveQuadratic() {
    const a = parseFloat(document.getElementById("quad-a").value);
    const b = parseFloat(document.getElementById("quad-b").value);
    const c = parseFloat(document.getElementById("quad-c").value);
    let result;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Please enter valid numbers.";
    } else {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            result = `Roots are real and different:\nRoot 1: ${root1}\nRoot 2: ${root2}`;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            result = `Roots are real and the same:\nRoot: ${root}`;
        } else {
            result = "Roots are complex and different.";
        }
    }
    document.getElementById("quad-result").textContent = result;
}

function calculateStatistics() {
    const data = document.getElementById("stats-data").value.split(" ").map(Number);
    if (data.some(isNaN)) {
        document.getElementById("stats-result").textContent = "Please enter valid numbers.";
        return;
    }
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const sorted = [...data].sort((a, b) => a - b);
    const median =
        sorted.length % 2 === 0
            ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
            : sorted[Math.floor(sorted.length / 2)];
    const modeCount = {};
    data.forEach(num => (modeCount[num] = (modeCount[num] || 0) + 1));
    const mode = Object.keys(modeCount).reduce((a, b) =>
        modeCount[a] > modeCount[b] ? a : b
    );
    document.getElementById("stats-result").textContent = `Mean: ${mean}, Median: ${median}, Mode: ${mode}`;
}

function calculateHerons() {
    const a = parseFloat(document.getElementById("herons-a").value);
    const b = parseFloat(document.getElementById("herons-b").value);
    const c = parseFloat(document.getElementById("herons-c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("herons-result").textContent = "Please enter valid numbers.";
        return;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("herons-result").textContent = `Area: ${area}`;
}

function calculateGeometry() {
    const type = document.getElementById("geometry-type").value;
    const radius = parseFloat(document.getElementById("radius").value);
    const height = parseFloat(document.getElementById("height").value);
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    let result;

    switch (type) {
        case "sphere":
            if (!isNaN(radius)) {
                const tsa = 4 * Math.PI * radius * radius;
                const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                result = `TSA: ${tsa}, Volume: ${volume}`;
            } else {
                result = "Enter radius.";
            }
            break;
        case "cylinder":
            if (!isNaN(radius) && !isNaN(height)) {
                const csa = 2 * Math.PI * radius * height;
                const tsa = csa + 2 * Math.PI * radius * radius;
                const volume = Math.PI * radius * radius * height;
                result = `CSA: ${csa}, TSA: ${tsa}, Volume: ${volume}`;
            } else {
                result = "Enter radius and height.";
            }
            break;
        case "cone":
            if (!isNaN(radius) && !isNaN(height)) {
                const slantHeight = Math.sqrt(radius * radius + height * height);
                const csa = Math.PI * radius * slantHeight;
                const tsa = csa + Math.PI * radius * radius;
                const volume = (1 / 3) * Math.PI * radius * radius * height;
                result = `CSA: ${csa}, TSA: ${tsa}, Volume: ${volume}`;
            } else {
                result = "Enter radius and height.";
            }
            break;
        case "cube":
            if (!isNaN(length)) {
                const tsa = 6 * length * length;
                const volume = Math.pow(length, 3);
                result = `TSA: ${tsa}, Volume: ${volume}`;
            } else {
                result = "Enter side length.";
            }
            break;
        case "cuboid":
            if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
                const tsa = 2 * (length * width + width * height + length * height);
                const volume = length * width * height;
                result = `TSA: ${tsa}, Volume: ${volume}`;
            } else {
                result = "Enter length, width, and height.";
            }
            break;
        default:
            result = "Invalid type.";
    }

    document.getElementById("geometry-result").textContent = result;
}
