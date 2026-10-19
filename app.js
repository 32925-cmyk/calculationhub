const format = (value) => (Number.isFinite(value) ? Number(value.toFixed(6)).toString() : "Invalid input");
const byId = (id) => document.getElementById(id);
const readNumber = (id) => Number(byId(id).value);

const basicOps = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? Number.NaN : a / b),
  power: (a, b) => a ** b,
};

const scientificOps = {
  sqrt: (v) => (v < 0 ? Number.NaN : Math.sqrt(v)),
  square: (v) => v * v,
  sin: (v) => Math.sin((v * Math.PI) / 180),
  cos: (v) => Math.cos((v * Math.PI) / 180),
  tan: (v) => Math.tan((v * Math.PI) / 180),
  log10: (v) => (v <= 0 ? Number.NaN : Math.log10(v)),
};

const unitOps = {
  "km-to-mi": (v) => v * 0.621371,
  "mi-to-km": (v) => v / 0.621371,
  "c-to-f": (v) => (v * 9) / 5 + 32,
  "f-to-c": (v) => ((v - 32) * 5) / 9,
};

byId("basic-calc").addEventListener("click", () => {
  const a = readNumber("basic-a");
  const b = readNumber("basic-b");
  const op = byId("basic-op").value;
  const result = basicOps[op](a, b);
  byId("basic-result").textContent = `Result: ${format(result)}`;
});

byId("scientific-calc").addEventListener("click", () => {
  const value = readNumber("scientific-value");
  const op = byId("scientific-op").value;
  const result = scientificOps[op](value);
  byId("scientific-result").textContent = `Result: ${format(result)}`;
});

byId("finance-calc").addEventListener("click", () => {
  const principal = readNumber("finance-principal");
  const rate = readNumber("finance-rate");
  const time = readNumber("finance-time");

  if ([principal, rate, time].some((n) => n < 0)) {
    byId("finance-result").textContent = "Result: Invalid input";
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  byId("finance-result").textContent = `Result: Interest ${format(interest)}, Total ${format(total)}`;
});

byId("bmi-calc").addEventListener("click", () => {
  const weight = readNumber("bmi-weight");
  const heightCm = readNumber("bmi-height");
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weight / (heightM * heightM) : Number.NaN;
  byId("bmi-result").textContent = `Result: BMI ${format(bmi)}`;
});

byId("unit-calc").addEventListener("click", () => {
  const value = readNumber("unit-value");
  const type = byId("unit-type").value;
  const result = unitOps[type](value);
  byId("unit-result").textContent = `Result: ${format(result)}`;
});
