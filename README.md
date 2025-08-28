# 🚀 ResumeBuilder Pro - Professional Resume Generator

A modern, AI-powered web application that helps you create professional, ATS-friendly resumes in minutes. Built with Node.js, Express, and a beautiful frontend interface.

---

## 🌐 Live Demo

**Deployed on Render:** [https://ats-friendly-rseume-builder-1.onrender.com/](https://ats-friendly-rseume-builder-1.onrender.com/)

---

## 📁 Project Structure

```
resume-builder-pro/
├── index.html          # Main frontend HTML page
├── style.css           # CSS styles and responsive design
├── script.js           # Frontend JavaScript for form handling and UI
├── server.js           # Node.js Express server with PDF generation
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency lockfile
├── Dockerfile          # Docker configuration for deployment
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

---

## ✨ Features

- **Multi-Step Form**: 7-step process for comprehensive resume building
- **Professional Templates**: ATS-friendly designs that stand out to recruiters
- **AI-Powered Suggestions**: Smart content optimization and formatting
- **Real-time PDF Generation**: Instant LaTeX to PDF conversion
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Docker Support**: Easy deployment with containerization
- **Modern UI/UX**: Clean, professional interface with smooth animations

### Form Sections:
1. **Personal Information** - Contact details and social profiles
2. **Education** - Multiple education entries with degrees and streams
3. **Professional Summary** - Compelling career overview
4. **Work Experience** - Detailed job history with achievements
5. **Projects** - Portfolio projects with technologies and links
6. **Technical Skills** - Programming languages, tools, and frameworks
7. **Certifications** - Professional certifications and credentials

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resume-builder-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install TeX Live (for PDF generation)**
   - **Windows**: Install [MiKTeX](https://miktex.org/)
   - **Linux/macOS**: Install [TeX Live](https://www.tug.org/texlive/)
   - Ensure `pdflatex` is available in your system PATH

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3001` to access the application

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t resume-builder-pro .
   ```

2. **Run the container**
   ```bash
   docker run -p 3001:3001 resume-builder-pro
   ```

3. **Access the application**
   Open `http://localhost:3001` in your browser

---

## 🛠️ API Endpoints

### POST `/generate-pdf`
Generates a PDF resume from LaTeX content.

**Request Body:**
```json
{
  "latexContent": "Your LaTeX document content here"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:3001/generate-pdf \
  -H "Content-Type: application/json" \
  -d "{\"latexContent\": \"\\documentclass{article}\\begin{document}Hello, World!\\end{document}\"}" \
  --output resume.pdf
```

---

## 🐳 Docker & Render Deployment

This application is configured for easy deployment on Render and other cloud platforms:

### Docker Configuration
- Uses Node.js 18 base image
- Includes full TeX Live installation for PDF generation
- Exposes port 3001
- Includes all necessary dependencies

### Render Deployment
- Automatic builds from Git repository
- Docker container deployment
- Environment variable support
- Automatic SSL certificates

---

## 📦 Dependencies

### Backend
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `body-parser` - Request body parsing
- `node-latex` - LaTeX to PDF compilation

### Frontend
- Font Awesome Icons
- Google Fonts (Inter)
- Modern CSS with Flexbox/Grid
- Responsive design patterns

---

## 🔧 Troubleshooting

### Common Issues

1. **PDF Generation Fails**
   - Ensure TeX Live or MiKTeX is installed
   - Verify `pdflatex` is in system PATH
   - Check server logs for specific error messages

2. **Docker Build Issues**
   - Ensure Docker is running
   - Check internet connection for package downloads

3. **Port Already in Use**
   - Change PORT environment variable
   - Use `lsof -ti:3001` to find and kill processes

### Development Tips
- Set `NODE_ENV=development` for detailed error messages
- Check browser console for frontend errors
- Monitor server logs for backend issues

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

---

## 👨‍💻 Author

**Vaibhav Gupta**  
📧 work.vaibhav06@gmail.com

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please create an issue in the GitHub repository with detailed information about the problem or suggestion.

---

*Built with ❤️ using modern web technologies*
