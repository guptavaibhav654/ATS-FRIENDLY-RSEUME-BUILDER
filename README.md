# 📄 Resume PDF Generator

This project is a simple yet powerful **web application** that generates a **PDF resume from LaTeX input**. It includes a **Node.js Express server** that takes LaTeX content, compiles it to a PDF using the `node-latex` package, and serves the result for download.

---

## 🚀 Live Demo ()
https://ats-friendly-rseume-builder-1.onrender.com/


---

## 📁 Project Structure

e:/resume/res/
├── index.html # Frontend HTML page
├── script.js # Frontend JavaScript for interacting with server
├── server.js # Node.js Express server
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency lockfile

yaml
Copy
Edit

---

## ✨ Features

- Accepts **LaTeX input** from users
- Compiles it into a **downloadable PDF**
- Clean, API-driven backend endpoint
- Includes a simple **frontend UI** for user interaction
- Supports **file download** via browser or API tools

---

## 🔧 Installation

1. Clone the repository:

git clone https://github.com/yourusername/resume-pdf-generator.git
cd resume-pdf-generator
Install the dependencies:

bash
Copy
Edit
npm install
▶️ Usage
Start the development server:

bash
Copy
Edit
node server.js
Visit http://localhost:3001 in your browser to access the frontend (if included).

📤 API Endpoint: /generate-pdf
POST request with LaTeX content:

json
Copy
Edit
{
  "latexContent": "Your LaTeX document here"
}
✅ Example using curl:
bash
Copy
Edit
curl -X POST http://localhost:3001/generate-pdf \
  -H "Content-Type: application/json" \
  -d "{\"latexContent\": \"\\documentclass{article}\\begin{document}Hello, World!\\end{document}\"}" \
  --output resume.pdf
🌐 Frontend (Optional)
If using the included frontend:

index.html – Main page

script.js – Sends POST requests to the server

Users can enter LaTeX code and click a button to generate the PDF.

📦 Dependencies
express

cors

body-parser

node-latex

🧩 Requirements
A LaTeX distribution installed on your system:

Windows: MiKTeX

Linux/macOS: TeX Live

🛠 Troubleshooting
❗ Make sure pdflatex is available in your system PATH.

📝 Errors during PDF generation will be logged in the server console.

⚠️ PDF files are generated temporarily and deleted after download.

📄 License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.

🙋‍♂️ Author
Vaibhav Gupta
📫 work.vaibhav06@gmail.com
