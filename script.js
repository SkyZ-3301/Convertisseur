document.getElementById("convert-button").addEventListener("click", () => {
  const input = document.getElementById("input-text").value;
  const output = convertToGematriaPrimus(input);
  document.getElementById("output-text").textContent = output;
});

document.getElementById("copy-button").addEventListener("click", () => {
  const output = document.getElementById("output-text").textContent;
  navigator.clipboard.writeText(output).then(() => {
    alert("Texte copié dans le presse-papiers !");
  }).catch(() => {
    alert("Erreur lors de la copie du texte !");
  });
});

document.getElementById("reverse-convert-button").addEventListener("click", () => {
  const input = document.getElementById("runes-text").value;
  const output = convertToFrench(input);
  document.getElementById("reverse-output-text").textContent = output;
});

document.getElementById("reverse-copy-button").addEventListener("click", () => {
  const output = document.getElementById("reverse-output-text").textContent;
  navigator.clipboard.writeText(output).then(() => {
    alert("Texte copié dans le presse-papiers !");
  }).catch(() => {
    alert("Erreur lors de la copie du texte !");
  });
});


function convertToGematriaPrimus(text) {
  const mapping = {
    'A': 'ᚠ', 'B': 'ᚢ', 'C': 'ᚦ', 'D': 'ᚨ', 'E': 'ᚱ',
    'F': 'ᚲ', 'G': 'ᚷ', 'H': 'ᚹ', 'I': 'ᚺ', 'J': 'ᚾ',
    'K': 'ᛁ', 'L': 'ᛃ', 'M': 'ᛇ', 'N': 'ᛈ', 'O': 'ᛉ',
    'P': 'ᛋ', 'Q': 'ᛏ', 'R': 'ᛒ', 'S': 'ᛖ', 'T': 'ᛗ',
    'U': 'ᛚ', 'V': 'ᛜ', 'W': 'ᛞ', 'X': 'ᛟ', 'Y': 'ᛠ',
    'Z': 'ᛡ'
  };
  return text.toUpperCase().split('').map(char => mapping[char] || char).join('');
}

function convertToFrench(text) {
  const reverseMapping = {
    'ᚠ': 'A', 'ᚢ': 'B', 'ᚦ': 'C', 'ᚨ': 'D', 'ᚱ': 'E',
    'ᚲ': 'F', 'ᚷ': 'G', 'ᚹ': 'H', 'ᚺ': 'I', 'ᚾ': 'J',
    'ᛁ': 'K', 'ᛃ': 'L', 'ᛇ': 'M', 'ᛈ': 'N', 'ᛉ': 'O',
    'ᛋ': 'P', 'ᛏ': 'Q', 'ᛒ': 'R', 'ᛖ': 'S', 'ᛗ': 'T',
    'ᛚ': 'U', 'ᛜ': 'V', 'ᛞ': 'W', 'ᛟ': 'X', 'ᛠ': 'Y',
    'ᛡ': 'Z'
  };
  return text.split('').map(char => reverseMapping[char] || char).join('');
}

