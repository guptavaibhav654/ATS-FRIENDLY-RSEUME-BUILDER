function nextPage(pageNumber) {
  document.querySelectorAll('.form-page').forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

function prevPage(pageNumber) {
  document.querySelectorAll('.form-page').forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();

  
    // Collect form data
    const formData = {
      // Personal Details
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      linkedin: document.getElementById('linkedin').value,
      github: document.getElementById('github').value,

      // Education
      clg: document.getElementById('clg').value,
      clgeducationDates: document.getElementById('clg-educationDates').value,
      clgdegree: document.getElementById('clg-degree').value,
      clgbranch: document.getElementById('clg-Stream').value,
      clglocation: document.getElementById('clg-location').value,

      school: document.getElementById('school').value,
      educationDates: document.getElementById('educationDates').value,
      degree: document.getElementById('degree').value,
      stream: document.getElementById('Stream').value,
      location: document.getElementById('location').value,

      //courses
      course1: document.getElementById('course1').value,
      course2: document.getElementById('course2').value,
      course3: document.getElementById('course3').value,
      course4: document.getElementById('course4').value,
      course5: document.getElementById('course5').value,
      course6: document.getElementById('course6').value,

      // Experience
      company1: document.getElementById('company1').value,
      jobDates1: document.getElementById('jobDates1').value,
      jobTitle1: document.getElementById('jobTitle1').value,
      companyLocation1: document.getElementById('companyLocation1').value,
      company1des1: document.getElementById('company1des1').value,
      company1des2: document.getElementById('company1des2').value,
      
      company2: document.getElementById('company2').value,
      jobDates2: document.getElementById('jobDates2').value,
      jobTitle2: document.getElementById('jobTitle2').value,
      companyLocation2: document.getElementById('companyLocation2').value,
      company2des1: document.getElementById('company2des1').value,
      company2des2: document.getElementById('company2des2').value,
      
      // Projects
      project1: document.getElementById('project1').value,
      project1Tech: document.getElementById('project1Tech').value,
      project1link: document.getElementById('project1link').value ,
      project1Date: document.getElementById('project1Date').value,
      project1des1: document.getElementById('project1Des1').value,
      project1des2: document.getElementById('project1Des2').value,
      project1des3: document.getElementById('project1Des3').value,
      
      project2: document.getElementById('project2').value ,
      project2Tech: document.getElementById('project2Tech').value,
      project2link: document.getElementById('project2link').value,
      project2Date: document.getElementById('project2Date').value,
      project2des1: document.getElementById('project2Des1').value,
      project2des2: document.getElementById('project2Des2').value,
      project2des3: document.getElementById('project2Des3').value,

      project3: document.getElementById('project3').value ,
      project3Tech: document.getElementById('project3Tech').value,
      project3link: document.getElementById('project3link').value,
      project3Date: document.getElementById('project3Date').value,
      project3des1: document.getElementById('project3Des1').value,
      project3des2: document.getElementById('project3Des2').value,
      project3des3: document.getElementById('project3Des3').value,

      //technical skills
      languages: document.getElementById('languages').value,
      tools: document.getElementById('tools').value,
      technologies: document.getElementById('technologies').value,

      //certifications
      certification1: document.getElementById('certification1').value,
      certificationLink1: document.getElementById('certificationLink1').value,
      certification2: document.getElementById('certification2').value,
      certificationLink2: document.getElementById('certificationLink2').value,
      certification3: document.getElementById('certification3').value,
      certificationLink3: document.getElementById('certificationLink3').value,
    };
  
    console.log('Form data:', formData);
  
    // Convert data to LaTeX format
    const latexContent = generateLaTeX(formData);
    console.log('Generated LaTeX content:', latexContent);
  
    // Send LaTeX content to the backend
    fetch('http://localhost:3001/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ latexContent }),
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Error generating PDF');
        }
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        alert('PDF downloaded successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error generating or downloading PDF');
      });
  });
  
  function generateLaTeX(data) {
    return `

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\classesList}[4]{
    \\item\\small{
        {#1 #2 #3 #4 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.001\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\begin{document}

%----------HEADING-----------------
\\begin{center}
{\\Huge \\scshape ${data.name}} \\\\
\\vspace{2pt}
\\small
${data.address} \\\\
\\faPhone\\ \\href{tel:${data.phone}}{\\underline{${data.phone}}} \\
\\faEnvelope\\ \\href{mailto:${data.email}}{\\underline{${data.email}}} \\
\\faLinkedin\\ \\href{${data.linkedin}}{\\underline{linkedin}} \\
\\faGithub\\ \\href{${data.github}}{\\underline{github}}
\\end{center}

%----------- EDUCATION -----------
\\vspace{-20pt}
\\section{Education}
\\begin{itemize}[leftmargin=*]
    \\item 
        \\textbf{${data.clg}} \\hfill \\textbf{${data.clgeducationDates}} \\\\
        \\textbf{${data.clgdegree}-${data.clgbranch}} \\hfill\\textit{${data.clglocation}}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item 
        \\textbf{${data.school}} \\hfill \\textbf{${data.educationDates}} \\\\
        \\textbf{${data.degree}(${data.stream})} \\hfill\\textit{${data.location}}
\\end{itemize}

%---------- COURSEWORK ----------
\\vspace{-18pt}
\\section{Relevant Coursework}
% \\vspace{-15pt}
\\begin{multicols}{3}
\\begin{itemize}[itemsep=-3pt, parsep=3pt]
  \\item ${data.course1}
  \\item ${data.course2}
  \\item ${data.course3}
  \\item ${data.course4}
  \\item ${data.course5}
  \\item ${data.course6}
\\end{itemize}
\\end{multicols} 

%---------- PROJECTS ----------
\\vspace{-5pt}
\\section{Projects}
\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project1link}}{${data.project1}}}}} \\faLink 
    $|$ \\emph{${data.project1Tech}} \\hfill \\textbf{${data.project1Date}}
    
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-10pt}
        \\item ${data.project1des1}
        \\item ${data.project1des2}
        \\item ${data.project1des3}
    \\end{itemize}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project2link}}{${data.project2}}}}} \\faLink
    $|$\\emph{${data.project2Tech}} \\hfill \\textbf{${data.project2Date}}
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-8pt}
        \\item ${data.project2des1}
        \\item ${data.project2des2}
        \\item ${data.project2des3}
    \\end{itemize}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project3link}}{${data.project3}}}}} \\faLink
    $|$\\emph{${data.project3Tech}} \\hfill \\textbf{${data.project3Date}}
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-8pt}
        \\item ${data.project3des1}
        \\item ${data.project3des2}
        \\item ${data.project3des3}
    \\end{itemize}
\\end{itemize}

%-----------EXPERIENCE-----------------
\\vspace{-15pt}
\\section{Experience}
\\resumeSubHeadingListStart

\\resumeSubheading{${data.company1}}{${data.companyLocation1}}{\\textbf{${data.jobTitle1}}}{\\textbf{${data.jobDates1}}}
\\resumeItemListStart
\\item{${data.company1des1}}
\\item {${data.company1des2}}
\\resumeItemListEnd

\\resumeSubheading{${data.company2}}{${data.companyLocation2}}{\\textbf{${data.jobTitle2}}}{\\textbf{${data.jobDates2}}}
\\resumeItemListStart
\\item {${data.company2des1}}
\\item {${data.company2des2}}
\\resumeItemListEnd

\\resumeSubHeadingListEnd



%---------- SKILLS ----------
\\vspace{-15pt}
\\section{Technical Skills}
\\begin{itemize}[leftmargin=*]
  \\item \\textbf{Languages:} ${data.languages}
  \\vspace{-8pt}
  \\item \\textbf{Tools:} ${data.tools}
  \\vspace{-8pt}
  \\item \\textbf{Frameworks:} ${data.technologies}
\\end{itemize}

%---------- CERTIFICATIONS ----------
\\vspace{-15pt}
\\section{Certifications}
% \\vspace{pt}
% \\begin{multicols}{3}

\\begin{itemize}[itemsep=50pt, parsep=-50pt]
  \\item \\href{${data.certificationLink1}}{${data.certification1}}
  \\item \\href{${data.certificationLink2}}{${data.certification2}}
  \\item
  \\href{${data.certificationLink3}}{${data.certification3}}
\\end{itemize}
\\end{document}

  `;
  }