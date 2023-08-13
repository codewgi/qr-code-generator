const qrGenerateForm = document.querySelector("#qr-generate-form");
const containerAfterGenerate = document.querySelector("#after-generate");
const result = document.querySelector(".result");
const generateButton = document.querySelector("#generate-button");
const downloadButton = document.querySelector("#download-button");

qrGenerateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const link = e.target[0].value;
    
    result.src = `https://api.qrserver.com/v1/create-qr-code/?size=450x450&data=${link}`;

    result.addEventListener("load", () => {
        generateButton.innerHTML = "Regenerate QR"
        containerAfterGenerate.style.display = "inline-block";
    })
})

downloadButton.addEventListener("click", () => {
    fetch(result.src)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = 'qrCode.jpg';
            a.click();
        })
})