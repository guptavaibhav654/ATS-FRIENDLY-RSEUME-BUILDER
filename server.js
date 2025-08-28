const express = require('express');
const bodyParser = require('body-parser');
const latex = require('node-latex');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/generate-pdf', (req, res) => {
  console.log('Received request body:', req.body);
  
  if (!req.body || !req.body.latexContent) {
    console.error('Missing latexContent in request body');
    return res.status(400).json({ error: 'Missing latexContent in request body' });
  }
  
  const latexContent = req.body.latexContent;
  const outputPath = path.join(__dirname, 'resume.pdf');
  const output = fs.createWriteStream(outputPath);
  
  try {
    const pdf = latex(latexContent);

    pdf.pipe(output);
    pdf.on('error', (err) => {
      console.error('Error generating PDF:', err);
      res.status(500).json({ 
        error: 'Error generating PDF', 
        details: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
      });
    });
    pdf.on('finish', () => {
      console.log('PDF generated successfully!');
      res.download(outputPath, 'resume.pdf', (err) => {
        if (err) {
          console.error('Error sending PDF:', err);
          res.status(500).json({ 
            error: 'Error sending PDF', 
            details: err.message 
          });
        } else {
          console.log('PDF sent successfully!');
          fs.unlinkSync(outputPath);
        }
      });
    });
  } catch (err) {
    console.error('Unexpected error in PDF generation:', err);
    res.status(500).json({ 
      error: 'Unexpected error in PDF generation', 
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
